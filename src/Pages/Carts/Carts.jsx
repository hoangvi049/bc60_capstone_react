import React from "react";
import "./style.css";
import banner from "../../images/banner.png";
import { useSelector } from "react-redux";
const Carts = () => {
  const { cartProduct } = useSelector((state) => state.productReducer);
  console.log(cartProduct);
  return (
    <div className="container mt-5">
      <h2>Carts</h2>
      <hr className="mb-5" />

      <div className="carts-content">
        <table className="table">
          <thead>
            <tr>
              <td>id</td>
              <td>img</td>
              <td>name</td>
              <td>price</td>
              <td>quantity</td>
              <td>total</td>
              <td>action</td>
            </tr>
          </thead>
          <tbody>
            {cartProduct.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td className="td-img">
                    <img src={item.image} alt=".." />
                  </td>
                  <td>{item.name}</td>
                  <td>{item.price}$</td>
                  <td>
                    {" "}
                    <button className="btn btn-success">+</button>
                    <span className="quantity me-2"> {item.quantity}</span>
                    <button className="btn btn-success">-</button>
                  </td>
                  <td>{item.quantity * item.price}$</td>
                  <td>
                    <button className="btn btn-danger">
                      <i className="fa fa-trash"></i>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Carts;
