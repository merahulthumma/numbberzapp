import React from "react";
import { useRouter } from "next/router";

const Payments: React.FC = () => {
  const router = useRouter();

  const handlePayment = () => {
    // TODO: Implement Stripe payment logic
    console.log("Payment processed");
    router.push("/dashboard");
  };

  return (
    <div className="container mx-auto mt-20 p-5">
      <h1 className="text-2xl font-bold mb-5">Payment</h1>
      <p className="mb-4">Amount: $99 AUD</p>
      <button
        onClick={handlePayment}
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Process Payment
      </button>
    </div>
  );
};

export default Payments;
