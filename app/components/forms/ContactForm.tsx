"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/Button";
import styles from "./forms.module.css";

const TOPICS = [
  "General Question",
  "Appointment Issue",
  "Feedback",
  "Franchise Interest",
  "Career Opportunities",
];

const schema = z.object({
  firstName: z.string().trim().min(1, { message: "First name is required" }),
  lastName: z.string().trim().min(1, { message: "Last name is required" }),
  email: z.string().email({ message: "Enter a valid email address" }),
  phone: z.string().trim().optional(),
  topic: z.string(),
  message: z
    .string()
    .trim()
    .min(1, { message: "Please enter a message" })
    .max(1000, { message: "Message is too long" }),
});

type FormValues = z.infer<typeof schema>;

export default function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { topic: TOPICS[0] },
  });

  const onSubmit = async (data: FormValues) => {
    setSubmitting(true);
    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";

    try {
      await emailjs.send(
        serviceID,
        templateID,
        {
          name: `${data.firstName} ${data.lastName}`,
          email: data.email,
          number: data.phone || "—",
          message: `[${data.topic}]\n\n${data.message}`,
        },
        publicKey
      );
      alert("Thanks! Your message has been sent.");
      reset();
    } catch (error) {
      console.error("Failed to send message:", error);
      alert("Something went wrong. Please email us at expakron@gmail.com.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className={`${styles.row} ${styles.row2}`}>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="c-first">
            First Name
          </label>
          <input
            id="c-first"
            className={styles.input}
            placeholder="John"
            {...register("firstName")}
          />
          {errors.firstName && (
            <span className={styles.error}>{errors.firstName.message}</span>
          )}
        </div>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="c-last">
            Last Name
          </label>
          <input
            id="c-last"
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
          <label className={styles.label} htmlFor="c-email">
            Email Address
          </label>
          <input
            id="c-email"
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
          <label className={styles.label} htmlFor="c-phone">
            Phone Number
          </label>
          <input
            id="c-phone"
            type="tel"
            className={styles.input}
            placeholder="(555) 123-4567"
            {...register("phone")}
          />
        </div>
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="c-topic">
          Topic of Inquiry
        </label>
        <select id="c-topic" className={styles.select} {...register("topic")}>
          {TOPICS.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="c-message">
          Message
        </label>
        <textarea
          id="c-message"
          className={styles.textarea}
          rows={5}
          placeholder="How can we help you today?"
          {...register("message")}
        />
        {errors.message && (
          <span className={styles.error}>{errors.message.message}</span>
        )}
      </div>

      <Button type="submit" variant="primary" size="lg" block disabled={submitting}>
        {submitting ? "Sending…" : "Send Message"}{" "}
        <i className="fa-regular fa-paper-plane" />
      </Button>
    </form>
  );
}
