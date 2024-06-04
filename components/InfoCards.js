import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useState, useEffect } from 'react';
import React from 'react';

const InfoCards = (props) => {

    const styles = StyleSheet.create({

        card: {
            alignItems: 'center',
            margin: 10,
            minWidth: 150,
        },
        text: {
            color: '#e8e8e8',
            magin: 5,
            marginLeft: 15,
        }
        
      });

    return (
        <View style={styles.card}>
            <Text style={styles.text}>{props.title}</Text>
            <Text style={styles.text}>{props.value}</Text>
        </View>
    )
}

export default InfoCards