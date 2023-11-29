import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCart = ({ coffee }) => {
  const { _id, name, chef, supplier, taste, category, details, photo } = coffee;
  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        console.log("Deleted confirmed");
        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Coffee has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };
  console.log(photo);
  return (
    <div className="w-[684px] p-5 ">
      <div className="card card-side bg-[#F5F4F1] shadow-xl justify-around p-5 ">
        <div>
          <img src={photo} alt="Movie" />
        </div>
        <div className="text-center">
          <h2 className="card-title">{name}</h2>
          <p>{chef}</p>
          <p>{supplier}</p>
          <p>{taste}</p>
          <p>{category}</p>
        </div>
        <div className="card-actions flex flex-col justify-around">
          <button className="btn btn-square btn-outline">view</button>
          <Link to={`updateCoffee/${_id}`}> 
          <button className="btn btn-square btn-outline">edit</button>
          </Link>
          <button
            onClick={() => handleDelete(_id)}
            className="btn btn-square btn-outline"
          >
            X
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCart;
