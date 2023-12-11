import React from "react";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";

import "./SpinLoader.css";

export default function CircularColor() {
  return (
    <div>
      <Stack
        sx={{ color: "grey.500" }}
        spacing={2}
        direction="row"
        className="avdm-spin-loader-component-container"
      >
        <CircularProgress color="success" />
      </Stack>
    </div>
  );
}
