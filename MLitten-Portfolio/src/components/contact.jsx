// import React from "react";
// import { useState } from "react";
// import "../styles/contactStyles.css"

// // if (!validateEmail(email)) {

// const validateEmail = (email) => {
//   return String(email)
//     .toLowerCase()
//     .match(
//       /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//     );
// };

// const Contact = () => {
//   const [name, setName] = useState("");

//   function onNameChange(event) {
//     const newName = event.target.value;
//     setName(newName);
//   }

//   function onNameBlur() {
//     if (name == "") {
//       document.getElementById("name-warning").style.display = "block";
//     } else {
//       document.getElementById("name-warning").style.display = "none";
//     }
//   }

//   return (
//     <section id="contact" class="container page-section">
//       <div class="mb-3">
//         <label for="exampleFormControlInput1" class="form-label">
//           Name
//         </label>
//         <input
//           type="text"
//           class="form-control"
//           id="exampleFormControlInput1"
//           placeholder="Name"
//           value={name}
//           onChange={onNameChange}
//           onBlur={onNameBlur}
//         />
//         <p
//           id="name-warning"
//           style={{
//             display: "none",
//           }}
//           class="text-danger"
//         >
//           Name cannot be empty!
//         </p>
//       </div>
//       <div class="mb-3">
//         <label for="exampleFormControlInput1" class="form-label">
//           Email address
//         </label>
        
//         <input
//           type="email"
//           class="form-control"
//           id="exampleFormControlInput1"
//           placeholder="name@example.com"
//           required
//         />
//       </div>
//       <div class="mb-3">
//         <label for="exampleFormControlTextarea1" class="form-label">
//           Message
//         </label>
//         <textarea
//           class="form-control"
//           id="exampleFormControlTextarea1"
//           rows="3"
//         ></textarea>
//       </div>
//     </section>
//   );
// };

// export default Contact;
import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [message, setMessage] = useState('');

  function onNameChange(event) {
    const newName = event.target.value;
    setName(newName);
  }

  function onNameBlur() {
    if (name === '') {
      document.getElementById('name-warning').style.display = 'block';
    } else {
      document.getElementById('name-warning').style.display = 'none';
    }
  }

  function onEmailChange(event) {
    const newEmail = event.target.value;
    setEmail(newEmail);

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailRegex.test(newEmail);

    if (!isValidEmail) {
      setEmailError('Please enter a valid email address');
    } else {
      setEmailError('');
    }
  }

  function onMessageChange(event) {
    const newMessage = event.target.value;
    setMessage(newMessage);
  }

  function handleSubmit(event) {
    event.preventDefault();
    // Add your form submission logic here

    // Clear the form after submission
    setName('');
    setEmail('');
    setEmailError('');
    document.getElementById('name-warning').style.display = 'none';
    setMessage('');

    console.log('Form submitted!');
  }

  return (
    <section id="contact" className="container page-section">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Name"
            value={name}
            onChange={onNameChange}
            onBlur={onNameBlur}
          />
          <p
            id="name-warning"
            style={{
              display: 'none',
            }}
            className="text-danger"
          >
            Name cannot be empty!
          </p>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput2" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput2"
            placeholder="name@example.com"
            value={email}
            onChange={onEmailChange}
            required
          />
          {emailError && (
            <p className="text-danger">{emailError}</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Message
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            value={message}
            onChange={onMessageChange}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </section>
  );
};

export default Contact;