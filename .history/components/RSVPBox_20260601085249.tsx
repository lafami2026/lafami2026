"use client";

import React, { useRef, useState, useEffect } from "react";
import FormInput from "./FormInput";
import DoubleLove from "@/utils/Icons/DoubleLove";
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

  const handleSubmit = async (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!attending) {
      setShowAttendanceError(true);
      return;
    }
    if (!attending2) {
      setShowAttendanceError2(true);
      return;
    }

    setShowAttendanceError(false);
    setShowAttendanceError2(false);

    //Form Data
    const formData = new FormData(event.currentTarget);
    const firstname = formData.get("firstname") as string | null;
    const lastname = formData.get("lastname") as string | null;
    const email = formData.get("email") as string | null;
    const attendingValue = attending==="yes" ? "Yes" : "No" as string | null;
    const gattendingValue = attending2==="yes" ? "Yes" : "No" as string | null;
    const gfirstname = formData.get("firstname") as string | null;
    const glastname = formData.get("lastname") as string | null;

    // Change button text and show "Submitting..."
    setButtonText("Sending...");
    setIsSubmitting(true);
  };

  return (
    <div className={styles.formWrapper}>
      <form
        autoComplete="off"
        ref={formRef}
        className={styles.form}
        onSubmit={handleSubmit}
      >
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
            name="attending"
          />
          <AttendanceRadio
            attending={attending2}
            setAttending={setAttending2}
            showError={showAttendanceError2}
            setShowError={setShowAttendanceError2}
            text="Will you be bringing a guest ?*"
            name="bringguest"
          />
          {lastFields.map((data, i) => (
            <FormInput data={data} key={`fs${i}`} isSubmitting={isSubmitting} />
          ))}
        </div>
        <button type="submit" className={styles.button}>
          <span className={styles.rsvper}>Send</span>
          <span className={styles.svg}>
            <DoubleLove />
          </span>
        </button>
      </form>
    </div>
  );
};

export default RSVPBox;
