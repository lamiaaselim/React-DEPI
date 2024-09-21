import React, { useEffect, useRef, useState } from "react";

export default function DynamicCounter() {
  const [count, setCount] = useState(0);
  const  myInt = useRef(null);
  const stopHandler = () => {
    clearInterval(myInt.current);
  };

  useEffect(() => {
    myInt.current = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
      console.log("Interval workinhg..");
    }, 1000);
    return () => {
        clearInterval(myInt);
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
