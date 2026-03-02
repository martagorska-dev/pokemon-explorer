import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Chip,
  Box,
  IconButton,
} from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { typeColors } from '../assets/typeColors';

export default function PokemonCard({
  pokemon,
  openModal,
  toggleFavorite,
  isFavorite,
}) {
  const bg =
    pokemon.types.length > 1
      ? `linear-gradient(90deg, ${pokemon.types.map((t) => typeColors[t.type.name]).join(', ')})`
      : typeColors[pokemon.types[0].type.name];

  return (
    <Card
      sx={{
        background: bg,
        borderRadius: '24px',
        cursor: 'pointer',
        position: 'relative',
        '&:hover': { transform: 'scale(1.05)' },
        transition: 'transform 0.2s',
      }}
      onClick={() => openModal(pokemon)}
    >
      <IconButton
        onClick={(e) => {
          e.stopPropagation();
          toggleFavorite(pokemon);
        }}
        sx={{ position: 'absolute', top: 4, right: 4, color: 'white' }}
      >
        {isFavorite ? <StarIcon /> : <StarBorderIcon />}
      </IconButton>

      <CardMedia
        component="img"
        image={pokemon.sprites.front_default}
        alt={pokemon.name}
        sx={{ width: 96, height: 96, margin: 'auto', mt: 2 }}
      />
      <CardContent>
        <Typography
          variant="h6"
          align="center"
          sx={{ color: 'white', textTransform: 'capitalize' }}
        >
          {pokemon.name}
        </Typography>
        <Typography align="center" sx={{ color: 'white' }}>
          #{pokemon.id.toString().padStart(3, '0')}
        </Typography>
        <Box
          display="flex"
          justifyContent="center"
          mt={1}
          gap={1}
          flexWrap="wrap"
        >
          {pokemon.types.map((t) => (
            <Chip
              key={t.type.name}
              label={t.type.name}
              size="small"
              sx={{ backgroundColor: 'rgba(255,255,255,0.3)', color: 'white' }}
            />
          ))}
        </Box>
      </CardContent>
    </Card>
  );
}
