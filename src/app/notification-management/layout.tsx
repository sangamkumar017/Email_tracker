import React from "react";
import type { Metadata } from "next";

import "./NotificationManagement.css";

export const metadata: Metadata = {
  title: "Notification Management",
  description: "Notification push and history",
};

const NotificationLayout = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

export default NotificationLayout;
