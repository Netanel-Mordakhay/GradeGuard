"use client";

import React from "react";
import DefaultCard from "../global/DefaultCard";
import {
  Button,
  Loader,
  Stack,
  TextInput,
  Textarea,
  Alert,
  Select,
} from "@mantine/core";
import { Controller, useForm } from "react-hook-form";
import { contactSchema, type ContactForm } from "@/app/validationSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

const ContactUsForm = () => {
  const [serverMessage, setServerMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    control,
    reset,
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactForm) => {
    setServerMessage(null);
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      setServerMessage({ type: "success", text: "Message sent successfully!" });
      reset();
    } else {
      const json = await res.json();
      setServerMessage({
        type: "error",
        text: json?.error || "Failed to send message",
      });
    }
  };

  return (
    <DefaultCard showCover>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack>
          <TextInput
            label="Name"
            placeholder="Your name"
            withAsterisk
            {...register("name")}
            error={errors.name?.message}
          />

          <TextInput
            label="Email"
            placeholder="you@example.com"
            type="email"
            withAsterisk
            {...register("email")}
            error={errors.email?.message}
          />

          <Controller
            name="subject"
            control={control}
            render={({ field }) => (
              <Select
                label="Subject"
                placeholder="Choose an option"
                data={[
                  { label: "Report a bug", value: "bug" },
                  { label: "Other", value: "other" },
                ]}
                withAsterisk
                {...field}
                error={errors.subject?.message}
              />
            )}
          />

          <Textarea
            label="Message"
            placeholder="Write your message..."
            minRows={5}
            withAsterisk
            {...register("message")}
            error={errors.message?.message}
          />

          {serverMessage && (
            <Alert color={serverMessage.type === "success" ? "green" : "red"}>
              {serverMessage.text}
            </Alert>
          )}

          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? <Loader size="sm" color="white" /> : "Send Message"}
          </Button>
        </Stack>
      </form>
    </DefaultCard>
  );
};

export default ContactUsForm;
