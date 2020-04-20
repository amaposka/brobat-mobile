import React from "react";
import { Container, List, ListItem, Text, Left, Right } from "native-base";

export default function SettingsTabScreen({ navigation }: { navigation: any }) {
  return (
    <Container>
      <List>
        <ListItem
          noIndent
          onPress={() => navigation.navigate("SettingsLanguageScreen")}
        >
          <Left>
            <Text>Bahasa</Text>
          </Left>
          <Right>
            <Text>Indonesia</Text>
          </Right>
        </ListItem>
      </List>
    </Container>
  );
}
