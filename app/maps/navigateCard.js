import { useRouter } from "expo-router";
import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import tw from "twrnc";
import GooglePlacesInput from "../../components/GooglePlaces/GooglePlacesInput";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { setDestination } from "../../redux/slices/navSlice";
import NavFavourites from "../../components/Navbar/NavFavourites";

const NavigateCard = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const onPressForDestination = (data, details = null) => {
    dispatch(
      setDestination({
        location: details.geometry.location,
        description: data.description,
      })
    );
    // when source and destination are fixed, then go to ride availability options
    router.push("/maps/rideOptions");
  };
  return (
    <SafeAreaView>
      <Text style={tw`text-center py-5 text-xl`}>Happy Riding, Subhajit</Text>
      <View style={tw`border-t border-gray-300 mb-5`}>
        <View>
          <GooglePlacesInput
            placeholder="Where To?"
            inputBoxStyles={toInputBoxStyles}
            onPress={onPressForDestination}
          />
        </View>
      </View>
      <NavFavourites />

      <View style={tw`flex flex-row mt-auto justify-evenly`}>
        <TouchableOpacity
          onPress={() => router.push("/maps/rideOptions")}
          style={tw`flex flex-row justify-between w-25 px-4 py-3 rounded-full bg-black mx-4`}
        >
          <FontAwesome5 name="car" size={20} color="white" />
          <Text style={{ color: "white" }}>Rides</Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={() => router.push("/foods/foodScreen")}
          style={tw`flex flex-row justify-between w-25 px-4 py-3 rounded-full mx-4 border-2`}
        >
          <Ionicons name="fast-food-outline" size={20} color="black" />
          <Text style={{ color: "black" }}>Eats</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const toInputBoxStyles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingTop: 20,
    flex: 0,
  },
  textInput: {
    backgroundColor: "#DDDDDF",
    borderRadius: 0,
    fontSize: 18,
  },
  textInputContainer: {
    paddingHorizontal: 20,
    paddingBottom: 0,
  },
});

export default NavigateCard;
