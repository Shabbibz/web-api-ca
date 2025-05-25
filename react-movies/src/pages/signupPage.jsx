import { useContext, useState } from "react";
import { Navigate } from "react-router";
import { AuthContext } from '../contexts/authContext';

const SignUpPage = () => {
  const context = useContext(AuthContext);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");
  const [registered, setRegistered] = useState(false);
  const [error, setError] = useState("");

  const register = async () => {
    const passwordRegEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&]).{8,}$/;
    const validPassword = passwordRegEx.test(password);

    if (!validPassword) {
      setError("Password must be at least 8 characters long, with one uppercase letter, one lowercase letter, and one symbol.");
      return;
    }

    if (password !== passwordAgain) {
      setError("Passwords do not match.");
      return;
    }

    // Clear error before attempting to register
    setError("");

    let result = await context.register(userName, password);

    if (!result) {
      setError("Registration failed. Username may already be taken.");
    } else {
      setRegistered(true);
    }
  }

  if (registered === true) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <h2>Sign Up</h2>
      <p>
        You must register a username and password to log in. <br />
        <strong>Usernames must be unique</strong> and 
        <strong> passwords must contain at least 8 characters</strong>, 
        <strong> one uppercase</strong>, 
        <strong> one lowercase</strong>, and 
        <strong> one symbol</strong>.
      </p>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <input
        value={userName}
        placeholder="Username"
        onChange={e => setUserName(e.target.value)}
      /><br />

      <input
        value={password}
        type="password"
        placeholder="Password"
        onChange={e => setPassword(e.target.value)}
      /><br />

      <input
        value={passwordAgain}
        type="password"
        placeholder="Confirm Password"
        onChange={e => setPasswordAgain(e.target.value)}
      /><br />

      <button onClick={register}>Register</button>
    </>
  );
};

export default SignUpPage;
