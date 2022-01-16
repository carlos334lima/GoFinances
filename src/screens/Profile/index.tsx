import React from "react";
import { Button, Text, TextInput, View } from "react-native";

// import { Container } from './styles';

export const Profile: React.FC = () => {
  return (
    <View>
      <Text testID="text-user">usuario</Text>
      <TextInput testID="input-name" autoCorrect={false} placeholder="Nome" value="lima"/>
      <TextInput autoCorrect={true} />

      <Button title="salvar" onPress={() => {}} />
    </View>
  );
};

export default Profile;
