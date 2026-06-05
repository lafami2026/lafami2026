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
          <div className={styles.attending}>
            <span className={styles.label}>Will you be attending ?*</span>
            <div className={styles.ticking}>
              <div className={styles.option}>
                <div className={styles.ticker}>
                  <span className={styles.tick}></span>
                </div>
                <span>Yes</span>
              </div>
              <div className={styles.option}>
                <div className={styles.ticker}>
                  <span className={styles.tick}></span>
                </div>
                <span>No</span>
              </div>
            </div>
            <span className={styles.error}>Please </span>
          </div>
          {lastFields.map((data, i) => (
            <FormInput data={data} key={`fs${i}`} isSubmitting={isSubmitting} />
          ))}
        </div>
      </form>
    </div>
  );
};

export default RSVPBox;
