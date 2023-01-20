import React, { useState } from "react";
import "./LoginForm.css";
import { useStore } from "store/store";
import { Button } from "react-bootstrap";

const styles = {
  container: {
    border: "1px solid black",
    padding: "10px",
    marginBottom: "10px",
    minHeight: "450px",
  },
  counter: {
    border: "1px solid black",
    padding: "10px",
    margin: "auto",
    marginBottom: "10px",
    width: "320px",
    borderRadius: "5px",
  },
};

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const { count, increment, clear } = useStore();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email || !password) {
      setError("Email and password are required");
      return;
    }
    if (!email.includes("@")) {
      setError("Email must be valid");
      return;
    }
    if (password.length < 8) {
      setError("Password must be at least 8 characters long");
      return;
    }
    // Perform login here
    console.log("login success");
    setError(null);
  };

  return (
    <div style={styles.container}>
      <h3> LOGIN MFE CONTAINER</h3>
      <div style={styles.counter}>
        <p>Centralized counter: {count}</p>
        <Button variant="primary" onClick={increment}>
          add1
        </Button>
        <Button variant="danger" onClick={clear}>
          clear
        </Button>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <a style={{ fontSize: "12px", color: "red" }}>{error}</a>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginForm;
