import React from "react";
import type { Metadata } from "next";

import "./MailTracker.css";

export const metadata: Metadata = {
  title: "Mail Tracker",
  description: "AVR Mail History & Details",
};

const MailLayout = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

export default MailLayout;
