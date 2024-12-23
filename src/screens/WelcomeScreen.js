import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { use, useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { ArrowUpRightIcon} from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";

export default function WelcomeScreen() {
  const navigation = useNavigation();
  const [fontsLoaded, fontError] = useFonts({
    SpaceGroteskSemiBold: require("../fonts/SpaceGrotesk-SemiBold.ttf"),
    SpaceGroteskRegular: require("../fonts/SpaceGrotesk-Regular.ttf"),
    SpaceGroteskMedium: require("../fonts/SpaceGrotesk-Medium.ttf"),
    SpaceGroteskBold: require("../fonts/SpaceGrotesk-Bold.ttf"),
    SpaceGroteskLight: require("../fonts/SpaceGrotesk-Light.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View
      onLayout={onLayoutRootView}
      className="flex-1"
      style={{
        width: wp(100),
      }}
    >
      <View
        className="justify-center items-center"
        style={{
          width: wp(100),
          height: hp(100),
        }}
      >
        {}
        <View
          className="justify-center items-center my-4"
          style={{
            width: wp(100),
          }}
        >
          <Image
            source={require("../../assets/HeartIcon.png")}
            style={{
              width: wp(100),
              height: hp(40),
              resizeMode: "contain",
            }}
          />
        </View>
        {}
        <View className="w-full p-6 px-10">
          <Text
            className="tracking-widest leading-none"
            style={{
              fontSize: wp(10),
              fontFamily: "SpaceGroteskBold",
            }}
          >
            Embrace
          </Text>
          <Text
            className="tracking-widest w-[70%] leading-none"
            style={{ fontSize: wp(10), fontFamily: "SpaceGroteskBold" }}
          >
            {" "}
            A new way of Dating
          </Text>
          <Text
            className="text-gray-800 leading-6 tracking-wider w-[60%] mt-2"
            style={{
              fontSize: wp(3.5),
            }}
          >
            We combine cutting-edge technologies with a modern approach to
            matchmaking.
          </Text>
        </View>
        <View className="w-full px-10">
          <TouchableOpacity className="bg-[#F26322] px-4 py-4 rounded-xl flex-row justify-center items-center w-[45%]">
            <Text
              className="text-white font-bold mr-2"
              style={{ fontSize: wp(3.5), fontFamily: "SpaceGroteskMedium" }}
            >
              Get Started
            </Text>
            <ArrowUpRightIcon color={"white"} size={20} strokeWidth={2.5}/>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
