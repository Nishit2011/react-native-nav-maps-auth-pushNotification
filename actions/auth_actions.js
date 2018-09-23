import { AsyncStorage } from "react-native";
import { FACEBOOK_LOGIN_SUCCESS, FACEBOOK_LOGIN_FAIL } from "./types";
import { Facebook } from "expo";

//asyncStorage from react-native works very similar to
//as localStorage on browser
//it stores the token given back when fb auth
//is tried to check for legitimate authentication

//asyncStorage returns a promise

//when the user checks the app for the first time, he will enter his fb creds
//(which means going to the else part of the code)
//when the same user checks in the app for the second time, the app then
//looks for the token which was save after his first attempt to login

export const facebookLogin = () => async dispatch => {
    
  let token = await AsyncStorage.getItem("getItem");
  if (token) {
    //Dispatch an action saying FB login is done
    dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token });
  } else {
    //Start up FB login process
    doFacebookLogin(dispatch);
  }
};

//when the auth fails and the user is asked to enter is
//facebook login credentials
//here we store the token to AsyncStorage
const doFacebookLogin = async dispatch => {
  let { type, token } = await Facebook.logInWithReadPermissionsAsync(
    "938411989680884",
    {
      permissions: ["public_profile"]
    }
  );

  if (type === "cancel") {
    return dispatch({ type: FACEBOOK_LOGIN_FAIL });
  }

//as soon as the user logsin his cred, he gets a successgully
//logged in token  
  await AsyncStorage.setItem("fb_token", token);
  dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token });
};
