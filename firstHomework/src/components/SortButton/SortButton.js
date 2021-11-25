import React from 'react';
import {
    TouchableOpacity,
    Text,
    View,
} from 'react-native';
import styles from "./SortButtonStyle"

const SortButton = ({ title, onPress, clicked }) => {


    const theme = clicked ? "primary" : "secondary";
    return (
        <TouchableOpacity style={styles[theme].container} onPress={onPress}>
            <Text style={styles[theme].title}>{title}</Text>
        </TouchableOpacity>
    );
};

export default SortButton;