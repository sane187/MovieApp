import { useContext } from "react";
import { myContext } from "../Helper/Context";
import { Box, Typography, Button } from "@mui/material";

const Summary = () => {
  const { myData, setData } = useContext(myContext);

  const data = myData.value;
  const id = myData.Id;

  let filteredData = data.find((value) => value.show.id === id);
  let summary = filteredData.show.summary;
  document.body.style.backgroundImage = `url(${filteredData.show.image.original})`;

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flex: "1",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <Box
        sx={{
          background: "red",
          height: 500,
          width: 500,
          color: "white",
          textAlign: "center",
          padding: 2,
          borderRadius: "10px"
        }}
      >
        <Typography variant="h3">Name: {filteredData.show.name}</Typography>

        <Typography variant="h5" paddingTop="1rem">
          Summary
        </Typography>
        <Typography paddingY="3rem">{summary}</Typography>
        <Button variant="contained">Book Here</Button>
      </Box>
    </div>
  );
};
export default Summary;
