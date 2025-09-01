import Card from "@/components/Card";
import { COLORS } from "@/constants/Colors";
import { Stack } from "expo-router";
import { StyleSheet, View } from "react-native";

export default function Index() {
  return (
    <>
      <Stack.Screen options={{
        title: "Tarea 1",
        headerStyle: {
          backgroundColor: COLORS.darkGreen
        },
        headerTintColor: COLORS.white
      }} />
      <View style={styles.mainContainer}>
        <Card innerText="Card 1" />
        <Card innerText="Card 2" />
        <Card innerText="Card 3" />
        <Card innerText="Card 4" />
        <Card innerText="Card 5" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
});
