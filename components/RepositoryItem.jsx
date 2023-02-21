import { View, Text } from 'react-native'
import React from 'react'

const RepositoryItem = (props) => {
    const [
        fullName,
        description,
        language,
        forksCount,
        stargazersCount,
        ratingAverage,
        reviewCount,
        ownerAvatarUrl] = props
  return (
      <View>
        <Text>Full name: {fullName}</Text>
        <Text>Description: {description}</Text>
        <Text>Language: {language}</Text>
        <Text>Stars: {stargazersCount}</Text>
        <Text>Forks: {forksCount}</Text>
        <Text>Rating: {ratingAverage}</Text>
        <Text>Reviews: {reviewCount}</Text>
    </View>
  )
}

export default RepositoryItem
