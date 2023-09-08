import { Slot, useRouter } from "expo-router";
import Map from "../../components/GooglePlaces/Map";
import tw from "twrnc";
import { TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function MapHomeLayout() {
  const router = useRouter();

  return (
    <View>
      <TouchableOpacity
        style={tw`bg-gray-100 p-3 rounded-full absolute top-12 left-6 z-20 shadow-lg`}
        onPress={() => router.push("/")}
      >
        <Ionicons name="menu" size={25} color="black" />
      </TouchableOpacity>
      <View style={tw`h-1/2`}>
        <Map />
      </View>
      <View style={tw`h-1/2`}>
        <Slot />
      </View>
    </View>
  );
}
