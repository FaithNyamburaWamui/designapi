import "./index.css";
import { FaSearch } from "react-icons/fa";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { LuUser2 } from "react-icons/lu";





function ProductNames() {
  return (
    <div>
        <div className="navbar">
      <h2>STYLRIX</h2>
        <ul className="navbar">
          <li>Home</li>
          <li>Product</li>
          <li>Shop</li>
          <li>Latest</li>
          <li>New</li>
          <li>Pages</li>
        </ul>

        <div className="icons">
         <FaSearch/>
        <MdOutlineAddShoppingCart/>
        <LuUser2/>
        </div>
        
      </div>

      <div className="background">
      <p>SALE 45% OFFx</p>
        <h1>Exclusive New Offer 2024</h1>
        <button className="button">Shop Now<p className="search"><FaSearch/></p>
        </button>

      </div>
      </div>

  );
}

export default ProductNames;
