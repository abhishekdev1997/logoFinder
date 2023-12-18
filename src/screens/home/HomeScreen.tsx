import { View, Text, Image, StyleSheet, TextInput, ToastAndroid } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Keypad, InputBox } from '../../components';
import { getUniqueElementArray } from '../../utils/utility';
import { data } from '../../utils/data';

const HomeScreen = () => {
    let allChars: string[] = []
    const [focusItemIndex, setFocusItemIndex] = useState(0)
    const [focusItem, setFocusItem] = useState(data[focusItemIndex] || {} as any)
    const [keyPadVals, setKeyPadVals] = useState([])
    const [inputVal, setInputVal] = useState("")
    const [score, setScore] = useState(0);
    const [gameOver, setGameOver] = useState(false);

    useEffect(() => {
        if (focusItemIndex > data.length - 1) {
            setGameOver(true)
            return
        }
        setFocusItem(data[focusItemIndex])
    }, [focusItemIndex])

    useEffect(() => {
        data.forEach((item) => {
            allChars = [...allChars, ...item.name.split("")]
        })

        setKeyPadVals(getUniqueElementArray(allChars as any))
    }, [])

    const keyPadPress = (val: string) => {
        setInputVal(inputVal + val)
    }

    useEffect(() => {
        if (inputVal.length === focusItem.name.length) {
            if (inputVal === focusItem.name) {
                setScore(score + 2)
            } else {
                setScore(score - 1)
            }
            setFocusItemIndex(focusItemIndex + 1)
            setInputVal("")
        }
    }, [inputVal])

    return (
        <View style={styles.container}>
            {gameOver ? (
                <Text style={styles.gameOverText}>Game Over.{"\n"}Your Sore is {score}</Text>
            ) : (
                <>
                    <Text>Score: {score}</Text>
                    <Image style={styles.logo} source={{ uri: focusItem.imgUrl }} />
                    {/* <TextInput value={inputVal} style={styles.input} showSoftInputOnFocus={false} /> */}
                    <InputBox value={inputVal} inputCount={focusItem.name.length} />
                    <Keypad onPress={keyPadPress} letters={keyPadVals} />
                </>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    input: {
        backgroundColor: "white",
        color: "#000",
    },
    logo: {
        height: 100,
        width: 100
    },
    gameOverText: {
        justifyContent: "center",
        alignItems: "center",
        fontSize: 30,
        fontWeight: "bold"
    }
})

export default HomeScreen