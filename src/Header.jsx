import CartIcon from "./CartIcon";

export default function Header({cartToggle,isCartClose}) {
  return (
    <>
            <header className="header">
                <div className="logo">Shop<span>Zone</span></div>

                <nav className="nav">
                    <a href="#" onClick={()=>cartToggle(true)}>Home</a>
                    <a href="#">Products</a>
                    <a href="#">Categories</a>
                    <a href="#">About</a>
                </nav>

                <div className="header-right">
                    <div className="search">
                        <input type="text" placeholder="Search products..."/>
                        <button>Search</button>
                    </div>
                    <CartIcon cartToggle={cartToggle} isCartClose={isCartClose} />
                </div>
            </header>
    </>
  )
}




