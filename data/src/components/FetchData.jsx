import React, { useState, useEffect } from "react";
import { useStore } from "store/store";
import { DatePicker } from 'antd';

const styles = {
  data: {
    margin: "auto",
    maxWidth: "300px",
    border: "1px solid black",
    padding: "10px",
    minHeight: "450px",
    minWidth: "470px",
    marginLeft: "10px",
  },
  counter: {
    border: "1px solid black",
    padding: "10px",
    marginBottom: "10px",
  },
};

const FetchData = () => {
  const [data, setData] = useState([]);
  const { count, increment, clear } = useStore();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div style={styles.data}>
      <h3> DATA MFE CONTAINER</h3>
      <div style={styles.counter}>
        <p>Centralized counter: {count}</p>
        <button onClick={increment}> add</button>
        <button onClick={clear}> clear</button>
      </div>
      <div>Fetched data from sample api</div>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
      {!data.length && <p>Loading...</p>}
      <DatePicker/>
    </div>
  );
};

export default FetchData;
