import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { removefromcart, incrementquantity, decrementquantity } from './CartReducer';
import { ScrollView } from 'react-native-gesture-handler';


const CustomerCart = ({ navigation }) => {
    const cart = useSelector((state) => state.cart.cart);
    const dispatch = useDispatch();
    const incrementitemproduct = (item) => {
        dispatch(incrementquantity(item));
    }
    const decrementitemproduct = (item) => {
        dispatch(decrementquantity(item));
    }
    const removefromincart = (item) => {
        dispatch(removefromcart(item));
    }
    const [empty, setempty] = useState();
    return (
        <View style={styles.cart}>
            <View style={{
                flexDirection: "row",
                justifyContent: 'space-between',
                alignItems: 'center',
                margin: 4,
                marginTop: 29,
                padding: 9
            }}>
                <View>
                    <TouchableOpacity onPress={() => { navigation.navigate('Offer') }}>
                        <Image source={require('./assets/images/icons8-right-arrow-60.png')}
                            style={{
                                width: 19,
                                height: 19,
                            }}
                        />
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity activeOpacity={0.5}>
                        <Image source={require('./assets/images/icons8-shopping-cart-90.png')} style={{ width: 34, height: 34 }} />
                    </TouchableOpacity>
                </View>
            </View>
            <View>
                <View>
                    <ScrollView style={{
                        marginBottom: 90
                    }}>
                        {
                            cart.map((item, index) => (
                                <View key={index} style={{
                                    alignItems: 'center',
                                    margin: 9
                                }}>
                                    <View style={{
                                        backgroundColor: '#EBEBEB',
                                        width: 353,
                                        height: 334,
                                        borderRadius: 9,
                                    }}>
                                        <Image
                                            style={{
                                                width: 353, height: 138,
                                                borderTopRightRadius: 9,
                                                borderTopLeftRadius: 9
                                            }}
                                            source={{ uri: item.image }}
                                        />
                                        <View>
                                            <Text style={{
                                                fontSize: 19,
                                                fontWeight: 'bold',
                                                color: '#000',
                                                paddingHorizontal: 9,
                                                paddingVertical: 4
                                            }}>{item.name}</Text>
                                            <View style={{
                                                flexDirection: 'row',
                                                alignItems: 'center',
                                                paddingHorizontal: 12,
                                            }}><Text style={{
                                                fontSize: 12,
                                            }}>Rating</Text><Text style={{
                                                fontSize: 12,
                                                paddingLeft: 4
                                            }}>{item.rating}</Text><View style={{
                                                paddingLeft: 2
                                            }}>
                                                    <Image source={require('./assets/images/star.png')} style={{
                                                        width: 10,
                                                        height: 10,
                                                    }} /></View></View>
                                            <Text style={{
                                                fontSize: 12,
                                                fontWeight: 'bold',
                                                color: '#000',
                                                paddingHorizontal: 12,
                                                paddingVertical: 4
                                            }}>{item.description}</Text>
                                        </View>
                                        <View style={{
                                            alignItems: 'center',
                                            paddingVertical: 4
                                        }}>
                                            <View style={{
                                                flexDirection: 'row',
                                                justifyContent: 'space-around',
                                                width: '50%',
                                            }}>
                                                <View style={{
                                                    backgroundColor: '#D9D9D9',
                                                    width: 40,
                                                    height: 40,
                                                    borderRadius: 50,
                                                    justifyContent: 'center',
                                                    alignItems: 'center'
                                                }}>
                                                    <Text style={{
                                                        fontSize: 29
                                                    }} onPress={() => { decrementitemproduct(item) }}>-</Text>
                                                </View>
                                                <View>
                                                    <Text style={{
                                                        fontSize: 29
                                                    }}>{item.quantity}</Text>
                                                </View>
                                                <View style={{
                                                    backgroundColor: '#D9D9D9',
                                                    width: 40,
                                                    height: 40,
                                                    borderRadius: 50,
                                                    justifyContent: 'center',
                                                    alignItems: 'center'
                                                }}>
                                                    <Text style={{
                                                        fontSize: 29
                                                    }} onPress={() => { incrementitemproduct(item) }}>+</Text>
                                                </View>
                                            </View>
                                        </View>
                                        <View style={{
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            paddingVertical: 9
                                        }}>
                                            <TouchableOpacity activeOpacity={0.7}
                                                onPress={() => removefromincart(item)}>
                                                <View style={{
                                                    backgroundColor: '#000',
                                                    width: 235,
                                                    height: 43,
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                }}>
                                                    <Text style={{
                                                        color: "#fff",
                                                        fontSize: 19
                                                    }}>Remove from cart</Text>
                                                </View>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            ))
                        }
                    </ScrollView>
                </View>
            </View>
        </View>
    )
}

export default CustomerCart

const styles = StyleSheet.create({
    cart: {
        backgroundColor: '#EC9443',
        height: '100%'
    },
    product: {
        alignItems: 'center'
    }
})