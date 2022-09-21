import React from "react";
import { View, Text } from "react-native";
import { styles } from "./HeaderDivider.style";

interface Props {
  label: string;
}

const HeaderDivider = (props: Props) => {
  return (
    <View style={styles.parentContainer}>
      <Text style={styles.textStyle}>{props.label}</Text>
    </View>
  );
};

export default HeaderDivider;
