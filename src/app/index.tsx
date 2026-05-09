import React from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.keyboardAvoidingView}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        {/* Logo */}
        <View style={styles.logoContainer}>
          <View style={styles.logoRow}>
            <Image source={require("@/assets/images/logo.jpg")} />
          </View>
        </View>

        {/* Heading */}
        <Text style={styles.heading}>Sign In</Text>

        <Text style={styles.subHeading}>
          Let’s experience the joy of telecare AI.
        </Text>

        {/* Email */}
        <View style={styles.inputWrapper}>
          <Text style={styles.label}>Email Address</Text>

          <Pressable style={[styles.inputContainer, styles.addHover]}>
            <Image source={require("@/assets/images/email.jpg")} />

            <TextInput
              placeholder="elementary221b@gmail.com"
              placeholderTextColor="#999"
              style={styles.input}
            />
          </Pressable>
        </View>

        {/* Password */}
        <View style={styles.inputWrapper}>
          <Text style={styles.label}>Password</Text>

          <Pressable style={[styles.inputContainer, styles.addHover]}>
            <Image source={require("@/assets/images/lock.jpg")} />

            <TextInput
              placeholder="Enter your password..."
              placeholderTextColor="#999"
              style={styles.input}
            />

            <Image source={require("@/assets/images/eye.jpg")} />
          </Pressable>
        </View>

        {/* Sign In Button */}
        <Pressable style={styles.signInBtn}>
          <Text style={styles.signInText}>Sign In →</Text>
        </Pressable>

        {/* Social Buttons */}
        <View style={styles.socialContainer}>
          <Pressable style={styles.socialBtn}>
            <Image source={require("@/assets/images/meta.jpg")} />
          </Pressable>

          <Pressable style={styles.socialBtn}>
            <Image source={require("@/assets/images/google.jpg")} />
          </Pressable>

          <Pressable style={styles.socialBtn}>
            <Image source={require("@/assets/images/insta.jpg")} />
          </Pressable>
        </View>

        {/* Footer Actions */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Don't have an account? <Text style={styles.linkText}>Sign Up.</Text>
          </Text>

          <Text style={styles.forgotPassword}>Forgot your password?</Text>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const GREEN = "#8CD211";

const styles = StyleSheet.create({
  keyboardAvoidingView: {
    flex: 1,
  },

  container: {
    flex: 1,
    backgroundColor: "#F6F6F6",
  },

  logoContainer: {
    alignSelf: "center",
    marginTop: 0,
    marginBottom: 2,
  },

  logoRow: {
    flexDirection: "row",
    justifyContent: "center",
  },

  heading: {
    fontSize: 38,
    fontWeight: "700",
    color: "#222",
    textAlign: "center",
  },

  subHeading: {
    fontSize: 15,
    color: "#8A8A8A",
    textAlign: "center",
    marginTop: 10,
    marginBottom: 20,
  },

  inputWrapper: {
    marginBottom: 15,
  },

  label: {
    fontSize: 15,
    fontWeight: "600",
    color: "#333",
    margin: 10,
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 25,
    paddingHorizontal: 16,
    height: 50,
    marginHorizontal: 10,
  },

  addHover: {
    borderWidth: 2,
    borderColor: GREEN,
    shadowColor: GREEN,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 2,
  },

  input: {
    padding: 10,
    flex: 1,
    fontSize: 15,
    color: "#222",
  },

  signInBtn: {
    backgroundColor: GREEN,
    height: 58,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 36,
    marginHorizontal: 10,
  },

  signInText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "700",
  },

  socialContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 14,
    marginBottom: 40,
  },

  socialBtn: {
    width: 58,
    height: 58,
    borderRadius: 18,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E5E5E5",
  },

  socialText: {
    fontSize: 24,
    fontWeight: "900",
    color: "#333",
  },

  footer: {
    alignItems: "center",
  },

  footerText: {
    fontSize: 14,
    color: "#555",
    marginBottom: 12,
  },

  linkText: {
    color: GREEN,
    fontWeight: "600",
  },

  forgotPassword: {
    fontSize: 14,
    color: GREEN,
    fontWeight: "600",
  },
});
