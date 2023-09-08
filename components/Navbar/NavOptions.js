import React from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import tw from "twrnc";
import { AntDesign } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useSelector } from "react-redux";
import { selectOrigin } from "../../redux/slices/navSlice";

const data = [
  {
    id: "1",
    title: "Get a ride",
    image: "https://links.papareact.com/3pn",
    screen: "navigateCard",
    parentDir: "maps"
  },
  {
    id: "2",
    title: "Order Food",
    image: "https://links.papareact.com/28w",
    screen: "foodScreen",
    parentDir: "foods"
  },
];

const NavOptions = () => {
  const router = useRouter();
  const originInfo = useSelector(selectOrigin);
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      horizontal
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => router.push(`/${item.parentDir}/${item.screen}`)}
          style={tw`bg-gray-200 w-40 m-2 h-60 p-2 pt-4 pl-6 pb-8 rounded-lg`}
          disabled={!originInfo}
        >
          <View style={tw`${!originInfo && 'opacity-20'}`}>
            <Image
              resizeMode="contain"
              style={{
                height: 120,
                width: 120,
              }}
              source={{
                uri: item.image,
              }}
            />
          </View>
          <Text style={tw`mt-2 ml-4 text-lg font-semibold`}>{item.title}</Text>
          <AntDesign
            name="arrowright"
            size={28}
            color="white"
            style={[tw`bg-black rounded-full w-9 mt-4 ml-4 p-1`]}
          />
        </TouchableOpacity>
      )}
    />
  );
};

export default NavOptions;
