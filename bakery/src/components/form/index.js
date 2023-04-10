import React, { useState } from "react";
import "./styles.scss";

function Bookings() {
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [field, setfield] = useState("");
  const [err, seterr] = useState(false);
  const [submitting, setsubmitting] = useState(false);
  // const [loading, setloading] = useState(false);

  const handleNameChange = (e) => {
    setusername(e.currentTarget.value);
  };

  const handleEmailChange = (e) => {
    setemail(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim() === "" || email.trim() === "") {
      setfield("Some fields are unfilled");
      seterr(true);
    } else {
      seterr(false);
      setfield("");
      setsubmitting(true);
    }
    console.log(`Form value: ${username}, ${email}`);
  };

  // Render
  return (
    <div className="home_page_booking">
      {!submitting && (
        <div>
          <p>To book, call us (123) 444–5678 or use the form below.</p>
          {err && <h6 className="home_page_booking-err">{field}</h6>}
          <form>
            <div className="home_page_booking-inputs">
              <label for="name">Name: </label>
              <input
                name="name"
                onChange={handleNameChange}
                type="text"
                value={username}
                required
              />
            </div>
            <div className="home_page_booking-inputs">
              <label for="email">Email: </label>
              <input
                name="email"
                onChange={handleEmailChange}
                type="email"
                value={email}
                required
              />
            </div>
            <div className="home_page_booking-inputs">
              <label for="phone">Phone: </label>
              <input name="phone" type="tel" required />
            </div>
            <div className="home_page_booking-inputs">
              <label for="date">Date: </label>
              <input name="date" type="date" required />
            </div>
            <div className="home_page_booking-inputs home_page_booking-inputs-request">
              <label for="request">Special Request: </label>
              <input name="request" type="text" />
            </div>
            <button
              className="home_page_booking-submit"
              onClick={handleSubmit}
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      )}
      {submitting && (
        <div className="home_page_booking-submitting">
          <p>
            Thank You {username} for chosing to book with us. We will send you a
            confirmation email to {email}.
          </p>
        </div>
      )}
    </div>
  );
}

export { Bookings };
