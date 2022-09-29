import {PERSONAL_INFO, RESET_FORM, SING_UP_INFO} from "../../utils/actionTypes";

export const setSignUpInfo = (signUpInfo:any) => ({ type: SING_UP_INFO, signUpInfo })
export const setPersonalInfo = (personalInfo:any) => ({ type: PERSONAL_INFO, personalInfo })
export const resetForm = () => ({type: RESET_FORM})

export const getSignUpInfo = (value:any) => (dispatch:any) => {
  dispatch(setSignUpInfo(value));
};

export const getPersonalInfo = (value:any) => (dispatch:any) => {
  dispatch(setPersonalInfo(value));
};
