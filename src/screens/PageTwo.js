import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useMemo, useState } from "react";
import ScreenWrapper from "../components/ScreenWrapper";
import CustomText from "../components/CustomText";
import { Fonts } from "../utils/fonts";
import { COLORS } from "../utils/COLORS";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import CustomDropdown from "../components/CustomDropDown";
import { TouchableOpacity } from "react-native";
import Icons from "../components/Icons";

const PageTwo = ({ navigation }) => {
  const init = {
    phone: "",
    pan: "",
    pinCode: "",
  };
  const inits = {
    phoneError: "",
    panError: "",
    pinCodeError: "",
  };
  const [errors, setErrors] = useState(inits);
  const [state, setState] = useState(init);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [selectedCardDelivery, setSelectedCardDelivery] = useState(null);
  const [isChecked, setIsChecked] = useState(false);

  const array = [
    {
      id: 1,
      placeholder: "Enter PAN number",
      value: state.phone,
      label: "Name (As per PAN)",
      onChange: (text) => setState({ ...state, phone: text }),
      error: errors?.phoneError,
    },
    {
      id: 2,
      placeholder: "Enter Date of Birth",
      value: state.pan,
      label: "Date of Birth(As per PAN)",
      onChange: (text) => setState({ ...state, pan: text }),
      error: errors?.panError,
    },
    {
      id: 2.1,
      placeholder: "Select the Title",
      value: state.pan,
      label: "Title",
      onChange: (text) => setState({ ...state, pan: text }),
      error: errors?.panError,
      data: ["Mr", "Mrs"],
    },
    {
      id: 2.2,
      placeholder: "Select the Gender",
      value: state.pan,
      label: "Gender",
      onChange: (text) => setState({ ...state, pan: text }),
      error: errors?.panError,
      data: ["Male", "Female"],
    },
    {
      id: 3,
      placeholder: "Enter Name",
      value: state.pinCode,
      label: "Name Desired on Card",
      onChange: (text) => setState({ ...state, pinCode: text }),
      error: errors?.pinCodeError,
    },
    {
      id: 4,
      placeholder: "Enter Mother Name",
      value: state.pinCode,
      label: "Mother Name",
      onChange: (text) => setState({ ...state, pinCode: text }),
      error: errors?.pinCodeError,
    },
    {
      id: 5,
      placeholder: "Enter Father/Spouse Name",
      value: state.pinCode,
      label: "Father/Spouse Name",
      onChange: (text) => setState({ ...state, pinCode: text }),
      error: errors?.pinCodeError,
    },
    {
      id: 6,
      placeholder: "Enter Marital Status",
      value: state.pinCode,
      label: "Marital Status",
      onChange: (text) => setState({ ...state, pinCode: text }),
      error: errors?.pinCodeError,
      data: ["Single", "Married"],
    },
  ];
  const errorCheck = useMemo(() => {
    return () => {
      let newErrors = {};
      if (!state.email) newErrors.emailError = "Please enter Email address";
      else if (!regEmail.test(state.email))
        newErrors.emailError = "Please enter valid email";
      else if (!state.password)
        newErrors.passwordError = "Please enter Password";
      else if (!passwordRegex.test(state.password))
        newErrors.passwordError =
          "Password must contain 1 number, 1 special character, Uppercase and 8 digits";
      setErrors(newErrors);
    };
  }, [state]);

  useEffect(() => {
    errorCheck();
  }, [errorCheck]);

  return (
    <ScreenWrapper paddingHorizontal={12} scrollEnabled>
      <CustomText
        label={"Credit Card"}
        fontFamily={Fonts.bold}
        fontSize={28}
        color={COLORS.black}
      />
      <CustomText
        label={"Credit Card Processed Instantly"}
        fontFamily={Fonts.semiBold}
        fontSize={12}
        color={COLORS.black}
      />
      <CustomText
        label={"We would like to know you Btetter"}
        fontFamily={Fonts.semiBold}
        fontSize={18}
        color={COLORS.red}
        marginTop={18}
        marginBottom={16}
      />

      {array.map((item) =>
        item?.id == 2.1 || item?.id == 2.2 || item?.id == 6 ? (
          <CustomDropdown
            withLabel={item?.label}
            value={item?.value}
            setValue={item?.onChange}
            data={item?.data}
            placeholder={item.placeholder}
          />
        ) : (
          <CustomInput
            key={item?.id}
            placeholder={item.placeholder}
            value={item.value}
            // onChangeText={item.onChange}
            error={item.error}
            withLabel={item.label}
            // secureTextEntry={item.id === 2}
          />
        )
      )}

      <CustomText
        label={"Address Details(Select One"}
        fontFamily={Fonts.medium}
        marginBottom={2}
        color={COLORS.black}
      />

      <TouchableOpacity onPress={() => setSelectedAddress("Residence")}>
        <CustomText
          label={"Residence"}
          fontFamily={Fonts.semiBold}
          fontSize={12}
          color={selectedAddress === "Residence" ? COLORS.red : COLORS.black}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setSelectedAddress("Office Address")}>
        <CustomText
          label={"Office Address"}
          fontFamily={Fonts.semiBold}
          fontSize={12}
          color={
            selectedAddress === "Office Address" ? COLORS.red : COLORS.black
          }
        />
      </TouchableOpacity>

      <CustomText
        label={"Where do you want to receive the card?"}
        fontFamily={Fonts.medium}
        marginBottom={2}
        marginTop={20}
        color={COLORS.black}
      />

      <TouchableOpacity onPress={() => setSelectedCardDelivery("Office")}>
        <CustomText
          label={"Office"}
          fontFamily={Fonts.semiBold}
          fontSize={12}
          color={selectedCardDelivery === "Office" ? COLORS.red : COLORS.black}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={{ marginBottom: 12 }}
        onPress={() => setSelectedCardDelivery("Home")}
      >
        <CustomText
          label={"Home"}
          fontFamily={Fonts.semiBold}
          fontSize={12}
          color={selectedCardDelivery === "Home" ? COLORS.red : COLORS.black}
        />
      </TouchableOpacity>

      <CustomInput
        withLabel={"Email Address"}
        value={state.pan}
        placeholder={"Enter Email Address"}
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
              family={"AntDesign"}
            />
          )}
        </TouchableOpacity>
        <CustomText
          label={"I agree to the terms and conditions"}
          fontFamily={Fonts.semiBold}
          fontSize={12}
          color={COLORS.black}
          marginLeft={8} // To add some space between the checkbox and text
        />
      </View>

      <CustomButton
        title={"Next"}
        marginBottom={18}
        marginTop={18}
        onPress={() => navigation.navigate("PageThree")}
      />
    </ScreenWrapper>
  );
};

export default PageTwo;

const styles = StyleSheet.create({});
