import React from "react";
import type { Metadata } from "next";

import "./TaskManagement.css";

export const metadata: Metadata = {
  title: "Task Management",
  description: "AVR Task Automation",
};

const TaskLayout = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

export default TaskLayout;
