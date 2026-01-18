"use server"

import { Resend } from "resend"
import { contactMeSchema, ContactMeResult } from "./types"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function contactMe(formData: FormData): Promise<ContactMeResult> {
  try {
    // Check API key configuration
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not configured")
      return {
        success: false,
        error: "Email service is not configured. Please contact support.",
      }
    }

    // Extract and validate form data
    const rawData = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      phone: formData.get("phone") || "",
      message: formData.get("message"),
    }

    const validationResult = contactMeSchema.safeParse(rawData)

    if (!validationResult.success) {
      const firstError = validationResult.error.issues[0]
      return {
        success: false,
        error: firstError?.message ?? "Validation failed",
      }
    }

    const { firstName, lastName, email, phone, message } = validationResult.data

    const submitterName = `${firstName} ${lastName}`.trim()

    // HTML escape utility function
    const escapeHtml = (text: string): string => {
      const map: Record<string, string> = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;",
      }
      return text.replace(/[&<>"']/g, (char) => map[char] ?? char)
    }

    // Email template
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #8B0055; border-bottom: 2px solid #EEEEEE; padding-bottom: 10px;">
          Message from eneotu.com contact form
        </h2>
        <div style="background-color: #FAF8F5; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p style="margin: 0 0 10px 0;"><strong>From:</strong> ${escapeHtml(submitterName)}</p>
          <p style="margin: 0 0 10px 0;"><strong>Email:</strong> ${escapeHtml(email)}</p>
          ${phone ? `<p style="margin: 0 0 10px 0;"><strong>Phone:</strong> ${escapeHtml(phone)}</p>` : ""}
        </div>
        <div style="background-color: #fff; padding: 20px; border: 1px solid #E8E4DE; border-radius: 8px;">
          <h3 style="color: #333; margin-top: 0;">Message:</h3>
          <p style="color: #555; line-height: 1.6; white-space: pre-wrap;">${escapeHtml(message)}</p>
        </div>
      </div>
    `

    // Send email via Resend
    const result = await resend.emails.send({
      from: "info@eneotu.com",
      to: ["eneotujoe@gmail.com"],
      subject: `New message from ${submitterName}`,
      html: emailHtml,
      replyTo: email,
    })

    if (result.error) {
      console.error("Resend API error:", result.error)
      return {
        success: false,
        error: "Failed to submit contact form. Please try again.",
      }
    }

    return { success: true }
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error"
    console.error("Failed to send contact form email:", errorMessage, error)
    return {
      success: false,
      error: "Failed to submit contact form. Please try again.",
    }
  }
}
