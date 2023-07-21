import React, { useState } from "react";
import styles from "./LoginForm.module.css";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordErrorMessage, setShowPasswordErrorMessage] =
    useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.length < 6) {
      setShowPasswordErrorMessage(true);
      return;
    }
    setShowPasswordErrorMessage(false);
    setEmail("");
    setPassword("");
    console.log(email, password);
  };
  return (
    <>
      <form className={styles.form1} onSubmit={handleSubmit}>
        <h1 className={styles.heading}>🔏Login🔏</h1>
        <div className={styles.inputContainer}>
          <EmailIcon className={styles.icon} />
          <input
            type="email"
            placeholder="Enter email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className={styles.inputAndErrorContainer}>
          <div className={styles.inputContainer}>
            <LockIcon className={styles.icon} />
            <input
              type={!showPassword ? "password" : "text"}
              placeholder="Enter password..."
              className={styles.passwordInput}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            {!showPassword ? (
              <VisibilityIcon
                className={styles.icon}
                onClick={() => setShowPassword(!showPassword)}
              />
            ) : (
              <VisibilityOffIcon
                className={styles.icon}
                onClick={() => setShowPassword(!showPassword)}
              />
            )}
          </div>
          {showPasswordErrorMessage && (
            <p className={styles.errorMessage}>Password too short!</p>
          )}
        </div>
        <button className={styles.loginButton} type="submit">
          Login
        </button>
      </form>
      <h4 className={styles.h4}>Dont'have an account yet?</h4>
    </>
  );
};

export default LoginForm;