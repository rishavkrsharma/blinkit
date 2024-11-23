import {
  Text,
  View,
  Image,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useCart } from "../hooks/useCart";

const ProductCard = ({ product }) => {
  const { cart, addToCart, removeFromCart } = useCart();
  return (
    <TouchableHighlight key={product?.key} style={{ flex: 1 }}>
      <View style={{ backgroundColor: "white", borderRadius: 12, padding: 4 }}>
        <Image
          source={{ uri: product?.image }}
          style={{ width: "100%", height: 160, borderRadius: 8 }}
        />
        <Text style={{ fontSize: 20, fontWeight: "bold", marginTop: 4 }}>
          {product?.name}
        </Text>
        <Text style={{ fontSize: 14, fontWeight: "400", marginTop: 2 }}>
          {product?.description}
        </Text>
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
            {product?.price}
          </Text>
          <View style={{ flex: 1 }}>
            {cart[product?.id] ? (
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 6 }}
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
                <Text>{cart[product.id]}</Text>
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
            ) : (
              <TouchableOpacity
                style={{
                  paddingHorizontal: 8,
                  paddingVertical: 4,
                  backgroundColor: "green",
                  borderRadius: 10,
                }}
                onPress={() => addToCart(product?.id)}
              >
                <Text style={{ fontSize: 16, color: "white" }}>
                  Add to cart
                </Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    </TouchableHighlight>
  );
};

export default ProductCard;
