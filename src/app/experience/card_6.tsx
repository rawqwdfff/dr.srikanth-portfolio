import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const bull = (
  <Box component="span" sx={{ mx: "2px", transform: "scale(0.8)" }}>
    •
  </Box>
);

export default function BasicCard() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h4" gutterBottom>
          ⁠Project Assistant Level-III
        </Typography>
        <Typography variant="h5" component="div">
          CSIR Central Electrochemical Research Institute, Karaikudi, India.
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Feb 2023 - Present
        </Typography>
        <Typography variant="body2">
          Chemical and Biological Engineering Department, Colorado School of
          Mines, Golden, CO 80401, United States of America.
          <br />
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
