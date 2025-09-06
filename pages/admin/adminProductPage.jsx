import { sampleProducts } from "../../src/assets/sampleData.js";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function AdminProductPage() {
  const [products, setProducts] = useState(sampleProducts);

  useEffect(() => {
      axios.get(import.meta.env.VITE_BACKEND_URL + "/product").then((res) => {
            console.log(res.data);
            setProducts(res.data);
  });}, []);

  return (
    <div className="w-full h-full bg-red-300 max-h-full overflow-y-scroll relative">
    <Link to="/admin/add-product" className="bg-green-500 text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center text-3xl absolute bottom-6 right-6 hover:bg-green-600 hover:scale-110 transition-transform duration-200">
      +
    </Link>

      <h1 className="text-2xl font-bold text-center my-4">All Products</h1>
      <table className="w-full">
        <thead>
          <tr>
            <th className="text-center">Product ID</th>
            <th className="text-center">Name</th>
            <th className="text-center">Image</th>
            <th className="text-center">Price</th>
            <th className="text-center">Stock</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item, index) => (
            <tr key={index}>
              <td className="text-center">{item.productID}</td>
              <td className="text-center">{item.productName}</td>
              <td className="text-center">
                <img src={item.images[0]} className="w-[50px] h-[50px] mx-auto" />
              </td>
              <td className="text-center">{item.price}</td>
              <td className="text-center">{item.stock}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
