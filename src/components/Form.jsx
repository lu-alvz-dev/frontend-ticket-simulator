import { useState } from "react";
import Button from "./Button";
function Form() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
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
      {submitted && <p>Form submitted</p>}
    </form>
  );
}

export default Form;
