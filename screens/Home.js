import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { StyleSheet, SafeAreaView, Text, View, StatusBar, Platform, ScrollView, Animated,TouchableWithoutFeedback } from 'react-native';
import Categories from '../components/Home/Categories';
import Header from '../components/Home/Header';
import ReastaurentItems, { localRestaurents } from '../components/Home/ReastaurentItems';
import SearchBar from '../components/Home/SearchBar';
import { COLORS } from '../config/colors';
import { screens, icons } from '../config/constants';
import IonIcons from 'react-native-vector-icons/Ionicons'
function Home(props) {
    const [selectedTab, setSelectedTab] = React.useState(screens.home);
    const TabButton =({label, icon, isFocused, onPress,bgColor}) =>{
        
        return(
            <TouchableWithoutFeedback
                onPress={onPress}
               
            >
                <Animated.View
                style={{
                    flex:1,
                    alignItems: 'center',
                    justifyContent: 'center', 
                }}>
                    <Animated.View
                    style={{
                        flexDirection: 'row',
                        width: "80%",
                        height: 50,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius:25,
                        backgroundColor: bgColor
                    }}>
                        <IonIcons name={icon} size={20}  />
                        {isFocused &&
                            <Text
                                numberOfLines={1}
                                style={{
                                    marginLeft: 10,
                                    color: COLORS.black,
                                    
                                }}
                            >{ label }</Text>
                        }
                    </Animated.View>
                </Animated.View>
            </TouchableWithoutFeedback>
        )
    }
    return (
        
        <SafeAreaView style={styles.container}>
        <View style={{
            backgroundColor: COLORS.white,
            padding: 15,
        }}>
        <Header/>
        <SearchBar/>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
            <Categories/>
           {/* <ReastaurentItems restaurentData={restaurentData}/>*/} 
          <Text>hello</Text>

        </ScrollView>
        {/* Footer */}
        <View 
        style={{
            height:100,
            justifyContent: 'flex-end',
        }}> 

            {/* Shadow */}
            <LinearGradient
                    start={{
                        x: 0,
                        y:0
                    }}
                    end={{
                        x: 0,
                        y: 4,
                    }}
                    colors={[
                        COLORS.transparent,
                        COLORS.primary
                    ]}
                    style={{
                        position: 'absolute',
                        left:0,
                        right:0,
                        height:50,
                        borderTopLeftRadius:15,
                        borderTopRightRadius:15,
                    }}
                    />
                    {/* Tabs */}
                    <View
                        style={{
                            flex:1,
                            flexDirection: 'row',
                            paddingHorizontal: 12,
                            paddingBottom:10,
                            borderTopLeftRadius:20,
                            borderTopRightRadius:20,
                            backgroundColor: COLORS.white,
                            

                        }}>

                            <TabButton
                                
                                label={screens.home}
                                icon={icons.home}
                                isFocused={selectedTab == screens.home}
                                onPress={() => setSelectedTab(screens.home)}
                                bgColor={ selectedTab== screens.home? COLORS.primary:COLORS.white}
                            />
                            <TabButton
                                label={screens.search}
                                icon={icons.search}
                                isFocused={selectedTab == screens.search}
                                onPress={() => setSelectedTab(screens.search)}
                                bgColor={ selectedTab== screens.search? COLORS.primary:COLORS.white}
                            />
                            <TabButton
                                label={screens.cart}
                                icon={icons.cart}
                                isFocused={selectedTab == screens.cart}
                                onPress={() => setSelectedTab(screens.cart)}
                                bgColor={ selectedTab== screens.cart? COLORS.primary:COLORS.white}
                                
                            />
                            <TabButton
                                label={screens.favourite}
                                icon={icons.favourite}
                                isFocused={selectedTab == screens.favourite}
                                onPress={() => setSelectedTab(screens.favourite)}
                                bgColor={ selectedTab== screens.favourite? COLORS.primary:COLORS.white}
                            />
                            <TabButton
                                label={screens.notification}
                                icon={icons.notification}
                                isFocused={selectedTab == screens.notification}
                                onPress={() => setSelectedTab(screens.notification)}
                                bgColor={ selectedTab== screens.notification? COLORS.primary:COLORS.white}
                            />


                    </View>
        </View>
    </SafeAreaView>
    
    );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: COLORS.secondary,
        marginTop: Platform.OS === "android"? StatusBar.currentHeight:0,
    }
})
export default Home;