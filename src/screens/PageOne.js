import React, { useEffect, useMemo, useState } from "react";

import ScreenWrapper from "../components/ScreenWrapper";
import CustomButton from "../components/CustomButton";
import CustomInput from "../components/CustomInput";
import CustomText from "../components/CustomText";

import { COLORS } from "../utils/COLORS";
import { Fonts } from "../utils/fonts";

const PageOne = ({ navigation }) => {
  const init = {
    phone: "",
    pan: "",
    pinCode: "",
    income: "",
    captcha: "",
  };

  const inits = {
    phoneError: "",
    panError: "",
    pinCodeError: "",
    incomeError: "",
    captchaError: "",
  };

  const [errors, setErrors] = useState(inits);
  const [state, setState] = useState(init);

  const array = [
    {
      id: 1,
      placeholder: "Enter Mobile Number (Linked to Aadhaar)",
      value: state.phone,
      label: "Mobile Number (Linked to Aadhaar)",
      onChange: (text) => setState({ ...state, phone: text }),
      error: errors.phoneError,
    },
    {
      id: 2,
      placeholder: "Enter PAN Number",
      value: state.pan,
      label: "PAN Number",
      onChange: (text) => setState({ ...state, pan: text }),
      error: errors.panError,
    },
    {
      id: 3,
      placeholder: "Enter Pin Code",
      value: state.pinCode,
      label: "Pincode",
      onChange: (text) => setState({ ...state, pinCode: text }),
      error: errors.pinCodeError,
    },
    {
      id: 4,
      placeholder: "Enter Net Annual Income(₹)",
      value: state.income,
      label: "Net Annual Income(₹)",
      onChange: (text) => setState({ ...state, income: text }),
      error: errors.incomeError,
    },
    {
      id: 5,
      placeholder: "Enter CAPTCHA Code",
      value: state.captcha,
      label: "Enter CAPTCHA",
      onChange: (text) => setState({ ...state, captcha: text }),
      error: errors.captchaError,
    },
  ];

  const errorCheck = useMemo(() => {
    return () => {
      let newErrors = {};
      if (!state.phone)
        newErrors.phoneError = "Please enter your mobile number.";
      else if (state.phone.length < 12)
        newErrors.phoneError = "Mobile number must be 12 digits.";
      else if (!state.pan) newErrors.panError = "Please enter your PAN number.";
      else if (!state.pinCode)
        newErrors.pinCodeError = "Please enter your pin code.";
      else if (state.pinCode.length > 6)
        newErrors.pinCodeError = "Pin code must be 6 digits.";
      else if (!state.income)
        newErrors.incomeError = "Please enter your income.";
      else if (!state.captcha)
        newErrors.captchaError = "Please enter the CAPTCHA code.";
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
        label="Let's Get Started"
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
          onChangeText={item.onChange}
          error={item.error}
          withLabel={item.label}
        />
      ))}

      <CustomButton
        title="Next"
        marginTop={18}
        disabled={Object.keys(errors).some((key) => errors[key] !== "")}
        onPress={() => navigation.navigate("PageTwo", { data: state })}
      />
    </ScreenWrapper>
  );
};

export default PageOne;
