import { Box, Chip } from '@mui/material';
import { typeColors } from '../assets/typeColors';

export default function TypeFilter({ types, selectedTypes, toggleType }) {
  return (
    <Box className="flex flex-wrap justify-center gap-2 px-4 my-2">
      {types.map((type) => {
        const isSelected = selectedTypes.includes(type);
        return (
          <Chip
            key={type}
            label={type.charAt(0).toUpperCase() + type.slice(1)}
            onClick={() => toggleType(type)}
            sx={{
              backgroundColor: typeColors[type],
              color: '#fff',
              fontWeight: 'bold',
              cursor: 'pointer',
              border: isSelected ? '2px solid #fff' : 'none',
              borderRadius: '9999px',
              textTransform: 'capitalize',
              '&:hover': {
                backgroundColor: typeColors[type],
                opacity: 0.9,
              },
            }}
          />
        );
      })}
    </Box>
  );
}
