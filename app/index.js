import React from "react";
import { StyleSheet, View, Text, SafeAreaView, Image } from "react-native";
import tw from "twrnc";
import NavOptions from "../components/Navbar/NavOptions";
import GooglePlacesInput from "../components/GooglePlaces/GooglePlacesInput";
import { useDispatch } from "react-redux";
import { setDestination, setOrigin } from "../redux/slices/navSlice";
import NavFavourites from "../components/Navbar/NavFavourites";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const onPressForSource = (data, details = null) => {
    dispatch(
      setOrigin({
        location: details.geometry.location,
        description: data.description,
      })
    );

    // making destination to null as first source selected and then destination
    dispatch(setDestination(null));
  };
  return (
    <SafeAreaView style={[tw`bg-white p-5`]}>
      <View style={tw`p-6 pb-2`}>
        <Image
          resizeMode="contain"
          style={{
            height: 100,
            width: 100,
          }}
          source={{
            uri: "https://links.papareact.com/gzs",
          }}
        />
      </View>
      <GooglePlacesInput
        inputBoxStyles={fromInputBoxStyles}
        placeholder="Where From?"
        onPress={onPressForSource}
      />
      <NavOptions />
      <NavFavourites />
    </SafeAreaView>
  );
};

const fromInputBoxStyles = StyleSheet.create({
  container: {
    flex: 0,
  },
  textInput: {
    fontSize: 18,
  },
});

export default HomeScreen;
