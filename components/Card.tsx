import { COLORS } from '@/constants/colors';
import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

export default function Card({innerText}: {innerText: string}) {
  return (
    <Pressable style={({pressed}) => [
      styles.card,
      {backgroundColor: pressed ? COLORS.darkGreen : COLORS.green}
    ]}>
      {
        ({pressed}) => (
          <Text style={[
            styles.cardText,
            {color: pressed ? COLORS.white : COLORS.beige}
          ]}>{innerText}</Text>
        )
      }
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 300,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
    borderRadius: 8,
  },

  cardText: {
    fontSize: 30,
  },
});