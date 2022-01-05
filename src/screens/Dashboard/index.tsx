import React, { useCallback, useEffect, useState } from "react";
import { FlatList } from "react-native";

//@libraries
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { useFocusEffect, useRoute } from "@react-navigation/native";
import { getBottomSpace } from "react-native-iphone-x-helper";
import Feather from "react-native-vector-icons/Feather";

//@components
import { HighlightCard } from "../../components/HighlightCard";
import {
  TransactionCard,
  TransactionCardProps,
} from "../../components/TransactionCard";

//@styles
import {
  Container,
  Header,
  User,
  Photo,
  UserName,
  Icon,
  UserInfo,
  HighlightCards,
  UserWrapper,
  UserGreeting,
  LogoutButton,
  Transactions,
  Title,
  TransactionList,
} from "./styles";
import { EmptyTransactions } from "../../components/EmptyTransactions";
import { ShowMessage } from "../../components/ShowMessage";
import FlashMessage from "react-native-flash-message";
export interface DataListProps extends TransactionCardProps {
  id: string;
}

interface HighlightProps {
  amount: string;
  lastTransaction: string;
}

interface HighlightData {
  entries: HighlightProps;
  expensives: HighlightProps;
  total: HighlightProps;
}

const data = [
  {
    id: 1,
    name: "Desenvolvimento de Site",
    type: "positive",
    amount: "2000",
    category: {
      name: "Compras",
      icon: "dollar-sign",
    },
    date: "12/04/2002",
  },
  {
    id: 2,
    name: "Desenvolvimento de Site",
    type: "negative",
    amount: "2000",
    category: {
      name: "Salário",
      icon: "dollar-sign",
    },
    date: "12/04/2002",
  },
];

export function Dashboard() {
  const [isLoading, setIsLoading] = useState(true);
  const [transactions, setTransactions] = useState<DataListProps[]>([]);
  const [highlightData, setHighlightData] = useState<HighlightData>(
    {} as HighlightData
  );

  const { params } = useRoute();

  useEffect(() => {
    loadTransactions();
  }, []);

  useFocusEffect(
    useCallback(() => {
      loadTransactions();
      if (params?.id) {
        ShowMessage("Salvo com sucesso!", "success");
      }
    }, [])
  );

  async function loadTransactions() {
    const dataKey = "@gofinances:transactions";

    const response = await AsyncStorage.getItem(dataKey);
    const transactions = response ? JSON.parse(response) : [];

    let entriesTotal = 0;
    let expensiveTotal = 0;

    const transactionsFormatted: DataListProps[] = transactions.map(
      (item: DataListProps) => {
        if (item.type === "positive") {
          entriesTotal += Number(item.amount);
        } else {
          expensiveTotal += Number(item.amount);
        }

        const amount = Number(item.amount).toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        });

        const date = Intl.DateTimeFormat("pt-BR", {
          day: "2-digit",
          month: "2-digit",
          year: "2-digit",
        }).format(new Date(item.date));

        return {
          id: item.id,
          name: item.name,
          amount,
          type: item.type,
          category: item.category,
          date,
        };
      }
    );
    setTransactions(transactionsFormatted);

    const lastTransactionEntries = getLastTransactionDate(
      transactions,
      "positive"
    );
    const lastTransactionExpensives = getLastTransactionDate(
      transactions,
      "negative"
    );
    const totalInterval = `01 a ${lastTransactionExpensives}`;

    const total = entriesTotal - expensiveTotal;

    setHighlightData({
      entries: {
        amount: entriesTotal.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        }),
        lastTransaction: `Última entrada dia ${lastTransactionEntries}`,
      },
      expensives: {
        amount: expensiveTotal.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        }),
        lastTransaction: `Última saída dia ${lastTransactionExpensives}`,
      },
      total: {
        amount: total.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        }),
        lastTransaction: totalInterval,
      },
    });

    setIsLoading(false);
  }

  function getLastTransactionDate(
    collection: DataListProps[],
    type: "positive" | "negative"
  ) {
    const lastTransaction = new Date(
      Math.max.apply(
        Math,
        collection
          .filter((transaction) => transaction.type === type)
          .map((transaction) => new Date(transaction.date).getTime())
      )
    );

    return `${lastTransaction.getDate()} de ${lastTransaction.toLocaleString(
      "pt-BR",
      { month: "long" }
    )}`;
  }

  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo
              source={{
                uri: "https://media-exp1.licdn.com/dms/image/C4D03AQGdsxhEcqVvIA/profile-displayphoto-shrink_800_800/0/1600975624270?e=1639612800&v=beta&t=AmaEsQHRPEHvO1IsTjJ7xHFYynhiwh4DkNNngb7zEM4",
              }}
            />
            <User>
              <UserGreeting>Olá,</UserGreeting>
              <UserName>Carlos</UserName>
            </User>
          </UserInfo>

          <LogoutButton onPress={() => {}}>
            <Icon name="power" />
          </LogoutButton>
        </UserWrapper>
      </Header>

      <HighlightCards>
        <HighlightCard
          type="up"
          title="Entradas"
          amount={highlightData?.entries?.amount}
          lastTransaction={
            transactions.length > 0
              ? highlightData?.entries?.lastTransaction
              : ""
          }
        />
        <HighlightCard
          type="down"
          title="Saída"
          amount={highlightData?.expensives?.amount}
          lastTransaction={
            transactions.length > 0
              ? highlightData?.expensives?.lastTransaction
              : ""
          }
        />
        <HighlightCard
          type="total"
          title="Total"
          amount={highlightData?.total?.amount}
          lastTransaction={
            transactions.length > 0 ? highlightData?.total?.lastTransaction : ""
          }
        />
      </HighlightCards>

      <Transactions>
        <Title>Listagem</Title>
        <TransactionList
          data={transactions}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => <TransactionCard data={item} />}
          ListEmptyComponent={<EmptyTransactions />}
        />
      </Transactions>
      <FlashMessage position="top" />
    </Container>
  );
}
