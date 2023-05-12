import './App.css';
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik"; 

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required("Name is required"),
  email: Yup.string()
    .email("Invalid email")
    .required("Email is required"),
  address: Yup.string()
    .required("Address is required"),
  city: Yup.string()
    .required("City is required"),
  state: Yup.string()
    .required("State is required"),
  zip: Yup.string()
    .required("Zip code is required"),
  cardName: Yup.string()
    .required("Name on card is required"),
  cardNumber: Yup.string()
    .required("Card number is required"),
  expDate: Yup.string()
    .required("Expiration date is required"),
  cvv: Yup.string()
    .required("CVV is required")
});

const CheckoutForm = () => {
  const initialValues = {
    name: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    cardName: "",
    cardNumber: "",
    expDate: "",
    cvv: ""
  };

  const handleSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  };

  return (
    <div>
      <h1>Checkout</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({ isSubmitting }) => (
          <Form>
            <label htmlFor="name">Name</label>
            <Field type="text" name="name" />
            <ErrorMessage name="name" component="div" />

            <label htmlFor="email">Email</label>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" />

            <label htmlFor="address">Address</label>
            <Field type="text" name="address" />
            <ErrorMessage name="address" component="div" />

            <label htmlFor="city">City</label>
            <Field type="text" name="city" />
            <ErrorMessage name="city" component="div" />

            <label htmlFor="state">State</label>
            <Field type="text" name="state" />
            <ErrorMessage name="state" component="div" />

            <label htmlFor="zip">Zip Code</label>
            <Field type="text" name="zip" />
            <ErrorMessage name="zip" component="div" />

            <label htmlFor="cardName">Name on Card</label>
            <Field type="text" name="cardName" />
            <ErrorMessage name="cardName" component="div" />

            <label htmlFor="cardNumber">Card Number</label>
            <Field type="text" name="cardNumber" />
            <ErrorMessage name="cardNumber" component="div" />

            <label htmlFor="expDate">Expiration Date</label>
            <Field type="text" name="expDate" />
            <ErrorMessage name="expDate" component="div" />

            <label htmlFor="cvv">CVV</label>
            <Field type="text" name="cvv" />
            <ErrorMessage name="cvv" component="div" />

            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
      </div>
  )}

export default CheckoutForm;
