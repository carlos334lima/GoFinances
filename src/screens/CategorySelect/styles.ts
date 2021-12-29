import { RFValue } from "react-native-responsive-fontsize";
import Feather from "react-native-vector-icons/Feather";
import styled from "styled-components/native";
import theme from "../../styles/theme";

import { GestureHandlerRootView } from "react-native-gesture-handler";

interface CategoryProps {
  isActive: boolean;
}

export const Container = styled(GestureHandlerRootView)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFValue(113)}px;
  background-color: ${({ theme }) => theme.colors.primary};
  align-items: center;
  justify-content: flex-end;
  padding-bottom: 19px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(18)}px;
`;

export const Category = styled.TouchableOpacity<CategoryProps>`
  width: 100%;
  padding: ${RFValue(25)}px;
  flex-direction: row;
  align-items: center;
  color: ${({ isActive }) =>
    isActive ? theme.colors.shape : theme.colors.text_dark};
  background-color: ${({ isActive }) =>
    isActive ? theme.colors.primary : theme.colors.background};
`;

export const Icon = styled(Feather)<CategoryProps>`
  font-size: ${RFValue(20)}px;
  margin-right: 16px;
  color: ${({ isActive }) =>
    isActive ? theme.colors.shape : theme.colors.text_dark};
`;

export const IconClose = styled(Feather)`
  left: 105px;
  font-size: ${RFValue(25)}px;
  color: ${({ theme }) => theme.colors.shape};
`;

export const Name = styled.Text<CategoryProps>`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(16)}px;
  color: ${({ isActive }) =>
    isActive ? theme.colors.shape : theme.colors.text_dark};
`;

export const Separator = styled.View`
  height: 1px;
  width: 90%;
  background-color: ${({ theme }) => theme.colors.text};
  margin-left: 15px;
`;

export const Footer = styled.View`
  width: 100%;
  padding: 24px;
`;
