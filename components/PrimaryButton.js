import { View, Text, Pressable, StyleSheet } from 'react-native';
import { clickProps } from 'react-native-web/dist/cjs/modules/forwardedProps';

function PrimaryButton({children, onPress}) {
    
    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable 
                style={({pressed}) => 
                    pressed 
                    ? [styles.buttonInnerContainer, styles.pressed] 
                    : styles.buttonInnerContainer}
                onPress={onPress} 
                android_ripple={{color : '#7C19BD'}}>
                <Text style={styles.buttontext}>{children}</Text>
            </Pressable>
        </View>
    )
}

export default PrimaryButton;

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: 'hidden',
    },
    buttonInnerContainer: {
        backgroundColor: '#23ECAC',
        
        paddingVertical: 8,
        paddingVertical: 16,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.25
    },
    buttontext: {
        color: 'white',
        textAlign: 'center'
    },
    pressed: {
        opacity: 0.75,

    }

});