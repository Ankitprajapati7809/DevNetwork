import { Card, CardContent, CardActions, CardMedia, Button, Typography } from '@mui/material';

function App() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="https://via.placeholder.com/300x140"
        alt="Placeholder image"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Card Title
        </Typography>
        <Typography variant="body2" color="text.secondary">
          This is an example of a Material-UI card. It includes a title, image, and description.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

export default App;