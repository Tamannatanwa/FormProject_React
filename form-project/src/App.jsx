import { useState } from "react";
import "./App.css";
import LoginForm from "./components/loginForm/LoginForm";
import SignUpForm from "./components/loginForm/SignUpForm";
import styles from "./components/loginForm/./LoginForm.module.css";
function App() {
  const [toggle,setToggle] = useState(false);
  const clicked = ()=>{
    setToggle(!toggle)
  }
  return (
    <>
    {!toggle?<SignUpForm/>:<LoginForm/>}
    <button onClick={clicked} className={styles.btn}>{!toggle?"Login an Account":"Create an account"}</button>
    </>
  );
}
export default App;


