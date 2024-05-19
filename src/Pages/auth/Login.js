import React from "react";
import authImg from "../../assets/images/authimage.png";
import lock from "../../assets/images/lockicon.png";
import logo from "../../assets/images/logo.svg";
import mail from "../../assets/images/mailicon.png";
import hand from "../../assets/images/wavingHang.png";
import "../../styles/Auth.css";
import LoginLogics from "./service/loginLogics";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

function Login() {
  const [
    email,
    setEmail,
    password,
    setPassword,
    visible,
    setVisible,
    handleLogin,
    loggedin,
  ] = LoginLogics();

  return (
    <>
      <div className="auth-container">
        <div className="auth-image-container">
          <img src={authImg} alt="" />
        </div>
        <div className="main-container">
          <div className="logo-container">
            <img src={logo} alt="RPMS Logo" />
            <h1>RPMS</h1>
          </div>
          <div className="main-title-section">
            <h2>
              Hey, Hello
              <img src={hand} alt="" />
            </h2>
            <p>Enter the information you entered while registering</p>
          </div>
          <form className="form-container" onSubmit={handleLogin}>
            <h2>Login</h2>
            <div className="input-group">
              <label htmlFor="email">Email address</label>
              <span className="input-item">
                <img src={mail} alt="" />
              </span>
              <input
                id="email"
                name="email"
                value={email}
                type="email"
                placeholder="NarayanMurthy@gmail.com"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <span className="input-item">
                <img src={lock} alt="" />
              </span>
              <input
                id="password"
                name="password"
                value={password}
                type={visible ? "password" : "text"}
                placeholder="**************"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span className="input-item" id="eye">
                {visible ? (
                  <FaEyeSlash onClick={() => setVisible(!visible)} />
                ) : (
                  <FaEye onClick={() => setVisible(!visible)} />
                )}
              </span>
            </div>
            <div className="check-btn">
              <div>
                <input type="checkbox" id="remember" />
                <label htmlFor="remember">Remember me</label>
              </div>
              <Link
                to="/forgotpassword"
                style={{
                  textDecoration: "none",
                  color: "#082567",
                }}
              >
                Forgot password?
              </Link>
            </div>
            <button style={{ cursor: "pointer" }} type="submit">
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
