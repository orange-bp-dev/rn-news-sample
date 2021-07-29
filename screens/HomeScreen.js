import React, { useEffect, useState } from "react"
import { StyleSheet, FlatList, SafeAreaView } from "react-native"

import Constants from "expo-constants"
import axios from "axios"
import { ListItem } from "../components/ListItem"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
})

const apiKey = Constants.manifest.extra.newsApiKey

const URL = `https://newsapi.org/v2/top-headlines?country=jp&apiKey=${apiKey}`

export default function HomeScreen({ navigation }) {
  const [articles, setArticles] = useState([])

  const fetchArticles = async () => {
    try {
      const res = await axios.get(URL)
      console.log(res)
      setArticles(res.data.articles)
    } catch (error) {
      console.error("error-------------------------", error)
    }
  }

  useEffect(() => {
    fetchArticles()
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      {/* {articles.map((article, idx) => {
        return <ListItem key={idx} author={article.author} image={article.urlToImage} text={article.title} />
      })} */}
      <FlatList keyExtractor={(item, idx) => idx.toString()} data={articles} renderItem={({ item }) => <ListItem author={item.author} image={item.urlToImage} text={item.title} onPress={() => navigation.navigate("Article", { uri: item.url })} />} />
    </SafeAreaView>
  )
}
