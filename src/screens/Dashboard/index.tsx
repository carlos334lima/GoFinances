import React, { useCallback, useEffect, useState } from "react";
import { FlatList } from "react-native";

//@libraries
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { useFocusEffect } from "@react-navigation/native";
import { getBottomSpace } from "react-native-iphone-x-helper";
import Feather from "react-native-vector-icons/Feather";

//@components
import { HighlightCard } from "../../components/HighlightCard";

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
import {
  TransactionCard,
  TransactionCardProps,
} from "../../components/TransactionCard";

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
      icon: "dollar-sign"
    },
    date: "12/04/2002",
  },
  {
    id: 2,
    name: "Desenvolvimento de Site",
    type: "negative",
    amount: "2000",
    category:  {
      name: "Salário",
      icon: "dollar-sign"
    },
    date: "12/04/2002",
  },
];

export function Dashboard() {
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
          amount={String(3000)}
          lastTransaction="Última entrada em 13 de abril"
        />
        <HighlightCard
          type="down"
          title="Saída"
          amount={String(3000)}
          lastTransaction="Última entrada em 13 de abril"
        />
        <HighlightCard
          type="total"
          title="Total"
          amount={String(3000)}
          lastTransaction="Última entrada em 13 de abril"
        />
      </HighlightCards>

      <Transactions>
        <Title>Listagem</Title>
        <TransactionList
          data={data}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => <TransactionCard data={item} />}
        />
      </Transactions>
    </Container>
  );
}
