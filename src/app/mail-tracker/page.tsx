"use client";
import { useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import SearchBar from "material-ui-search-bar";
import Link from "next/link";
import { clients } from "./MailTrackerMetadata";
import Icon from "@mui/material/Icon";
import GoBackHomeButton from "@/components/GoBackHomeButton/GoBackHomeButton";

import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import EmailIcon from "@mui/icons-material/Email";
import SmsFailedIcon from "@mui/icons-material/SmsFailed";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import AdsClickIcon from "@mui/icons-material/AdsClick";
import DraftsIcon from "@mui/icons-material/Drafts";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";

import "./MailTracker.css";

const columns: GridColDef[] = [
  {
    field: "id",
    headerName: "S.NO",
    width: 130,
    headerClassName: "sno-header",
    renderHeader: () => (
      <>
        {" "}
        <FormatListNumberedIcon className="id-icon" />
      </>
    ),
  },
  {
    field: "email",
    headerName: "ClientEmail",
    width: 380,
    headerClassName: "email-header",
    renderHeader: () => (
      <>
        {" "}
        <EmailIcon className="email-icon" />
        Client Email
      </>
    ),
  },
  {
    field: "statusCounts.Failed",
    headerName: "Failed",
    width: 240,
    headerClassName: "failed-header",
    renderHeader: () => (
      <>
        {" "}
        <SmsFailedIcon className="failed-icon" />
        Failed
      </>
    ),
  },
  {
    field: "statusCounts.Deliver",
    headerName: "Deliver",
    width: 240,
    headerClassName: "deliver-header",
    renderHeader: () => (
      <>
        {" "}
        <LocalShippingIcon className="deliver-icon" />
        Deliver
      </>
    ),
  },
  {
    field: "statusCounts.Click",
    headerName: "Click",
    width: 240,
    headerClassName: "click-header",
    renderHeader: () => (
      <>
        {" "}
        <AdsClickIcon className="click-icon" />
        Click
      </>
    ),
  },
  {
    field: "statusCounts.Open",
    headerName: "Open",
    width: 240,
    headerClassName: "open-header",
    renderHeader: () => (
      <>
        {" "}
        <DraftsIcon className="open-icon" />
        Open
      </>
    ),
  },
  {
    field: "statusCounts.Read",
    headerName: "Read",
    width: 240,
    headerClassName: "read-header",
    renderHeader: () => (
      <>
        {" "}
        <AutoStoriesIcon className="read-icon" />
        Read
      </>
    ),
    cellClassName: "read-icon-cell",
  },
];

const largerFontColumns: GridColDef[] = columns.map((col) => {
  if (col.field === "email") {
    return {
      ...col,
      headerClassName: "larger-font",
      renderCell: (params) => (
        <>
          <Link href={`/mail-tracker/${params.value}`} passHref>
            {params.value}
          </Link>
        </>
      ),
    };
  }

  if (col.field.startsWith("statusCounts.")) {
    const status = col.field.replace("statusCounts.", "");
    return {
      ...col,
      valueGetter: (params) => params.row.statusCounts[status] || 0,
    };
  }
  return col;
});

export default function MailTracker() {
  const [searcheddata, setSearcheddata] = useState("");
  const [filteredRowsdata, setFilteredRowsdata] = useState(clients);

  const requestSearch = (searchedVal: any) => {
    const filteredRows = clients.filter((client) => {
      return client.email.toLowerCase().includes(searchedVal.toLowerCase());
    });
    setFilteredRowsdata(filteredRows);
    setSearcheddata(searchedVal);
  };

  const cancelSearch = () => {
    setFilteredRowsdata(clients);
    setSearcheddata("");
  };

  return (
    <div className="mail-tracker-parent-container">
      <GoBackHomeButton />
      <h1 className="mail-tracker-heading">Mail Tracking</h1>
      <SearchBar
        value={searcheddata}
        onChange={requestSearch}
        onCancelSearch={cancelSearch}
        className="mail-tracker-searchbar"
      />
      <DataGrid
        rows={filteredRowsdata}
        columns={largerFontColumns}
        className="mail-tracker-data-grid"
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        autoHeight
        disableColumnMenu
      />
    </div>
  );
}
