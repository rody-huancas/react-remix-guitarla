import { useLoaderData, useOutletContext } from "@remix-run/react";
import { useState } from "react";
import { getGuitarra } from "~/models/guitarras.server";

export function meta({ data }) {
  return [
    { title: `GuitarLA - ${data.data[0].attributes.nombre}` },
    { description: `Venta de guitarras ${data.data[0].attributes.nombre}` },
  ];
}

export async function loader({ params }) {
  const { guitarraUrl } = params;
  const guitarra = await getGuitarra(guitarraUrl);

  return guitarra;
}

const Guitarra = () => {
  const { agregarCarrito } = useOutletContext();
  const [cantidad, setCantidad] = useState(0);

  const guitarra = useLoaderData();
  const { nombre, descripcion, imagen, precio } = guitarra.data[0].attributes;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (cantidad < 1) {
      alert("Debes seleccionar una cantidad");
      return;
    }

    const guitarraSeleccionada = {
      id: guitarra.data[0].id,
      imagen: imagen.data.attributes.url,
      nombre,
      precio,
      cantidad,
    };

    agregarCarrito(guitarraSeleccionada);
  };

  return (
    <>
      <div className="guitarra">
        <img src={imagen.data.attributes.url} alt={nombre} className="imagen" />

        <div className="contenido">
          <h3>{nombre}</h3>
          <p className="texto">{descripcion}</p>
          <p className="precio">{precio}</p>

          <form onSubmit={handleSubmit} className="formulario">
            <label htmlFor="cantidad">Cantidad</label>
            <select
              id="cantidad"
              onChange={(e) => setCantidad(+e.target.value)}
            >
              <option value="0">--Seleccione--</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>

            <input type="submit" value="Agregar al carrito" />
          </form>
        </div>
      </div>
    </>
  );
};

export default Guitarra;
