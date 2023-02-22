import { View, Image, StyleSheet } from "react-native";
import Text from "./Text";
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

  return (
    <View style={styles.container}>
      <View style={styles.userContainer}>
        <Image source={{ uri: ownerAvatarUrl }} style={styles.avatar} />
        <View style={styles.userInfoContainer}>
          <Text style={styles.nameText}>{fullName}</Text>
          <Text>{description}</Text>
          <View style={styles.language}>
            <Text style={{ color: "white" }}>{language}</Text>
          </View>
        </View>
      </View>
      <View style={styles.statsContainer}>
        <View styles={styles.statsItemContainer}>
          <Text style={styles.statsText}>{stargazersCount}</Text>
          <Text style={styles.statsLabel}>Stars</Text>
        </View>
        <View styles={styles.statsItemContainer}>
          <Text style={styles.statsText}>{forksCount}</Text>
          <Text style={styles.statsLabel}>Forks</Text>
        </View>
        <View styles={styles.statsItemContainer}>
          <Text style={styles.statsText}>{ratingAverage}</Text>
          <Text style={styles.statsLabel}>Rating</Text>
        </View>
        <View styles={styles.statsItemContainer}>
          <Text style={styles.statsText}>{reviewCount}</Text>
          <Text style={styles.statsLabel}>Reviews</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 12.5,
  },
  userContainer: { flexDirection: "row" },
  userInfoContainer: { flexDirection: "column", paddingHorizontal: 12.5 },
  avatar: {
    height: 60,
    width: 60,
    borderRadius: 4,
  },
  nameText: { fontSize: 20, fontWeight: "bold", marginBottom: 5 },
  language: {
    backgroundColor: "#0366d6",
    color: "white",
    height: 30,
    width: 80,
    borderRadius: 4,
    marginTop: 10,
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  statsItemContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  statsText: {
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
  },
  statsLabel: {
    textAlign: "center",
  },
});

export default RepositoryItem;
