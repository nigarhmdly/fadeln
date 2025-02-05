import React from 'react'
import styles from './Login.module.scss'
import { useFormik } from 'formik';


const Login = () => {
    const formik = useFormik({
        initialValues: {
          username: '',
          password: '',
        },
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
      });
  return (
    <section className={styles.login}>
<div className={styles.card}>
    <h1>Login</h1>
<form onSubmit={formik.handleSubmit}>
       <input
         id="username"
         name="username"
         type="text"
         placeholder='Username'
         onChange={formik.handleChange}
         value={formik.values.username}
       />
       <input
         id="password"
         name="password"
         type="password"
         placeholder='Password'
         onChange={formik.handleChange}
         value={formik.values.password}
         required
       />



<a href="/a">Forgot Password?</a>


<button type="submit">Login</button>


<p>Don't have an accont? <a href="/a">Register</a></p>


     </form>


</div>
    </section>
  )
}

export default Login