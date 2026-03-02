import { TextField, Box } from '@mui/material';

export default function SearchBar({ search, setSearch }) {
  return (
    <Box className="flex justify-center my-4">
      <TextField
        placeholder="Search Pokémon..."
        variant="outlined"
        size="small"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        sx={{
          width: { xs: '90%', sm: '400px' },
          backgroundColor: '#2c2c2c',
          borderRadius: '9999px',
          '& .MuiOutlinedInput-root': {
            '& fieldset': { border: 'none' },
            '&:hover fieldset': { border: 'none' },
            '&.Mui-focused fieldset': { border: 'none' },
          },
          '& .MuiInputBase-input': {
            color: '#ccc',
          },
          '& .MuiInputLabel-root': {
            display: 'none',
          },
        }}
      />
    </Box>
  );
}
