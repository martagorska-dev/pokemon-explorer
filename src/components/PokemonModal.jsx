import {
  Dialog,
  DialogTitle,
  DialogContent,
  Grid,
  Chip,
  IconButton,
  Box,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { typeColors } from '../assets/typeColors';

export default function PokemonModal({ pokemon, close }) {
  if (!pokemon) return null;

  return (
    <Dialog open={!!pokemon} onClose={close} maxWidth="sm" fullWidth>
      <DialogTitle>
        {pokemon.name.toUpperCase()}
        <IconButton
          onClick={close}
          sx={{ position: 'absolute', right: 8, top: 8 }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers>
        <Grid container spacing={2} justifyContent="center">
          {Object.values(pokemon.sprites)
            .filter(Boolean)
            .map((sprite, idx) => (
              <Grid item key={idx}>
                <img
                  src={sprite}
                  alt={`${pokemon.name}-${idx}`}
                  width={80}
                  height={80}
                />
              </Grid>
            ))}
        </Grid>
        <Box mt={2}>
          {pokemon.types.map((t) => (
            <Chip
              key={t.type.name}
              label={t.type.name}
              sx={{
                backgroundColor: typeColors[t.type.name],
                color: 'white',
                mr: 1,
              }}
            />
          ))}
        </Box>
      </DialogContent>
    </Dialog>
  );
}
