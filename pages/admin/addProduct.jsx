import { useState } from "react";
import toast from "react-hot-toast";
import mediaUpload from "../../src/utils/mediaUpload.jsx";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AddProduct() {
  const [productID, setProductID] = useState("");
  const [productName, setProductName] = useState("");
  const [altName, setAltName] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState([]);
  const [labelledPrice, setLabelledPrice] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const navigate = useNavigate();

  async function addProduct() {
    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("You must be logged in as admin to add a product");
      return;
    }
    if (images.length <= 0) {
      toast.error("Please select at least one image");
      return;
    }

    const promiseArray = images.map((file) => mediaUpload(file));

    try {
      const imgUrls = await Promise.all(promiseArray);
      console.log(imgUrls);

      const altNamesArray = altName.split(",")

      const productData = {
        productID: productID,
        productName: productName,
        altName: altNamesArray,
        description: description,
        images: imgUrls,
        labelledPrice:labelledPrice,
        price: price,
        stock: stock
      };

      axios
        .post(import.meta.env.VITE_BACKEND_URL + "/product", productData, {
          headers: { Authorization: "Bearer " + token },
        })
        .then((res) => {
          toast.success("Product added successfully");
          navigate("/admin/products");
        })
        .catch((err) => {
          console.error(err);
          toast.error("Error adding product");
        });
    } catch (e) {
      console.error(e);
      toast.error("Unexpected error");
    }
  }

  return (
    <div className="w-full h-screen bg-red-300 flex items-center justify-center">
      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md flex flex-col gap-4">
        <h2 className="text-xl font-bold text-center">Add New Product</h2>

        <input
          onChange={(e) => setProductID(e.target.value)}
          value={productID}
          type="text"
          placeholder="Product ID"
          className="p-2 border rounded"
        />
        <input
          onChange={(e) => setProductName(e.target.value)}
          value={productName}
          type="text"
          placeholder="Product Name"
          className="p-2 border rounded"
        />
        <input
          onChange={(e) => setAltName(e.target.value)}
          value={altName}
          type="text"
          placeholder="Alternative Names (comma separated)"
          className="p-2 border rounded"
        />
        <input
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          placeholder="Description"
          className="p-2 border rounded"
        />
        <input
          onChange={(e) => setImages(Array.from(e.target.files))}
          multiple
          type="file"
          className="p-2 border rounded"
        />
        <input
          onChange={(e) => setLabelledPrice(e.target.value)}
          value={labelledPrice}
          type="number"
          placeholder="Labelled Price"
          className="p-2 border rounded"
        />
        <input
          onChange={(e) => setPrice(e.target.value)}
          value={price}
          type="number"
          placeholder="Selling Price"
          className="p-2 border rounded"
        />
        <input
          onChange={(e) => setStock(e.target.value)}
          value={stock}
          type="number"
          placeholder="Stock"
          className="p-2 border rounded"
        />
        <button
          onClick={addProduct}
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
        >
          Add Product
        </button>
      </div>
    </div>
  );
}
