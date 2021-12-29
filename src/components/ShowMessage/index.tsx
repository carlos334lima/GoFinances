import React from "react";
import FlashMessage, {
  showMessage,
  hideMessage,
} from "react-native-flash-message";
import theme from "../../styles/theme";

export function ShowMessage(message: string, type: any) {
  return showMessage({
    message: message,
    type: type,
    animated: true,
    hideOnPress: true,
    icon: type,
    floating: true,
    titleStyle: {
      fontFamily: theme.fonts.regular,
    },
  });
}
