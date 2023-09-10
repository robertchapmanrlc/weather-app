import { Card, CardContent, Typography } from "@mui/material";
import HumidityIcon from "./Icons/HumidityIcon";

interface Props {
  humidity: number;
}

function Humidity({ humidity }: Props) {
  return (
    <Card
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.15)",
        color: "white",
        height: 180,
        width: 247
      }}
    >
          <CardContent>
            <HumidityIcon />
        <Typography variant="h5">Humidity</Typography>
        <Typography variant="h5">{humidity}%</Typography>
      </CardContent>
    </Card>
  );
}

export default Humidity;
