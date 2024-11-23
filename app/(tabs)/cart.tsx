import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React from "react";
import { useCart } from "@/hooks/useCart";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

const Cart = () => {
  const {
    cart,
    addToCart,
    removeFromCart,
    getTotalItems,
    getTotalPrice,
    placeOrder,
  } = useCart();

  return (
    <SafeAreaView style={{ flex: 1, padding: 10 }}>
      <ScrollView>
        {Object.keys(cart).length === 0 ? (
          <View
            style={{
              flex: 1,
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ fontSize: 24, fontWeight: "bold" }}>
              Ooopss! Your cart is Empty
            </Text>
          </View>
        ) : (
          <View>
            <Text style={{ fontSize: 18, fontWeight: "800" }}>
              Delivery in 8 minutes
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontWeight: "500",
                color: "gray",
                marginBottom: 18,
              }}
            >
              Shipment of {getTotalItems()} item
            </Text>

            {Object.entries(cart).map(([productId, quantity]) => {
              const product = products.find(
                (item) => item.id === parseInt(productId)
              );

              return (
                <View>
                  <View key={product?.id} style={{ flex: 1 }}>
                    <View
                      style={{
                        backgroundColor: "white",
                        borderRadius: 12,
                        padding: 4,
                      }}
                    >
                      <View
                        style={{
                          flex: 1,
                          flexDirection: "row",
                          gap: 10,
                          alignItems: "center",
                        }}
                      >
                        <Image
                          source={{ uri: product?.image }}
                          style={{ width: 40, height: 40, borderRadius: 8 }}
                        />
                        <View>
                          <Text
                            style={{
                              fontSize: 20,
                              fontWeight: "bold",
                            }}
                          >
                            {product?.name}
                          </Text>
                          <Text
                            style={{
                              fontSize: 14,
                              fontWeight: "400",
                              marginTop: 2,
                            }}
                          >
                            {product?.description}
                          </Text>
                        </View>
                      </View>

                      <View
                        style={{
                          flexDirection: "row",
                          marginVertical: 4,
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        <Text
                          style={{
                            fontSize: 20,
                            fontWeight: "bold",
                            color: "green",
                            width: "75%",
                          }}
                        >
                          Rs {product?.price} x {quantity} = Rs{" "}
                          {product?.price * quantity}
                        </Text>
                        <View style={{ flex: 1 }}>
                          <View
                            style={{
                              flexDirection: "row",
                              alignItems: "center",
                              gap: 6,
                            }}
                          >
                            <TouchableOpacity
                              style={{
                                borderColor: "red",
                                borderWidth: 2,
                                paddingHorizontal: 9,
                                borderRadius: 100,
                              }}
                              onPress={() => removeFromCart(product.id)}
                            >
                              <Text
                                style={{
                                  fontSize: 20,
                                  fontWeight: "800",
                                  color: "red",
                                }}
                              >
                                -
                              </Text>
                            </TouchableOpacity>
                            <Text>{quantity}</Text>
                            <TouchableOpacity
                              style={{
                                borderColor: "green",
                                borderWidth: 2,
                                paddingHorizontal: 9,
                                borderRadius: 100,
                              }}
                              onPress={() => addToCart(product.id)}
                            >
                              <Text
                                style={{
                                  fontSize: 20,
                                  fontWeight: "800",
                                  color: "green",
                                }}
                              >
                                +
                              </Text>
                            </TouchableOpacity>
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              );
            })}
          </View>
        )}
      </ScrollView>

      {Object.keys(cart).length > 0 && (
        <View
          style={{
            backgroundColor: "white",
            paddingVertical: 12,
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
          }}
        >
          <View style={{ flex: 1, paddingLeft: 12 }}>
            <Text style={{}}>Pay using </Text>
          </View>
          <TouchableOpacity
            onPress={placeOrder}
            style={{
              flex: 2,
              backgroundColor: "green",
              borderRadius: 10,
            }}
          >
            <View
              style={{
                paddingHorizontal: 10,
                paddingVertical: 2,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 16, color: "white" }}>
                  Rs {getTotalPrice()}
                </Text>
                <Text style={{ color: "white" }}>TOTAL</Text>
              </View>
              <Text style={{ color: "white", fontSize: 15, flex: 1 }}>
                Place order {">"}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
};

export default Cart;

const styles = StyleSheet.create({});
