import { Image as ImageCompressor } from "react-native-compressor";
import storage from "@react-native-firebase/storage";
import { Platform } from "react-native";

import { ToastMessage } from "./ToastMessage";

export const uploadAndGetUrl = async (file) => {
  try {
    const resizeUri = await ImageCompressor.compress(
      file.fileCopyUri || file.path
    );

    const filename = `images/${new Date()
      .toISOString()
      .replace(/[.:-]+/g, "_")}`;
    const uploadUri =
      Platform.OS === "ios" ? resizeUri.replace("file://", "") : resizeUri;
    const storageRef = storage().ref(filename);
    await storageRef.putFile(uploadUri);
    const url = await storageRef.getDownloadURL();
    console.log("===========url", url);
    ToastMessage("Image uploaded successfully");
    return url;
  } catch (err) {
    console.log("=======er", err);
    ToastMessage("Upload Again");
  }
};

var SI_SYMBOL = ["", "k", "M", "G", "T", "P", "E"];
export const formatPrice = (number) => {
  var tier = (Math.log10(Math.abs(number)) / 3) | 0;
  if (tier == 0) return number;
  var suffix = SI_SYMBOL[tier];
  var scale = Math.pow(10, tier * 3);
  var scaled = number / scale;
  var formattedNumber =
    scaled % 1 === 0 ? scaled.toFixed(0) : scaled.toFixed(1);
  return formattedNumber + suffix;
};
