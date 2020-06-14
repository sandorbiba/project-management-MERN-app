import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";
import { login } from "../ducks/usersDucks";

const registerSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(6, "Too Short!")
    .max(15, "Too Long!")
    .required("Required"),
});

const Login = ({ login, history }) => (
  <div>
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={registerSchema}
      onSubmit={({ email, password }) => {
        login({ email, password, history });
      }}
    >
      {({ errors, touched, values }) => (
        <Form>
          <div>
            <label htmlFor="email">Email Address</label>
            <Field name="email" />
            {errors.email && touched.email ? <div>{errors.email}</div> : null}
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <Field name="password" type="password" />
            {errors.password && touched.password ? (
              <div>{errors.password}</div>
            ) : null}
          </div>

          <button
            type="submit"
            disabled={
              values.email === "" || values.password === "" ? "disabled" : ""
            }
          >
            Login
          </button>
        </Form>
      )}
    </Formik>
  </div>
);

const mapDispatchToProps = { login };

export default connect(null, mapDispatchToProps)(Login);
