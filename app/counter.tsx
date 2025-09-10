import Button from "@/components/Button";
import { COLORS } from "@/constants/Colors";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Counter() {
  const [counter, setCounter] = useState<number>(0);

  const incrementCounter = ():void => {
    setCounter((prev) => prev + 1);
  };
  
  const decrementCounter = ():void => {
    setCounter((prev) => prev - 1);
  };

  const resetCounter = ():void => {
    setCounter(0);
  };
    
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.counter}>Counter: {counter}</Text>
      <View style={styles.buttonContainer}>
        <Button width={40} text="+1" onPressFunction={incrementCounter} />
        <Button width={40} text="-1" onPressFunction={decrementCounter} />
        <Button width={70} text="reset" onPressFunction={resetCounter} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  
  counter: {
    fontSize: 30,
    color: COLORS.darkGreen
  },

  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "50%",
    marginTop: 10,
  },
});
