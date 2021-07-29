import { StatusBar } from "expo-status-bar"
import React, { useEffect, useState } from "react"
import { StyleSheet, View, FlatList, SafeAreaView } from "react-native"
import { ListItem } from "./components/ListItem"
// import articles from "./dummies/articles.json"
import Constants from "expo-constants"
import axios from "axios"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
})

const apiKey = Constants.manifest.extra.newsApiKey

const URL = `https://newsapi.org/v2/top-headlines?country=jp&apiKey=${apiKey}`

export default function App() {
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
      <FlatList keyExtractor={(item, idx) => idx.toString()} data={articles} renderItem={({ item }) => <ListItem author={item.author} image={item.urlToImage} text={item.title} />} />
    </SafeAreaView>
  )
}
