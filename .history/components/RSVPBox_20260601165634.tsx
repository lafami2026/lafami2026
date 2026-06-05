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

  type AttendanceChoice = "yes" | "no" | null;

  const [attending, setAttending] = useState<AttendanceChoice>(null);
  const [showAttendanceError, setShowAttendanceError] = useState(false);

  const [attending2, setAttending2] = useState<AttendanceChoice>(null);
  const [showAttendanceError2, setShowAttendanceError2] = useState(false);

  //Modal Show
  const [activeModal, setActiveModal] = useState(false)
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
      required: attending2 && attending2 === "yes" ? true : false,
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
      required: attending2 && attending2 === "yes" ? true : false,
      minlength: 2,
      inputState: true,
      label: "Guest Last Name",
    },
  ];

  const firstThree = FormFields.slice(0, 3); // Gets the first 3 items
  const lastFields = FormFields.slice(3, 5);


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

    const formData = new FormData(event.currentTarget);
    const firstname = (formData.get("firstname") as string) || "";
    const lastname = (formData.get("lastname") as string) || "";
    const email = (formData.get("email") as string) || "";
    const attendingValue = attending === "yes" ? "Yes" : "No";
    const gattendingValue = attending2 === "yes" ? "Yes" : "No";
    const gfirstname = (formData.get("gfirstname") as string) || "";
    const glastname = (formData.get("glastname") as string) || "";

    setButtonText("Sending...");
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstname,
          lastname,
          email,
          attendingValue,
          gattendingValue,
          gfirstname,
          glastname,
        }),
      });

      // If server returned a PDF (success)
      const contentType = res.headers.get("Content-Type") || "";
      if (res.ok && contentType.includes("application/pdf")) {
        // Convert to blob and trigger download
        const blob = await res.blob();
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        // sanitize filename: use firstname/lastname but remove unsafe chars
        const safeName = `${firstname || "invite"}`.replace(
          /[^a-z0-9_\-]/gi,
          "_"
        );
        a.download = `invite-${safeName}.pdf`;
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
        
        //Success Actions
        setActiveModal(true)
        setButtonText("Successful");
        if (formRef.current) formRef.current.reset();
        setAttending(null);
        setAttending2(null);
      } else {
        // Try to parse JSON error message from server
        let errBody: any = null;
        try {
          errBody = await res.json();
        } catch (e) {
          // not JSON
        }
        console.error(
          "RSVP failed",
          errBody ?? { status: res.status, statusText: res.statusText }
        );
        setButtonText("Sorry, an error occurred");
      }
    } catch (error) {
      console.error("Error during form submission", error);
      setButtonText("Sorry, an error occurred");
    } finally {
      setIsSubmitting(false);
      // restore button text after a short delay
      setTimeout(() => setButtonText("Send"), 5000);
    }
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
          <span className={styles.rsvper}>{buttonText}</span>
          <span className={styles.svg}>
            <DoubleLove />
          </span>
        </button>
      </form>
      <div className={styles.form__modal}>
          <div className={styles.fm__wrap}>

          </div>
      </div>
    </div>
  );
};

export default RSVPBox;


  // const handleSubmit = async (event: React.SyntheticEvent<HTMLFormElement>) => {
  //   event.preventDefault();

  //   if (!attending) {
  //     setShowAttendanceError(true);
  //     return;
  //   }
  //   if (!attending2) {
  //     setShowAttendanceError2(true);
  //     return;
  //   }

  //   setShowAttendanceError(false);
  //   setShowAttendanceError2(false);

  //   //Form Data
  //   const formData = new FormData(event.currentTarget);
  //   const firstname = formData.get("firstname") as string | null;
  //   const lastname = formData.get("lastname") as string | null;
  //   const email = formData.get("email") as string | null;
  //   const attendingValue = attending === "yes" ? "Yes" : "No";
  //   const gattendingValue = attending2 === "yes" ? "Yes" : "No";
  //   const gfirstname = formData.get("gfirstname") as string | null;
  //   const glastname = formData.get("glastname") as string | null;

  //   // Change button text and show "Submitting..."
  //   setButtonText("Sending...");
  //   setIsSubmitting(true);

  //   try {
  //     const response = await fetch("/api/contact", {
  //       method: "POST",
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         firstname,
  //         lastname,
  //         email,
  //         attendingValue,
  //         gattendingValue,
  //         gfirstname,
  //         glastname,
  //       }),
  //     });
  //     if (response.ok) {
  //       // On success, update button text
  //       setButtonText("Well received");
  //       // Reset form after a successful submission
  //       if (formRef.current) {
  //         formRef.current.reset();
  //       }
  //       setAttending(null);
  //       setAttending2(null);
  //     } else {
  //       // If API response is not ok, show error
  //       setButtonText("Sorry, an error occurred");
  //     }
  //   } catch (error) {
  //     console.error("Error during form submission", error);
  //     setButtonText("Sorry, an error occurred");
  //     setIsSubmitting(false);
  //   } finally {
  //     // After 3 seconds, reset the button text to "Submit form"
  //     setIsSubmitting(false); // Enable the button again
  //     setTimeout(() => {
  //       setButtonText("Send");
  //     }, 5000);
  //   }
  // };