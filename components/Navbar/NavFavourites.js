import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import tw from 'twrnc';
import { FontAwesome5 } from '@expo/vector-icons';

const data = [
  {
    id: "1",
    icon: "home",
    location: "Home",
    destination: "KR Garden, Bengaluru, India",
  },
  {
    id: "2",
    icon: "briefcase",
    location: "Work",
    destination: "H9 Corporate Stay for Mens, Bengaluru, India",
  },
];

const NavFavourites = () => {
  return (
    <FlatList 
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
            <TouchableOpacity style={tw`flex-row items-center p-5`}>
                <FontAwesome5 style={tw`mr-4 rounded-full bg-gray-400 p-3`} name={item.icon} size={18} color="white" />
                <View>
                    <Text style={tw`font-semibold text-lg`}>{item.location}</Text>
                    <Text style={tw`text-gray-500`}>{item.destination}</Text>
                </View>
            </TouchableOpacity>
        ) }
    />
  );
};

export default NavFavourites;
