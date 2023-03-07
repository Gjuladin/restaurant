import React from "react";

const Chef = ({ chefImage, chefName }) => {
  return (
    <>
      <div className="text-center">
        <img
          src={require(`../../assets/chefs/${chefImage}`)}
          alt="img"
          style={{ width: "300px", height: "400px", objectFit: "cover" }}
        />
      </div>
      <div className="text-center text-white py-3">
        <h4>{chefName}</h4>
      </div>
    </>
  );
};

export default Chef;
