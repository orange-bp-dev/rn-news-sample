import { StatusBar } from "expo-status-bar"
import React from "react"
import { StyleSheet, View, FlatList, SafeAreaView } from "react-native"
import { ListItem } from "./components/ListItem"
import articles from "./dummies/articles.json"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
})

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* {articles.map((article, idx) => {
        return <ListItem key={idx} author={article.author} image={article.urlToImage} text={article.title} />
      })} */}
      <FlatList keyExtractor={(item, idx) => idx.toString()} data={articles} renderItem={({ item }) => <ListItem author={item.author} image={item.urlToImage} text={item.title} />} />
    </SafeAreaView>
  )
}
