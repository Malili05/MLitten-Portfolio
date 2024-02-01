import React from "react";
import { useState } from "react";

// if (!validateEmail(email)) {

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const Contact = () => {
  const [name, setName] = useState("");

  function onNameChange(event) {
    const newName = event.target.value;
    setName(newName);
  }

  function onNameBlur() {
    if (name == "") {
      document.getElementById("name-warning").style.display = "block";
    } else {
      document.getElementById("name-warning").style.display = "none";
    }
  }

  return (
    <section id="contact" class="container page-section">
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">
          Name
        </label>
        <input
          type="text"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="Name"
          value={name}
          onChange={onNameChange}
          onBlur={onNameBlur}
        />
        <p
          id="name-warning"
          style={{
            display: "none",
          }}
          class="text-danger"
        >
          Name cannot be empty!
        </p>
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">
          Email address
        </label>
        <input
          type="email"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
          required
        />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">
          Message
        </label>
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
      </div>
    </section>
  );
};

export default Contact;
