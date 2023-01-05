import React from "react";

const Content = () => {
  return (
    <ul className="about-me">
      <li>React</li>
      <li>React Functional Components</li>
      <li>React Class Components, although not used</li>
      <li>React Click Events</li>
      <li>
        React state, and why you never directly should change it, unless
        Immer....
      </li>
      <li>React useState Hook</li>
      <li>React useEffect Hook</li>
      <li>React Lists and Keys</li>
      <li>React Props and Props Drilling</li>
      <li>React and Lifting State</li>
      <li>React JS Forms</li>
      <li>React Redux</li>
      <li>React @reduxjs/toolkit</li>
      <li>... useSelector</li>
      <li>
        ... useDispatch, inwhich you can mutate state, because it uses Immer
        (middleware, "plugin") which takes care of copying under the hood...
      </li>
      <li>... and many, many more!</li>
    </ul>
  );
};

export default Content;
