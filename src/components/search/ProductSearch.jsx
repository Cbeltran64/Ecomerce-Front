import React, { useState } from "react";
import Filtros from "./filtros.jsx";

const Productos = ({ productos }) => {
    const [productosFiltrados, setProductosFiltrados] = useState(productos);

    const filtrarPorMarca = (marca) => {
        if (marca === "") {
            setProductosFiltrados(productos);
        } else {
            const productosFiltradosPorMarca = productos.filter((producto) => producto.marca === marca);
            setProductosFiltrados(productosFiltradosPorMarca);
        }
    };

    const filtrarPorFecha = (fecha) => {
        if (fecha === "") {
          setProductosFiltrados(productos);
        } else {
          const productosFiltradosPorFecha = productos.filter((producto) => producto.fecha === fecha);
          setProductosFiltrados(productosFiltradosPorFecha);
        }
      };
      

    const filtrarPorPrecio = (precioMin, precioMax) => {
        const productosFiltradosPorPrecio = productos.filter(
            (producto) => producto.precio >= precioMin && producto.precio <= precioMax
        );
        setProductosFiltrados(productosFiltradosPorPrecio);
    };

    return (
        <div className="productos">
            <Filtros marcas={["Marca 1", "Marca 2", "Marca 3"]} fechas={["2022", "2023"]} filtrarPorMarca={filtrarPorMarca} filtrarPorFecha={filtrarPorFecha} filtrarPorPrecio={filtrarPorPrecio} />
            <ul>
                {productosFiltrados.map((producto) => (
                    <li key={producto.id}>
                        <h2>{producto.nombre}</h2>
                        <p>{producto.descripcion}</p>
                        <p>Precio: ${producto.precio}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Productos;