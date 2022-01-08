import React from 'react';
import { Image, TouchableOpacity, View, Text } from 'react-native';
import { COLORS } from '../config/colors';

function HorizontalProductsCard(props) {
    return (
        <TouchableOpacity
        style={{
            flexDirection: 'row',
            borderRadius:20,
            backgroundColor:COLORS.white,
            height:130,
            paddingHorizontal:10,
            marginVertical:10,
            marginHorizontal:10,
            justifyContent: 'center',
            alignItems: 'center',
        }}
        >
            <Image 
            style={{
                width: 110,
                height:110,
                resizeMode: 'contain',
            }}
            source={ props.imageUri }/>

            <View
            style={{
                flex:1,
                paddingHorizontal:15
            }}
            >
                <Text
                style={{
                    fontSize:17,
                    fontWeight: 'bold',
                }}
                >
                    {props.title}
                </Text>
                <Text
                style={{
                    color: '#5B5A5F',
                }}
                numberOfLines={2}
                
                >
                    {props.description}
                </Text>

                <Text
                style={{
                    fontSize:20,
                    fontWeight: 'bold',
                }}
                >{props.price} ريال</Text>

                <View
                style={{
                    flex:1,
                    position: 'absolute',
                    top: -25,
                    right: 10,
                    backgroundColor:COLORS.primary,
                    width:40,
                    height:40,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderBottomLeftRadius:10,
                    borderBottomRightRadius:10,

                }}
                >
                    <Text
                    style={{
                        color: COLORS.white,
                        fontWeight: 'bold',
                        fontSize:20
                    }}
                    >
                        50%
                    </Text>

                </View>
            </View>

        </TouchableOpacity>
    );
}

export default HorizontalProductsCard;