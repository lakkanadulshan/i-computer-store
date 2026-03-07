import { Link, Route, Routes } from "react-router-dom";
import { FaClipboardList } from "react-icons/fa";
import { AiFillProduct } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { FaCommentAlt } from "react-icons/fa";
export default function AdminPage() {
  return (
    <div className="w-full h-full bg-purple-50 flex max-h-full bg-accent">
      <div className="w-[300px] h-full bg-accent">
        <div className="w-full h-[100px] border border-white text-color-primary flex items-center">
          <img src="/logo.png" alt="Logo" className="w-[100px] h-[100px]" />
          <p className="text-white ml-4">Admin</p>
        </div>
        <div className="w-full h-[400px] text-white flex flex-col">
          <Link to="/admin"className="w-full h-[60px] flex item-center gap-[10px]"><FaClipboardList />Orders</Link>
          <Link to="/admin/products"className="w-full h-[60px] flex item-center gap-[10px]"><AiFillProduct />Products</Link>
          <Link to="/admin/users"className="w-full h-[60px] flex item-center gap-[10px]"><FaUser />Users</Link>
          <Link to="/admin/reviews"className="w-full h-[60px] flex item-center gap-[10px]"><FaCommentAlt />Reviews</Link>
        </div>
      </div>
      <div className="w-[calc(100%-300px)] h-full bg-primary max-h-full overflow-y-scroll border-[10px] border-accent rounded-2xl">
        <Routes>
          <Route path="/" element={<h1>Orders</h1>} />
          <Route path="products" element={<h1>Products</h1>} />
          <Route path="users" element={<h1>Users</h1>} />
          <Route path="reviews" element={<h1>Reviews</h1>} />
        </Routes>
      </div>
    </div>
  );
}
