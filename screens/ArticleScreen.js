import React from "react"
import { StyleSheet, SafeAreaView, Text } from "react-native"
import { WebView } from "react-native-webview"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
})

export default function ArticleScreen({ route }) {
  const { uri } = route.params
  return (
    <SafeAreaView style={styles.container}>
      <WebView source={{ uri }} />
      {/* <Text>{uri}</Text> */}
    </SafeAreaView>
  )
}
