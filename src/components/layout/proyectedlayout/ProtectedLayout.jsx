import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { auth } from "../../../firebase"; // Importar Firebase auth
import { signOut } from "firebase/auth";
import Swal from "sweetalert2";
import Grid from "@mui/material/Grid2";

export function ProtectedLayout() {
  const navigate = useNavigate();

  // Función para cerrar sesión
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        Swal.fire("Sesion cerrada con exito");
        navigate("/"); // Redirigir al login después de cerrar sesión
      })
      .catch((error) => {
        console.error("Error al cerrar sesión:", error);
      });
  };

  // Verificar si el usuario está autenticado
  const user = auth.currentUser;
  if (!user) {
    return <Navigate to="/" />; // Redirigir al login si no está autenticado
  }

  return (
    <div className="protected-layout">
      <nav className="menu">
        <Outlet />
        <Grid container={true}>
          <Grid size={{ xs: 12 }} textAlign={"center"}>
            <button onClick={() => navigate("/CargaJugadores")}>
              Cargar Jugador
            </button>
            <button onClick={handleLogout}>Cerrar Sesión</button>
            <button onClick={() => navigate("/AgregarJugadores")}>
              Agregar Cliente
            </button>
            <main></main>
            <button>cargar todos los jugadores</button>
          </Grid>
        </Grid>
      </nav>
    </div>
  );
}
