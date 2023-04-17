import { Button, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Swiper from 'react-native-swiper'
import Screen1 from './Screen1';
import Screen2 from './Screen2';
import Screen3 from './Screen3';

const OnboardingScreen = ({ navigation }) => {
    return (
        <View style={styles.OnboardingScreen}>
            <Swiper loop={false}>
                <Screen1 navigation={navigation} />
                <Screen2 navigation={navigation} />
                <Screen3 navigation={navigation} />
            </Swiper>
        </View>
    )
}

export default OnboardingScreen;

const styles = StyleSheet.create({
    OnboardingScreen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})