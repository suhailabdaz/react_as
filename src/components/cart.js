import CategoryItems from "./categoryItems"
import { useSelector,useDispatch } from "react-redux"
import { clearCart } from "../utils/cartSlice"


const Cart=()=>{
    const dispatch=useDispatch()
    const cartItems=useSelector((store)=>store.cart.items)

    handleclick=()=>{
        dispatch(clearCart())
    }
    return(<>
        <h1 className="font-bold text-center">Cart</h1>
        <div className="w-6/12 flex justify-center">
        {cartItems.length!==0&&
        <button className="bg-black text-slate-100 rounded-lg p-3  flex justify-center  m-auto" onClick={handleclick}>
            Clear-cart
        </button>

        }
        </div>
        <div className="flex justify-center w-6/12 m-auto">
        
        {cartItems.length===0&&
        <h1>Cart is empty </h1>
        }
            <div>
            <CategoryItems items={cartItems}/>
            </div>
        </div></>
    )
}

export default Cart