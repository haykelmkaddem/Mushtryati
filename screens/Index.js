import React from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    FlatList,
    Image,
    ScrollView
      
     } from 'react-native';
import Categories from '../components/Home/Categories';
import ReastaurentItem from '../components/Home/ReastaurentItems';
import HorizontalProductsCard from '../components/HorizontalProductsCard';
import SectionTitle from '../components/SectionTitle';
import VerticalProductsCard from '../components/VerticalProductsCard';


const products = [
    {
        id: 0,
        image: require('../assets/images/printer1.png'),
        title: "Printer 1",
        description: "Product description some text placeholder for description. Product description some text placeholder for description",
    },
    {
        id: 0,
        image: require('../assets/images/printer2.png'),
        title: "Printer 2",
        description: "Product description some text placeholder for description. Product description some text placeholder for description",
    },
    {
        id: 0,
        image: require('../assets/images/printer1.png'),
        title: "Printer 3",
        description: "Product description some text placeholder for description. Product description some text placeholder for description",
    },
    {
        id: 0,
        image: require('../assets/images/printer2.png'),
        title: "Printer 4",
        description: "Product description some text placeholder for description. Product description some text placeholder for description",
    },
    
]
const Index = () => {
    
    return (
        <View>
            
            <Categories/>
            <SectionTitle title="Recent"/>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {products.map((item,index)=>(
                <VerticalProductsCard key={index} title={item.title} description={item.description} price="20" imageUri={item.image}/>
            ))}
            </ScrollView>
            
            <SectionTitle title="Featured"/>
            {products.map((item,index)=>(
                <HorizontalProductsCard key={index} title={item.title} description={item.description} price="20" imageUri={item.image}/>
            ))}
           
        </View>
    );
}

export default Index;