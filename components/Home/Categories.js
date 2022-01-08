import React from 'react';
import { Image, ScrollView, Text, View, TouchableOpacity } from 'react-native';
import { COLORS } from '../../config/colors';
const items = [
    {
        id: 0,
        image: require('../../assets/images/printer.png'),
        text: "Printers",
    },
    {
        id: 1,
        image: require('../../assets/images/user-interface.png'),
        text: "Phones and Tablets",
    },
    {
        id: 2,
        image: require('../../assets/images/desktop-computer.png'),
        text: "Category 3",
    },
    {
        id: 3,
        image: require('../../assets/images/user-interface.png'),
        text: "Category 4",
    },
    {
        id: 4,
        image: require('../../assets/images/gamepad.png'),
        text: "Category 5",
    },
    {
        id: 5,
        image: require('../../assets/images/printer.png'),
        text: "Category 6",
    },
    {
        id: 6,
        image: require('../../assets/images/desktop-computer.png'),
        text: "Category 7",
    },
]
function Categories(props) {
    const [selectedCat, setSelectedCat] = React.useState(-5);
    
    return (
       <View style={{
           marginTop:5,
           backgroundColor: COLORS.white,
           paddingVertical:10,
           paddingLeft: 20,
       }}>
           <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {items.map((item,index)=>(

               <TouchableOpacity key={index} style={{}}
               onPress={() => {
                setSelectedCat(item.id);
                
              }}
               >
                   <View  style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginRight: 15,
                marginTop:5,
                marginBottom:5,
                backgroundColor: COLORS.secondary,
                padding:5,
                paddingHorizontal:10,
                borderRadius:10,
                backgroundColor: item.id == selectedCat? COLORS.primary:COLORS.secondary,
            }}
            >
                <Image source={item.image} style={{
                    width: 30,
                    height: 30,
                    resizeMode: 'contain',
                    
                }} />
                <Text style={{
                    fontSize:13,
                    fontWeight: 'bold',
                    marginLeft:10,
                    color: item.id == selectedCat? COLORS.white:COLORS.black,
                }}> {item.text} </Text>
            </View>
               </TouchableOpacity>
          ))}
       </ScrollView>
       </View>
    );
}

export default Categories;