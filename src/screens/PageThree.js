import React, { useEffect, useMemo, useState } from "react";
import { TouchableOpacity, View } from "react-native";

import ScreenWrapper from "../components/ScreenWrapper";
import CustomButton from "../components/CustomButton";
import CustomInput from "../components/CustomInput";
import CustomText from "../components/CustomText";

import { COLORS } from "../utils/COLORS";
import { Fonts } from "../utils/fonts";

const PageThree = () => {
  const init = {
    netIncome: "",
  };
  const inits = {
    netIncomeError: "",
  };
  const [errors, setErrors] = useState(inits);
  const [state, setState] = useState(init);
  const [selectedAddress, setSelectedAddress] = useState(null);

  const array = [
    {
      id: 1,
      placeholder: "Enter Net Annual Income(₹)",
      value: state.netIncome,
      label: "Net Annual Income(₹)",
      onChange: (text) => setState({ ...state, netIncome: text }),
      error: errors.netIncomeError,
    },
    { id: 1.1 },
    {
      id: 2,
      placeholder: "Enter Card Holder Name",
      value: state.pan,
      label: "Card Holder Name",
      onChange: (text) => setState({ ...state, pan: text }),
      error: errors?.panError,
    },
    {
      id: 3,
      placeholder: "Enter Card Number",
      value: state.pinCode,
      label: "Card Number",
      onChange: (text) => setState({ ...state, pinCode: text }),
      error: errors?.pinCodeError,
    },
    {
      id: 4,
      placeholder: "Enter Expiry Date",
      value: state.pinCode,
      label: "Expiry Date MM/YYYY",
      onChange: (text) => setState({ ...state, pinCode: text }),
      error: errors?.pinCodeError,
    },
    {
      id: 5,
      placeholder: "Enter CVV",
      value: state.pinCode,
      label: "CVV",
      onChange: (text) => setState({ ...state, pinCode: text }),
      error: errors?.pinCodeError,
    },
  ];
  const errorCheck = useMemo(() => {
    return () => {
      let newErrors = {};
      if (!state.netIncome)
        newErrors.netIncomeError = "Please enter Net Annal Income";

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
        label="We're almost there! Tell us something about your work!"
        fontFamily={Fonts.semiBold}
        fontSize={18}
        color={COLORS.red}
        marginTop={18}
        marginBottom={16}
      />

      <CustomText
        label="Address Details(Select One)"
        fontFamily={Fonts.medium}
        marginBottom={2}
        color={COLORS.black}
      />

      <TouchableOpacity onPress={() => setSelectedAddress("Salaried")}>
        <CustomText
          label="Salaried"
          fontFamily={Fonts.semiBold}
          fontSize={12}
          color={selectedAddress === "Salaried" ? COLORS.red : COLORS.black}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setSelectedAddress("Self Employed")}>
        <CustomText
          label="Self Employed"
          fontFamily={Fonts.semiBold}
          fontSize={12}
          color={
            selectedAddress === "Self Employed" ? COLORS.red : COLORS.black
          }
        />
      </TouchableOpacity>
      <View style={{ marginVertical: 12 }} />

      {array.map((item) =>
        item?.id == 1.1 ? (
          <CustomText
            key={item.id}
            label="Credit Card Details"
            fontFamily={Fonts.semiBold}
            color={COLORS.red}
            fontSize={22}
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

      <CustomButton
        title="Submit"
        marginBottom={18}
        marginTop={18}
        disabled={Object.keys(errors).some((key) => errors[key] !== "")}
        // onPress={() => navigation.navigate("PageThree")}
      />
    </ScreenWrapper>
  );
};

export default PageThree;
