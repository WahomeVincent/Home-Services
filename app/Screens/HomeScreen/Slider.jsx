import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import GlobalApi from '../../utils/GlobalApi'


export default function Slider() {

    useEffect(() => {
        getSliders()
    }, [])
    const getSliders = () => {
        GlobalApi.getSlider().then(resp => {
          console.log("res", resp);
        })
    }
  return (
    <View>
      <Text>Slider</Text>
    </View>
  )
}