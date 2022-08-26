import React from "react";

function Contact() {
  return (
    <div className=" w-screen flex flex-col items-center justify-center  space-y-4 py-24 bg-[url('../public/bg.jpg')] bg-no-repeat bg-cover bg-center">
      <p className="text-3xl text-center font-light text-gray-600">
        Private chauffeur, sightseeing tour? <br />
        Please fill out the form below with questions or comments
      </p>
      <div className=" container mx-auto px-16 lg:grid  lg:grid-cols-2 lg:grid-rows-3   w-full">
        <div className="col-span-1 row-span-1  p-4 px-8 border">
          <label htmlFor="name" className="block mb-2  text-gray-900 ">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            className="text-gray-900  block w-full p-2.5 "
            placeholder="Name"
            required
          />
        </div>
        <div className="col-span-1 row-span-3 p-4  border">
          <label htmlFor="message" className="block mb-2  text-gray-900   ">
            Your message
          </label>
          <textarea
            id="message"
            rows={10}
            className="block p-2.5 w-full text-gray-900  "
            placeholder="Leave a message..."
          ></textarea>
        </div>
        <div className="col-span-1 row-span-1  p-4 px-8 border">
          <label htmlFor="email" className="block mb-2  text-gray-900 ">
            Your email
          </label>
          <input
            type="email"
            id="email"
            className=" text-gray-900 "
            placeholder="name@example.com"
            required
          />
        </div>
        <div className="col-span-1 row-span-1 p-4 px-8 border">
          <label htmlFor="email" className="block mb-2  text-gray-900 ">
            Your number
          </label>
          <input
            type="text"
            id="number"
            className="  text-gray-900 "
            placeholder="+212"
            required
          />
        </div>
      </div>
      <button
        type="button"
        className=" text-white  bg-red-600 hover:bg-red-800   rounded-3xl  px-8 py-3 text-center mr-2 mb-2 "
      >
        CONTACT US
      </button>
    </div>
  );
}

export default Contact;
