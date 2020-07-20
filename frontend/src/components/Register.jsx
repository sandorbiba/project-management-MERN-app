import React from "react";
import { Formik, Form, Field } from "formik";
import { connect } from "react-redux";
import { register } from "../ducks/usersDucks";
import * as Yup from "yup";

const registerSchema = Yup.object().shape({
  username: Yup.string()
    .min(6, "Too Short!")
    .max(15, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(6, "Too Short!")
    .max(15, "Too Long!")
    .required("Required"),
  confirmPassword: Yup.string()
    .min(6, "Too Short!")
    .max(15, "Too Long!")
    .required("Required")
    .oneOf([Yup.ref("password"), ""], "Passwords must match"),
});

const Register = ({ register, ...props }) => (
  <div>
    {console.log(props)}
    <Formik
      initialValues={{
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={registerSchema}
      onSubmit={(values) => {
        const { username, email, password } = values;
        register({ username, email, password, history: 0 });
      }}
    >
      {({ errors, touched, values }) => (
        <Form>
          <div>
            <label htmlFor="username">Username</label>
            <Field name="username" />
            {errors.username && touched.username ? (
              <div>{errors.username}</div>
            ) : null}
          </div>

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

          <div>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <Field name="confirmPassword" type="password" />
            {errors.confirmPassword && touched.confirmPassword ? (
              <div>{errors.confirmPassword}</div>
            ) : null}
          </div>
          <button
            type="submit"
            disabled={
              values.username === "" ||
              values.email === "" ||
              values.password === "" ||
              values.confirmPassword === ""
                ? "disabled"
                : ""
            }
          >
            Register
          </button>
        </Form>
      )}
    </Formik>
  </div>
);

const mapDispatchToProps = { register };

export default connect(null, mapDispatchToProps)(Register);
