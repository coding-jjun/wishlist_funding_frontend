"use client";
import EmailPassword from "@/app/(with-navbar)/signup/view/EmailPassword";
import { useState } from "react";
import { CreateUserForm } from "@/types/User";
import NameNickName from "@/app/(with-navbar)/signup/view/NameNickname";
import PhoneNumber from "@/app/(with-navbar)/signup/view/PhoneNumber";
import Complete from "@/app/(with-navbar)/signup/view/Complete";
import AdditionalInfo from "@/app/(with-navbar)/signup/view/AdditionalInfo";
import { FormProvider, useForm } from "react-hook-form";

const DEFAULT_CREATE_USER_DTO: CreateUserForm = {
  userEmail: "",
  userPw: "",
  userName: "",
  userNick: "",
  userPhone: "",
};

export default function SignUpPage() {
  const [step, setStep] = useState<
    "emailAndPassword" | "nameAndNickname" | "phone" | "end" | "additional"
  >("emailAndPassword");

  const methods = useForm<CreateUserForm>({
    defaultValues: DEFAULT_CREATE_USER_DTO,
  });

  return (
    <FormProvider {...methods}>
      <form>
        {step === "emailAndPassword" && (
          <EmailPassword
            onNext={() => {
              setStep("nameAndNickname");
            }}
          />
        )}
        {step === "nameAndNickname" && (
          <NameNickName
            onPrev={() => {
              setStep("emailAndPassword");
            }}
            onNext={() => {
              setStep("phone");
            }}
          />
        )}
        {step === "phone" && (
          <PhoneNumber
            onPrev={() => {
              setStep("nameAndNickname");
            }}
            onNext={() => {
              setStep("additional");
            }}
          />
        )}
        {step === "additional" && (
          <AdditionalInfo
            onPrev={() => {
              setStep("phone");
            }}
            onNext={() => {
              setStep("end");
            }}
          />
        )}
        {step === "end" && <Complete />}
      </form>
    </FormProvider>
  );
}
