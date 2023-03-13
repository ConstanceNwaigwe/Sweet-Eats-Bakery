import React from "react";
import { Formik, Field, Form } from "formik";
import "./styles.css";

function Bookings() {
  return (
    <div className="bookings">
      <p>To book a table, call us (123) 444–5678 or use the form below.</p>
      <Formik
        initialValues={{ name: "", email: "", phone: "", date: "" }}
        onSubmit={async (values) => {
          await new Promise((resolve) => setTimeout(resolve, 500));
          console.log(values);
          // const a = JSON.stringify(values, null, 2);
          // console.log(a[0].name);
        }}
      >
        <Form>
          <label for="name">Name</label>
          <Field name="name" type="text" required />
          <label for="email">Email</label>
          <Field name="email" type="email" required />
          <label for="phone">Phone</label>
          <Field name="phone" type="tel" required />
          <label for="date">Date</label>
          <Field name="date" type="date" required />
          <label for="request">Special Request</label>
          <Field name="request" type="text" />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
}

export { Bookings };
