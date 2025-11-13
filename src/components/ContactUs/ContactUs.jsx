"use client";

import React, { useState } from "react";
import emailjs from "@emailjs/browser";

export const ContactUs = () => {
  // Controlled form state
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [popup, setPopup] = useState({
    visible: false,
    message: "",
    success: true,
  });

  // Validation function
  const validate = (data) => {
    const newErrors = {};

    // First Name & Last Name
    if (!data.first_name.trim())
      newErrors.first_name = "First name is required";
    else if (!/^[A-Za-z]+$/.test(data.first_name.trim()))
      newErrors.first_name = "First name should contain letters only";
    else if (data.first_name.trim().length < 3)
      newErrors.first_name = "First name should be at least 3 characters";

    if (!data.last_name.trim()) newErrors.last_name = "Last name is required";
    else if (!/^[A-Za-z]+$/.test(data.last_name.trim()))
      newErrors.last_name = "Last name should contain letters only";
    else if (data.last_name.trim().length < 3)
      newErrors.last_name = "Last name should be at least 3 characters";

    // Email
    if (!data.email.trim()) newErrors.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(data.email.trim()))
      newErrors.email = "Email is invalid";

    // Phone (optional)
    if (data.phone.trim() && !/^\d{7,15}$/.test(data.phone.trim()))
      newErrors.phone = "Phone number should be 7-15 digits";

    // Message
    if (!data.message.trim()) newErrors.message = "Message is required";
    else if (data.message.trim().length < 10)
      newErrors.message = "Message should be at least 10 characters";

    return newErrors;
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate(formData);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    emailjs
      .send(
        "service_e9u088i",
        "template_r2h2qpe",
        formData,
        "63jXgF7NSzyg_VhYD"
      )
      .then(
        () => {
          setPopup({
            visible: true,
            message: "Message sent successfully!",
            success: true,
          });
          setFormData({
            first_name: "",
            last_name: "",
            email: "",
            phone: "",
            message: "",
          });
          setErrors({});
        },
        (error) => {
          console.error("FAILED...", error.text);
          setPopup({
            visible: true,
            message: "Failed to send message. Please try again.",
            success: false,
          });
        }
      );
  };

  return (
    <div className="flex flex-col items-center justify-center px-4 relative  ">
      <form onSubmit={handleSubmit} className="w-full  bg-transparent">
        {/* First & Last Name */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm font-semibold mb-2">
              First Name
            </label>
            <input
              type="text"
              name="first_name"
              value={formData.first_name}
              onChange={(e) =>
                setFormData({ ...formData, first_name: e.target.value })
              }
              className={`w-full border-b py-2 bg-transparent focus:outline-none ${
                errors.first_name ? "border-red-500" : "border-black"
              }`}
            />
            {errors.first_name && (
              <p className="text-red-500 text-xs mt-1">{errors.first_name}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2">
              Last Name
            </label>
            <input
              type="text"
              name="last_name"
              value={formData.last_name}
              onChange={(e) =>
                setFormData({ ...formData, last_name: e.target.value })
              }
              className={`w-full border-b py-2 bg-transparent focus:outline-none ${
                errors.last_name ? "border-red-500" : "border-black"
              }`}
            />
            {errors.last_name && (
              <p className="text-red-500 text-xs mt-1">{errors.last_name}</p>
            )}
          </div>
        </div>

        {/* Email & Phone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm font-semibold mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className={`w-full border-b py-2 bg-transparent focus:outline-none ${
                errors.email ? "border-red-500" : "border-black"
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  phone: e.target.value.replace(/\D/, ""),
                })
              }
              className={`w-full border-b py-2 bg-transparent focus:outline-none ${
                errors.phone ? "border-red-500" : "border-black"
              }`}
            />

            {errors.phone && (
              <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
            )}
          </div>
        </div>

        {/* Message */}
        <div className="mb-8">
          <label className="block text-sm font-semibold mb-2">Message</label>
          <textarea
            name="message"
            rows="3"
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            className={`w-full border-b py-2 bg-transparent focus:outline-none resize-none ${
              errors.message ? "border-red-500" : "border-black"
            }`}
          />
          {errors.message && (
            <p className="text-red-500 text-xs mt-1">{errors.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="inline-flex justify-center items-center bg-teal-400 text-white px-6 py-2 rounded hover:bg-teal-500 transition-all duration-200"
          >
            Send Message
          </button>
        </div>
      </form>

      {/* Popup Modal */}
      {popup.visible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-80 text-center">
            <h2
              className={`text-lg font-bold mb-4 ${
                popup.success ? "text-green-600" : "text-red-600"
              }`}
            >
              {popup.success ? "Success!" : "Error"}
            </h2>
            <p className="mb-6">{popup.message}</p>
            <button
              onClick={() => setPopup({ ...popup, visible: false })}
              className="bg-[#26B6B1] text-white px-4 py-2 rounded hover:opacity-90 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
