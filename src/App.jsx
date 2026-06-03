import { useState } from "react";
import { Container, Typography, CircularProgress, Alert } from "@mui/material";

import Input from "./components/Input";
import Card from "./components/Card";
import useFetch from "./hooks/useFetch";

function App() {
  const [nombre, setNombre] = useState("");
  const [url, setUrl] = useState(null);

  const { data, loading, error } = useFetch(url);

  function buscarPersonaje() {
    if (nombre.trim() === "") return;

    setUrl(
      "https://rickandmortyapi.com/api/character/?name=" +
        nombre.trim()
    );
  }

  function manejarEnter(e) {
    if (e.key === "Enter") {
      buscarPersonaje();
    }
  }

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Buscador de Personajes
      </Typography>

      <Input
        valor={nombre}
        onChange={setNombre}
        onKeyDown={manejarEnter}
        onBuscar={buscarPersonaje}
      />

      {loading && (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <CircularProgress />
        </div>
      )}

      {error && (
        <Alert severity="error" sx={{ mt: 2 }}>
          {error}
        </Alert>
      )}

      {data && !loading && (
        <Card personaje={data.results[0]} />
      )}
    </Container>
  );
}

export default App;