import React from "react";

//@utils
import { categories } from "../../utils/categories";

//@styles
import {
  Container,
  Title,
  Amount,
  Footer,
  Category,
  Icon,
  CategoryName,
  Date,
} from "./styles";

export interface TransactionCardProps {
  type: "positive" | "negative";
  name: string;
  amount: string;
  category: {
    name?: string;
    icon?: string;
  };
  date: string;
}

interface Props {
  data: TransactionCardProps;
}

export function TransactionCard({ data }: Props) {
  const [category] = categories.filter((item) => item.key === data.category);

  return (
    <Container>
      <Title>{data?.name}</Title>

      <Amount type={data?.type}>
        {data?.type !== "positive" ? `- ${data?.amount}` : data?.amount}
      </Amount>

      <Footer>
        <Category>
          <Icon name={category?.icon} />
          <CategoryName>{category?.name}</CategoryName>
        </Category>

        <Date>{data?.date}</Date>
      </Footer>
    </Container>
  );
}
