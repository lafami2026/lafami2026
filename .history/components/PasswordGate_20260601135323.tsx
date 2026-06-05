"use client";

import { useState, useRef } from "react";
import PasswordIcon from "@/utils/Icons/PasswordIcon";
import Eye from "@/utils/Icons/Eye";
import EyeOff from "@/utils/Icons/EyeOff";
import styles from "../styles/HomePage/rsvp.module.scss";

interface PasswordGateProps {
  onUnlock: () => void;
}

export interface VerifyPasswordResponse {
  success: boolean;
  message?: string;
}

export default function PasswordGate({ onUnlock }: PasswordGateProps) {
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (
    e: React.SyntheticEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/verify-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      const data = (await res.json()) as VerifyPasswordResponse;

      if (data.success) {
        sessionStorage.setItem("rsvp_unlocked", "true");
        onUnlock();
      } else {
        setError(data.message ?? "Incorrect code. Please try again.");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  //ShowPassword
  const [show, setShow] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const toggle = () => {
    setShow((s) => !s);
    // keep focus on the input after toggling
    inputRef.current?.focus();
  };

  return (
    <div className={styles.password__wrap}>
      <div className={styles.psvg}>
        <PasswordIcon />
      </div>
      <h2 className={styles.in__h3}>You are Invited</h2>
      <p className={styles.in__p}>
        Enter your invitation code to access the RSVP form.
      </p>
      <form
        onSubmit={handleSubmit}
        autoComplete="off"
        className={styles.former}
      >
        <div className={styles.pass__wrap}>
          <span className={styles.label}>Password*</span>
          <div className={styles.pass__eye}>
            <input
              type={show ? "text" : "password"}
              placeholder="Invitation code"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={styles.form__in}
            />
            <div className={styles.eye} onClick={toggle}>{show ? <EyeOff /> : <Eye />}</div>
          </div>
          {error && <p className={styles.error}>{error}</p>}
        </div>
        <button type="submit" disabled={loading} className={styles.pass__but}>
          {loading ? "Checking..." : "Open RSVP Form"}
        </button>
      </form>
    </div>
  );
}
