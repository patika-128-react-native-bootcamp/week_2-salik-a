
import React, { useState } from 'react';
import {
    FlatList,
    SafeAreaView,
    Text,
    View,
} from 'react-native';
import styles from "./MainScreenStyle"
import InputCard from '../components/InputCard/InputCard';
import ProductCard from '../components/ProductCard/ProductCard';
import SortButton from '../components/SortButton/SortButton';


const Main = () => {

    const [data, setData] = useState([])


    const renderItem = ({ item }) => (
        <ProductCard data={item} />
    )

    const handleSortPress = () => {

    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <SortButton title="Artan Fiyat" onPress={handleSortPress} />
                <SortButton title="Azalan Fiyat" onPress={handleSortPress} />
                <SortButton title="Tarih" onPress={handleSortPress} />
            </View>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
            />
            <InputCard data={data} setData={setData} />
        </View>
    );
};

export default Main;