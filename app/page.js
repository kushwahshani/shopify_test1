"use client"

import { useState } from "react";

export default function Home() {
  // const [inputValue, setInputValue] = useState("");
  // const handleClick = async() =>{

  //   console.log("This is a input value:",inputValue);


  //   const response = await fetch("http://127.0.0.1:8787/shop",{
  //     method:"POST",
  //     headers:{
  //       "Content-Type": "application/json",
  //     },
  //     body:JSON.stringify({value:inputValue}),
  //   })
  //   const result = await response.json();
  //   console.log("This is Result", result);
  //   if (response.ok){
  //     alert("Response is ok");
  //   }

  // }


  const [errorMessage, setErrorMessage] = useState('');

  const handleValidation = (event) => {
    const inputField = event.target;

    // Check if the input field is empty
    if (!inputField.value.trim()) {
      setErrorMessage('Missing Shop Name Please Enter Shop.');
      inputField.setCustomValidity(' ');
    } else {
      setErrorMessage('');
      inputField.setCustomValidity('');
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Shopify Store</h1>
        <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
          <form action="https://test2.shanikushwahonline.workers.dev/auth" method="GET">
            <div className="mb-4">
              <label htmlFor="shopName" className="block text-gray-700 font-medium mb-2">
                Enter your shop name
              </label>
              <input
                type="text"
                id="shopName"
                name="shop"  // This will be sent as a query parameter with the name 'shop'
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                placeholder="Enter your shop name"
                required
                onInvalid={(e) => handleValidation(e)}
                onInput={(e) => handleValidation(e)}
              />
               {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
            >
              Install App
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
