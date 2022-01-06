import React from 'react';
import { StyleSheet, Image, Text, View, TouchableOpacity  } from 'react-native';
import IonIcons from 'react-native-vector-icons/Ionicons';
import { COLORS } from '../../config/colors';

function Header(props) {
    return (
        <View style={{
            flexDirection: 'row',
            
        }}>
            
            {/*Left*/}
            <TouchableOpacity style={{
                width: 60,
                height:60,
                alignItems: 'center',
                justifyContent: 'center',
                borderWidth: 1,
                borderRadius: 20,
                borderColor: COLORS.secondary


            }}>
                <IonIcons name='menu-outline' size={50} color={COLORS.black} />
            </TouchableOpacity>
            {/*Logo*/}

            <View style={{
                flex:1,
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                
                <Image style={styles.headerLogo} source={require('../../assets/images/logo.png')} />

            </View>

            {/*Right*/}
            <TouchableOpacity style={{
                width: 60,
                height:60,
                alignItems: 'center',
                justifyContent: 'center',
                borderWidth: 1,
                borderRadius: 20,
                borderColor: COLORS.secondary,
                


            }}>
                <IonIcons name='cart' size={40} color={COLORS.black} />
                </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    headerLogo:{
        height:40,
        resizeMode: 'contain',
        
    },
})
export default Header;