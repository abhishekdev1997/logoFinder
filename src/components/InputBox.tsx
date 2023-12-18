import { View, TextInput, StyleSheet } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'

interface InputBoxProps {
    inputCount: number;
    value: string;
}

const InputBox: React.FC<InputBoxProps> = ({ inputCount, value }) => {
    const [otp, setOtp] = useState(() => Array.from({ length: inputCount }, (_, index) => (index < value.length ? value[index] : '')));
    const inputRefs = useRef<(TextInput | null)[]>([]);

    useEffect(() => {
        const chars = value.split('');
        setOtp(() => Array.from({ length: inputCount }, (_, index) => (index < chars.length ? chars[index] : '')));
    }, [value, inputCount]);

    return (
        <View style={styles.container}>
            {otp.map((item, index) => (
                <TextInput
                    key={index}
                    style={styles.input}
                    showSoftInputOnFocus={false}
                    maxLength={1}
                    value={item}
                    ref={(ref) => inputRefs.current[index] = ref}
                />
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
    },
    input: {
        backgroundColor: "white",
        color: "#000",
        margin: 2
    }
});

export default InputBox;