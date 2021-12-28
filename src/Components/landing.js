import VideoCard from "./card";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Grid, Box } from "@mui/material";
import { useNavigate } from "react-router";
import { myContext } from "../Helper/Context";

const Landing = () => {
  let navigate = useNavigate();
  const [videoList, setVideoList] = useState([]);
  const { myData, setData } = useContext(myContext);
  useEffect(() => performApicall(), []);

  const performApicall = async () => {
    const URL = "https://api.tvmaze.com/search/shows?q=all";
    try {
      const response = await axios.get(URL);
      const videos = response.data;
      if (response.status === 200) {
        setVideoList(videos);
      }
    } catch (err) {
      if (err.response && err.response.data) {
        console.log(err);
      }
    }
  };

  const handleCardClick = (id) => {
    setData({ Id: id, value: videoList });
    navigate("/summary");
  };

  return (
    <Box>
      <Grid
        container
        spacing={3}
        padding="2rem 5rem"
        sx={{ background: "#181818" }}
      >
        {videoList.map((data) => {
          return (
            <Grid item md={3} sm={6} key={data.show.id}>
              <VideoCard
                videoData={data}
                handleClick={() => handleCardClick(data.show.id)}
              />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};
export default Landing;
