import { TouchableOpacity, ActivityIndicator } from "react-native";
import React from "react";

import CustomText from "./CustomText";

import { COLORS } from "../utils/COLORS";
import { Fonts } from "../utils/fonts";

const CustomButton = ({
  onPress,
  title,
  disabled,
  loading,
  customStyle,
  customText,
  marginBottom,
  marginTop,
  backgroundColor,
  color,
  width = "100%",
  height = 53,
  borderRadius = 14,
  justifyContent = "center",
  alignItems = "center",
  flexDirection = "row",
  alignSelf = "center",
  fontSize,
  borderWidth,
  borderColor,
  btnFont,
}) => {
  return (
    <TouchableOpacity
      disabled={loading || disabled}
      activeOpacity={0.6}
      style={[
        {
          backgroundColor: disabled
            ? COLORS.gray
            : backgroundColor
            ? backgroundColor
            : COLORS.primaryColor,
          marginTop,
          marginBottom,
          width,
          height,
          borderRadius,
          flexDirection,
          alignItems,
          justifyContent,
          alignSelf,
          borderWidth,
          borderColor,
        },
        customStyle,
      ]}
      onPress={onPress}
    >
      {loading ? (
        <ActivityIndicator size={25} color={COLORS.white} />
      ) : (
        <CustomText
          textStyle={customText}
          label={title}
          color={color ? color : COLORS.white}
          fontFamily={btnFont || Fonts.semiBold}
          fontSize={fontSize || 16}
          lineHeight={22}
        />
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;
