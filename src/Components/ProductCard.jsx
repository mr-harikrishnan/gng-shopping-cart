function ProductCard({ productData, addToCartProductFunction, cart }) {
    return (
        <div className="border border-gray-300 p-2 rounded-lg max-w-[20rem] max-h-sm  shadow-sm ">
            <div className=" flex justify-center p-4">
                <img
                    className="w-50 h-50 max-h-[17rem] rounded-lg"
                    src={`${productData.image}`}
                    alt=""
                />
            </div>
            <div>
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {productData.title.slice(0, 20)}..
                </h5>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {productData.description.slice(0, 50)}...
                </p>
                <p className="mb-2 font-semibold  text-gray-700 dark:text-gray-400">
                    Price : {productData.price}/-
                </p>
                <p className="mb-3 font-snormal  text-gray-400 dark:text-gray-400">
                    rating : {productData.rating}/-
                </p>
            </div>

            <button
                disabled={cart.some(obj => obj.id === productData.id)}

                onClick={() => {
                    addToCartProductFunction(productData);
                }}
                class={`inline-flex items-center px-3 py-2 text-sm font-medium cursor-pointer text-center text-white  rounded-lg hover:bg-[#494949] ${cart.some(obj => obj.id === productData.id)?"bg-[#494949]" : "bg-[#00234D]"}  focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}
            >
                ADD TO CART
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="size-6 mx-1"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                    />
                </svg>
            </button>
        </div>
    );
}
export default ProductCard;
