import React from "react";

const FoodSection = ({ children, title }) => (
  <div className="foods">
    <section className="main__directions-title">
      <h3>{title}</h3>
    </section>
    <div className="foods">{children}</div>
  </div>
);

export default FoodSection;
