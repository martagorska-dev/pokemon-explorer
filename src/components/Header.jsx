import { AppBar, Toolbar, Typography, Box } from '@mui/material';

export default function Header() {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#0e0e0e' }}>
      <Toolbar className="justify-center">
        <Box
          component="img"
          src="/poke-ball.png"
          alt="Pokeball"
          sx={{ width: 36, height: 36, mr: 2 }}
        />
        <Typography
          variant="h5"
          sx={{
            fontWeight: 'bold',
            background: 'linear-gradient(90deg, #FF6C00, #FFA500)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Pokemon Explorer
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
