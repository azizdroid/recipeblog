import React, { useState } from "react";

function Comp({ text, maxlength }) {
  const [hidden, setHidden] = useState(true);

  if (text.length >= maxlength) {
    return (
      <div>
        {hidden ? `${text.substr(0, maxlength).trim()} ...` : text}
        {hidden ? (
          <a onClick={() => setHidden(false)}> read more</a>
        ) : (
          <a onClick={() => setHidden(true)}> read less</a>
        )}
      </div>
    );
  }
}

export default Comp;
