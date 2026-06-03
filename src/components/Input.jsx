import { TextField, Button, Box } from "@mui/material";

function Input({ valor, onChange, onKeyDown, onBuscar }) {
  return (
    <Box sx={{ display: "flex", gap: 2 }}>
      <TextField
        fullWidth
        label="Nombre del personaje"
        value={valor}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={onKeyDown}
      />

      <Button
        variant="contained"
        onClick={onBuscar}
      >
        Buscar
      </Button>
    </Box>
  );
}

export default Input;