import { useState } from "react";
import Button from "./Button";
function Form() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!email.includes("@")) {
      setError("Please enter a valid email.");
    } else {
      setError("");
    }

    setSubmitted(true);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {/* Reusable Button component */}
      <Button>Submit</Button>
      {submitted && !error && (
        <p className="success">Form submitted successfully!</p>
      )}
      {error && <p className="error">{error}</p>}
    </form>
  );
}

export default Form;
