import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { useDispatch, useSelector } from 'react-redux'
import { addtocart, removefromcart } from '../CartReducer'
//import { LinearGradient } from 'expo-linear-gradient'


const OfferScreen = ({ navigation }) => {
    const cart = useSelector((state) => state.cart.cart)
    const dispatch = useDispatch();
    const additemincart = (item) => {
        dispatch(addtocart(item));
    }
    const removefromincart = (item) => {
        dispatch(removefromcart(item));
    }
    const offer = [
        {
            id: '4',
            image: "https://images.unsplash.com/photo-1620894586257-d40704a83c96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
            name: 'Curd Veg curry',
            rating: '4.0',
            description: 'Curd is often added to gravies and curries to enhance the taste of the dish. It is also the primary ingredient in recipes like.',
        },
        {
            id: '5',
            image: "https://images.unsplash.com/photo-1620894580123-466ad3a0ca06?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
            name: 'Fish curry',
            rating: '4.5',
            description: 'Because eating spicy can cause your body –pituitary gland and hypothalamus specifically, to release endorphins.',
        },
        {
            id: '6',
            image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            name: 'Veg Bread',
            rating: '3.5',
            description: ' Vegetarian eating patterns have been associated with improved health outcomes including lower levels lot of flatbreads.',
        },
        {
            id: '7',
            image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
            name: 'Pizza',
            rating: '4.5',
            description: 'If you want to taste the toppings to their fullest, thin crust is the way to go. The thin crust is basically a delivery system.',
        },
    ]
    const menu = [
        {
            id: '8',
            image: "https://images.unsplash.com/photo-1576402187878-974f70c890a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1333&q=80",
            name: 'Spicy Food',
            rating: '4.0',
            description: 'Because eating spicy can cause your body –pituitary gland and hypothalamus specifically, to release endorphins.',
        },
        {
            id: '9',
            image: "https://i0.wp.com/www.news-herald.com/wp-content/uploads/2022/07/TNH-L-RestReview-Republic-WBOX-070822-03.jpeg?fit=620%2C9999px&ssl=1",
            name: 'Grilled Breed',
            rating: '4.5',
            description: 'which a handful of plump shrimp lived in harmony with cheddar grits, chorizo, cherry tomato and scallion. as rich and complex.',
        },
        {
            id: '10',
            image: "https://images.unsplash.com/photo-1603384358453-e337643f75fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=937&q=80",
            name: 'Ice Cream',
            rating: '4.5',
            description: 'Because eating spicy can cause your body –pituitary gland and hypothalamus specifically, to release endorphins.',
        },
        {
            id: '11',
            image: "https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            name: 'Strayberry',
            rating: '4.5',
            description: 'Because eating spicy can cause your body –pituitary gland and hypothalamus specifically, to release endorphins.',
        },
    ]
    return (
        <View style={styles.HomeScreenContainer}>
            <TouchableOpacity activeOpacity={0.9}>
                <View style={styles.offercard}>
                    <Image
                        source={require('../assets/images/3-1632563446-1636717597.jpg')}
                        style={{
                            width: 370,
                            height: 200,
                            marginBottom: 40
                        }}
                    />
                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <View style={{
                            width: 340,
                            height: 150,
                            position: 'absolute',
                            bottom: 0,
                            borderRadius: 0,
                            backgroundColor: '#D9D9D9',
                            justifyContent: 'center',
                            padding: 9
                        }}>
                            <View style={{
                                flexDirection: "row",
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                margin: 4,
                                marginTop: 29,
                                padding: 9,
                                position: 'absolute',
                                bottom: 164,
                                width: '100%'
                            }}>
                                <View>
                                    <TouchableOpacity onPress={() => { navigation.navigate('Home') }}>
                                        <Image source={require('../assets/images/icons8-right-arrow-60.png')}
                                            style={{
                                                width: 19,
                                                height: 19,
                                            }}
                                        />
                                    </TouchableOpacity>
                                </View>
                                <View>
                                    <TouchableOpacity activeOpacity={0.5} onPress={() => { navigation.navigate('Cart') }}>
                                        <Image source={require('../assets/images/icons8-shopping-cart-90.png')} style={{ width: 34, height: 34 }} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <Text style={{
                                color: '#000',
                                fontWeight: "bold",
                                fontSize: 19,
                                padding: 4,
                            }}>
                                Grand Malabar Restaruant
                            </Text>
                            <Text style={{
                                paddingLeft: 4.9,
                                color: '#000',
                                fontWeight: 'bold'
                            }}>
                                Rating 4.5 <View>
                                    <Image
                                        source={require('../assets/images/star.png')} style={{
                                            width: 10,
                                            height: 10
                                        }}
                                    />
                                </View>
                            </Text>
                            <Text style={{
                                paddingTop: 4,
                                paddingLeft: 4.8,
                                color: '#000',
                                fontWeight: 'bold',
                            }}>
                                Oruvathilkotta, Aakkulam, Thiruvananthapuram, Kerala 695029
                            </Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>

            <View style={{
                marginTop: 9,
            }}>
                <Text style={{
                    fontSize: 19,
                    paddingLeft: 9,
                    paddingTop: 4,
                    fontWeight: '900',
                    color: '#000'
                }}>Menu Item</Text>
            </View>
            <View>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{
                    borderRadius: 12,
                    marginTop: 9,
                }}>
                    {offer.map((item, index) => (
                        <TouchableOpacity activeOpacity={0.9} key={index}>
                            <View
                                style={{ flexDirection: "column", alignItems: "center", justifyContent: 'center', padding: 4 }}
                            >
                                <View style={{
                                    backgroundColor: '#fff',
                                    width: 350,
                                    height: 160,
                                    borderRadius: 8,
                                    flexDirection: 'row',
                                }}>
                                    <View>
                                        <Image
                                            style={{
                                                width: 190, height: 160, borderRadius: 8, borderBottomRightRadius: 0,
                                                borderTopRightRadius: 64,
                                            }}
                                            source={{ uri: item.image }}
                                        />
                                    </View>
                                    <View style={{
                                        width: 170,
                                        padding: 4,
                                        height: 'auto',
                                    }}>
                                        <Text style={{
                                            fontSize: 19,
                                            fontWeight: 'bold'
                                        }}>{item.name}</Text>
                                        <View style={{
                                            flexDirection: 'row',
                                            alignItems: 'center'
                                        }}><Text style={{
                                            fontSize: 12,
                                        }}>Rating</Text><Text style={{
                                            fontSize: 12,
                                            paddingLeft: 4
                                        }}>{item.rating}</Text><View style={{
                                            paddingLeft: 2
                                        }}>
                                                <Image source={require('../assets/images/star.png')} style={{
                                                    width: 10,
                                                    height: 10,
                                                }} /></View></View>
                                        <Text style={{
                                            fontSize: 12
                                        }}>{item.description}</Text>
                                        {
                                            cart.some((value) => value.id == item.id) ?
                                                <TouchableOpacity activeOpacity={0.7}
                                                    onPress={() => removefromincart(item)}>
                                                    <View style={{
                                                        marginTop: 9
                                                    }}>
                                                        <Text style={{
                                                            backgroundColor: '#000',
                                                            width: 150,
                                                            height: 'auto',
                                                            color: "#fff",
                                                            textAlign: 'center',
                                                            padding: 4,
                                                        }}>Remove from cart</Text>
                                                    </View>
                                                </TouchableOpacity> : <TouchableOpacity activeOpacity={0.7}
                                                    onPress={() => additemincart(item)}>
                                                    <View style={{
                                                        marginTop: 9
                                                    }}>
                                                        <Text style={{
                                                            backgroundColor: '#000',
                                                            width: 150,
                                                            height: 'auto',
                                                            color: "#fff",
                                                            textAlign: 'center',
                                                            padding: 4,
                                                        }}>Add to cart</Text>
                                                    </View>
                                                </TouchableOpacity>
                                        }
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                    ))}

                </ScrollView>
            </View>

            <View style={{
                marginTop: 9,
            }}>
                <Text style={{
                    fontSize: 19,
                    paddingLeft: 9,
                    paddingTop: 4,
                    fontWeight: '900',
                    color: '#000'
                }}>People also Order</Text>
            </View>

            <ScrollView showsVerticalScrollIndicator={false} style={{
                borderRadius: 12,
                marginTop: 9,
            }}>
                {menu.map((item, index) => (
                    <TouchableOpacity activeOpacity={0.9} key={index}>
                        <View
                            style={{ flexDirection: "row", alignItems: "center", justifyContent: 'center', padding: 9 }}
                        >
                            <View style={{
                                backgroundColor: '#fff',
                                width: 350,
                                height: 160,
                                borderRadius: 8,
                                flexDirection: 'row',
                            }}>
                                <View>
                                    <Image
                                        style={{
                                            width: 190, height: 160, borderRadius: 8, borderBottomRightRadius: 0,
                                            borderTopRightRadius: 64,
                                            //resizeMode:'contain'
                                        }}
                                        source={{ uri: item.image }}
                                    />
                                </View>
                                <View style={{
                                    width: 170,
                                    padding: 4,
                                    height: 'auto',
                                }}>
                                    <Text style={{
                                        fontSize: 19,
                                        fontWeight: 'bold'
                                    }}>{item.name}</Text>
                                    <View style={{
                                        flexDirection: 'row',
                                        alignItems: 'center'
                                    }}><Text style={{
                                        fontSize: 12,
                                    }}>Rating</Text><Text style={{
                                        fontSize: 12,
                                        paddingLeft: 4
                                    }}>{item.rating}</Text><View style={{
                                        paddingLeft: 2
                                    }}>
                                            <Image source={require('../assets/images/star.png')} style={{
                                                width: 10,
                                                height: 10,
                                            }} /></View></View>
                                    <Text style={{
                                        fontSize: 12
                                    }}>{item.description}</Text>
                                    {
                                        cart.some((value) => value.id == item.id) ?
                                            <TouchableOpacity activeOpacity={0.7}
                                                onPress={() => removefromincart(item)}>
                                                <View style={{
                                                    marginTop: 9
                                                }}>
                                                    <Text style={{
                                                        backgroundColor: '#000',
                                                        width: 150,
                                                        height: 'auto',
                                                        color: "#fff",
                                                        textAlign: 'center',
                                                        padding: 4,
                                                    }}>Remove from cart</Text>
                                                </View>
                                            </TouchableOpacity> : <TouchableOpacity activeOpacity={0.7}
                                                onPress={() => additemincart(item)}>
                                                <View style={{
                                                    marginTop: 9
                                                }}>
                                                    <Text style={{
                                                        backgroundColor: '#000',
                                                        width: 150,
                                                        height: 'auto',
                                                        color: "#fff",
                                                        textAlign: 'center',
                                                        padding: 4,
                                                    }}>Add to cart</Text>
                                                </View>
                                            </TouchableOpacity>
                                    }
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                ))}

            </ScrollView>
        </View>
    )
}

export default OfferScreen

const styles = StyleSheet.create({
    HomeScreenContainer: {
        height: '100%',
        backgroundColor: '#EC9443'
    },
})