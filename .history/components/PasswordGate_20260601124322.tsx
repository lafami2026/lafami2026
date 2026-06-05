"use client";

import { useState } from "react";
import PasswordIcon from "@/utils/Icons/PasswordIcon";
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

  return (
    <div className={styles.password__wrap}>
      <div className={styles.psvg}>
        <PasswordIcon />
      </div>
      <h2 className="text-2xl font-serif mb-1">You're Invited</h2>
      <p className="text-gray-400 text-sm mb-6">
        Enter your invitation code to access the RSVP form.
      </p>
      <form onSubmit={handleSubmit}>
        <div className={styles.pass__wrap}>
          <label htmlFor="password">Password*</label>
          <div className={styles.pass__eye}>
            <input
              type="password"
              placeholder="Invitation code"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={styles.form__in}
            />
          </div>
          {error && <p className={styles.error}>{error}</p>}
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-rose-400 hover:bg-rose-500 text-white py-2 rounded-lg transition disabled:opacity-50"
        >
          {loading ? "Checking..." : "Open RSVP Form"}
        </button>
      </form>
    </div>
  );
}
