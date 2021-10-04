import React, { useState } from "react";

function Mid({ Icon }) {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div>
      <Icon
        onClick={handleClick}
        className={`${active ? "text-red-600" : "text-[#909092]"} h-8 `}
      />
    </div>
  );
}

export default Mid;
