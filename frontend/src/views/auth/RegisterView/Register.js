import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import styles from './Register.css';

const RegisterSchema = Yup.object().shape({
  userName: Yup.string().min(4, 'Too Short!').max(50, 'Too Long!').required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(6, 'Password has to be longer than 6 characters!')
    .required('Password is required!'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), ''], 'Passwords must match')
    .required('Required'),
  termsOfService: Yup.boolean().oneOf([true], 'You must accept the terms and conditions'),
});

export const Register = () => (
  <div className={styles.register}>
    <h1>Register</h1>
    <Formik
      initialValues={{
        userName: '',
        email: '',
        password: '',
        confirmPassword: '',
        termsOfService: false,
      }}
      validationSchema={RegisterSchema}
      onSubmit={(values) => {
        alert(JSON.stringify(values, null, 2));
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <Field name="userName" placeholder="Username" />
          {errors.userName && touched.userName ? <div>{errors.userName}</div> : null}

          <Field name="email" type="email" placeholder="Email" />
          {errors.email && touched.email ? <div>{errors.email}</div> : null}

          <Field name="password" type="password" placeholder="Password" />
          {errors.password && touched.password ? <div>{errors.password}</div> : null}

          <Field name="confirmPassword" type="password" placeholder="Repeat password" />
          {errors.confirmPassword && touched.confirmPassword ? (
            <div>{errors.confirmPassword}</div>
          ) : null}
          <label htmlFor="termsOfService">
            <Field type="checkbox" name="termsOfService" />
            {errors.termsOfService && touched.termsOfService ? (
              <div>{errors.termsOfService}</div>
            ) : null}
            I agree to the Terms and Conditions
          </label>
          <button type="submit">Register</button>
        </Form>
      )}
    </Formik>
  </div>
);
