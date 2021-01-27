import React from 'react';

import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import styles from './Login.css';

const LoginSchema = Yup.object().shape({
  userName: Yup.string().min(4, 'Too Short!').max(50, 'Too Long!').required('Required'),
  password: Yup.string()
    .min(6, 'Password has to be longer than 6 characters!')
    .required('Password is required!'),
});

export const Login = () => (
  <div className={styles.login}>
    <h1>Login</h1>
    <Formik
      initialValues={{
        userName: '',
        password: '',
      }}
      validationSchema={LoginSchema}
      onSubmit={(values) => {
        alert(JSON.stringify(values, null, 2));
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <Field name="userName" placeholder="Username" />
          {errors.userName && touched.userName ? <div>{errors.userName}</div> : null}

          <Field name="password" type="password" placeholder="Password" />
          {errors.password && touched.password ? <div>{errors.password}</div> : null}

          <button type="submit">Login</button>
        </Form>
      )}
    </Formik>
  </div>
);
