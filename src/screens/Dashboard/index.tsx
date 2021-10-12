import React, { useCallback, useEffect, useState } from "react";
import { FlatList } from "react-native";

//@libraries
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { useFocusEffect } from "@react-navigation/native";
import { getBottomSpace } from "react-native-iphone-x-helper";

import Feather from "react-native-vector-icons/Feather";

//@styles
import {
  Container,
  Header,
  HeaderTop,
  User,
  Photo,
  UserGretting,
  UserName,
  Logout,
  Icon,
  UserInfo,
  Cards,
  Content,
  Title,
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
        <HeaderTop>
          <UserInfo>
            <Photo
              source={{
                uri: "https://avatars.githubusercontent.com/u/68131444?v=4",
              }}
            />
            <User>
              <UserGretting>Olá, </UserGretting>
              <UserName>Carlos</UserName>
            </User>
          </UserInfo>

          <Logout>
            <Icon name="power" />
          </Logout>
        </HeaderTop>
      </Header>
    </Container>
  );
}
