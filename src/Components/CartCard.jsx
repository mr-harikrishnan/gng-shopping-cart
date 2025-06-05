function CartCard({ productData,removeCartFuntion }) {
    return (
        <div className="border p-2 rounded mb-3">
            <h1 className="font-semibold">{productData.title.slice(0,27)}...</h1>
            <h1 className="text-sm">PRICE : {productData.price}/-</h1>
            <div onClick={()=>{
                removeCartFuntion(productData)
            }} className=" w-full flex justify-end">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="0.8" stroke="currentColor" className="size-6 cursor-pointer">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>

            </div>

        </div>
    )
}

export default CartCard;