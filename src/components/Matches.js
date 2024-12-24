import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React from "react";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { datesData } from "../constant";

export default function Matches() {
  return (
    <View className="mt-4">
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="space-x-4"
        contentContainerStyle={{
          paddingLeft: hp(2),
          paddingRight: hp(2),
        }}
      >
        {datesData.map((Matches, index) => {
          return (
            <TouchableOpacity
              key={index}
              className="flex items-center space-y-1"
            >
              <View className="rounded-full">
                <Image
                  source={Matches.imgUrl}
                  style={{
                    width: hp(6),
                    height: hp(6),
                  }}
                  className="rounded-full"
                />
              </View>
              <Text
                className="text-neutral-800 font-bold"
                style={{
                  fontSize: hp(1.5),
                }}
              >
                {Matches.name}
              </Text>
              <Text
                className="text-neutral-800 font-bold"
                style={{
                  fontSize: hp(1.5),
                }}
              >
                {Matches.age}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}
