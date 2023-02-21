import { View, Text } from 'react-native'
import React from 'react'

const RepositoryItem = (props) => {
const {id,
    fullName,
    description,
    language,
    forksCount,
    stargazersCount,
    ratingAverage,
    reviewCount,
    ownerAvatarUrl} = props
  return (
    <View>
      <Text>RepositoryItem</Text>
    </View>
  )
}

export default RepositoryItem

