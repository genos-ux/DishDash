import { Link, Route } from "expo-router";
import {  Text, TouchableOpacity, View } from "react-native";
import { StyleSheet } from "react-native";


export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Edit app/index.ts to edit this screen.123
      </Text>

      {/* <TextInput placeholder="youremail" style={{borderWidth: 1, padding: 10}} secureTextEntry={true}/> */}

      {/* <Image
        source={require("@/assets/images/react-logo.png")} style={{
          width: 100, height: 100
        }}
      /> */}
      <TouchableOpacity>
        <Text>Click me</Text>
      </TouchableOpacity>

      <Link href={"/about" as Route}>visit about screen</Link>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {color: "red"}
});