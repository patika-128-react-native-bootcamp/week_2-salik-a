import React, { useState } from 'react';
import {
    SafeAreaView,
    Text,
    View,
} from 'react-native';
import styles from "./InputCardStyle"
import Input from '../Input/Input';
import AddButton from '../AddButton/AddButton';

const InputCard = ({ data, setData }) => {

    const [name, setName] = useState();
    const [price, setPrice] = useState();

    const handleAddPress = () => {
        const product = {
            name: name,
            price: price,
            date: new Date()
        }
        setData([{ ...product }, ...data])
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.inputContainer}>
                <Text style={styles.text}>Name</Text>
                <Input onChangeText={setName} value={name} />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.text}>Price</Text>
                <Input onChangeText={setPrice} value={price} />
            </View>
            <AddButton title="Add" onPress={handleAddPress} />
        </SafeAreaView>
    );
};

export default InputCard;