"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import FormInput from "./FormInput";
import AttendanceRadio from "./AttendanceRadio";
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
      placeholder: "Your last name",
      errorMessage: "Please enter a valid last name",
      required: true,
      minlength: 2,
      inputState: true,
      label: "Last Name*",
    },
    {
      id: 3,
      name: "email",
      type: "email",
      placeholder: "Your email",
      errorMessage: "Please enter a valid email",
      required: true,
      inputState: true,
      label: "Email*",
    },
    {
      id: 4,
      name: "gfirstname",
      type: "text",
      placeholder: "Guest first name",
      errorMessage: "Please enter a valid first name",
      required: false,
      minlength: 2,
      inputState: true,
      label: "Guest First Name",
    },
    {
      id: 5,
      name: "glastname",
      type: "text",
      placeholder: "Guest last name",
      errorMessage: "Please enter a valid last name",
      required: false,
      minlength: 2,
      inputState: true,
      label: "Guest Last Name",
    },
  ];

  const firstThree = FormFields.slice(0, 3); // Gets the first 3 items
  const lastFields = FormFields.slice(3, 5);

  type AttendanceChoice = "yes" | "no" | null;

  const [attending, setAttending] = useState<AttendanceChoice>(null);
  const [showAttendanceError, setShowAttendanceError] = useState(false);


  const [attending2, setAttending2] = useState<AttendanceChoice>(null);
  const [showAttendanceError2, setShowAttendanceError2] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className={styles.formWrapper}>
      <form ref={formRef} className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.form__form}>
          {firstThree.map((data, i) => (
            <FormInput data={data} key={`fs${i}`} isSubmitting={isSubmitting} />
          ))}
          <AttendanceRadio
            attending={attending}
            setAttending={setAttending}
            showError={showAttendanceError}
            setShowError={setShowAttendanceError}
            text="Will you be attending ?*"
            name={}
          />
          <AttendanceRadio
            attending={attending2}
            setAttending={setAttending2}
            showError={showAttendanceError2}
            setShowError={setShowAttendanceError2}
            text="Will you be bringing a guest ?*"
          />
          {lastFields.map((data, i) => (
            <FormInput data={data} key={`fs${i}`} isSubmitting={isSubmitting} />
          ))}
        </div>
      </form>
    </div>
  );
};

export default RSVPBox;
