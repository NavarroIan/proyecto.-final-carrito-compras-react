import { Navigate, Route, Routes } from "react-router-dom"
import { NavBarComponent } from "./component/NavBarComponent"
import { ProductPage } from "./pages/ProductPage"
import { CartPage } from "./pages/CartPage"
import { ProductProvider } from "./context/ProductProvider"
import { CartProvider } from "./context/CartProvider"

export const CarritoApp = () => {
    return (
        <ProductProvider>
            <CartProvider>
                <NavBarComponent />
                <div className="container">
                    {/* routes sirve para enrutar las diferentes páginas */}
                    <Routes>
                        <Route path='/' element={<ProductPage />}></Route>
                        <Route path='/carrito' element={<CartPage />}></Route>
                        <Route path='/*' element={<Navigate to='/' />}></Route>
                    </Routes>
                </div>
            </CartProvider>
        </ProductProvider>
    )
}
