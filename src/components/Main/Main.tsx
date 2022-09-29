import React, {useState} from "react";
import {useDispatch} from "react-redux";
import SignUpInfo from "../SignUpInfo/SignUpInfo";
import PersonalInfo from "../PersonalInfo/PersonalInfo";
import {getPersonalInfo, getSignUpInfo, resetForm} from "../../store/action/userInfoAction";
import ModalUser from "../ModalUser/ModalUser";
import steps from "../../utils/steps";

import s from "./Main.module.scss";


const Main = () => {

  const [currentStep, setCurrentStep] = useState(steps.SING_UP_INFO)

  const [modalActive, setModalActive] = useState(false)

  const dispatch = useDispatch();

  const signUpHandleSubmit = (value:any) => {
    // @ts-ignore
    dispatch(getSignUpInfo(value))
    setCurrentStep(steps.PERSONAL_INFO)
  }

  const personalInfoHandleSubmit = (value:any) => {
    // @ts-ignore
    dispatch(getPersonalInfo(value))
    setModalActive(true)
  }

  const handleResetForm = () => {
    dispatch(resetForm())
    setCurrentStep(steps.SING_UP_INFO)
  }

  return (
      <div>
        <section className={s.signUpSteps}>

          <span className={currentStep === steps.SING_UP_INFO ? s.selectStep : undefined}>
            SignUp Info ---
          </span>

          <span className={currentStep === steps.PERSONAL_INFO ? s.selectStep : undefined}>
          ---  Personal Info
          </span>
        </section>

        <div className={s.container}>


          <ModalUser modalActive={modalActive} setModalActive={setModalActive} handleResetForm={handleResetForm}/>
          {currentStep === steps.SING_UP_INFO && <SignUpInfo handleSubmit={signUpHandleSubmit}/>}

          {currentStep === steps.PERSONAL_INFO && <PersonalInfo handleSubmit={personalInfoHandleSubmit}
                                                                setCurrentStep={setCurrentStep}/>}

        </div>
      </div>

  )
}

export default Main;
