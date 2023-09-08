import { useRouter } from "expo-router";
import { View, Text, StyleSheet, Button } from "react-native"

const EatScreen = () => {
    const router = useRouter();
  return (
    <View style={styles.textContainer}>
        <Text style={styles.text}>Order Food section is for Demo purpose</Text>
        <Button 
            title="Go Back"
            color="green"
            onPress={()=> router.back()}
        />
    </View>
  )
};

const styles = StyleSheet.create({
    text: {
      color: "black",
      fontSize: 18,
      margin: 20
    },
    textContainer: {
        height: "100%",
        flex: 1,
        alignContent: "center",
        justifyContent: "center",
        alignItems: "center"
    }
  });

export default EatScreen
