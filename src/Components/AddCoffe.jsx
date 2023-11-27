import React from "react";
import Swal from 'sweetalert2'

const AddCoffe = () => {
  const addCoffeeHandler = event =>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const newCoffe = {name,chef,supplier,taste,category,details,photo};
    console.log(newCoffe);

    fetch('http://localhost:5000/coffee',{
      method:'POST',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(newCoffe)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if(data.insertedId){
        Swal.fire({
          title: 'Success!',
          text: 'User added successfully.',
          icon: 'success',
          confirmButtonText: 'Cool'
        })
      }
    })
  }
  return (
    <div className="w-3/4 mx-auto">
      <div class=" mx-auto  bg-[#F4F3F0] rounded p-8 shadow-md">
        <h1 class="text-2xl font-semibold mb-4 text-center">Add Coffee</h1>
        <p className="mb-6 text-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat
          iusto, impedit quam, sit, dolorem eveniet ipsa fugit qui a eos
          blanditiis neque soluta? Doloribus harum delectus, illo optio debitis
          cupiditate est ratione veritatis ipsa aut fugit deleniti tenetur
          maiores esse, ipsam iusto vero laudantium beatae dolores? Omnis qui
          vero illum.
        </p>

        <form onSubmit={addCoffeeHandler}>
          <div className="w-full md:flex gap-x-6">
            <div class="mb-4 md:w-1/2">
              <label
                for="name"
                class="block text-gray-700 text-sm font-bold mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                class="w-full p-2 border rounded-md"
                placeholder="Enter coffee name"
              />
            </div>

            <div class="mb-4 md:w-1/2">
              <label
                for="chef"
                class="block text-gray-700 text-sm font-bold mb-2"
              >
                Chef
              </label>
              <input
                type="text"
                id="chef"
                name="chef"
                class="w-full p-2 border rounded-md"
                placeholder="Enter coffee chef"
              />
            </div>
          </div>
          <div className="w-full md:flex gap-x-6">
            <div class="mb-4 md:w-1/2">
              <label
                for="name"
                class="block text-gray-700 text-sm font-bold mb-2"
              >
                Supplier
              </label>
              <input
                type="text"
                id="supplier"
                name="supplier"
                class="w-full p-2 border rounded-md"
                placeholder="Enter coffee supplier"
              />
            </div>

            <div class="mb-4 md:w-1/2">
              <label
                for="email"
                class="block text-gray-700 text-sm font-bold mb-2"
              >
                Taste
              </label>
              <input
                type="text"
                id="taste"
                name="taste"
                class="w-full p-2 border rounded-md"
                placeholder="Enter coffee taste"
              />
            </div>
          </div>
          <div className="w-full md:flex gap-x-6">
            <div class="mb-4 md:w-1/2">
              <label
                for="name"
                class="block text-gray-700 text-sm font-bold mb-2"
              >
                Category
              </label>
              <input
                type="text"
                id="category"
                name="category"
                class="w-full p-2 border rounded-md"
                placeholder="Enter coffee category"
              />
            </div>

            <div class="mb-4 md:w-1/2">
              <label
                for="email"
                class="block text-gray-700 text-sm font-bold mb-2"
              >
                Details
              </label>
              <input
                type="text"
                id="details"
                name="details"
                class="w-full p-2 border rounded-md"
                placeholder="Enter coffee details"
              />
            </div>
          </div>
          <div class="mb-4 ">
              <label
                for="photo"
                class="block text-gray-700 text-sm font-bold mb-2"
              >
                Photo
              </label>
              <input
                type="text"
                id="photo"
                name="photo"
                class="w-full p-2 border rounded-md"
                placeholder="Enter photo url"
              />
            </div>

          <div>
            <input
              type="submit"
              class=" w-full text-white px-4 py-2 rounded-md bg-[#D2B48C]"
              value="Add Coffee"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCoffe;
