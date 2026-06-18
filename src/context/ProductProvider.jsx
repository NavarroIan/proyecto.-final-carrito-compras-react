// Este ProductProvider lo que va a hacer basicamente es traer los productos de la API y almacenarlos en el estado, para luego poder compartirlos con los componentes que lo necesiten a través del contexto.
import React, { useEffect, useState } from 'react'
import { ProductContext } from './ProductContext'
import Swal from 'sweetalert2'


export const ProductProvider = ({ children }) => {

    const [products, setProducts] = useState([])

    const fetchProducts = async () => {
        // utilizamos la funcion try catch para manejar errores.
        try {
            const response = await fetch('https://fakestoreapi.com/products')
            const data = await response.json()
            setProducts(data)
        }
        catch (error) {
            // swal es una librería para mostrar alertas visualmente mejores, en este caso se muestra un error si no se pueden cargar los productos
            Swal.fire({
                icon: 'error',
                title: '¡Error!',
                text: 'Hubo un problema al cargar los Productos'
            }
            )
            console.error(error)
        }
    }
    // fetch products lo que hace es traer los productos de la API.
    useEffect(() => {
        fetchProducts()
    }, [])
    return (
        <ProductContext.Provider value={{ products }}>
    
            {children}
        </ProductContext.Provider>
    )
}
