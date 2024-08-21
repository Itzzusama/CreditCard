import React, { useEffect, useMemo, useState } from "react";
import firestore from "@react-native-firebase/firestore";
import uuid from "react-native-uuid";
import { View } from "react-native";

import ScreenWrapper from "../components/ScreenWrapper";
import CustomButton from "../components/CustomButton";
import CustomInput from "../components/CustomInput";
import CustomText from "../components/CustomText";

import { ToastMessage } from "../utils/ToastMessage";
import { COLORS } from "../utils/COLORS";
import { Fonts } from "../utils/fonts";

const PageThree = ({ route, navigation }) => {
  const data = route?.params?.data;

  const init = {
    addressDetails: "Salaried",
    cardNumber: "",
    expiryDate: "",
    CVV: "",
  };
  const inits = {
    cardNumberError: "",
    expiryDateError: "",
    CVVError: "",
  };
  const [errors, setErrors] = useState(inits);
  const [state, setState] = useState(init);
  const [loading, setLoading] = useState(false);

  const array = [
    {
      id: 3,
      placeholder: "Enter Card Number",
      value: state.cardNumber,
      label: "Card Number",
      onChange: (text) => setState({ ...state, cardNumber: text }),
      error: errors.cardNumberError,
    },
    {
      id: 4,
      placeholder: "Enter Expiry Date",
      value: state.expiryDate,
      label: "Expiry Date MM/YYYY",
      onChange: (text) => setState({ ...state, expiryDate: text }),
      error: errors.expiryDateError,
    },
    {
      id: 5,
      placeholder: "Enter CVV",
      value: state.CVV,
      label: "CVV",
      onChange: (text) => setState({ ...state, CVV: text }),
      error: errors.CVVError,
    },
  ];
  const errorCheck = useMemo(() => {
    return () => {
      let newErrors = {};
      if (!state.cardNumber)
        newErrors.cardNumberError = "Please enter Card Number.";
      else if (!state.expiryDate)
        newErrors.expiryDateError = "Please enter Expiry Date.";
      else if (!state.CVV) newErrors.CVVError = "Please enter CVV.";

      setErrors(newErrors);
    };
  }, [state]);

  useEffect(() => {
    errorCheck();
  }, [errorCheck]);
  const onCreateCard = async () => {
    setLoading(true);
    const _id = uuid.v4();
    try {
      const res = await firestore()
        .collection("cards")
        .doc(_id)
        .set({ ...data, ...state });
      ToastMessage("Card created successfully");
      navigation.navigate("PageOne");
      console.log("============res", res);
      setLoading(false);
    } catch (error) {
      console.log("============error", error.message);
      setLoading(false);
    }
  };
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

      <CustomText
        label="Salaried"
        fontFamily={Fonts.semiBold}
        fontSize={12}
        onPress={() => setState({ ...state, addressDetails: "Salaried" })}
        color={state.addressDetails === "Salaried" ? COLORS.red : COLORS.black}
      />
      <CustomText
        onPress={() => setState({ ...state, addressDetails: "Self Employed" })}
        label="Self Employed"
        fontFamily={Fonts.semiBold}
        fontSize={12}
        color={
          state.addressDetails === "Self Employed" ? COLORS.red : COLORS.black
        }
      />
      <View style={{ marginVertical: 12 }} />

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
        title="Submit"
        marginBottom={18}
        marginTop={18}
        loading={loading}
        disabled={Object.keys(errors).some((key) => errors[key] !== "")}
        onPress={onCreateCard}
      />
    </ScreenWrapper>
  );
};

export default PageThree;
