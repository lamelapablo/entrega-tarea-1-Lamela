import Card from "@/components/Card";
import { ScrollView, StyleSheet } from "react-native";

export default function Index() {
  return (
    <ScrollView contentContainerStyle={styles.mainContainer}>
      <Card innerText="Card 1" />
      <Card innerText="Card 2" />
      <Card innerText="Card 3" />
      <Card innerText="Card 4" />
      <Card innerText="Card 5" />
      <Card innerText="Card 6" />
      <Card innerText="Card 7" />
      <Card innerText="Card 8" />
      <Card innerText="Card 9" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: "center",
  }
});
