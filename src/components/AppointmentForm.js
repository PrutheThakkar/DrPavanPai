import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

// ✅ Use PRODUCTION URL from n8n (click "Production URL" tab in Webhook1)
const N8N_WEBHOOK_URL = "https://pruthe.app.n8n.cloud/webhook/b31572ee-6a3f-4b46-8f1c-eda3de345b35";

const AppointmentForm = () => {
  const [formMessage, setFormMessage] = useState("");

  const validationSchema = Yup.object({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    phone: Yup.string().required("Phone Number is required"),
    email: Yup.string().email("Invalid email format").required("Email is required"),
    message: Yup.string().required("Message is required"),
  });

  const handleFormSubmit = async (values, { resetForm, setSubmitting }) => {
    try {
      setFormMessage("");

      const response = await fetch(N8N_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: values.firstName,
          lastName: values.lastName,
          phone: values.phone,
          email: values.email,
          message: values.message,
          submittedAt: new Date().toISOString(),
          source: "drpavanpai.com",
        }),
      });

      if (response.ok) {
        resetForm();
        setFormMessage("Thank you! Your message has been sent. We'll get back to you shortly.");
      } else {
        setFormMessage(`Something went wrong (${response.status}). Please try again.`);
      }
    } catch (error) {
      console.error("Submit error:", error);
      setFormMessage("Network error. Please check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={{ firstName: "", lastName: "", phone: "", email: "", message: "" }}
      validationSchema={validationSchema}
      onSubmit={handleFormSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="appointment-form">
          <div className="form-group">
            <Field type="text" name="firstName" placeholder="First Name" />
            <ErrorMessage name="firstName" component="div" className="error" />
          </div>
          <div className="form-group">
            <Field type="text" name="lastName" placeholder="Last Name" />
            <ErrorMessage name="lastName" component="div" className="error" />
          </div>
          <div className="form-group">
            <Field type="tel" name="phone" placeholder="Phone Number" />
            <ErrorMessage name="phone" component="div" className="error" />
          </div>
          <div className="form-group">
            <Field type="email" name="email" placeholder="Email" />
            <ErrorMessage name="email" component="div" className="error" />
          </div>
          <div className="form-group">
            <Field as="textarea" name="message" rows="3" placeholder="your message" />
            <ErrorMessage name="message" component="div" className="error" />
          </div>
          <div className="btn-wrap">
            <button type="submit" className="btn" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Consult Now"}
            </button>
          </div>
          {formMessage && (
            <div
              className="wpcf7-response-output"
              style={{
                color: formMessage.startsWith("Thank you") ? "green" : "red",
                marginTop: 12,
              }}
            >
              {formMessage}
            </div>
          )}
        </Form>
      )}
    </Formik>
  );
};

export default AppointmentForm;