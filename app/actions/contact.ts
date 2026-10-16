"use server";

import { Resend } from "resend";

type SendInfoResult =
  | { success: true; data: { id: string } }
  | { success: false; error: string };

export async function sendInfo(formData: FormData): Promise<SendInfoResult> {
  const emailInfo = {
    firstName: String(formData.get("firstName") ?? "").trim(),
    lastName: String(formData.get("lastName") ?? "").trim(),
    phone: String(formData.get("phone") ?? "").trim(),
    email: String(formData.get("email") ?? "").trim(),
    message: String(formData.get("message") ?? "").trim(),
  };

  if (
    !emailInfo.firstName ||
    !emailInfo.lastName ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInfo.email) ||
    !emailInfo.message
  ) {
    return { success: false, error: "Please check the form fields and try again." };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("Contact form email is not configured: RESEND_API_KEY is missing.");
    return {
      success: false,
      error: "The contact form is temporarily unavailable. Please try again later.",
    };
  }

  try {
    const resend = new Resend(apiKey);
    const { data, error } = await resend.emails.send({
      from: "New Contact <info@info.maricanicholas.com>",
      to: ["marica@clearhopewellness.com"],
      subject: "New Contact Form Submission",
      text: [
        "New contact form submission",
        `First name: ${emailInfo.firstName}`,
        `Last name: ${emailInfo.lastName}`,
        `Phone: ${emailInfo.phone || "Not provided"}`,
        `Email: ${emailInfo.email}`,
        "",
        "Message:",
        emailInfo.message,
      ].join("\n"),
    });

    if (error) {
      console.error("Resend failed to send the contact form email:", error);
      return {
        success: false,
        error: "Your message could not be sent. Please try again later.",
      };
    }

    return { success: true, data: { id: data.id } };
  } catch (error) {
    console.error("Resend request failed:", error);
    return {
      success: false,
      error: "Your message could not be sent. Please try again later.",
    };
  }
}
