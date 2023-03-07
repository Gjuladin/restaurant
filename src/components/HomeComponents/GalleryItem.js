import React from "react";

const GalleryItem = ({ pizzaImg, pizzaName, pizzaPrice }) => {
  return (
    <>
      <div className="text-center">
        <img
          src={require(`../../assets/differentPizzas/${pizzaImg}`)}
          alt="img"
          style={{ width: "300px", height: "300px", objectFit: "cover" }}
        />
      </div>
      <div className="text-center text-white py-3">
        <h4>{pizzaName}</h4>
        {pizzaPrice}
      </div>
    </>
  );
};

export default GalleryItem;
