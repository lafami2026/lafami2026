"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import FormInput from "./FormInput";
import styles from "../styles/HomePage/rsvp.module.scss";

const RSVPBox = () => {
  const formRef = useRef<HTMLFormElement | null>(null);

  const [buttonText, setButtonText] = useState("Send");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [tickError, setTickError] = useState(false);
  const [activeBox, setActiveBox] = useState(false);

  const FormFields = [
    {
      id: 1,
      name: "firstname",
      type: "text",
      placeholder: "Your first name",
      errorMessage: "Please enter a valid first name",
      required: true,
      minlength: 2,
      inputState: true,
      label: "First Name*",
    },
    {
      id: 2,
      name: "lastname",
      type: "text",
      placeholder: "Your first name",
      errorMessage: "Please enter a valid first name",
      required: true,
      minlength: 2,
      inputState: true,
      label: "First Name*",
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "example@domain.com",
      errorMessage: t("ContactPage:emailerror"),
      required: true,
      inputState: true,
      label: "Email",
    },
    {
      id: 3,
      name: "phone",
      type: "tel",
      placeholder: "+237 690-000-000",
      errorMessage: t("ContactPage:phoneerror"),
      required: true,
      minlength: 5,
      inputState: true,
      label: t("ContactPage:phonelabel"),
    },
    {
      id: 4,
      name: "subject",
      type: "text",
      placeholder: t("ContactPage:subjectplace"),
      errorMessage: t("ContactPage:subjecterror"),
      required: true,
      minlength: 5,
      inputState: true,
      label: t("ContactPage:subjectlabel"),
    },
    {
      id: 5,
      name: "message",
      type: "text",
      placeholder: t("ContactPage:tellmore"),
      errorMessage: t("ContactPage:messageerror"),
      required: true,
      minlength: 70,
      inputState: false,
      label: "Message",
    },
  ];

  const firstFour = FormFields.slice(0, 4); // Gets the first 4 items
  const lastField = FormFields[4];

  return <div>RSVPBox</div>;
};

export default RSVPBox;
