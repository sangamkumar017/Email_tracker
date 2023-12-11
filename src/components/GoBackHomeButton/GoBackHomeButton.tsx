"use client";

import React from "react";
import { IconButton, Tooltip } from "@mui/material";
import { TbArrowBackUp } from "react-icons/tb";
import { useRouter } from "next/navigation";

import "./GoBackHomeButton.css";

const GoBackHomeButton = () => {
  const router = useRouter();
  return (
    <>
      <Tooltip
        title="Go Back To Home"
        placement="right"
        arrow
        enterDelay={0}
        leaveDelay={200}
      >
        <IconButton
          onClick={() => {
            router.push("/");
          }}
        >
          <TbArrowBackUp />
        </IconButton>
      </Tooltip>
    </>
  );
};

export default GoBackHomeButton;
