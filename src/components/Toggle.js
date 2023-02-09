import React, { useState } from "react";

function Toggle() {
  const [status, setStatus] = useState(false)

  function handleClick(){
    setStatus((status) => !status)
  }
  const color = status ?  "green" : "red"
  return <button style={{ background: color }}onClick={handleClick}>{status ? "ON" : "OFF"}</button>;
}

export default Toggle;
