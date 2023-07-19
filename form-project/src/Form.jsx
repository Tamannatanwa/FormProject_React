import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import styles from "./form.module.css"
const Form = () => {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.flex}>
          <h1>🔏Login🔏</h1>
        </div>
        <div>
          <input type="text" />
        </div>
        <div className={styles.flex}>
          <EmailIcon/>
          <input type="email" name="" id="" />
        </div>
        <div className={styles.flex}>
          <LockIcon />
          <input type="password" name="" id="" />
          <RemoveRedEyeIcon/>
          <VisibilityOffIcon/>
        </div>
        <div>
          <input type="password" name="" id="" />
        </div>
      </div>
    </>
  );
};
export default Form;
