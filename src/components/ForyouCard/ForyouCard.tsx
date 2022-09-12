import React from "react";
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./ForyouCard.styles";
import { BlurView } from "@react-native-community/blur";

interface Props {
  content: string;
}

const ForyouCard = (props: Props) => {
  return (
    <View style={styles.mainContainer}>
      <ImageBackground
        source={require("../../assets/Explore7.jpeg")}
        style={styles.imageBackground}
        resizeMode="cover"
      >
        {/* <BlurView blurType="light" style={styles.bluredImage}> */}
        <TouchableOpacity style={styles.buttonBackground}>
          <Text>{props.content}</Text>
        </TouchableOpacity>
        {/* </BlurView> */}
      </ImageBackground>
    </View>
  );
};

export default ForyouCard;
