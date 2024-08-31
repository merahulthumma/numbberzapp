import RequestTaxReturnForm from "./RequestTaxReturnForm";
export default function RequestTaxReturnPage() {
  return (
    <div className="container mx-auto mt-20 p-5">
      <h1 className="text-2xl font-bold mb-5 text-center">
        Welcome to our Numberz Insight Tax Return Service
      </h1>
      <RequestTaxReturnForm />
    </div>
  );
}
