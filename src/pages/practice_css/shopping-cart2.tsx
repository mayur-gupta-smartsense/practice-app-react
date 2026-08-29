import { Minus, Plus, X } from "lucide-react";

export default function ShoppingCart2() {
    return (
        <div className="p-3">
            <div className="w-full">
                <h1 className="text-[34px] text-center font-extrabold my-9">My Shopping Cart</h1>
                <div className="w-[800px]">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b text-center uppercase border-gray-600 text-gray-600">
                                <td>Product</td>
                                <td>Price</td>
                                <td>Quantity</td>
                                <td>Subtotal</td>
                                <td></td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="p-2 pl-12">
                                    <img className="w-[100px] h-[100px] inline-block" src="https://cdn.britannica.com/27/232027-050-A176084E/Indian-chess-player-Viswanathan-Anand-2015.jpg" alt="" />
                                    <span>Red Capsicum</span>
                                </td>
                                <td>$14.00</td>
                                <td className="border mt-9 mr-6 p-4 border-gray-600 rounded-full text-center items-center flex justify-around">
                                    <Minus />
                                    <span>5</span>
                                    <Plus />
                                </td>
                                <td className="text-center">$70.00</td>
                            </tr>

                            <tr>
                                <td className="p-2 pl-12">
                                    <img className="w-[100px] h-[100px] inline-block" src="https://cdn.britannica.com/27/232027-050-A176084E/Indian-chess-player-Viswanathan-Anand-2015.jpg" alt="" />
                                    <span>Red Capsicum</span>
                                </td>
                                <td>$14.00</td>
                                <td className="border mt-9 mr-6 p-4 border-gray-600 rounded-full text-center items-center flex justify-around">
                                    <Minus />
                                    <span>5</span>
                                    <Plus />
                                </td>
                                <td className="text-center">$70.00</td>
                            </tr>

                            <tr>
                                <td className="p-2 pl-12">
                                    <img className="w-[100px] h-[100px] inline-block" src="https://cdn.britannica.com/27/232027-050-A176084E/Indian-chess-player-Viswanathan-Anand-2015.jpg" alt="" />
                                    <span>Red Capsicum</span>
                                </td>
                                <td>$14.00</td>
                                <td className="border mt-9 mr-6 p-4 border-gray-600 rounded-full text-center items-center flex justify-around">
                                    <Minus />
                                    <span>5</span>
                                    <Plus />
                                </td>
                                <td className="text-center">$70.00</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="mt-7 border border-gray-300 flex p-5">
                        <h1 className="text-[20px] item-center flex justify-center mt-5 mr-9">Coupon Code</h1>
                        <div className="border border-gray-300 flex-1">
                            <input placeholder="Enter Code" className="w-[350px] p-4" type="text" />
                            <button className="justify-around rounded-full bg-black p-4 px-9 font-extrabold text-white">Apply Coupon</button>
                        </div>
                    </div>
                </div>
                <div className="w-[400px]"></div>
            </div>
        </div>
    )
}