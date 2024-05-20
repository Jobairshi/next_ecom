"use client"
import { imageUpload } from '@/utilty';
import axios from 'axios';
import { useState, useRef } from 'react';

export default function Addproduct() {
  const [productName, setProductName] = useState('');
  const [productDesc, setProductDesc] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [img_link, setImgline] = useState('');
  
  const nameRef = useRef();
  const descRef = useRef();
  const priceRef = useRef();
  
  const fileInputRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(nameRef.current.value === "" || descRef.current.value === "" || priceRef.current.value === 0.01 ||fileInputRef === null){
        
        return alert("Please fill all the fields");; 
        }
    // Get values from input refs
    const name = nameRef.current.value;
    const desc = descRef.current.value;
    const price = parseFloat(priceRef.current.value); // Parse price to float
    
    // Perform validation if needed

    // Here you can perform further actions like sending data to backend, etc.
    console.log("Product Name:", name);
    console.log("Product Description:", desc);
    console.log("Product Price:", price);
    console.log("Selected Image:", selectedImage?.name);
    const img  = await imageUpload(selectedImage);
    console.log(img.data.display_url);
    setImgline( img.data.display_url);


 
    const response = await axios.post('http://localhost:4000/product',{
      name:name,
      desc:desc,
      price:price,
      img_link:img_link
    });
    if(response.status === 201){
      alert("Product Added Successfully");
    }
    console.log(response.status);




    // Reset form fields
    setProductName('');
    setProductDesc('');
    setProductPrice('');
    setSelectedImage(null);
    fileInputRef.current.value = ''; // Clear the file input
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
  };

  return (
    <div className="bg-white">
      <div className="lg:m-10">
        <form onSubmit={handleSubmit} className="relative border text-stone-950 border-gray-100 space-y-3 max-w-screen-md mx-auto rounded-md bg-white p-6 shadow-xl lg:p-10">
          <h1 className="mb-6 text-xl font-semibold lg:text-2xl">Add Product</h1>
          <div>
            <label>Product Name</label>
            <input
              ref={nameRef}
              type="text"
              placeholder="Product Name"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3"
            />
          </div>
          <div>
            <label>Product Description</label>
            <input
              ref={descRef}
              type="text"
              placeholder="Product Description"
              value={productDesc}
              onChange={(e) => setProductDesc(e.target.value)}
              className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3"
            />
          </div>
          <div>
            <label>Product Price (Float)</label>
            <input
              ref={priceRef}
              type="number"
              step="0.01" // Set step to allow float input
              placeholder="Product Price"
              value={productPrice}
              onChange={(e) => setProductPrice(e.target.value)}
              className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3"
            />
          </div>
          <div>
            <label>Upload Image</label>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="mt-2 w-full"
            />
          </div>
          <div>
            <button
              type="submit"
              className="mt-5 w-full rounded-md bg-blue-600 p-2 text-center font-semibold text-white"
            >
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
