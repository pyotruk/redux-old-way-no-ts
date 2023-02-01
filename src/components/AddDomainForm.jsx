import React, { useState } from "react";

export default function AddDomainForm() {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // dispatch(postNoteAsync(text));
    setText("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="text"
        value={text}
        onChange={handleChange}
        required
      />
      <button type="submit">Add domain</button>
    </form>
  );
}
