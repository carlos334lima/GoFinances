import React from "react";
import { TouchableOpacityProps } from "react-native";

import {
  Container,
  Header,
  Title,
  Amount,
  LastMoviment,
  Icon,
  Footer,
} from "./styles";

interface Props extends TouchableOpacityProps {
  title: string;
  amount: string;
  lastMoviment: string;
  type: "up" | "down" | "dollar";
}

const icon = {
  up: "arrow-up-circle",
  down: "arrow-up-circle",
  dollar: "dollar-sign",
};

export function Card() {}
