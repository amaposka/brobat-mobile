import React from "react";
import PropTypes from "prop-types";
import { Container, Text } from "native-base";

function HomeTabScreen({ navigation }: { navigation: any }) {
  return (
    <Container>
      <Text>Home Screen!</Text>
    </Container>
  );
}

HomeTabScreen.propTypes = {
  navigation: PropTypes.object,
};

HomeTabScreen.navigationOptions = () => ({
  tabBarLabel: "hai"
});

export default HomeTabScreen;
