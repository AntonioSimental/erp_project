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
    const userData = Object.fromEntries(new FormData(e.target))
    try {
      const data = await fetch("http://localhost:4000/api/login", 
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          credentials: "include",
          body: JSON.stringify(
            {
              correo: userData.email,
              contrasena: userData.password
            }
          )
        }
      );
      const res = await data.json();
      if (!data.ok) {
        return alert(res.msg);
      }
      alert("Login Succesfull");
      action()
      router.push("/main")
    } catch (err) {
      alert(err.message)
    }
  }

  const changeLogin = () => {
    setLogState(!logState);
  };

  const regUser = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));

    fetch("http://localhost:4000/api/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(
          {
            nombre: data.user,
            correo: data.email,
            contrasena: data.password
          }
        )
      }
    )
    .then(res => {
      if (!res.ok) {
        return res.json().then(data => {
          throw new Error(data.msg);
        })
      }

      return res.json();
    })
    .then(res => {
      alert(res.msg)
      setLogState(!logState);
      console.log(res);
    })
    .catch(err => alert(err.message))
  }

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
          <form className={styles.formContainer} onSubmit={regUser}>
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