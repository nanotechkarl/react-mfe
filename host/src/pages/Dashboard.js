import React, { Suspense } from "react";
import { Grid } from "@material-ui/core";
import { useStore } from "store/store";
const FetchData = React.lazy(() => import("data/data")); //dynamic component loading not required
const LoginForm = React.lazy(() => import("login/login")); //dynamic component loading not required

const styles = {
  login: {
    backgroundColor: "lightblue",
    width: "341px",
  },
  title: {
    fontSize: "24px",
    textAlign: "center",
  },
  counter: {
    border: "1px solid black",
    padding: "10px",
    marginBottom: "30px",
  },
};

const Dashboard = () => {
  const { count, increment, clear } = useStore();

  return (
    <div style={{ border: "1px solid black", padding: "20px" }}>
      <h2> CENTRALIZED STORE + HOST + 2MFE </h2>
      <div style={styles.counter}>
        <h3> HOST CONTAINER </h3>
        <p> Centralized Counter: {count} </p>
        <button onClick={increment}>add</button>
        <button onClick={clear}>clear</button>
      </div>

      <Grid container>
        <Suspense fallback={<div>Loading...</div>}>
          <Grid item xs={3}>
            <LoginForm />
          </Grid>
          <Grid item xs={3}>
              <FetchData />
          </Grid>
        </Suspense>
      </Grid>
    </div>
  );
};
export default Dashboard;
