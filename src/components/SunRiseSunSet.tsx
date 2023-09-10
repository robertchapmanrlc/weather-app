import { Card, CardContent, Typography, Box, Stack } from "@mui/material";
import SunRiseIcon from "./Icons/SunRiseIcon";
import SunSetIcon from "./Icons/SunSetIcon";

interface Props {
  sunrise: string;
  sunset: string;
}

function SunRiseSunSet({ sunrise, sunset }: Props) {
  return (
    <Card
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.15)",
        color: "white",
      }}
    >
      <CardContent>
          <Stack direction="row" spacing={5}>
              <Box>
                  <SunRiseIcon />
                  <Typography variant="h5">Sunrise</Typography>
                  <Typography variant="h5">{sunrise}</Typography>
              </Box>
              <Box>
                  <SunSetIcon />
                  <Typography variant="h5">Sunset</Typography>
                  <Typography variant="h5">{sunset}</Typography>
              </Box>
          </Stack>
      </CardContent>
    </Card>
  );
}

export default SunRiseSunSet;
