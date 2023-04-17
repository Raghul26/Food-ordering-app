import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import { LinearGradient } from 'expo-linear-gradient'
import { useDispatch, useSelector } from 'react-redux'
import { addtocart, removefromcart } from '../CartReducer'

const HomeScreen = ({ navigation }) => {
  const images = [
    {
      id: '0',
      image: "https://images.unsplash.com/photo-1576402187878-974f70c890a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1333&q=80",
      name: 'Spicy Food',
      rating: '4.0',
      description: 'Because eating spicy can cause your body –pituitary gland and hypothalamus specifically, to release endorphins.',
    },
    {
      id: '1',
      image: "https://i0.wp.com/www.news-herald.com/wp-content/uploads/2022/07/TNH-L-RestReview-Republic-WBOX-070822-03.jpeg?fit=620%2C9999px&ssl=1",
      name: 'Grilled Breed',
      rating: '4.5',
      description: 'which a handful of plump shrimp lived in harmony with cheddar grits, chorizo, cherry tomato and scallion. as rich and complex.',
    },
    {
      id: '2',
      image: "https://images.unsplash.com/photo-1603384358453-e337643f75fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=937&q=80",
      name: 'Ice Cream',
      rating: '4.5',
      description: 'Because eating spicy can cause your body –pituitary gland and hypothalamus specifically, to release endorphins.',
    },
    {
      id: '3',
      image: "https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      name: 'Strayberry',
      rating: '4.5',
      description: 'Because eating spicy can cause your body –pituitary gland and hypothalamus specifically, to release endorphins.',
    },
  ]
  const cart = useSelector((state) => state.cart.cart)
  const dispatch = useDispatch();
  const additemincart = (item) => {
    dispatch(addtocart(item));
  }
  const removefromincart = (item) => {
    dispatch(removefromcart(item));
  }
  return (
    <View style={styles.HomeScreenContainer}>
      <View style={{ flexDirection: 'row-reverse', marginTop: 29, paddingLeft: 19 }}>
        <TouchableOpacity activeOpacity={0.5} onPress={() => { navigation.navigate('Cart') }}>
          <Image source={require('../assets/images/icons8-shopping-cart-90.png')} style={{ width: 34, height: 34 }} />
        </TouchableOpacity>
        {/* <View style={{
          padding: 0,
          width: 19,
          height: 19,
          position: 'absolute',
          left: 19,
          top: -4,
          backgroundColor: '#000',
          color: "#fff",
          borderRadius: 90,
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <Text style={{
            color: '#fff'
          }}>0</Text>
        </View> */}
      </View>
      <View style={styles.Category}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={{ padding: 4, alignItems: 'center' }}>
            <Image source={require('../assets/images/diabolo-mockail-440-x400-c795884.jpg')} style={styles.CategoryImages} />
            <LinearGradient
              colors={["transparent", "transparent", "#000"]}
              style={styles.linearGradient}
            >
              <Text style={{
                position: "absolute",
                bottom: 9,
                fontSize: 19,
                fontWeight: 'bold',
                color: '#fff',
              }}>Drinks</Text>
            </LinearGradient>
          </View>
          <View style={{ padding: 4, alignItems: 'center' }}>
            <Image source={require('../assets/images/pizza2.jpg')} style={styles.CategoryImages} />
            <LinearGradient
              colors={["transparent", "transparent", "#000"]}
              style={styles.linearGradient}
            >
              <Text style={{
                position: "absolute",
                bottom: 9,
                fontSize: 19,
                fontWeight: 'bold',
                color: '#fff',
              }}>Pizza</Text>
            </LinearGradient>
          </View>
          <View style={{ padding: 4, alignItems: 'center' }}>
            <Image source={require('../assets/images/Sticky-Spicy-Pork-Belly-square-FS.jpg')} style={styles.CategoryImages} />
            <LinearGradient
              colors={["transparent", "transparent", "#000"]}
              style={styles.linearGradient}
            >
              <Text style={{
                position: "absolute",
                bottom: 9,
                fontSize: 19,
                fontWeight: 'bold',
                color: '#fff',
              }}>Spicy</Text>
            </LinearGradient>
          </View>
          <View style={{ padding: 4, alignItems: 'center' }}>
            <Image source={require('../assets/images/masala-french-fries-featured.jpg')} style={styles.CategoryImages} />
            <LinearGradient
              colors={["transparent", "transparent", "#000"]}
              style={styles.linearGradient}
            >
              <Text style={{
                position: "absolute",
                bottom: 9,
                fontSize: 19,
                fontWeight: 'bold',
                color: '#fff',
              }}>Fries</Text>
            </LinearGradient>
          </View>
          <View style={{ padding: 4, alignItems: 'center' }}>
            <Image source={require('../assets/images/MALABAR-CHICKEN-BIRYANI.jpg')} style={styles.CategoryImages} />
            <LinearGradient
              colors={["transparent", "transparent", "#000"]}
              style={styles.linearGradient}
            >
              <Text style={{
                position: "absolute",
                bottom: 9,
                fontSize: 19,
                fontWeight: 'bold',
                color: '#fff',
              }}>Spicy</Text>
            </LinearGradient>
          </View>
          <View style={{ padding: 4, alignItems: 'center' }}>
            <Image source={require('../assets/images/image2.jpg')} style={styles.CategoryImages} />
            <LinearGradient
              colors={["transparent", "transparent", "#000"]}
              style={styles.linearGradient}
            >
              <Text style={{
                position: "absolute",
                bottom: 9,
                fontSize: 19,
                fontWeight: 'bold',
                color: '#fff',
              }}>Cake</Text>
            </LinearGradient>
          </View>
        </ScrollView>
      </View>
      <View style={styles.CategorySearch}>
        <TextInput placeholder='search' style={{
          width: '94%',
          backgroundColor: "#EDEDED",
          padding: 9,
          borderColor: '#8C8C8C',
          borderWidth: 1,
          borderRadius: 12,
          fontSize: 19,
          paddingLeft: 19
        }} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false} style={{
        borderRadius: 12,
        marginTop: 9,
      }}>
        <View style={styles.Offer}>
          <View style={{
            width: '98%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 9,
            marginTop: 0
          }}>
            <View>
              <Text style={{
                fontSize: 24,
                fontWeight: "bold",
                color: "#fff"
              }}>Offer for you</Text>
            </View>
            <View>
              <Image source={require('../assets/images/right-arrow.png')}
                style={{
                  width: 19,
                  height: 19,
                }}
              />
            </View>
          </View>
          <TouchableOpacity activeOpacity={0.9} onPress={() => {
            navigation.navigate('Offer')
          }}>
            <View style={styles.offercard}>
              <Image
                source={require('../assets/images/3-1632563446-1636717597.jpg')}
                style={{
                  width: 340,
                  height: 170,
                  borderRadius: 12
                }}
              />
              <LinearGradient style={{
                width: 329.9,
                height: 170,
                position: 'absolute',
                borderRadius: 9,
              }} colors={["transparent", "#2e00"]}>
                <Text style={{
                  color: '#fff',
                  fontWeight: "bold",
                  fontSize: 19,
                  padding: 4,
                  paddingTop: 58
                }}>
                  Grand Malabar Restaruant
                </Text>
                <Text style={{
                  paddingLeft: 4.9,
                  color: '#fff',
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
                  color: '#fff',
                  fontWeight: 'bold',
                }}>
                  Oruvathilkotta, Aakkulam, Thiruvananthapuram, Kerala 695029
                </Text>
              </LinearGradient>
            </View>
          </TouchableOpacity>
        </View>
        {images.map((item, index) => (
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

export default HomeScreen

const styles = StyleSheet.create({
  HomeScreenContainer: {
    height: '100%',
    backgroundColor: '#EC9443'
  },
  Category: {
    padding: 9
  },
  linearGradient: {
    position: 'absolute',
    top: 4,
    width: '100%',
    height: '100%',
    opacity: 0.95,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 9
  },
  CategoryImages: {
    width: 100,
    height: 100,
    borderRadius: 9
  },
  CategorySearch: {
    alignItems: 'center',
    marginTop: 9
  },
  Offer: {
    alignItems: 'center'
  }
})