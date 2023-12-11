"use client";

import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useRouter } from "next/navigation";
import { FaTasks, FaMailBulk } from "react-icons/fa";
import { RiMenuUnfoldLine } from "react-icons/ri";
import { IconButton } from "@mui/material";
import { MdNotificationsActive } from "react-icons/md";

import "./SideDrawer.css";

interface ProjectListType {
  projectName: string;
  projectRoute: string;
  projectClassName: string;
  projectIcon: any;
}

const SideDrawer = () => {
  const router = useRouter();
  const [sideDrawerActive, setSideDrawerActive] = useState<boolean>(false);
  const projectList: ProjectListType[] = [
    {
      projectName: "Task Management",
      projectRoute: "task-management",
      projectClassName:
        "side-drawer-list-item-task-container side-drawer-list-item",
      projectIcon: <FaTasks size={"1.4em"} />,
    },
    {
      projectName: "Mail Tracker",
      projectRoute: "mail-tracker",
      projectClassName:
        "side-drawer-list-item-mail-container side-drawer-list-item",
      projectIcon: <FaMailBulk size={"1.4em"} />,
    },
    {
      projectName: "Notification Management",
      projectRoute: "notification-management",
      projectClassName:
        "side-drawer-list-item-notification-container side-drawer-list-item",
      projectIcon: <MdNotificationsActive size={"1.4em"} />,
    },
  ];

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setSideDrawerActive(open);
    };

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {projectList.map((individualProject, projectIndex) => {
          return (
            <ListItem
              key={individualProject.projectName}
              className={individualProject.projectClassName}
              disablePadding
            >
              <ListItemButton
                onClick={() => {
                  router.push(individualProject.projectRoute);
                }}
              >
                <ListItemIcon>{individualProject.projectIcon}</ListItemIcon>
                <ListItemText primary={individualProject.projectName} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );

  return (
    <>
      <IconButton onClick={toggleDrawer(true)} aria-label="Left Drawer">
        <RiMenuUnfoldLine size={"1.4em"} />
      </IconButton>
      <Drawer
        anchor={"left"}
        open={sideDrawerActive}
        onClose={toggleDrawer(false)}
      >
        {list()}
      </Drawer>
    </>
  );
};

export default SideDrawer;
