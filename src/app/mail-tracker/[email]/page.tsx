"use client";
import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import SearchBar from "material-ui-search-bar";
import { clients } from "../MailTrackerMetadata";

import SubjectIcon from "@mui/icons-material/Subject";
import ScheduleIcon from "@mui/icons-material/Schedule";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";

import "./maildetails.css";

type Params = {
  params: {
    email: string;
  };
};

export default function MailDetails({ params: { email } }: Params) {
  const decodedEmail = decodeURIComponent(email);
  const client = clients.find((client) => client.email === decodedEmail);

  const [searched, setSearched] = useState("");
  const [filteredRows, setFilteredRows] = useState(client?.details || []);

  const requestSearch = (searchedVal: any) => {
    const filteredRows = client?.details.filter((detail) => {
      return (
        detail.subject.toLowerCase().includes(searchedVal.toLowerCase()) ||
        detail.timing.toLowerCase().includes(searchedVal.toLowerCase())
      );
    });
    setFilteredRows(filteredRows || []);
    setSearched(searchedVal);
  };

  const cancelSearch = () => {
    setFilteredRows(client?.details || []);
    setSearched("");
  };

  if (!client) {
    return null;
  }

  return (
    <div className="mail-details-container">
      <h2 className="mail-details-heading">Client Email: {client.email}</h2>

      <div>
        <SearchBar
          value={searched}
          onChange={requestSearch}
          onCancelSearch={cancelSearch}
          className="mail-details-search-container"
        />
        <DataGrid
          className="mail-details-grid"
          rows={filteredRows}
          columns={[
            {
              field: "id",
              headerName: "ID",
              width: 100,
              headerClassName: "id-header",
              renderHeader: () => (
                <>
                  <FormatListNumberedIcon
                    className="id-icon"
                    style={{
                      fontSize: "30",
                      marginRight: "8",
                    }}
                  />
                </>
              ),
            },
            {
              field: "subject",
              headerName: "Subject",
              width: 400,
              headerClassName: "subject-header",
              renderHeader: () => (
                <>
                  <SubjectIcon
                    className="subject-icon"
                    style={{
                      fontSize: "30",
                      marginRight: "8",
                    }}
                  />{" "}
                  Subject
                </>
              ),
            },
            {
              field: "status",
              headerName: "Status",
              width: 300,
              headerClassName: "status-header",
              renderHeader: () => (
                <>
                  {" "}
                  <CheckCircleIcon
                    className="status-icon"
                    style={{
                      fontSize: "30",
                      marginRight: "8",
                    }}
                  />
                  Status
                </>
              ),
            },
            {
              field: "timing",
              headerName: "Timing",
              width: 400,
              headerClassName: "timing-header",
              cellClassName: "smaller-font",
              renderHeader: () => (
                <>
                  <ScheduleIcon
                    className="timing-icon"
                    style={{
                      fontSize: "30",
                      marginRight: "8",
                    }}
                  />
                  Timing
                </>
              ),
              renderCell: (params) => <>{params.value}</>,
            },
            {
              field: "Forwarded",
              headerName: `Forwarded Mail`,
              width: 300,
              headerClassName: "forwarded-header",
              renderHeader: () => (
                <>
                  <ForwardToInboxIcon
                    className="forwarded-icon"
                    style={{
                      fontSize: "30",
                      marginRight: "8",
                    }}
                  />
                  Forwarded Mail
                </>
              ),
            },
          ]}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 8 },
            },
          }}
        />
      </div>
    </div>
  );
}
