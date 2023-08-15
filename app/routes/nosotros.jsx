import imagen from "../../public/img/nosotros.jpg";
import styles from "~/styles/nosotros.css";

export function meta() {
  return [
    {
      title: "GuitarLA - Sobre Nosotros",
      description: "Venta de guitarras, blog de música",
    },
  ];
}

export function links() {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
    {
      rel: "preload",
      href: imagen,
      as: "image",
    },
  ];
}

const Nosotros = () => {
  return (
    <>
      <main className="contanedor nosotros">
        <h2 className="heading">Nosotros</h2>

        <div className="contenido">
          <img src={imagen} alt="nosotros" />
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              quia molestiae est unde, illo hic non labore deserunt suscipit
              facilis officia tempora perspiciatis veritatis quisquam cumque
              accusantium consectetur vel architecto.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              quia molestiae est unde, illo hic non labore deserunt suscipit
              facilis officia tempora perspiciatis veritatis quisquam cumque
              accusantium consectetur vel architecto.
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default Nosotros;
