import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  LayoutAnimation,
  StyleSheet,
  ScrollView,
  UIManager,
} from "react-native";

import CustomText from "./CustomText";
import Icons from "./Icons";

import { COLORS } from "../utils/COLORS";
import { Fonts } from "../utils/fonts";

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

const CustomDropdown = ({
  data,
  value,
  setValue,
  showIcon,
  placeholder,
  error,
  withLabel,
  labelColo,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [text, setText] = useState("");

  const toggleDropdown = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setIsOpen(!isOpen);
  };

  const selectOption = (option) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    if (option?._id) {
      setValue(option?._id);
      setText(option.title);
    } else {
      setValue(option);
    }
    setIsOpen(false);
  };

  return (
    <>
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
          styles.dropdownMainContainer,
          {
            marginBottom: error ? 5 : 20,
            borderColor: error ? COLORS.red : COLORS.gray,
          },
        ]}
      >
        <TouchableOpacity
          activeOpacity={0.6}
          style={styles.container}
          onPress={toggleDropdown}
        >
          <CustomText
            label={text || value || placeholder}
            fontSize={12}
            fontFamily={Fonts.bold}
            numberOfLines={1}
            width={300}
            color={value?.length ? COLORS.black : COLORS.gray}
          />
          {!showIcon ? (
            <Icons
              style={{ color: COLORS.gray, fontSize: 20 }}
              family="Entypo"
              name={isOpen ? "chevron-up" : "chevron-down"}
            />
          ) : (
            <View />
          )}
        </TouchableOpacity>

        {isOpen && data?.length > 0 && (
          <ScrollView
            scrollEnabled
            nestedScrollEnabled
            showsVerticalScrollIndicator={false}
          >
            {data?.map((option, i) => (
              <TouchableOpacity
                style={styles.list}
                key={i}
                onPress={() => selectOption(option)}
              >
                <CustomText
                  label={option?._id ? option.title : option}
                  fontSize={12}
                  color={COLORS.black}
                />
              </TouchableOpacity>
            ))}
          </ScrollView>
        )}
      </View>
      {error && (
        <CustomText
          marginLeft={10}
          label={error}
          color="red"
          marginBottom={20}
        />
      )}
    </>
  );
};

export default CustomDropdown;
const styles = StyleSheet.create({
  dropdownMainContainer: {
    borderRadius: 10,
    backgroundColor: COLORS.white,
    width: "100%",
    maxHeight: 200,
    overflow: "scroll",
    borderWidth: 1,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    width: "100%",
    height: 55,
    backgroundColor: COLORS.white,
    overflow: "scroll",
  },
  list: {
    borderTopWidth: 1,
    borderTopColor: COLORS.gray,
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontFamily: Fonts.medium,
  },
});
