
import { Card, CardContent, Typography } from "@mui/material"
import WindSpeedIcon from "./WindSpeedIcon"

interface Props {
    wind_speed: number
}

function WindSpeed({ wind_speed }: Props) {
  return (
    <Card
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.15)",
        color: "white",
      }}
    >
      <CardContent>
        <WindSpeedIcon />
        <Typography variant="h5">Wind</Typography>
        <Typography variant="h5">{wind_speed} mph</Typography>
      </CardContent>
    </Card>
  );
}

export default WindSpeed