import React from 'react';
import {View, Text, TextInput, StyleSheet } from 'react-native';

import { COLORS } from '../../config/colors';
import IonIcons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


function SearchBar(props) {
    return (
        <View style={{
            marginTop:15,
            flexDirection: 'row',
        }}>
            <View style={styles.searchContainer}>
              <IonIcons style={{
                marginLeft:20,
              }} name="search" size={23} />

              <TextInput placeholder='Search' style={styles.textInput} />
            </View>
            <View style={styles.sortBtn}>
              <MaterialIcons name='sort' size={30} color={COLORS.white} />
            </View>

        </View>
    );
}
const styles = StyleSheet.create({
  searchContainer:{
    height: 50,
    backgroundColor: COLORS.secondary,
    borderRadius: 20,
    flex:1,
    flexDirection: 'row',
    alignItems: 'center',

  },
  textInput: {
    fontSize: 18,
    fontWeight: 'bold',
    flex:1,
    marginLeft: 10,
  },
  sortBtn : {
    marginLeft: 10,
    height: 50,
    width:50,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  }
})
export default SearchBar;