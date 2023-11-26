import React, { useContext } from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import Context, { NewsContext } from "./API/Context";
import Apptabs from "./components/apptabs";

function App() {
  const { darkTheme } = useContext(NewsContext);

  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: darkTheme ? "#282C35" : "white",
      }}
    >
      <Apptabs />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
});

export default () => {
  return (
    <Context>
      <App />
    </Context>
  );
};