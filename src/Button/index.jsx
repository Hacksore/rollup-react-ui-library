// TODO: figure out how to omit the react import
import React from "react";

// Test a lib
import { findLast } from "lodash";

export const Button = () => {
  const handleClick = () => {
    const last = findLast([1, 2, 3, 4], function (n) {
      return n % 2 == 1;
    });

    console.log(last);
  };

  return <button onClick={handleClick} value="test">I am a button!</button>;
};
