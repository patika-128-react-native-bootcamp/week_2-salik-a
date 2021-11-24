import React from 'react';
import {
    Text,
    TouchableOpacity
} from 'react-native';
import styles from "./AddButtonStyle"

const AddButton = ({ title, onPress }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    );
};

export default AddButton;