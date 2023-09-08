import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { useDispatch, useSelector } from "react-redux";
import tw from "twrnc";
import {
  selectDestination,
  selectOrigin,
  setTravelTimeInfo,
} from "../../redux/slices/navSlice";
import MapViewDirections from "react-native-maps-directions";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useEffect, useRef } from "react";
import axios from "axios";
import { MaterialIcons } from "@expo/vector-icons";

const Map = () => {
  const originInfo = useSelector(selectOrigin);
  const destinationInfo = useSelector(selectDestination);
  const mapRef = useRef(null);
  const dispatch = useDispatch();

  const fitMapToSuppliedMarkers = () => {
    if (!originInfo || !destinationInfo) {
      return;
    }
    // zoom out to show both the origin and destination on the page (timeout is applied as instantly it is not happening)
    setTimeout(() => {
      mapRef.current?.fitToSuppliedMarkers(["origin", "destination"], {
        edgePadding: {
          top: 150,
          right: 50,
          bottom: 50,
          left: 50,
        },
        animated: true,
      });
    });
  };

  useEffect(() => {
    fitMapToSuppliedMarkers();
  }, [originInfo, destinationInfo]);

  useEffect(() => {
    const getTravelTime = async () => {
      const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${encodeURIComponent(
        originInfo.description
      )}&destinations=${encodeURIComponent(
        destinationInfo.description
      )}&units=imperial&key=${GOOGLE_MAPS_APIKEY}`;
      axios
        .get(url)
        .then((res) =>
          dispatch(setTravelTimeInfo(res.data.rows[0].elements[0]))
        )
        .catch((err) => console.log(err));
    };
    if (!originInfo || !destinationInfo) {
      return;
    } else {
      getTravelTime();
    }
  }, [originInfo, destinationInfo, GOOGLE_MAPS_APIKEY]);

  return (
    <>
      <MapView
        ref={mapRef}
        style={tw`flex-1`}
        mapSt
        initialRegion={
          originInfo
            ? {
                latitude: originInfo.location.lat,
                longitude: originInfo.location.lng,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }
            : {
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }
        }
      >
        {originInfo?.location && (
          <Marker
            pinColor="red"
            coordinate={{
              latitude: originInfo.location.lat,
              longitude: originInfo.location.lng,
            }}
            title="Origin"
            description={originInfo.description}
            identifier="origin"
          />
        )}
        {destinationInfo?.location && (
          <Marker
            pinColor="green"
            coordinate={{
              latitude: destinationInfo.location.lat,
              longitude: destinationInfo.location.lng,
            }}
            title="Destination"
            description={destinationInfo.description}
            identifier="destination"
          />
        )}
        {originInfo && destinationInfo && (
          <MapViewDirections
            origin={{
              latitude: originInfo.location.lat,
              longitude: originInfo.location.lng,
            }}
            destination={{
              latitude: destinationInfo.location.lat,
              longitude: destinationInfo.location.lng,
            }}
            apikey={GOOGLE_MAPS_APIKEY} // use GOOGLE_MAPS_APIKEY here
            strokeWidth={3}
            strokeColor="black"
          />
        )}
      </MapView>
      <TouchableOpacity
        style={tw`absolute bottom-7 right-7 p-3 z-30 rounded-full bg-gray-100 shadow-lg`}
        onPress={fitMapToSuppliedMarkers}
      >
        <MaterialIcons name="my-location" size={25} color="black" />
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({});

export default Map;
