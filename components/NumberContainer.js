import { View, Text, StyleSheet } from 'react-native';

function NumberContainer({children}) {
    return (
        <View style={styles.container}>
            <Text style={styles.numberText}>{children}</Text>
        </View>
    );

}

export default NumberContainer;

const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: '#E5492E',
        padding: 36,
        margin: 24,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    numberText: {
        color: '#E5492E',
        fontSize: 36,
        fontWeight: 'bold',
    }
});