import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import React from "react";
import { Text, View } from "react-native";
import { TabParams } from "../../navigation/navigationTypes";
import { styles } from "./BrowseScreen.styles";

type NavigationProps = BottomTabScreenProps<TabParams, "Browse">;

const BrowseScreen = () => {
  return (
    <View style={styles.backgroundContainer}>
      <Text>BROWSE SCREEN</Text>
    </View>
  );
};

export default BrowseScreen;
