import React, { useState, useEffect } from "react";
import { Modal, TouchableWithoutFeedback, Keyboard, Alert } from "react-native";

//@libraries
import * as Yup from "yup";
import uuid from "react-native-uuid";
import { useForm } from "react-hook-form";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

//@components
import { Input } from "../../components/Form/Input";
import { Button } from "../../components/Form/Button";
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

interface FormData {
  name: string;
  amount: string;
}

export function Register() {
  const [transactionType, setTransactionType] = useState("");
  const [categoryModalOpen, setCategoryModalOpen] = useState(false);
  const [category, setCategory] = useState({
    key: "category",
    name: "Categoria",
  });

  async function handleRegister() {}

  function handleTransactionsTypeSelect(type: "positive" | "negative") {
    setTransactionType(type);
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <Header>
          <Title>Cadastro</Title>
        </Header>

        <Form>
          <Fields>
            <Input
              placeholder="Nome"
              autoCapitalize="sentences"
              autoCorrect={false}
            />
            <Input placeholder="Preço" keyboardType="numeric" />

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
          </Fields>

          <Button title="Enviar" onPress={handleRegister} />
        </Form>
      </Container>
    </TouchableWithoutFeedback>
  );
}
