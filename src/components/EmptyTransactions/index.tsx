import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

//@libraries
import { useNavigation } from "@react-navigation/native";
import { RFValue } from "react-native-responsive-fontsize";

//@styles
import theme from "../../styles/theme";

export function EmptyTransactions() {
  const navigation = useNavigation();

  function handleNavigateToRegister() {
    navigation.navigate("Cadastrar");
  }

  return (
    <>
      <View
        style={{
          flex: 1,
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: RFValue(18),
            fontFamily: theme.fonts.regular,
            marginBottom: 50,
          }}
        >
          Suas transações serão exibidas aqui!
        </Text>
        <TouchableOpacity
          onPress={handleNavigateToRegister}
          style={{
            backgroundColor: theme.colors.secondary,
            padding: 10,
            borderRadius: 5,
          }}
        >
          <Text
            style={{
              fontSize: RFValue(16),
              fontFamily: theme.fonts.regular,
              color: theme.colors.shape,
            }}
          >
            Cadastre novas transações
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
