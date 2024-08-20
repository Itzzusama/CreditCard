import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useMemo, useState } from "react";
import ScreenWrapper from "../components/ScreenWrapper";
import CustomText from "../components/CustomText";
import { Fonts } from "../utils/fonts";
import { COLORS } from "../utils/COLORS";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";

const PageOne = ({ navigation }) => {
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
  const array = [
    {
      id: 1,
      placeholder: "Email",
      value: state.phone,
      label: "Mobile Number (Linked to Aadhaar)",
      onChange: (text) => setState({ ...state, phone: text }),
      error: errors?.phoneError,
    },
    {
      id: 2,
      placeholder: "Enter PAN Number",
      value: state.pan,
      label: "PAN Number",
      onChange: (text) => setState({ ...state, pan: text }),
      error: errors?.panError,
    },
    {
      id: 3,
      placeholder: "Enter Pin Code",
      value: state.pinCode,
      label: "Pincode",
      onChange: (text) => setState({ ...state, pinCode: text }),
      error: errors?.pinCodeError,
    },
    {
      id: 4,
      placeholder: "Enter Pin Code",
      value: state.pinCode,
      label: "Net Annual Income(₹)",
      onChange: (text) => setState({ ...state, pinCode: text }),
      error: errors?.pinCodeError,
    },
    {
      id: 5,
      placeholder: "Enter CAPTCHA Code",
      value: state.pinCode,
      label: "Enter CAPTCHA",
      onChange: (text) => setState({ ...state, pinCode: text }),
      error: errors?.pinCodeError,
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
        label={"Let's Get Started"}
        fontFamily={Fonts.semiBold}
        fontSize={18}
        color={COLORS.red}
        marginTop={18}
        marginBottom={16}
      />

      {array.map((item) => (
        <CustomInput
          key={item?.id}
          placeholder={item.placeholder}
          value={item.value}
          // onChangeText={item.onChange}
          error={item.error}
          withLabel={item.label}
          // secureTextEntry={item.id === 2}
        />
      ))}
      <CustomButton
        title={"Next"}
        marginTop={18}
        onPress={() => navigation.navigate("PageTwo")}
      />
    </ScreenWrapper>
  );
};

export default PageOne;

const styles = StyleSheet.create({});
