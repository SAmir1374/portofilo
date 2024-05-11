import React, { useEffect, useRef, useState } from "react";
import FormGroup from "./FormGroup";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { AiFillMessage } from "react-icons/ai";
import TextArea from "./TextArea";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useForm as useFormspree } from "@formspree/react";
import "../styles/components/stepInputContact.css";

function StepInputContact({}) {
  const { t, i18n } = useTranslation("global");
  const firstSmallRef = useRef();
  const [currentStep, setCurrentStep] = useState(0);
  const [serverState, sendToFormspree] = useFormspree("mqkrjkdb");

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const watchFields = watch(["name", "email", "message"]);

  const activeAndDisActive = (step) => {
    if (step === 0 && watchFields[0] && !errors.name) {
      return false;
    } else if (step === 1 && watchFields[1] && !errors.email) {
      return false;
    } else {
      return true;
    }
  };

  const handleNext = (e) => {
    e.preventDefault();
    currentStep !== 2 && setCurrentStep((s) => s + 1);
  };

  if (isSubmitSuccessful) {
    setCurrentStep(0);
    reset();
  }

  useEffect(() => {}, [currentStep, firstSmallRef]);

  useEffect(() => {}, [errors, watchFields]);

  return (
    <form onSubmit={handleSubmit(sendToFormspree)}>
      <div className="StepInputContactWrapper">
        <div className="StepInputContact">
          <div>
            <small
              ref={firstSmallRef}
              onClick={() => setCurrentStep(0)}
              className={`label ${
                watchFields[0] || currentStep !== 0 ? "active" : ""
              } ${i18n.language === "fa" ? "labelRtl" : "labelLtr"}`}
            >
              <FaUser />
              {watchFields[0]
                ? watchFields[0]
                : t("Contact.inputs.0.name", { returnObjects: true })}
            </small>
            <small
              onClick={() => setCurrentStep(1)}
              className={`label ${
                i18n.language === "fa" ? "labelRtl" : "labelLtr"
              } ${watchFields[1] || currentStep !== 1 ? "active" : ""} ${
                !watchFields[1] && currentStep !== 1 && "disActive"
              }`}
              style={
                i18n.language === "fa"
                  ? {
                      right: `${
                        watchFields[1] || currentStep !== 1
                          ? `${firstSmallRef?.current?.offsetWidth + 10}px`
                          : ""
                      }`,
                    }
                  : {
                      left: `${
                        watchFields[1] || currentStep !== 1
                          ? `${firstSmallRef?.current?.offsetWidth + 10}px`
                          : ""
                      }`,
                    }
              }
            >
              <MdEmail />
              {watchFields[1]
                ? watchFields[1]
                : t("Contact.inputs.1.email", { returnObjects: true })}
            </small>
            <small
              className={`label ${
                i18n.language === "fa" ? "labelRtl" : "labelLtr"
              } ${watchFields[2] || currentStep !== 2 ? "disActive" : ""}`}
            >
              {t("Contact.inputs.2.message", { returnObjects: true })}
            </small>
          </div>
          <FormGroup
            icon={<FaUser />}
            name={"name"}
            register={register("name", {
              required: "این فیلد الزامی است!",
              minLength: 2,
            })}
            className={`${currentStep === 0 ? "active" : ""}`}
          />
          <FormGroup
            icon={<MdEmail />}
            name={"email"}
            register={register("email", {
              required: "این فیلد الزامی است!",
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: "ایمیل به درستی وارد نشده است!",
              },
            })}
            className={`${currentStep === 1 ? "active" : ""}`}
          />
          <TextArea
            icon={<AiFillMessage />}
            name={"message"}
            register={register}
            className={`${currentStep === 2 ? "active" : ""}`}
          />
        </div>
        <div className="StepInputContactButton">
          <button
            onClick={handleNext}
            disabled={activeAndDisActive(currentStep)}
          >
            {t("Contact.inputs.1.next", { returnObjects: true })}
          </button>
          <button disabled={!(currentStep === 2 && watchFields[2])}>
            {t("Contact.inputs.2.next", { returnObjects: true })}
          </button>
        </div>
      </div>
    </form>
  );
}

export default StepInputContact;
