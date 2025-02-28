import { FaSearch, FaHeart } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md p-4 flex items-center justify-between">
      <h1 className="text-xl font-bold text-red-600">BookUsNow</h1>
      <div className="flex items-center border rounded-lg px-3 py-2 w-1/3">
        <input
          type="text"
          placeholder="Search events..."
          className="w-full outline-none hidden md:block"
        />
        <FaSearch className="text-gray-500" />
      </div>
      <div className="flex space-x-4 justify-center items-center">
        <button className="px-4 py-2 bg-gray-100 rounded-lg">Categories</button>
        <FaHeart className="text-red-500 text-xl cursor-pointer" />
      </div>
    </nav>
  );
};

export default Navbar;
