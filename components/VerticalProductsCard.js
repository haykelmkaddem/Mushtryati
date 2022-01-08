import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { COLORS } from '../config/colors';

function VerticalProductsCard(props) {
    
    return (
        <TouchableOpacity
        style={{
            flexDirection: 'column',
            borderRadius:20,
            backgroundColor:COLORS.white,
            height:310,
            width: 200,
            paddingHorizontal:10,
            marginVertical:10,
            marginHorizontal:10,
            justifyContent: 'center',
            alignItems: 'center',
        }}
        >
            
            <Image
            style={{
                width: 170,
                height:200,
                resizeMode: 'contain',
                
            }}
            source={ props.imageUri }
            />

            <View
            style={{
                flex:1,
                paddingHorizontal:15,
                paddingVertical:15
            }}
            >
                <Text
                style={{
                    fontSize:20,
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
                    top: -200,
                    right: 0,
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

export default VerticalProductsCard;