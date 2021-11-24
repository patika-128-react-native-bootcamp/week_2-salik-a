
import React, { useState } from 'react';
import {
    SafeAreaView,
    Text,
    View,
} from 'react-native';
import InputCard from '../components/InputCard/InputCard';
import styles from "./MainScreenStyle"

const Main = () => {

    const [data, setData] = useState([])

    console.log(data)
    return (
        <View style={styles.container}>
            <InputCard data={data} setData={setData} />
        </View>
    );
};

export default Main;