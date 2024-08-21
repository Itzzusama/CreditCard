import React, { useEffect, useMemo, useState } from "react";
import { View, TouchableOpacity } from "react-native";

import CustomDropdown from "../components/CustomDropDown";
import ScreenWrapper from "../components/ScreenWrapper";
import CustomButton from "../components/CustomButton";
import CustomInput from "../components/CustomInput";
import CustomText from "../components/CustomText";
import Icons from "../components/Icons";

import { COLORS } from "../utils/COLORS";
import { Fonts } from "../utils/fonts";

const PageTwo = ({ navigation, route }) => {
  const data = route?.params?.data;
  const init = {
    panName: "",
    pinCode: "",
    dateOfBirth: "",
    title: "",
    gender: "",
    cardName: "",
    motherName: "",
    fatherName: "",
    maritalStatus: "",
    selectedAddress: "",
    selectedCardDelivery: "",
    email: "",
  };

  const inits = {
    phoneError: "",
    panNameError: "",
    pinCodeError: "",
    dateOfBirthError: "",
    titleError: "",
    genderError: "",
    cardNameError: "",
    motherNameError: "",
    fatherNameError: "",
    maritalStatusError: "",
    emailError: "",
  };

  const [errors, setErrors] = useState(inits);
  const [state, setState] = useState(init);
  const [isChecked, setIsChecked] = useState(false);

  const array = [
    {
      id: 1,
      placeholder: "Name (As per PAN)",
      value: state.panName,
      label: "Name (As per PAN)",
      onChange: (text) => setState({ ...state, panName: text }),
      error: errors?.panNameError,
    },
    {
      id: 2,
      placeholder: "Enter Date of Birth",
      value: state.dateOfBirth,
      label: "Date of Birth(As per PAN)",
      onChange: (text) => setState({ ...state, dateOfBirth: text }),
      error: errors?.dateOfBirthError,
    },
    {
      id: 2.1,
      placeholder: "Select the Title",
      value: state.title,
      label: "Title",
      onChange: (text) => setState({ ...state, title: text }),
      error: errors?.titleError,
      data: ["Mr", "Mrs"],
    },
    {
      id: 2.2,
      placeholder: "Select the Gender",
      value: state.gender,
      label: "Gender",
      onChange: (text) => setState({ ...state, gender: text }),
      error: errors?.genderError,
      data: ["Male", "Female"],
    },
    {
      id: 3,
      placeholder: "Enter Name",
      value: state.cardName,
      label: "Name Desired on Card",
      onChange: (text) => setState({ ...state, cardName: text }),
      error: errors.cardNameError,
    },
    {
      id: 4,
      placeholder: "Enter Mother Name",
      value: state.motherName,
      label: "Mother Name",
      onChange: (text) => setState({ ...state, motherName: text }),
      error: errors.motherNameError,
    },
    {
      id: 5,
      placeholder: "Enter Father/Spouse Name",
      value: state.fatherName,
      label: "Father/Spouse Name",
      onChange: (text) => setState({ ...state, fatherName: text }),
      error: errors.fatherNameError,
    },
    {
      id: 6,
      placeholder: "Enter Marital Status",
      value: state.maritalStatus,
      label: "Marital Status",
      onChange: (text) => setState({ ...state, maritalStatus: text }),
      error: errors?.maritalStatusError,
      data: ["Single", "Married"],
    },
  ];

  const errorCheck = useMemo(() => {
    return () => {
      let newErrors = {};
      if (!state.panName)
        newErrors.panNameError = "Please enter your PAN name.";
      else if (!state.dateOfBirth)
        newErrors.dateOfBirthError = "Please enter your Date of Birth.";
      else if (!state.title) newErrors.titleError = "Please select a title.";
      else if (!state.gender)
        newErrors.genderError = "Please select your gender.";
      else if (!state.cardName)
        newErrors.cardNameError = "Please enter the name for your card.";
      else if (!state.motherName)
        newErrors.motherNameError = "Please enter your mother's name.";
      else if (!state.fatherName)
        newErrors.fatherNameError =
          "Please enter your father's or spouse's name.";
      else if (!state.maritalStatus)
        newErrors.maritalStatusError = "Please select your marital status.";
      else if (!state.email)
        newErrors.emailError = "Please enter your email address.";

      setErrors(newErrors);
    };
  }, [state]);

  useEffect(() => {
    errorCheck();
  }, [errorCheck]);

  return (
    <ScreenWrapper paddingHorizontal={12} scrollEnabled>
      <CustomText
        label="Credit Card"
        fontFamily={Fonts.bold}
        fontSize={28}
        color={COLORS.black}
      />
      <CustomText
        label="Credit Card Processed Instantly"
        fontFamily={Fonts.semiBold}
        fontSize={12}
        color={COLORS.black}
      />
      <CustomText
        label="We would like to know you Better"
        fontFamily={Fonts.semiBold}
        fontSize={18}
        color={COLORS.red}
        marginTop={18}
        marginBottom={16}
      />

      {array.map((item) =>
        item?.id === 2.1 || item?.id === 2.2 || item?.id === 6 ? (
          <CustomDropdown
            key={item?.id}
            withLabel={item?.label}
            value={item?.value}
            setValue={item?.onChange}
            data={item?.data}
            placeholder={item.placeholder}
            error={item.error}
          />
        ) : (
          <CustomInput
            key={item?.id}
            placeholder={item.placeholder}
            value={item.value}
            onChangeText={item.onChange}
            error={item.error}
            withLabel={item.label}
          />
        )
      )}

      <CustomText
        label="Address Details(Select One)"
        fontFamily={Fonts.medium}
        marginBottom={2}
        color={COLORS.black}
      />

      <CustomText
        label="Residence"
        fontFamily={Fonts.semiBold}
        fontSize={12}
        color={
          state.selectedAddress === "Residence" ? COLORS.red : COLORS.black
        }
        onPress={() => setState({ ...state, selectedAddress: "Residence" })}
      />
      <CustomText
        label="Office Address"
        fontFamily={Fonts.semiBold}
        fontSize={12}
        color={
          state.selectedAddress === "Office Address" ? COLORS.red : COLORS.black
        }
        onPress={() =>
          setState({ ...state, selectedAddress: "Office Address" })
        }
      />

      <CustomText
        label="Where do you want to receive the card?"
        fontFamily={Fonts.medium}
        marginBottom={2}
        marginTop={20}
        color={COLORS.black}
      />

      <CustomText
        label="Office"
        fontFamily={Fonts.semiBold}
        fontSize={12}
        onPress={() => setState({ ...state, selectedCardDelivery: "Office" })}
        color={
          state.selectedCardDelivery === "Office" ? COLORS.red : COLORS.black
        }
      />
      <CustomText
        label="Home"
        fontFamily={Fonts.semiBold}
        fontSize={12}
        marginBottom={12}
        color={
          state.selectedCardDelivery === "Home" ? COLORS.red : COLORS.black
        }
        onPress={() => setState({ ...state, selectedCardDelivery: "Home" })}
      />
      <CustomInput
        withLabel="Email Address"
        value={state.email}
        placeholder="Enter Email Address"
        onChangeText={(text) => setState({ ...state, email: text })}
        error={errors.emailError}
      />
      <View
        style={{ flexDirection: "row", alignItems: "center", marginTop: 16 }}
      >
        <TouchableOpacity
          onPress={() => setIsChecked(!isChecked)}
          style={{
            height: 20,
            width: 20,
            borderRadius: 4,
            borderWidth: 1,
            borderColor: COLORS.black,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {isChecked && (
            <Icons
              name="check"
              size={16}
              color={COLORS.black}
              family="AntDesign"
            />
          )}
        </TouchableOpacity>
        <CustomText
          label="I agree to the terms and conditions"
          fontFamily={Fonts.semiBold}
          fontSize={12}
          color={COLORS.black}
          marginLeft={8}
        />
      </View>

      <CustomButton
        title="Next"
        marginBottom={18}
        marginTop={18}
        disabled={Object.keys(errors).some((key) => errors[key] !== "")}
        onPress={() =>
          navigation.navigate("PageThree", { data: { ...data, ...state } })
        }
      />
    </ScreenWrapper>
  );
};

export default PageTwo;
