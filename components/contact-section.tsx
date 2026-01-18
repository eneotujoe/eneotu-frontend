"use client"

import { useState } from "react"
import { Mail, Send, MapPin, Clock, Heart, CheckCircle2, Loader2 } from "lucide-react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { contactMeSchema, ContactMeFormData, ContactMeResult } from "@/lib/types"
import { contactMe } from "@/lib/actions"

function isValidSubmitResult(result: unknown): result is ContactMeResult {
  return (
    typeof result === "object" &&
    result !== null &&
    "success" in result &&
    typeof (result as ContactMeResult).success === "boolean"
  )
}

export function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactMeFormData>({
    resolver: zodResolver(contactMeSchema),
    mode: "onBlur",
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    },
  })

  const onSubmit = async (data: ContactMeFormData): Promise<void> => {
    setSubmitError(null)
    setIsSubmitted(false)

    try {
      const formData = new FormData()
      
      Object.entries(data).forEach(([key, value]) => {
        formData.append(key, value ?? "")
      })

      const result = await contactMe(formData)

      if (!isValidSubmitResult(result)) {
        throw new Error("Invalid response from server")
      }

      if (result.success) {
        setIsSubmitted(true)
        reset()
        // Auto-hide success message after 5 seconds
        setTimeout(() => setIsSubmitted(false), 5000)
      } else {
        setSubmitError(result.error ?? "Something went wrong. Please try again.")
      }
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Something went wrong. Please try again."
      setSubmitError(errorMessage)
    }
  }

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">Get in Touch</h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          Have a project in mind or just want to chat? Feel free to reach out!
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="soft-shadow rounded-3xl p-6 bg-background">
              <div className="flex items-start gap-4">
                <div className="soft-shadow-sm rounded-2xl p-3 bg-background">
                  <Mail className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Email</h3>
                  <a
                    href="mailto:info@eneotu.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    info@eneotu.com
                  </a>
                </div>
              </div>
            </div>

            <div className="soft-shadow rounded-3xl p-6 bg-background">
              <div className="flex items-start gap-4">
                <div className="soft-shadow-sm rounded-2xl p-3 bg-background">
                  <MapPin className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Location</h3>
                  <p className="text-muted-foreground">South Shields, England</p>
                </div>
              </div>
            </div>

            <div className="soft-shadow rounded-3xl p-6 bg-background">
              <div className="flex items-start gap-4">
                <div className="soft-shadow-sm rounded-2xl p-3 bg-background">
                  <Heart className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Research Interest</h3>
                  <p className="text-muted-foreground">Reinforcement Learning, Multi-agent Systems</p>
                </div>
              </div>
            </div>

            <div className="soft-shadow rounded-3xl p-6 bg-background">
              <div className="flex items-start gap-4">
                <div className="soft-shadow-sm rounded-2xl p-3 bg-background">
                  <Clock className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Availability</h3>
                  <p className="text-muted-foreground">Open for AI research opportunities</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="soft-shadow rounded-3xl p-6 md:p-8 bg-background">
            {isSubmitted && (
              <div className="mb-6 p-4 rounded-xl bg-green-200 border border-green-200 flex items-center gap-3">
                <CheckCircle2 className="text-green-600 dark:text-green-400" size={20} />
                <p className="text-green-600 text-sm">Message sent successfully!</p>
              </div>
            )}

            {submitError && (
              <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200">
                <p className="text-red-800 text-sm">{submitError}</p>
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="flex sm:flex-row flex-col sm:gap-4 gap-4">
                <div className="flex-1">
                  <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    {...register("firstName")}
                    className="w-full px-4 py-3 rounded-xl soft-shadow-inset bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                    placeholder="Your first name"
                  />
                  {errors.firstName && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.firstName.message}</p>
                  )}
                </div>
                
                <div className="flex-1">
                  <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    {...register("lastName")}
                    className="w-full px-4 py-3 rounded-xl soft-shadow-inset bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                    placeholder="Your last name"
                  />
                  {errors.lastName && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.lastName.message}</p>
                  )}
                </div>
              </div>

              <div className="flex sm:flex-row flex-col sm:gap-4 gap-4">
                <div className="flex-1">
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register("email")}
                    className="w-full px-4 py-3 rounded-xl soft-shadow-inset bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                    placeholder="johndoe@gmail.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.email.message}</p>
                  )}
                </div>

                <div className="flex-1">
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Phone (Optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    {...register("phone")}
                    className="w-full px-4 py-3 rounded-xl soft-shadow-inset bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                    placeholder="+1 344 757 4501"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.phone.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  {...register("message")}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl soft-shadow-inset bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
                  placeholder="Tell me about your project..."
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.message.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl soft-shadow bg-primary text-primary-foreground hover:opacity-90 transition-opacity font-medium disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={18} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
