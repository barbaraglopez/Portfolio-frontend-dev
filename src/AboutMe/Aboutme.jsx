import "./Aboutme.css";
import Navbar from '../Navbar/Navbar.jsx'; // Importa el componente Navbar desde la ruta correcta


const Aboutme = () => {
  return (
    <div className="backgroundImage h-screen">
      <Navbar/>
      <h1>Hola desde MiComponente</h1>
      <p>Este es un componente de ejemplo en React con una imagen de fondo.</p>
    </div>
  );
};

export default Aboutme;
