"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/Button";
import styles from "./forms.module.css";

const schema = z.object({
  firstName: z.string().trim().min(1, { message: "First name is required" }),
  lastName: z.string().trim().min(1, { message: "Last name is required" }),
  email: z.string().email({ message: "Enter a valid email address" }),
  phone: z.string().trim().optional(),
  location: z.string().trim().optional(),
  capital: z.string().optional(),
  message: z
    .string()
    .trim()
    .min(1, { message: "Please tell us a little about your goals" }),
});

type FormValues = z.infer<typeof schema>;

export default function FranchiseForm() {
  const [submitting, setSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormValues) => {
    setSubmitting(true);
    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";

    const message = [
      "FRANCHISE INQUIRY",
      `Desired location: ${data.location || "—"}`,
      `Liquid capital: ${data.capital || "—"}`,
      "",
      data.message,
    ].join("\n");

    try {
      await emailjs.send(
        serviceID,
        templateID,
        {
          name: `${data.firstName} ${data.lastName}`,
          email: data.email,
          number: data.phone || "—",
          message,
        },
        publicKey
      );
      alert("Thanks! Your franchise inquiry has been sent.");
      reset();
    } catch (error) {
      console.error("Failed to send inquiry:", error);
      alert("Something went wrong. Please email us at expakron@gmail.com.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className={`${styles.row} ${styles.row2}`}>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="fr-first">
            First Name
          </label>
          <input
            id="fr-first"
            className={styles.input}
            placeholder="John"
            {...register("firstName")}
          />
          {errors.firstName && (
            <span className={styles.error}>{errors.firstName.message}</span>
          )}
        </div>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="fr-last">
            Last Name
          </label>
          <input
            id="fr-last"
            className={styles.input}
            placeholder="Doe"
            {...register("lastName")}
          />
          {errors.lastName && (
            <span className={styles.error}>{errors.lastName.message}</span>
          )}
        </div>
      </div>

      <div className={`${styles.row} ${styles.row2}`}>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="fr-email">
            Email Address
          </label>
          <input
            id="fr-email"
            type="email"
            className={styles.input}
            placeholder="john@example.com"
            {...register("email")}
          />
          {errors.email && (
            <span className={styles.error}>{errors.email.message}</span>
          )}
        </div>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="fr-phone">
            Phone Number
          </label>
          <input
            id="fr-phone"
            type="tel"
            className={styles.input}
            placeholder="(555) 123-4567"
            {...register("phone")}
          />
        </div>
      </div>

      <div className={`${styles.row} ${styles.row2}`}>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="fr-location">
            Desired Location (City, State)
          </label>
          <input
            id="fr-location"
            className={styles.input}
            placeholder="e.g., Cleveland, OH"
            {...register("location")}
          />
        </div>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="fr-capital">
            Liquid Capital Available
          </label>
          <select id="fr-capital" className={styles.select} {...register("capital")}>
            <option value="">Select an option</option>
            <option value="$50,000 - $100,000">$50,000 - $100,000</option>
            <option value="$100,000 - $250,000">$100,000 - $250,000</option>
            <option value="$250,000+">$250,000+</option>
          </select>
        </div>
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="fr-message">
          Why are you interested in The Experience?
        </label>
        <textarea
          id="fr-message"
          className={styles.textarea}
          rows={4}
          placeholder="Tell us a bit about your background and goals..."
          {...register("message")}
        />
        {errors.message && (
          <span className={styles.error}>{errors.message.message}</span>
        )}
      </div>

      <Button type="submit" variant="primary" size="lg" block disabled={submitting}>
        {submitting ? "Sending…" : "Request Franchise Info"}
      </Button>
      <p className={styles.note}>
        By submitting this form, you agree to be contacted regarding franchise
        opportunities.
      </p>
    </form>
  );
}
