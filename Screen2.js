import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native'
import React from 'react'

export default function Screen2() {
    return (
        <>
            <ImageBackground source={require("../assets/images/anna-tukhfatullina-food-photographer-stylist-Mzy-OjtCI70-unsplash.jpg")} style={styles.ContainerBackgroundImage}>
                <View style={styles.ContainerBackground}>



                    <View style={styles.Container}>

                        <View style={styles.Container_Heading}>
                            <Text style={styles.Container_HeadingText}>
                                Order your favorite food Now!
                            </Text>
                        </View>

                        <View style={styles.Container_SubHeading}>
                            <Text style={styles.Container_SubHeadingText}>
                                Place your personal order and make your day more delicious. Food is the substance we eat every day for energy and strength. There are many different types of food, such as fruits, vegetables, rice, and pasta. We need to eat a variety of foods to get all the essential nutrients the body needs.

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
    Container_Heading: {
        width: 'auto',
        height: 'auto',
        marginTop: 90,
    },
    Container_HeadingText: {
        fontSize: 39,
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 19,
    },
    Container_SubHeading: {
        marginTop: 100,
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
    }
})