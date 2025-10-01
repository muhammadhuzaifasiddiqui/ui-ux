import React from "react";
import Image from "next/image";

const Bullets = ({ bulletname = "null", className = "" }) => {
  return (
    <div className={`flex items-center mb-2.5 gap-1.5`}>
      <Image
        src={"/img/title-dot.png"}
        width={5}
        height={5}
        alt="title-dot"
        unoptimized={true}
        className="object-contain"
      />
      <p className={`${className}`}>{bulletname}</p>
    </div>
  );
};

export default Bullets;
