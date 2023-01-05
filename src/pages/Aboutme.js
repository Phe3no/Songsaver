import React from "react";

import Message from "./aboutme/Message";
import Content from "./aboutme/Content";

const Aboutme = () => {
  const paragraph =
    "Below a couple of subjects I've read and learned a lot about while building this application!";

  return (
    <main>
      <Message title="About me" paragraph={paragraph} />
      <Content />
    </main>
  );
};

export default Aboutme;
