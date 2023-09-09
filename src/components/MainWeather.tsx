import { Typography, Card, CardContent, Box, Stack, Container } from "@mui/material";
import Sunny from "./Sunny";

interface Props {
  date: string;
  location: string;
  temp: number;
  description: string;
  max_temp: number;
  min_temp: number;
}

function MainWeather({
  date,
  location,
  temp,
  max_temp,
  min_temp,
  description,
}: Props) {
  return (
    <>
      <Card
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.15)"
        }}
      >
        <CardContent>
          <Stack direction="row" spacing={5}>
            <Container sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', minWidth: '250px'}}>
              <Sunny />
            </Container>
            <Box minWidth="450px" display="flex" flexDirection="column" justifyContent="center" alignItems="start">
              <Typography variant="h5" sx={{ color: "white" }}>
                {date}
              </Typography>
              <Typography variant="h2" sx={{ color: "white" }}>
                {location}
              </Typography>
              <Typography variant="h3" sx={{ color: "white" }}>
                {temp}&deg;F
              </Typography>
              <Typography variant="h5" sx={{ color: "white" }}>
                {description}
              </Typography>
              <Typography variant="h5" sx={{ color: "white" }}>
                {max_temp}&deg;F / {min_temp}&deg;F
              </Typography>
            </Box>
          </Stack>
        </CardContent>
      </Card>
    </>
  );
}

export default MainWeather;
