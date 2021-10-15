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
} from "./styles";

interface MovimentProps {
  id: string;
  name: string;
  amount: string;
  type: string;
  category: CategoryProps;
  date: Date;
}

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
          type="down"
          title="Entradas"
          amount={String(3000)}
          lastTransaction="Última entrada em 13 de abril"
        />
      </HighlightCards>
    </Container>
  );
}
