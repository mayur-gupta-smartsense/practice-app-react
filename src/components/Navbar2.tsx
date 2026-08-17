import { useState } from "react"
import { logoutUser } from "../store/userSlice"
import { useAppDispatch, useAppSelector } from "../store/hooks"
import { useNavigate, useLocation } from "react-router-dom"

export default function Navbar(){
    const loggedInUser = useAppSelector((state)=> state.user.loggedIn)
    const [dropdownOpen, setDropdownOpen]  = useState(false)
    const location = useLocation()
    const cartCount = useAppSelector((state)=> Object.values(state.cart.items).reduce((totalQty:number, qty:number)=> qty + totalQty,0));
    const onProductPage = location.pathname.toLowerCase() == "/productpage"
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const handleLogout =  ()=>{
        dispatch(logoutUser())
        navigate("/login")
    }
    const toggleDropdown = ()=>{
        setDropdownOpen(!dropdownOpen)
    }
  
    return (
        <div>
            All Good!
            {onProductPage && (<div></div>)}
            {dropdownOpen && (<div></div>)}
        </div>
    )
}


