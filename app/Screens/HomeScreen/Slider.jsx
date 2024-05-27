import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../../utils/GlobalApi'
import Heading from '../../Components/Heading'


export default function Slider() {

    const [slider, setSlider] = useState([])
    useEffect(() => {
        getSliders()
    }, [])
    const getSliders = () => {
        GlobalApi.getSlider().then(resp => {
          // console.log("res", resp?.sliders);
          setSlider(resp?.sliders)
        })
    }

  return (
    <View>
      <Heading text='Offers For You'/>
      <FlatList 
        data={slider}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index}) => (
          <View style={{marginRight:20, }}>
            <Image source={{uri:item.image.url}} style={styles.sliders}/>
          </View>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  sliders:{
    width:250,
    height:130,
    borderRadius:20,
    marginTop:10, 
  }
  
})