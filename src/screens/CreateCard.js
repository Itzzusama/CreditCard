import firestore from "@react-native-firebase/firestore";
import React, { useState } from "react";
import uuid from "react-native-uuid";

import ScreenWrapper from "../components/ScreenWrapper";
import CustomButton from "../components/CustomButton";
import UploadImage from "../components/UploadImage";
import ImageFast from "../components/ImageFast";

import { ToastMessage } from "../utils/ToastMessage";
import { uploadAndGetUrl } from "../utils/constants";

const CreateCard = () => {
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(null);
  const onCreateCard = async () => {
    setLoading(true);
    const _id = uuid.v4();
    try {
      const res = await firestore().collection("cards").doc(_id).set({
        _id,
        name: "Amir Mirza",
        email: "amir@gmail.com",
        phone: "+923021234567",
      });
      ToastMessage("Card created successfully");
      console.log("============res", res);
      setLoading(false);
    } catch (error) {
      console.log("============error", error.message);
      setLoading(false);
    }
  };
  return (
    <ScreenWrapper>
      <CustomButton
        title="Create Card"
        marginTop={100}
        loading={loading}
        onPress={onCreateCard}
      />
      <UploadImage
        handleChange={async (img) => {
          const url = await uploadAndGetUrl(img);
          setImage(url);
        }}
        renderButton={(onPress) => (
          <CustomButton
            title="Upload Image"
            marginTop={100}
            onPress={onPress}
          />
        )}
      />
      <ImageFast
        source={{ uri: image }}
        resizeMode="cover"
        style={{
          width: 100,
          height: 100,
          borderRadius: 100,
          alignSelf: "center",
          marginTop: 50,
        }}
      />
    </ScreenWrapper>
  );
};

export default CreateCard;
