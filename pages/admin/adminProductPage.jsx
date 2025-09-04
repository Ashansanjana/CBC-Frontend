import { sampleProducts } from "../../src/assets/sampleData.js";
import { useEffect, useState } from "react";
import axios from "axios";

export default function AdminProductPage() {
  const [products, setProducts] = useState(sampleProducts);

  useEffect(() => {
      axios.get(import.meta.env.VITE_BACKEND_URL + "/product").then((res) => {
            console.log(res.data);
            setProducts(res.data);
  });}, []);

  return (
    <div className="w-full h-full bg-red-300 max-h-full overflow-y-scroll">
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
