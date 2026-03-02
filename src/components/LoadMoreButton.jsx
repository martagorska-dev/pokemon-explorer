import { Button } from '@mui/material';

export default function LoadMoreButton({ onClick }) {
  return (
    <div className="flex justify-center my-4">
      <Button
        variant="contained"
        color="primary"
        onClick={onClick}
        sx={{
          borderRadius: '9999px',
          textTransform: 'none',
        }}
      >
        Load More
      </Button>
    </div>
  );
}
