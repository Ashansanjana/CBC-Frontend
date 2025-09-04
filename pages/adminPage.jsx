import { Link,Routes,Route } from "react-router-dom";
import AdminProductPage from "./admin/adminProductPage.jsx";

export default function AdminPage() {
  return (
      <div className="w-full h-screen  bg-red-300 flex">
        <div className="h-full w-[300px] bg-blue-300 flex flex-col" >
            <Link to="/admin/users" >Users</Link>
            <Link to="/admin/products" >Product</Link>
            <Link to="/admin/orders" >Orders</Link>
            <Link to="/admin/settings">Review</Link>
        </div>

        <div className="h-full w-[calc(100%-300px)] bg-amber-300">
            <Routes path="/*">
                <Route path="/users" element={<div>Admin Users Page</div>} />
                <Route path="/products" element={<AdminProductPage/>} />
                <Route path="/orders" element={<div>Admin Orders Page</div>} />
                <Route path="/settings" element={<div>Admin Riview Page</div>} />
                <Route path="*" element={<div>Admin 404 Not Found</div>} />
            </Routes>

        </div>

      </div>
  );
}