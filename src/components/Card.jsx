import {
  Card as MuiCard,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

function Card({ personaje }) {
  if (!personaje) return null;

  return (
    <MuiCard sx={{ mt: 3 }}>
      <CardMedia
        component="img"
        height="300"
        image={personaje.image}
        alt={personaje.name}
      />

      <CardContent>
        <Typography variant="h5">
          {personaje.name}
        </Typography>

        <Typography>
          Estado: {personaje.status}
        </Typography>

        <Typography>
          Especie: {personaje.species}
        </Typography>

        <Typography>
          Género: {personaje.gender}
        </Typography>
      </CardContent>
    </MuiCard>
  );
}

export default Card;