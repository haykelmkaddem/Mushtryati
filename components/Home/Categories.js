import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { COLORS } from '../../config/colors';
const items = [
    {
        image: require('../../assets/images/image.png'),
        text: "Category 1",
    },
    {
        image: require('../../assets/images/image.png'),
        text: "Category 2",
    },
    {
        image: require('../../assets/images/image.png'),
        text: "Category 3",
    },
    {
        image: require('../../assets/images/image.png'),
        text: "Category 4",
    },
    {
        image: require('../../assets/images/image.png'),
        text: "Category 5",
    },
    {
        image: require('../../assets/images/image.png'),
        text: "Category 6",
    },
    {
        image: require('../../assets/images/image.png'),
        text: "Category 7",
    },
]
function Categories(props) {
    return (
       <View style={{
           marginTop:5,
           backgroundColor: COLORS.white,
           paddingVertical:10,
           paddingLeft: 20,
       }}>
           <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {items.map((item,index)=>(

               <View key={index} style={{
                alignItems: 'center',
                marginRight: 30,
                marginTop:5
            }}>
            <Image source={item.image} style={{
                width: 60,
                height: 50,
                resizeMode: 'contain',
            }} />
            <Text style={{
                fontSize:13,
                fontWeight: 'bold',
            }}> {item.text} </Text>
            </View>
          ))}
       </ScrollView>
       </View>
    );
}

export default Categories;