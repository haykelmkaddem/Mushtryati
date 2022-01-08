import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { COLORS } from '../config/colors';

function SectionTitle(props) {
    return (
        <View 
        style={{
            flexDirection: 'row',
            paddingHorizontal:10,
            paddingVertical:15,
            paddingLeft:20,
            backgroundColor: COLORS.white,
            marginTop:10,
            borderRadius: 15,
            marginHorizontal:10,
            justifyContent: 'space-between',
        }}>
            <Text
            style={{
                fontWeight: 'bold',
                color:COLORS.primary,
            }}
            >{props.title}</Text>
            <TouchableOpacity>
                <Text>see all {props.title} product</Text>
            </TouchableOpacity>
        </View>
    );
}

export default SectionTitle;