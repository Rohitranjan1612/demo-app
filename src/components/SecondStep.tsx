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
            label="Ertilizer Validity Date"
            onChange={(e: any, value) => {
              props.setertilizerValidityDate(moment(e.$d).format("YYYY-MM-DD"));
            }}
            format="YYYY-MM-DD"
            slotProps={{ textField: { fullWidth: true } }}
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
            label="Pesticide Insecticide Validity Date"
            onChange={(e: any, value) => {
              props.setpesticideInsecticideValidityDate(
                moment(e.$d).format("YYYY-MM-DD")
              );
            }}
            slotProps={{ textField: { fullWidth: true } }}
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
            label="Seeds Validity Date"
            onChange={(e: any, value) => {
              props.setseedsValidityDate(moment(e.$d).format("YYYY-MM-DD"));
            }}
            slotProps={{ textField: { fullWidth: true } }}
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
            label="Mport Export Validity Date"
            onChange={(e: any, value) => {
              props.setmportExportValidityDate(
                moment(e.$d).format("YYYY-MM-DD")
              );
            }}
            slotProps={{ textField: { fullWidth: true } }}
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
            label="Direct Marketing Validity Date"
            onChange={(e: any, value) => {
              props.setdirectMarketingValidityDate(
                moment(e.$d).format("YYYY-MM-DD")
              );
            }}
            slotProps={{ textField: { fullWidth: true } }}
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
            label="Fssai Validity Date"
            onChange={(e: any, value) => {
              props.setfssaiValidityDate(moment(e.$d).format("YYYY-MM-DD"));
            }}
            slotProps={{ textField: { fullWidth: true } }}
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
            label="GST Validity Date"
            onChange={(e: any, value) => {
              props.setgstValidityDate(moment(e.$d).format("YYYY-MM-DD"));
            }}
            slotProps={{ textField: { fullWidth: true } }}
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
            label="Pollution Validity Date"
            onChange={(e: any, value) => {
              props.setpollutionValidityDate(moment(e.$d).format("YYYY-MM-DD"));
            }}
            slotProps={{ textField: { fullWidth: true } }}
          />
        </LocalizationProvider>
      </div>
    </div>
  );
}

export default SecondStep;
