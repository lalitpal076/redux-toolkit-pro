import { useDispatch } from "react-redux"
import {addItem,addData,removeItem} from './redux-toolkit/slice';

export default function Product() {
    const dispatch=useDispatch();
  return (
    <div>
            <main className="product-container">

                <section className="product-gallery">

                    <div className="main-image">
                        <img
                            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=900"
                            alt="Red Nike style sports shoe"
                        />
                    </div>

                    <div className="thumbnail-gallery">
                        <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200"
                            alt="Product view 1"/>

                        <img src="https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?w=200"
                            alt="Product view 2"/>

                        <img src="https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=200"
                            alt="Product view 3"/>
                    </div>

                </section>


                <section className="product-info">

                    <p className="category">Home / Shoes / Sports Shoes</p>

                    <h1>Premium Running Sports Shoes</h1>

                    <div className="rating">
                        <span>★★★★★</span>
                        <p>4.8 (245 Reviews)</p>
                    </div>

                    <div className="price-section">
                        <h2>₹2,499</h2>
                        <del>₹3,999</del>
                        <span className="discount">38% OFF</span>
                    </div>

                    <div className="product-details">
                        <p><strong>Brand:</strong> SportX</p>
                        <p><strong>Availability:</strong>
                            <span className="stock">In Stock</span>
                        </p>
                        <p><strong>Material:</strong> Premium Mesh</p>
                        <p><strong>Color:</strong> Red / White</p>
                    </div>

                    <div className="size-section">
                        <h3>Select Size:</h3>

                        <div className="sizes">
                            <button>6</button>
                            <button>7</button>
                            <button className="selected">8</button>
                            <button>9</button>
                            <button>10</button>
                        </div>
                    </div>

                    <div className="quantity-section">
                        <h3>Quantity:</h3>

                        <div className="quantity">
                            <button>-</button>
                            <span>1</span>
                            <button>+</button>
                        </div>
                    </div>

                    <div className="action-buttons">
                        <button onClick={()=>dispatch(addItem(2))} className="add-cart">🛒 Add To Cart</button>
                        <button onClick={()=>dispatch(removeItem(1))} className="add-cart">🛒 Remove from Cart</button>
                        <button onClick={()=>dispatch(addData(1))} className="buy-now">Buy Now</button>
                    </div>

                    <div className="delivery-info">
                        <p>↩️ 7 Days Easy Return Policy</p>
                    </div>

                </section>
            </main>
    </div>
  )
}
