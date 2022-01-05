import React, { useEffect } from "react";
import { TouchableOpacity, View } from "react-native";

//@libraries
import { FlatList } from "react-native-gesture-handler";

//@components
import { Button } from "../../components/Form/Button";

//@utils
import { categories } from "../../utils/categories";

//@styles
import {
  Container,
  Header,
  Title,
  Category,
  Icon,
  Name,
  Separator,
  Footer,
  IconClose,
} from "./styles";

interface Category {
  key: string;
  name: string;
}

interface Props {
  category: Category;
  setCategory: (category: Category) => void;
  closeSelectCategory: () => void;
}

export function CategorySelect({
  category,
  setCategory,
  closeSelectCategory,
}: Props) {
  function handleCloseSelectCategoryModal() {
    closeSelectCategory();
  }

  function handleCategorySelect(category: Category) {
    setCategory(category);
  }

  return (
    <Container>
      <Header>
        <View style={{ flexDirection: "row" }}>
          <Title>Categoria</Title>

          <TouchableOpacity onPress={handleCloseSelectCategoryModal}>
            <IconClose name="x" />
          </TouchableOpacity>
        </View>
      </Header>

      <FlatList
        data={categories}
        style={{ flex: 1, width: "100%" }}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => {
          return (
            <Category
              onPress={() => handleCategorySelect(item)}
              isActive={category.key === item.key}
            >
              <Icon name={item.icon} isActive={category.key === item.key} />
              <Name isActive={category.key === item.key}>{item.name}</Name>
            </Category>
          );
        }}
        ItemSeparatorComponent={() => <Separator />}
      />

      <Footer>
        <Button title="Selecionar" onPress={handleCloseSelectCategoryModal} />
      </Footer>
    </Container>
  );
}
