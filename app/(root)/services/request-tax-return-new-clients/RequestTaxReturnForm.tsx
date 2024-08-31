"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const RequestTaxReturnForm: React.FC = () => {
  const [clientType, setClientType] = useState<"TFN" | "ABN">("TFN");
  const [formData, setFormData] = useState({
    financialYear: "",
    communicationPreference: "",
    firstName: "",
    surname: "",
    email: "",
    phone: "",
    address: "",
    bsb: "",
    accountNumber: "",
    otherIncome: "",
    authorized: false,
  });

  // Generate last 5 financial years
  const currentYear = new Date().getFullYear();
  const financialYears = Array.from(
    { length: 5 },
    (_, i) => `${currentYear - i - 1}/${currentYear - i}`
  );

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission logic
    console.log("Form submitted", { clientType, ...formData });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg"
    >
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-white">
        Request Tax Return - Existing Clients
      </h1>
      <div className="mb-6">
        <div className="flex justify-center space-x-4">
          <button
            type="button"
            className={`px-6 py-2 rounded-md ${
              clientType === "TFN"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-300"
            }`}
            onClick={() => setClientType("TFN")}
          >
            TFN Income
          </button>
          <button
            type="button"
            className={`px-6 py-2 rounded-md ${
              clientType === "ABN"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-300"
            }`}
            onClick={() => setClientType("ABN")}
          >
            ABN Income
          </button>
        </div>
        <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
          Price: {clientType === "TFN" ? "$99" : "$120"} plus GST (10%)
        </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="financialYear"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Select Financial Year *
          </label>
          <select
            id="financialYear"
            name="financialYear"
            value={formData.financialYear}
            onChange={handleInputChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          >
            <option value="">Select a year</option>
            {financialYears.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Communication Preference *
          </label>
          <div className="mt-2 space-y-2">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="communicationPreference"
                value="office"
                checked={formData.communicationPreference === "office"}
                onChange={handleInputChange}
                className="form-radio"
              />
              <span className="ml-2">+$30 - Appointment in office</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="communicationPreference"
                value="online"
                checked={formData.communicationPreference === "online"}
                onChange={handleInputChange}
                className="form-radio"
              />
              <span className="ml-2">
                Online – we may call you to clarify details
              </span>
            </label>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              First Name *
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </div>
          <div>
            <label
              htmlFor="surname"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Surname *
            </label>
            <input
              type="text"
              id="surname"
              name="surname"
              value={formData.surname}
              onChange={handleInputChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Phone *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
        </div>

        <div>
          <label
            htmlFor="address"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Address *
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="bsb"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              BSB *
            </label>
            <input
              type="text"
              id="bsb"
              name="bsb"
              value={formData.bsb}
              onChange={handleInputChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </div>
          <div>
            <label
              htmlFor="accountNumber"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Account Number *
            </label>
            <input
              type="text"
              id="accountNumber"
              name="accountNumber"
              value={formData.accountNumber}
              onChange={handleInputChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="otherIncome"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Other Income (please describe)
          </label>
          <textarea
            id="otherIncome"
            name="otherIncome"
            value={formData.otherIncome}
            onChange={handleInputChange}
            rows={4}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          ></textarea>
        </div>

        <div>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              name="authorized"
              checked={formData.authorized}
              onChange={handleInputChange}
              required
              className="form-checkbox"
            />
            <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">
              I authorize Numberz Insight to act on my behalf with ATO until
              otherwise advised and I accept the Terms and Conditions *
            </span>
          </label>
        </div>

        <div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Submit Request
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default RequestTaxReturnForm;
