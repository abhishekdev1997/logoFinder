export const getUniqueElementArray = (array: []) => {
    return [...new Set(array)];
}

export const checkCorrectAnswer = (userAnswer: string, correctAnswer: string) => {
    return userAnswer === correctAnswer;
}