import React, { useEffect, useRef, useState } from "react";

export default function DaynamicCounter() {
  const [count, setCount] = useState(0);
  // Modal
  const stopHandler = () => {
    clearInterval(myInterval.current);
  };
  const myInterval = useRef(null);
  useEffect(() => {
    myInterval.current = setInterval(() => {
      setCount((prevState) => prevState + 1);
      console.log("Interval working....");
    }, 1000);
    return () => {
      clearInterval(myInterval.current);
    };
  }, []);

  return (
    <>
      <strong className="text-danger">{count}</strong>
      <button className="btn btn-danger" onClick={stopHandler}>
        stop
      </button>
    </>
  );
}
