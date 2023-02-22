import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

const RepositoryItem = ({ item }) => {
  const {
    ownerAvatarUrl,
    fullName,
    description,
    language,
    forksCount,
    stargazersCount,
    ratingAverage,
    reviewCount,
  } = item;

  console.log(ownerAvatarUrl);
  return (
    <View>
      <View>
        <Image source={{ uri: ownerAvatarUrl }} style={styles.avatar} />
      </View>
      <Text>Full name: {fullName}</Text>
      <Text>Description: {description}</Text>
      <Text>Language: {language}</Text>
      <Text>Stars: {stargazersCount}</Text>
      <Text>Forks: {forksCount}</Text>
      <Text>Rating: {ratingAverage}</Text>
      <Text>Reviews: {reviewCount}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
  avatar: {
    height: 50,
    width: 50,
  },
});

export default RepositoryItem;
