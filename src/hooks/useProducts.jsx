import { useState, useEffect } from "react";
import Axios from "axios";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    let fetchedProductos = [];

    Axios.get("https://apimigu.vercel.app/")
      .then((response) => {
        Object.values(response.data).map((product) => {
          for (let i = 0; i < product.length; i++) {
            var id = product[i].idProducto;
            var imagen = product[i].imagen;
            var nombre = product[i].nombre;
            var precio = product[i].precio;

            fetchedProductos.push({
              id, imagen, nombre, precio
            });
          }
          setProducts(fetchedProductos);
        });
      });
    setIsLoading(false);
    setError(false);
  }, [])
  return [products, isLoading, error]

}

export { useProducts };