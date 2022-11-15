import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  StatusBar,
  Button,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { useRoute } from "@react-navigation/native";

export default function Screen3({ navigation }) {
  return (
    <View style={styles.AndroidSafeArea}>
      <View
        style={{
          backgroundColor: "gray",
          height: "100%",
          width: "100%",
          alignItems: "center",
        }}
      >
        <View
          style={{
            height: 170,
            width: "100%",
            padding: 10,
            backgroundColor: "white",
            flexDirection: "row",
          }}
        >
          <Image
            style={{ height: 147, width: 104, borderWidth: 2 }}
            source={require("../image/book.png")}
          ></Image>
          <View style={{ marginLeft: 10, flexDirection: "column" }}>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              Nguyên hàm tích phân và ứng dụng
            </Text>
            <Text style={{ marginTop: 10, fontSize: 16, fontWeight: "bold" }}>
              Cung cấp bởi TIKI trading
            </Text>
            <Text
              style={{
                marginTop: 10,
                fontSize: 20,
                fontWeight: "bold",
                color: "red",
              }}
            >
              141.800 đ
            </Text>
            <Text
              style={{
                marginTop: 8,
                fontSize: 15,
                fontWeight: "bold",
                color: "gray",
              }}
            >
              141.800 đ
            </Text>
            <View
              style={{
                height: "20%",

                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  width: "20%",
                  alignItems: "center",
                  justifyContent: "space-around",
                }}
              >
                <TouchableOpacity>
                  <Image source={require("../image/btnminus.png")}></Image>
                </TouchableOpacity>
                <Text>1</Text>
                <TouchableOpacity>
                  <Image source={require("../image/btnadd.png")}></Image>
                </TouchableOpacity>
              </View>
              <Text
                style={{
                  flexDirection: "row",
                  color: "blue",
                  fontSize: 19,
                  fontWeight: "bold",
                }}
              >
                Mua sau
              </Text>
            </View>
          </View>
        </View>

        {/* text pricediscount */}
        <View
          style={{
            height: "13%",
            width: "100%",
            backgroundColor: "white",
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Text style={{ marginLeft: 10, fontSize: 15 }}>
              Mã giảm giá đã lưu
            </Text>
            <Text style={{ marginLeft: 10, fontSize: 15, color: "blue" }}>
              Xem tại đây
            </Text>
          </View>

          {/* discount */}
          <View
            style={{
              height: "50%",
              flexDirection: "row",
              justifyContent: "space-around",

              marginTop: 10,
            }}
          >
            <TextInput
              style={{
                width: "50%",
                height: "100%",
                borderWidth: 2,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "white",
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                }}
              >
                Mã giảm giá
              </Text>
            </TextInput>

            <TouchableOpacity
              style={{
                width: "40%",
                height: "100%",
                justifyContent: "center",
                alignItems: "center",
                borderWidth: 2,
                borderRadius: 10,
                backgroundColor: "blue",
              }}
            >
              <Text
                style={{
                  fontSize: 23,
                  color: "white",
                }}
              >
                Áp dụng
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* tiket1 */}
        <View
          style={{
            height: 60,
            width: "100%",
            flexDirection: "row",
            alignItems: "center",
            marginVertical: 20,
            backgroundColor: "white",
          }}
        >
          <Text style={{ marginLeft: 12, fontSize: 15 }}>
            Bạn có phiếu quà tặng Tiki/Got it/ Urbox?
          </Text>
          <Text style={{ marginLeft: 12, fontSize: 15, color: "blue" }}>
            Nhập tại đây
          </Text>
        </View>

        {/* tiket2 */}
        <View
          style={{
            height: "10%",
            width: "100%",
            backgroundColor: "white",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ marginLeft: 12, fontSize: 20, fontWeight: "bold" }}>
            Tạm tính
          </Text>
          <Text
            style={{
              marginRight: 12,
              fontSize: 23,
              color: "red",
              fontWeight: "bold",
            }}
          >
            141.800đ
          </Text>
        </View>

        {/* buy */}
        <View
          style={{
            height: "20%",
            width: "100%",
            marginTop: "35%",
            backgroundColor: "white",
            flexDirection: "column",
          }}
        >
          <View
            style={{
              marginVertical: 20,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                marginLeft: 12,
                fontSize: 23,
                fontWeight: "bold",
                color: "gray",
              }}
            >
              Thành tiền
            </Text>
            <Text
              style={{
                marginRight: 12,
                fontSize: 25,
                color: "red",
                fontWeight: "bold",
              }}
            >
              141.800đ
            </Text>
          </View>

          <View
            style={{
              height: "100%",
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              style={{
                width: "80%",
                height: "30%",
                justifyContent: "center",
                alignItems: "center",
                borderWidth: 2,
                borderRadius: 10,
                backgroundColor: "red",
              }}
            >
              <Text
                style={{
                  fontSize: 23,
                  color: "white",
                }}
              >
                TIẾN HÀNH ĐẶT HÀNG
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/*  */}
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
