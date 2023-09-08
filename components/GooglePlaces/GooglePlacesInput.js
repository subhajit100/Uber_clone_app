import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { StyleSheet, View, Text } from "react-native";

import { GOOGLE_MAPS_APIKEY } from "@env";

const GooglePlacesInput = ({ inputBoxStyles, placeholder, onPress }) => {
    // TODO:- also add a cross button at the end of search input, for clearing the input entered
  return (
    <GooglePlacesAutocomplete
      placeholder={placeholder}
      minLength={2}
      fetchDetails={true}
      returnKeyType={"search"}
      styles={inputBoxStyles}
      enablePoweredByContainer={false}
      nearbyPlacesApi="GooglePlacesSearch"
      debounce={500}
      onPress={onPress}
      query={{
        key: GOOGLE_MAPS_APIKEY,
        language: "en",
      }}
    />
  );
};

export default GooglePlacesInput;
