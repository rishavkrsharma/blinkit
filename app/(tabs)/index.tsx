import { useState } from "react";
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  TextInput,
  FlatList,
} from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useCart } from "../../hooks/useCart";
import { products } from "@/data/products";
import ProductCard from "../../components/ProductCard";

export default function HomeScreen() {
  const [address, setAddress] = useState("");
  const { getTotalItems } = useCart();

  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          backgroundColor: "black",
          height: 150,
          padding: 10,
        }}
      >
        <View
          style={{
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View>
            <Text style={{ fontSize: 18, color: "white", fontWeight: "500" }}>
              Blinkit in
            </Text>
            <Text style={{ fontSize: 24, color: "white", fontWeight: "900" }}>
              8 Minutes
            </Text>
            <Text style={{ fontSize: 14, color: "white", fontWeight: "900" }}>
              Home - {address}
            </Text>
          </View>
          <FontAwesome name="user" size={28} color="white" />
        </View>
        <TextInput
          style={{
            backgroundColor: "white",
            borderRadius: 8,
            paddingVertical: 8,
            paddingHorizontal: 15,
            marginTop: 12,
          }}
        >
          Search
        </TextInput>
      </View>

      <View style={{ flex: 1, padding: 10 }}>
        <Text style={{ fontSize: 18, color: "black", fontWeight: "500" }}>
          Bestsellers
        </Text>

        <FlatList
          data={products}
          renderItem={({ item }) => <ProductCard product={item} />}
          style={{ marginTop: 8 }}
        />
      </View>
    </ScrollView>
  );
}
