import { z } from "zod";
import { Resend } from "resend";
import React from "react";
import ContactFormEmail from "@components/emails/ContactFormEmail";
import {
  SEND_EMAIL_MESSAGE_FAILED,
  SEND_EMAIL_MESSAGE_SUCCESS,
} from "@lib/constMessages";

const resend = new Resend(process.env.RESEND_API_KEY);

const Schema = z.object({
  name: z
    .string({
      invalid_type_error: "Name should be string.",
      required_error: "You should provide a name.",
    })
    .min(3, "Name length should be at least 3 characters.")
    .max(32, "Name length should not exceed 32 characters."),
  email: z
    .string({
      invalid_type_error: "Email should be string.",
      required_error: "You should provide an email.",
    })
    .min(1, "You should provide an email.")
    .max(500, "Please provide a valid email.")
    .email("Please provide a valid email."),
  message: z
    .string({
      invalid_type_error: "Message should be string",
      required_error: "You should provide a message",
    })
    .min(10, "Message length should be at least 10 characters.")
    .max(5000, "Message length should not exceed 1000 characters."),
});

function sendRes(status: number, message: string, success: boolean) {
  return Response.json(
    { success, message },
    {
      status: status,
    }
  );
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const res = Schema.safeParse(body);
    if (!res.success) {
      return Response.json(
        { success: false, message: res.error.issues[0].message },
        {
          status: 400,
        }
      );
    }
    const { name, message, email } = res.data;

    try {
      const emailRes = await resend.emails.send({
        from: "Portfolio <onboarding@resend.dev>",
        to: process.env.EMAIL as string,
        subject: `Message from contact form by ${name}`,
        reply_to: email,
        react: React.createElement(ContactFormEmail, {
          senderName: name,
          message,
          senderEmail: email,
        }),
      });

      if (emailRes.id) {
        return sendRes(200, SEND_EMAIL_MESSAGE_SUCCESS, true);
      } else {
        return sendRes(500, SEND_EMAIL_MESSAGE_FAILED, false);
      }
    } catch (err) {
      return sendRes(500, SEND_EMAIL_MESSAGE_FAILED, false);
    }
  } catch (err) {
    return sendRes(500, SEND_EMAIL_MESSAGE_FAILED, false);
  }
}
