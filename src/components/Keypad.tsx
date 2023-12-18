import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

const Keypad = ({ letters, onPress }: { letters: string[], onPress: (letter: string) => {} }) => {
    return (
        <View style={styles.container}>
            {letters.map((letter: string) => {
                return (<TouchableOpacity onPress={() => onPress(letter)} style={styles.button}>
                    <Text style={styles.label}>{letter}</Text>
                </TouchableOpacity>)
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center"
    },
    button: {
        margin: 10,
        backgroundColor: "white",
        height: 50,
        width: 50,
        justifyContent: "center",
        alignItems: "center"
    },
    label: {
        color: "#000"
    }
})

export default Keypad