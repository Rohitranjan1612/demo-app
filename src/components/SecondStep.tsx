import React from "react";

import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import moment from "moment";

function SecondStep(props: any) {
  return (
    <div
      style={{
        margin: "10px 20px 20px 85px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          margin: "10px 0px",
          width: "100%",
        }}
      >
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="ertilizer Validity Date"
            onChange={(e: any, value) => {
              props.ertilizerValidityDate(moment(e.$d).format("YYYY-MM-DD"));
            }}
            format="YYYY-MM-DD"
          />
        </LocalizationProvider>
      </div>
      <div
        style={{
          margin: "10px 0px",
        }}
      >
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="pesticide Insecticide Validity Date"
            onChange={(e: any, value) => {
              props.pesticideInsecticideValidityDate(
                moment(e.$d).format("YYYY-MM-DD")
              );
            }}
          />
        </LocalizationProvider>
      </div>
      <div
        style={{
          margin: "10px 0px",
        }}
      >
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="seeds Validity Date"
            onChange={(e: any, value) => {
              props.seedsValidityDate(moment(e.$d).format("YYYY-MM-DD"));
            }}
          />
        </LocalizationProvider>
      </div>
      <div
        style={{
          margin: "10px 0px",
        }}
      >
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="mport Export Validity Date"
            onChange={(e: any, value) => {
              props.mportExportValidityDate(moment(e.$d).format("YYYY-MM-DD"));
            }}
          />
        </LocalizationProvider>
      </div>
      <div
        style={{
          margin: "10px 0px",
        }}
      >
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="directMarketing Validity Date"
            onChange={(e: any, value) => {
              props.directMarketingValidityDate(
                moment(e.$d).format("YYYY-MM-DD")
              );
            }}
          />
        </LocalizationProvider>
      </div>
      <div
        style={{
          margin: "10px 0px",
        }}
      >
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="fssai Validity Date"
            onChange={(e: any, value) => {
              props.fssaiValidityDate(moment(e.$d).format("YYYY-MM-DD"));
            }}
          />
        </LocalizationProvider>
      </div>
      <div
        style={{
          margin: "10px 0px",
        }}
      >
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="gst Validity Date"
            onChange={(e: any, value) => {
              props.gstValidityDate(moment(e.$d).format("YYYY-MM-DD"));
            }}
          />
        </LocalizationProvider>
      </div>
      <div
        style={{
          margin: "10px 0px",
        }}
      >
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="pollution Validity Date"
            onChange={(e: any, value) => {
              props.pollutionValidityDate(moment(e.$d).format("YYYY-MM-DD"));
            }}
          />
        </LocalizationProvider>
      </div>
    </div>
  );
}

export default SecondStep;
