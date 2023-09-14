import {
  Typography,
  Card,
  CardContent,
  Box,
  Stack,
  Container,
} from "@mui/material";
import Sunny from "./Icons/Sunny";
import CloudyNightIcon from "./Icons/CloudyNightIcon";
import NightIcon from "./Icons/NightIcon";
import CloudyDayIcon from "./Icons/CloudyDayIcon";
import RainyDayIcon from "./Icons/RainyDayIcon";
import ThunderIcon from "./Icons/ThunderIcon";
import RainyNightIcon from "./Icons/RainyNightIcon";

interface Props {
  main: string,
  date: string;
  location: string;
  temp: number;
  description: string;
  max_temp: number;
  min_temp: number;
}

function MainWeather({
  main,
  date,
  location,
  temp,
  max_temp,
  min_temp,
  description,
}: Props) {

  const getMain = (main: string) => {
    const time = new Date().getHours();
    switch (main) {
      case 'Clouds':
        if(time >= 7 && time <= 17)
          return 'Cloudy Day';
        else return 'Cloudy Night'
      case 'Clear':
        if(time >= 7 && time <= 17)
          return 'Clear Day';
        else return 'Clear Night'
      case 'Rain':
        if (time >= 7 && time <= 17)
          return 'Rainy Day';
        else return 'Rainy Night';
      case 'Thunderstorm':
        return 'Thunder';
    }
  }

  const icon = getMain(main);

  return (
    <>
      <Card
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.25)",
        }}
      >
        <CardContent>
          <Stack direction="row" spacing={5}>
            <Container
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minWidth: "250px",
              }}
            >
              {(() => {
                switch (icon) {
                  case 'Cloudy Day':
                    return <CloudyDayIcon />
                  case 'Cloudy Night':
                    return <CloudyNightIcon />
                  case 'Clear Night':
                    return <NightIcon />
                  case 'Clear Day':
                    return <Sunny />
                  case 'Rainy Day':
                    return <RainyDayIcon />
                  case 'Rainy Night':
                    return <RainyNightIcon />;
                  case 'Thunder':
                    return <ThunderIcon />
                }
              })()}
            </Container>
            <Box
              minWidth="450px"
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="start"
            >
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
