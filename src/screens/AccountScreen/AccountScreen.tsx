import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import React from "react";
import { Text, View } from "react-native";
import { TabParams } from "../../navigation/navigationTypes";
import { styles } from "./AccountScreen.styles";

type NavigationProps = BottomTabScreenProps<TabParams, "Account">;

const AccountScreen = (navigation: NavigationProps) => {
  return (
    <View style={styles.backgroundContainer}>
      <Text>ACCOUNT SCREEN</Text>
    </View>
  );
};

export default AccountScreen;
