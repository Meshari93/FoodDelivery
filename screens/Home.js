import React, { useState, useEffect } from "react";
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Image, FlatList, TouchableOpacityBase } from 'react-native';
import { icons, images, SIZES, COLORS, FONTS } from "../constants";
import { dummyData } from "../data";


const Home = () => {
    const [categories, setCategories] = useState(dummyData.categoryData);
    const [selectedCategories, setselectedCategories] = useState(null);
    const [restaurante, setRestaurante] = useState(dummyData.restaurantData);
    const [currentLocation, setCurrentLocation] = useState(dummyData.initialCurrentLocation);

    function renderHeader() {
        return (
            <View style={{ flexDirection: 'row', height: 50 }}>

                <TouchableOpacity style={{ width: 50, paddingLeft: SIZES.padding * 2, justifyContent: 'center' }}  >
                    <Image source={icons.nearby} resizeMode="contain" style={{ width: 30, height: 30 }} />
                </TouchableOpacity>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <View style={{ width: '70%', height: '100%', backgroundColor: COLORS.lightGray3, alignItems: 'center', justifyContent: "center", borderRadius: SIZES.radius }} >
                        <Text style={{ ...FONTS.h3 }}>{currentLocation.streetName}</Text>
                    </View>
                </View>
                <TouchableOpacity style={{ width: 50, paddingRight: SIZES.padding * 2, justifyContent: 'center' }}>
                    <Image source={icons.basket} resizeMode="contain" style={{ width: 30, height: 30, }} />
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            {renderHeader()}
        </SafeAreaView>

    )
}
export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center'
    }
});