import React from "react";

function Login(props) {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleSignup,
    hasAccount,
    sethasAccount,
    emailerror,
    passworderror,
  } = props;

  return (
    <div>
      <section className="login">
        <div className="loginContainer">
          <label>UserName</label>
          <input
            type="text"
            autoFocus
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p className="errorMsg">{emailerror}</p>
          <label> Password</label>
          <input
            type="text"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="errorMsg">{passworderror}</p>

          <div className="btnContainer">
            {hasAccount ? (
              <>
                <button onClick={handleLogin}>Sign In</button>
                <p>
                  Don't have an account ?
                  <span onClick={() => sethasAccount(!hasAccount)}>SignUp</span>
                </p>
              </>
            ) : (
              <>
                <button onClick={handleSignup}>Sign Up</button>
                <p>
                  Have an account ?
                  <span onClick={() => sethasAccount(!hasAccount)}>SignIn</span>
                </p>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
