import { StyleSheet, Text } from "react-native";
import React from "react";
import { Card } from "react-native-paper";

export const RestaurantInfoCard = ({ ...restaurant }) => {
  const {
    name = "Tumyum",
    icon,
    photos = ["https://img.kapook.com/u/2017/sarinee/July/week3/cok2.jpg"],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;

  return (
    <Card elevation={5} style={styles.card}>
      <Card.Cover key={name} style={styles.cover} source={{ uri: photos[0] }} />
      <Text style={styles.title}>{name}</Text>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: { backgroundColor: "white" },
  cover: { padding: 10, backgroundColor: "white" },
  title: { padding: 10 },
});
