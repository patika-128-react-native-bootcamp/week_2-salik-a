
import React, { useEffect, useState } from 'react';
import {
    FlatList,
    View,
} from 'react-native';
import styles from "./MainScreenStyle"
import InputCard from '../components/InputCard/InputCard';
import ProductCard from '../components/ProductCard/ProductCard';
import SortButton from '../components/SortButton/SortButton';


const Main = () => {

    const [data, setData] = useState([]);
    const [sort, setSort] = useState("");

    useEffect(() => {
        console.log(sort)
        sortData(sort)
    }, [data])

    const renderItem = ({ item }) => (
        <ProductCard data={item} />
    )


    const sortData = (text) => {
        if (text === "increase") {
            const sorted = data.sort((a, b) => a.price - b.price);
            setData(sorted)
            console.log(sort, sorted)
        } else if (text === "decrease") {
            const sorted = data.sort((a, b) => b.price - a.price);
            setData(sorted)
            console.log(sort, sorted)
        } else {
            const sorted = data.sort((a, b) => b.date - a.date);
            setData(sorted)
            console.log(sort, sorted)
        }
        setSort(text)
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <SortButton title="Artan Fiyat" onPress={() => sortData("increase")} />
                <SortButton title="Azalan Fiyat" onPress={() => sortData("decrease")} />
                <SortButton title="Tarih" onPress={() => sortData("history")} />
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