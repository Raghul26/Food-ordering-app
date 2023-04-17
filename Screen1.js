import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native'
import React from 'react'

export default function screen1() {
    return (
        <>
            <ImageBackground source={require("../assets/images/chad-montano-MqT0asuoIcU-unsplash.jpg")} style={styles.ContainerBackgroundImage}>
                <View style={styles.ContainerBackground}>




                    <View style={styles.Container}>
                        <Text style={styles.Container_HeadingText}>
                            Choose A Tasty Dish
                        </Text>


                        <View style={styles.Container_SubHeading}>
                            <Text style={styles.Container_SubText}>
                                Order anything you want from your Favorite restaurant.
                                Food delivery is a home delivery service. These days, the offers are generally placed through a mobile app, website, or phone
                            </Text>
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
    Container_HeadingText: {
        fontSize: 39,
        color: '#fff',
        fontWeight: 'bold',
        Width: 'auto',
        height: 'auto',
        margin: 19,
        letterSpacing: 1,
        marginTop: 120,
    },
    Container_SubHeading: {
        marginTop: 80,
        // margin: 19,
    },
    Container_SubText: {
        fontSize: 19,
        maxWidth: 310,
        margin: 19,
        color: "#fff",
        letterSpacing: 1.4,
    }
})