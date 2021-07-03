import React from "react";
import { Image } from "react-native";
import { styles } from "./styles";

export function GuildIcon() {
  const uri = 'https://github.com/fracanabia.png'
  return (
    <Image
      style={styles.image}
      source={{ uri }}
      resizeMode="cover"
    >

    </Image>
  )
}