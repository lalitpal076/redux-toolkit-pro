import { useSelector } from "react-redux"
export default function CartIcon({cartToggle,isCartClose}) {
    const selector=useSelector((state)=>state.cart);
    console.log(selector);
    const count=selector.items.length?selector.items.reduce((acc,item)=>acc+item.quantity,0):0;
    console.log(count);
  return (
    <div>
        <div className="addCart">
            <span className="addCart-icon">🛒</span>
            <span className="addCart-text" onClick={()=>cartToggle(!isCartClose)}>Cart</span>
            <span className="addCart-count">{count}</span>
        </div>
    </div>
  )
}
