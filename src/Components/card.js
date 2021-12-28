import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography
} from "@mui/material";

import moment from "moment";
const VideoCard = ({ videoData, handleClick }) => {
  const data = videoData.show;

  return (
    <Card
      sx={{
        background: "#181818",
        color: "#FFF",
        height: "100%",
        border: "1px solid white"
      }}
    >
      <CardActionArea onClick={handleClick}>
        <CardMedia
          component="img"
          height="200"
          image={data.image.original}
          alt={data.name}
        />

        <CardContent align="left">
          <Typography variant="body1" fontWeight="bold">
            {data.name}
          </Typography>
          <Typography variant="body2">
            {moment(data.premiered).fromNow()}
          </Typography>
          <Typography variant="caption" color="#D1D5DA">
            Genres: {data.genres.toString()}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default VideoCard;
