import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function Screen3({ navigation }) {
    return (
        <>
            <ImageBackground source={require("../assets/images/ellie-ellien-E87UW-n4X1Q-unsplash.jpg")} style={styles.ContainerBackgroundImage}>
                <View style={styles.ContainerBackground}>
                    <View style={styles.Container}>
                        <View style={styles.Container_Heading}>
                            <Text style={styles.Container_HeadingText}>
                                Pick Up or Delivery you food
                            </Text>
                        </View>
                        <View style={styles.Container_SubHeading}>
                            <Text style={styles.Container_SubHeadingText}>
                                We make food ordering fast, simple and free - no matter if you order online or cash. Now that you’ve made the wise decision to create a restaurant meal ordering app, the following step is to decide what features to include.
                            </Text>
                        </View>
                        <View style={styles.ContainerButton}>
                            <TouchableOpacity activeOpacity={0.8} onPress={() => { navigation.navigate('Home') }}>
                                <LinearGradient colors={['#000', '#000']}
                                    style={{
                                        borderRadius: 8
                                    }}
                                >
                                    <Text style={styles.ContainerButton_startedText}>Get Started</Text>
                                </LinearGradient>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </>
    )
}

const styles = StyleSheet.create({
    ContainerBackgroundImage: {
        flex: 1,
    },
    ContainerBackground: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0, 0.60)'
    },
    Container: {
        flex: 1,
    },
    Container_Heading: {
        width: 'auto',
        height: 'auto',
        marginTop: 80,
    },
    Container_HeadingText: {
        fontSize: 39,
        color: '#fff',
        fontWeight: 'bold',
        padding: 19,
    },
    Container_SubHeading: {
        marginTop: 90,
        width: 'auto',
        height: 'auto',
    },
    Container_SubHeadingText: {
        fontSize: 19,
        color: "#fff",
        letterSpacing: 1.4,
        textAlign: 'left',
        paddingTop: 19,
        paddingLeft: 29,
    },
    ContainerButton: {
        marginTop: 120,
        justifyContent: 'center',
        alignItems: 'center',
    },
    ContainerButton_startedText: {
        textAlign: 'center',
        fontSize: 19,
        width: 'auto',
        color: "#fff",
        paddingHorizontal: 54,
        paddingVertical: 10,
        letterSpacing: 1.4,
    }
})