import React, { useState, useEffect } from "react";
import { Modal, TouchableWithoutFeedback, Keyboard, Alert } from "react-native";

//@libraries
import * as Yup from "yup";
import uuid from "react-native-uuid";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import FlashMessage from "react-native-flash-message";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

//@components
import { CategorySelect } from "../CategorySelect";
import { Button } from "../../components/Form/Button";
import { InputForm } from "../../components/Form/InputForm";
import { CategorySelectButton } from "../../components/Form/CategorySelect";
import { TransactionTypeButton } from "../../components/Form/TransactionTypeButton";

//@styles
import {
  Container,
  Header,
  Title,
  Form,
  Fields,
  TransactionsTypes,
} from "./styles";
import theme from "../../styles/theme";
import { ShowMessage } from "../../components/ShowMessage";

interface FormData {
  name: string;
  amount: string;
}

export function Register() {
  const schema = Yup.object().shape({
    name: Yup.string().required("Nome é obrigatório"),
    amount: Yup.number()
      .typeError("Informe um valor númerico")
      .positive("O valor não pode ser negativo")
      .required("O valor é obrigatório"),
  });

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  //const navigation = useNavigation();

  const [transactionType, setTransactionType] = useState("");
  const [categoryModalOpen, setCategoryModalOpen] = useState(false);
  const [category, setCategory] = useState({
    key: "category",
    name: "Categoria",
  });

  async function handleRegister(form: FormData) {
    if (!transactionType)
      return ShowMessage("Selecione o tipo da transação", "warning");

    if (category.key === "category")
      return ShowMessage("Selecione uma categoria", "warning");

    const newTransaction = {
      id: String(uuid.v4()),
      name: form.name,
      amount: form.amount,
      type: transactionType,
      category: category.key,
      date: new Date(),
    };

    try {
      const dataKey = "@gofinances:transactions";

      const data = await AsyncStorage.getItem(dataKey);
      const currentData = data ? JSON.parse(data) : [];

      const dataFormatted = [...currentData, newTransaction];

      await AsyncStorage.setItem(dataKey, JSON.stringify(dataFormatted));

      ShowMessage("Salvo com sucesso!", "success");

      //navigation.navigate('Listagem');
    } catch (error) {
      ShowMessage("Não foi possível salvar!", "danger");
    } finally {
      reset();
      setTransactionType("");
      setCategory({
        key: "category",
        name: "Categoria",
      });
    }
  }

  function handleTransactionsTypeSelect(type: "positive" | "negative") {
    setTransactionType(type);
  }

  function handleCloseSelectCategoryModal() {
    setCategoryModalOpen(false);
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <Header>
          <Title>Cadastro</Title>
        </Header>

        <Form>
          <Fields>
            <InputForm
              name="name"
              control={control}
              placeholder="Nome"
              autoCapitalize="sentences"
              autoCorrect={false}
              error={errors.name && errors.name.message}
            />
            <InputForm
              name="amount"
              control={control}
              placeholder="Preço"
              keyboardType="numeric"
              error={errors.amount && errors.amount.message}
            />

            <TransactionsTypes>
              <TransactionTypeButton
                type="up"
                title="Entrada"
                isActive={transactionType === "positive"}
                onPress={() => handleTransactionsTypeSelect("positive")}
              />
              <TransactionTypeButton
                type="down"
                title="Saída"
                isActive={transactionType === "negative"}
                onPress={() => handleTransactionsTypeSelect("negative")}
              />
            </TransactionsTypes>

            <CategorySelectButton
              title={category?.name ? category?.name : "Categoria"}
              onPress={() => setCategoryModalOpen(true)}
            />
          </Fields>

          <Button title="Enviar" onPress={handleSubmit(handleRegister)} />
        </Form>

        <Modal visible={categoryModalOpen}>
          <CategorySelect
            category={category}
            setCategory={setCategory}
            closeSelectCategory={handleCloseSelectCategoryModal}
          />
        </Modal>
        <FlashMessage position="top" />
      </Container>
    </TouchableWithoutFeedback>
  );
}
