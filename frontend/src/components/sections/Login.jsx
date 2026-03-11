"use client";

import styles from "../../styles/sectionStyles/Login.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrosoft, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login({ action }) {
  const [logState, setLogState] = useState(true);
  const router = useRouter()

  const login = async (e) => {
    e.preventDefault();
    action()
    router.push("/main")
  }

  const changeLogin = () => {
    setLogState(!logState);
  };

  return (
    <>
      <div onClick={action} className={styles.overlay}></div>
      {!logState ? (
        // Login module
        <div className={styles.card}>
          <h2>Login</h2>
          <form className={styles.formContainer} onSubmit={login}>
            <label htmlFor="email">Email:</label>
            <input
              className={styles.input}
              type="email"
              name="email"
              placeholder="Email"
              required
            />
            <label htmlFor="password">Password:</label>
            <input
              className={styles.input}
              type="password"
              name="password"
              placeholder="Password"
              required
            />
            <input
              className={styles.submit}
              type="submit"
              name="password"
              value="Log-in"
              required
            />
          </form>
          <div className={styles.account}>
            <FontAwesomeIcon icon={faMicrosoft} />
            <p>Sign in with Microsoft</p>
          </div>
          <div className={styles.account}>
            <FontAwesomeIcon icon={faGoogle} />
            <p>Sign in with Google</p>
          </div>
          <p>
            Don't have an account?{" "}
            <b className={styles.link} onClick={changeLogin}>
              Click here
            </b>
          </p>
        </div>
      ) : (
        // Register module
        <div className={styles.card}>
          <h2>Register</h2>
          <form className={styles.formContainer}>
            <label htmlFor="user">Name:</label>
            <input
              className={styles.input}
              type="user"
              name="user"
              placeholder="Name"
              required
            />
            <label htmlFor="email">Email:</label>
            <input
              className={styles.input}
              type="email"
              name="email"
              placeholder="Email"
              required
            />
            <label htmlFor="password">Password:</label>
            <input
              className={styles.input}
              type="password"
              name="password"
              placeholder="Password"
              required
            />
            <input
              className={styles.submit}
              type="submit"
              name="register"
              value="Register"
              required
            />
          </form>
          <div className={styles.account}>
            <FontAwesomeIcon icon={faMicrosoft} />
            <p>Register with Microsoft</p>
          </div>
          <div className={styles.account}>
            <FontAwesomeIcon icon={faGoogle} />
            <p>Register with Google</p>
          </div>
          <p>
            Do you have an account?{" "}
            <b className={styles.link} onClick={changeLogin}>
              Click here
            </b>
          </p>
        </div>
      )}
    </>
  );
}