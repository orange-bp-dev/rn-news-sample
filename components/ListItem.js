import React from "react"
import { Text, View, Image, StyleSheet } from "react-native"

const styles = StyleSheet.create({
  itemContainer: { height: 100, width: "100%", borderColor: "gray", borderWidth: 0.5, flexDirection: "row" },
  leftContainer: {
    width: 100
  },
  rightContainer: {
    flex: 1,
    flexDirection: "column",
    padding: 10,
    justifyContent: "space-between"
  },
  text: {
    fontSize: 16
  },
  subText: {
    fontSize: 12,
    color: "gray"
  }
})

export const ListItem = ({ author, text, image }) => {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.leftContainer}>
        <Image style={{ width: 100, height: 100 }} source={{ uri: image }} />
      </View>
      <View style={styles.rightContainer}>
        <Text style={styles.text} numberOfLines={3}>
          {text}
        </Text>
        <Text style={styles.subText}>{author}</Text>
      </View>
    </View>
  )
}
