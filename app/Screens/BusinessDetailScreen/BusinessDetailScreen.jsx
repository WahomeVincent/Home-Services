import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { useRoute } from '@react-navigation/native'


export default function BusinessDetailScreen() {
    const param = useRoute().params

    const [business, setbusiness] = useState(param.business)
    // useEffect(() => {
    //   console.log(param?.business);
    // }, [param])
    
    
  return (
    <View>
      <Text>BusinessDetailScreen</Text>
    </View>
  )
}