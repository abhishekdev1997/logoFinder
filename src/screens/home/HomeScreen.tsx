import { View, Text, Image, StyleSheet, TextInput } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Keypad, InputBox } from '../../components';
import { getUniqueElementArray } from '../../utils/utility';

const data = [{

    "imgUrl": "http://www.dsource.in/sites/default/files/resource/logo-design/logos/logos-representing-india/images/01.jpeg",

    "name": "AADHAAR"

},

{

    "imgUrl": "https://static.digit.in/default/thumb_101067_default_td_480x480.jpeg",

    "name": "PHONEPE"

},

{

    "imgUrl": "https://cdn.iconscout.com/icon/free/png-256/bhim-3-69845.png",

    "name": "BHIM"

},

{

    "imgUrl": "https://media.glassdoor.com/sqll/300494/flipkart-com-squarelogo-1433217726546.png",

    "name": "FLIPKART"

},

{

    "imgUrl": "http://logok.org/wp-content/uploads/2014/05/Walmart-Logo-880x645.png",

    "name": "WALMART"

},

{

    "imgUrl": "http://www.thestylesymphony.com/wp-content/uploads/2015/05/Myntra-logo.png",

    "name": "MYNTRA"

}]

const HomeScreen = () => {
    let allChars: string[] = []
    const [focusItemIndex, setFocusItemIndex] = useState(0)
    const [focusItem, setFocusItem] = useState(data[focusItemIndex] || {} as any)
    const [keyPadVals, setKeyPadVals] = useState([])
    const [inputVal, setInputVal] = useState("")
    const [score, setScore] = useState(0)

    useEffect(() => {
        setFocusItem(data[focusItemIndex])
    }, [focusItemIndex])

    useEffect(() => {
        data.forEach((item) => {
            allChars = [...allChars, ...item.name.split("")]
        })

        console.log(allChars)
        setKeyPadVals(getUniqueElementArray(allChars))
    }, [])

    const keyPadPress = (val: string) => {
        console.log(val)
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
            <Text>Score: {score}</Text>
            <Image style={styles.logo} source={{ uri: focusItem.imgUrl }} />
            {/* <TextInput value={inputVal} style={styles.input} showSoftInputOnFocus={false} /> */}
            <InputBox value={inputVal} inputCount={focusItem.name.length} />
            <Keypad onPress={keyPadPress} letters={keyPadVals} />
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
    }
})

export default HomeScreen