import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { useRoute } from '@react-navigation/native'

export default function BusinessListByCategory() {
  const param = useRoute().params;

  useEffect(() => {
      console.log(param);
  }, [])
  return (
    <View>
      <Text>BusinessListByCategory</Text>
    </View>
  )
}