import {
  Text,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from "react-native";
import React, { useState } from "react";
import { useRoute } from "@react-navigation/native";

export default function Screen2({ navigation }) {
  const title = "Điện thoại VSmart Joy 3\nHàng chính hãng";
  return (
    <View style={styles.AndroidSafeArea}>
      <View
        style={{
          height: "100%",
          width: "100%",
          backgroundColor: "white",
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <Image
            style={{
              width: 125,
              height: 150,
              marginLeft: 10,
              alignSelf: "flex-start",
            }}
            source={require("../assets/xanh.png")}
          />
          <View style={{ flexDirection: "column", marginLeft: 15 }}>
            <Text style={{ marginTop: 15, fontSize: 18 }}>{title}</Text>
            <View style={{ marginTop: 9, flexDirection: "row" }}>
              <Text style={{ fontSize: 18, fontWeight: "bold" }}></Text>
            </View>
            <Text
              style={{ marginTop: 9, fontSize: 18, fontWeight: "bold" }}
            ></Text>
          </View>
        </View>

        <View style={{ flex: 1, backgroundColor: "#dfe3e3" }}>
          <Text style={{ fontSize: 20, marginLeft: 17, marginTop: 10 }}>
            Chọn 1 màu bên dưới:{" "}
          </Text>
          <TouchableOpacity
            activeOpacity={0.5}
            style={{
              alignSelf: "center",
              width: 100,
              height: 105,
              backgroundColor: "silver",
              marginTop: 20,
            }}
          ></TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.5}
            style={{
              alignSelf: "center",
              width: 100,
              height: 105,
              backgroundColor: "red",
              marginTop: 10,
            }}
          ></TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.5}
            style={{
              alignSelf: "center",
              width: 100,
              height: 105,
              backgroundColor: "black",
              marginTop: 10,
            }}
          ></TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.5}
            style={{
              alignSelf: "center",
              width: 100,
              height: 105,
              backgroundColor: "blue",
              marginTop: 10,
            }}
          ></TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.5}
            style={{
              flexDirection: "row",
              borderRadius: 10,
              borderWidth: 0.8,
              width: 332,
              height: 50,
              alignSelf: "center",
              justifyContent: "center",
              marginTop: 10,
              backgroundColor: "#1789ff",
            }}
          >
            <Text
              style={{
                alignSelf: "center",
                fontSize: 16,
                lineHeight: 21,
                fontWeight: "bold",
                color: "white",
              }}
            >
              XONG
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: "blue",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
