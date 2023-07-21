import React, { useState } from "react";
import styles from "./LoginForm.module.css";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const LoginForm = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showPasswordErrorMessage, setShowPasswordErrorMessage] =
    useState(false);
  const [mismatchPassward,setMismatchPassward] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    let a = 0;
    let b = 0;
    let c = 0;
    let d = 0;
    const capitalalphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const smallalphabets = "abcdefghijklmnopqrstuvwxyz";
    const specialcharacters = "@&!_#?";
    const digits = "0123456789";
    if (password.length >= 6) {
      for (let i = 0; i < password.length; i++) {
        if (capitalalphabets.includes(password[i])) {
          a = a + 1;
        }
        if (smallalphabets.includes(password[i])) {
          b = b + 1;
        }
        if (specialcharacters.includes(password[i])) {
          c = c + 1;
        }
        if (digits.includes(password[i])) {
          d = d + 1;
        }
      }
      if (
        a >= 1 &&
        b >= 1 &&
        c >= 1 &&
        d >= 1 &&
        a + b + c + d === password.length
      ) {
      } else {
        setShowPasswordErrorMessage(true);
        return;
      }
    } else {
      alert("password length at least 6");
      return;
    }
    setShowPasswordErrorMessage(false);
    if (password!==confirmpassword){
      setMismatchPassward(true);
      return;
    }
    setMismatchPassward(false);
    setUserName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    console.log(userName,email, password);
  };
  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h1 className={styles.heading}>🔏Signup🔏</h1>
        <div className={styles.inputContainer}>
          <AccountCircleIcon className={styles.icon}/>
          <input
            type="text"
            placeholder="Enter your fullName..."
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
          />
        </div>
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
            <p className={styles.errorMessage}>Password is not strong!</p>
          )}
        </div>
        <div className={styles.inputAndErrorContainer}>
          <div className={styles.inputContainer}>
            <LockIcon className={styles.icon} />
            <input
              type={!showConfirmPassword ? "password" : "text"}
              placeholder="Enter Confirm password..."
              className={styles.passwordInput}
              value={confirmpassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />

            {!showConfirmPassword ? (
              <VisibilityIcon
                className={styles.icon}
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              />
            ) : (
              <VisibilityOffIcon
                className={styles.icon}
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              />
            )}
          </div>
          {mismatchPassward && (
            <p className={styles.errorMessage}>Password mismatches!</p>
          )}
        </div>
        <button className={styles.loginButton} type="submit">
          Signup
        </button>
      </form>
      <h4 className={styles.h4}>Account already exist</h4>
    </>
  );
};

export default LoginForm;
