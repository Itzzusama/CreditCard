import { StyleSheet, TextInput, View } from "react-native";
import React, { useState } from "react";

import CustomText from "./CustomText";
import Icons from "./Icons";

import { COLORS } from "../utils/COLORS";
import { Fonts } from "../utils/fonts";

const CustomInput = ({
  placeholder,
  secureTextEntry,
  value,
  onChangeText,
  keyboardType,
  multiline,
  maxLength,
  placeholderTextColor,
  editable,
  textAlignVertical,
  marginBottom,
  height,
  autoCapitalize,
  error,
  isFocus,
  isBlur,
  width,
  onEndEditing,
  autoFocus,
  ref,
  borderRadius,
  marginTop,
  withLabel,
  isError,
  labelColo,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hidePass, setHidePass] = useState(true);

  const handleFocus = () => {
    setIsFocused(true);
    isFocus?.();
  };

  const handleBlur = () => {
    setIsFocused(false);
    isBlur?.();
  };

  return (
    <View style={{ width: width || "100%" }}>
      {withLabel && (
        <CustomText
          label={withLabel}
          fontFamily={Fonts.medium}
          marginBottom={8}
          color={labelColo || COLORS.black}
        />
      )}
      <View
        style={[
          styles.mainContainer,
          {
            marginBottom: error ? 5 : marginBottom || 15,
            marginTop,
            borderColor:
              error || isError
                ? COLORS.red
                : isFocused
                ? COLORS.black
                : COLORS.gray,
            height: height || 52,
            width: "100%",
            borderRadius: borderRadius || 8,
          },
        ]}
      >
        <TextInput
          ref={ref}
          placeholder={placeholder}
          style={[
            styles.input,
            {
              width: secureTextEntry ? "92%" : "98%",
              paddingVertical: multiline ? 18 : 0,
            },
          ]}
          secureTextEntry={secureTextEntry ? (hidePass ? true : false) : false}
          onFocus={handleFocus}
          onBlur={handleBlur}
          value={value}
          onChangeText={onChangeText}
          keyboardType={keyboardType}
          multiline={multiline}
          onEndEditing={onEndEditing}
          maxLength={maxLength}
          placeholderTextColor={placeholderTextColor || COLORS.gray}
          editable={editable}
          textAlignVertical={multiline ? "top" : textAlignVertical}
          autoCapitalize={autoCapitalize}
          autoFocus={autoFocus}
        />

        {secureTextEntry && (
          <Icons
            name={!hidePass ? "eye" : "eye-with-line"}
            color={COLORS.gray}
            size={20}
            family="Entypo"
            onPress={() => setHidePass(!hidePass)}
          />
        )}
      </View>
      {error && (
        <CustomText
          label={error}
          color={COLORS.red}
          fontFamily={Fonts.semiBold}
          fontSize={10}
          marginBottom={15}
          numberOfLines={1}
        />
      )}
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: COLORS.white,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor:COLORS.black
  },
  input: {
    height: "100%",
    padding: 0,
    margin: 0,
    fontFamily: Fonts.regular,
    fontSize: 12,
    color: COLORS.black,
  },
});
