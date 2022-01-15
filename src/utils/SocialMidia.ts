//@libraries
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import {
  AccessToken,
  GraphRequest,
  GraphRequestManager,
  LoginManager,
} from "react-native-fbsdk";

export const configureSignInGoogle = async () => {
  await GoogleSignin.configure({
    offlineAccess: false,
  });
};

export const handleSignInWithGoogle = async () => {
  try {
    await GoogleSignin.hasPlayServices();
    const data = await GoogleSignin.signIn();
    console.log("@data", data);
  } catch (error) {
    console.log("Error", error);
  }
};

export const handleSignInFb = () => {
  LoginManager.logInWithPermissions(["public_profile"]).then((result) => {
    if (!result.isCancelled) {
      AccessToken.getCurrentAccessToken().then((data) => {
        const responseInfoCallback = (
          error: object | undefined,
          result: any
        ) => {
          if (error) {
          } else {
            console.log("result", result);
          }
        };
        if (data) {
          const infoRequest = new GraphRequest(
            "/me",
            {
              accessToken: data.accessToken,
              parameters: {
                fields: {
                  string: "email,name",
                },
              },
            },
            responseInfoCallback
          );
          // Start the graph request.
          new GraphRequestManager().addRequest(infoRequest).start();
        }
      });
    }
  });
};
