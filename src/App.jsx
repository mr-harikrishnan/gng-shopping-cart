import ProductCard from "./Components/ProductCard";
import CartCard from "./Components/CartCard";
import { useEffect, useState } from "react";
import productJSONData from "./Const/ProductJSONData.json";
import axios from "axios";

function App() {
  // CART-OPEN-CLOSE-FUNCTIONS-START
  window.addEventListener("resize", () => {
    if (window.innerWidth > 1535) {
      document.getElementById("Cart-Container").style.display = "block";
    }
  });
  window.addEventListener("resize", () => {
    if (window.innerWidth < 1535) {
      document.getElementById("Cart-Container").style.display = "none";
    }
  });

  const openCartContainer = () => {
    document.getElementById("Cart-Container").style.display = "block";
  };
  const closeCartContainer = () => {
    document.getElementById("Cart-Container").style.display = "none";
  };

  // CART-OPEN-CLOSE-FUNCTIONS-END

  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const addToCartProduct = (product) => {
    console.log(product);
    setCart([...cart, product]);
    setTotal(Math.round(total + parseInt(product.price)));
  };

  const removeCart = (product) => {
    const productIndex = cart.findIndex((obj) => obj.id == product.id);
    cart.splice(productIndex, 1);
    setTotal(Math.round(total - product.price));
  };

  const [products, setProducts] = useState([])

  let getProduct = async () => {
    try {
      const colectedProduct = await axios.get("https://684fcb12e7c42cfd1795faf8.mockapi.io/adminpannelproject/products")
    setProducts(colectedProduct.data)
      
    } catch (error) {
      console.log(error);
      
    }
  }
  useEffect(()=>{
    getProduct()
  })

  // const products = productJSONData;

  return (
    <div className="w-full h-[100vh] flex relative">
      <div className="w-full xl:w-[80%] h-[100vh] overflow-hidden inset-shadow-sm">
        <nav className="w-full  bg-gray-100 h-[8%] flex items-center pr-2 pl-2 shadow-lg">
          <div className="h-full w-full flex items-center">
            <div className="h-full  w-12">
              <img
                className="w-full h-full object-cover"
                src="data:image/jpeg;base64,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"
                alt=""
              />
            </div>

            <div className="">
              <h1 className="font-semibold text-[#00234D] text-center">
                Shopping cart
              </h1>
            </div>
          </div>

          <div
            onClick={openCartContainer}
            className="h-full  w-14  flex items-center justify-center xl:hidden"
          >
            <svg
              className="size-8 cursor-pointer "
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2.5"
              stroke="#00234D"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
        </nav>

        <div className="product-container w-full h-full  p-4 overflow-auto ">
          <div className="  p-2  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 lg:grid-cols-4 pl-7 pb-20 ">
            {/* card div */}
            {products.map((product) => {
              return (
                <ProductCard
                  productData={product}
                  addToCartProductFunction={addToCartProduct}
                  cart={cart}
                ></ProductCard>
              );
            })}
          </div>
        </div>
      </div>

      {/* ------right------ */}

      <div
        id="Cart-Container"
        className="w-[20rem] bg-white hidden xl:block right-0 xl:w-[19.2rem] h-[100vh] border border-[#c8cacc] overflow-hidden  absolute bottom-[1rem] z-50 b xl:left-[76.7rem] top-[0px] inset-shadow-sm"
      >
        {/* NAV BAR */}
        <nav className="w-full  bg-gray-100 h-[8%] flex items-center pr-2 pl-2 shadow-lg">
          <div className="h-full w-full flex items-center">
            <svg
              onClick={closeCartContainer}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="0.8"
              stroke="red"
              className="size-6 mb-6 xl:hidden"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>

            <div className="w-full">
              <h1 className=" text-[#00234D] text-center font-semibold text-xl">
                Cart
              </h1>
            </div>
          </div>
        </nav>

        {/* CART-CONTENT */}

        <div
          id="Cart-Container"
          className="w-full h-full  p-4 overflow-hidden "
        >
          <div className="cart-conatiner  h-[80%] p-2  overflow-auto">
            {cart.map((product) => {
              return (
                <CartCard
                  productData={product}
                  removeCartFuntion={removeCart}
                  cart={cart}
                ></CartCard>
              );
            })}
          </div>

          {/* TOTAL-AMOUNT */}
          <div className="h-[20%] w-full flex  justify-center pt-3">
            <div className="p-2 w-full h-[70px] border border-gray-300 rounded-lg bg-[#00234D] flex items-center">
              <h1 className="text-white font-semibold">
                TOTAL AMOUNT : {total} /-
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
