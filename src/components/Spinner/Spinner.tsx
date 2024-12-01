import React from "react";

import { View, ActivityIndicator, StyleSheet } from "react-native";

import { COLORS } from "@/theme/colors";

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center"
  }
});

const Spinner = () => (
  <View style={styles.container}>
    <ActivityIndicator size={48} color={COLORS.primary300} />
  </View>
);

export default Spinner;
