import React from "react";
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./ForyouCard.styles";
import { BlurView } from "@react-native-community/blur";
import ProceedButton from "../ProceedButton/ProceedButton";

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
        <BlurView blurType="light" style={styles.bluredImage}>
          <TouchableOpacity style={styles.buttonBackground}>
            <Text style={styles.textContainer}>{props.content}</Text>
            <ProceedButton />
          </TouchableOpacity>
        </BlurView>
      </ImageBackground>
    </View>
  );
};

export default ForyouCard;
