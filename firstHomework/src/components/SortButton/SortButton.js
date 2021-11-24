import React from 'react';
import {
    TouchableOpacity,
    Text,
    View,
} from 'react-native';
import styles from "./SortButtonStyle"

const SortButton = ({ title, onPress }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    );
};

export default SortButton;