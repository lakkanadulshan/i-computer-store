import Header from "../components/header";
import { Route, Routes } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="w-full h-full overflow-y-scroll max-h-full">
      <Header />
      <div className="w-full h-[calc(100%-75px)] bg-red-100">


        <Routes>
          <Route path="/" element={<h1>Home page</h1>} />
          <Route path="products" element={<h1>Products</h1>} />
          <Route path="about" element={<h1>about</h1>} />
          <Route path="profile" element={<h1>Profile</h1>} />
          <Route path="contact" element={<h1>Contact</h1>} />
          <Route path="/*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </div>
    </div>
  );
}
