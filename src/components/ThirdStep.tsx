import React from "react";

import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import moment from "moment";

function ThirdStep(props: any) {
  // const [posts, setPosts] = useState([]);

  return (
    <div
      style={{
        margin: "10px 20px 20px 85px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <FormControl
        variant="standard"
        style={{
          margin: "10px 0px",
        }}
      >
        <InputLabel htmlFor="component-simple">name</InputLabel>
        <Input
          id="component-simple"
          onChange={(e) => props.name(e.target.value)}
        />
      </FormControl>
      <div
        style={{
          margin: "10px 0px",
          width: "100%",
        }}
      >
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="date Of Birth"
            onChange={(e: any, value) => {
              props.dateOfBirth(moment(e.$d).format("YYYY-MM-DD"));
            }}
            format="YYYY-MM-DD"
          />
        </LocalizationProvider>
      </div>
      <FormControl
        variant="standard"
        style={{
          margin: "10px 0px",
        }}
      >
        <InputLabel htmlFor="component-simple">qualification</InputLabel>
        <Input
          id="component-simple"
          onChange={(e) => props.qualification(e.target.value)}
        />
      </FormControl>
      <FormControl
        variant="standard"
        style={{
          margin: "10px 0px",
        }}
      >
        <InputLabel htmlFor="component-simple">pan</InputLabel>
        <Input
          id="component-simple"
          onChange={(e) => props.pan(e.target.value)}
        />
      </FormControl>
      <FormControl
        variant="standard"
        style={{
          margin: "10px 0px",
        }}
      >
        <InputLabel htmlFor="component-simple">address</InputLabel>
        <Input
          id="component-simple"
          onChange={(e) => props.address(e.target.value)}
        />
      </FormControl>
      <FormControl
        variant="standard"
        style={{
          margin: "10px 0px",
        }}
      >
        <InputLabel htmlFor="component-simple">occupation</InputLabel>
        <Input
          id="component-simple"
          onChange={(e) => props.occupation(e.target.value)}
        />
      </FormControl>
      <FormControl
        variant="standard"
        style={{
          margin: "10px 0px",
        }}
      >
        <InputLabel htmlFor="component-simple">experience</InputLabel>
        <Input
          id="component-simple"
          onChange={(e) => props.experience(e.target.value)}
        />
      </FormControl>
      <FormControl
        variant="standard"
        style={{
          margin: "10px 0px",
        }}
      >
        <InputLabel htmlFor="component-simple">landLine</InputLabel>
        <Input
          id="component-simple"
          onChange={(e) => props.landLine(e.target.value)}
        />
      </FormControl>
      <FormControl
        variant="standard"
        style={{
          margin: "10px 0px",
        }}
      >
        <InputLabel htmlFor="component-simple">mobileNumber</InputLabel>
        <Input
          id="component-simple"
          onChange={(e) => props.mobileNumber(e.target.value)}
        />
      </FormControl>
      <FormControl
        variant="standard"
        style={{
          margin: "10px 0px",
        }}
      >
        <InputLabel htmlFor="component-simple">
          associatedWithOthInstitutions
        </InputLabel>
        <Input
          id="component-simple"
          onChange={(e) => props.associatedWithOthInstitutions(e.target.value)}
        />
      </FormControl>
      <FormControl
        variant="standard"
        style={{
          margin: "10px 0px",
        }}
      >
        <InputLabel htmlFor="component-simple">authorizedSignature</InputLabel>
        <Input
          id="component-simple"
          onChange={(e) => props.authorizedSignature(e.target.value)}
        />
      </FormControl>
      <div
        style={{
          margin: "10px 0px",
          width: "100%",
        }}
      >
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="date Of Appointment"
            onChange={(e: any, value) => {
              props.dateOfAppointment(moment(e.$d).format("YYYY-MM-DD"));
            }}
            format="YYYY-MM-DD"
          />
        </LocalizationProvider>
      </div>
      <FormControl
        variant="standard"
        style={{
          margin: "10px 0px",
        }}
      >
        <InputLabel htmlFor="component-simple">salary</InputLabel>
        <Input
          id="component-simple"
          onChange={(e) => props.salary(e.target.value)}
        />
      </FormControl>
      <FormControl
        variant="standard"
        style={{
          margin: "10px 0px",
        }}
      >
        <InputLabel htmlFor="component-simple">bankName</InputLabel>
        <Input
          id="component-simple"
          onChange={(e) => props.bankName(e.target.value)}
        />
      </FormControl>
      <FormControl
        variant="standard"
        style={{
          margin: "10px 0px",
        }}
      >
        <InputLabel htmlFor="component-simple">bankAddress</InputLabel>
        <Input
          id="component-simple"
          onChange={(e) => props.bankAddress(e.target.value)}
        />
      </FormControl>
      <FormControl
        variant="standard"
        style={{
          margin: "10px 0px",
        }}
      >
        <InputLabel htmlFor="component-simple">accountType</InputLabel>
        <Input
          id="component-simple"
          onChange={(e) => props.accountType(e.target.value)}
        />
      </FormControl>
      <FormControl
        variant="standard"
        style={{
          margin: "10px 0px",
        }}
      >
        <InputLabel htmlFor="component-simple">accountNumber</InputLabel>
        <Input
          id="component-simple"
          onChange={(e) => props.accountNumber(e.target.value)}
        />
      </FormControl>
      <FormControl
        variant="standard"
        style={{
          margin: "10px 0px",
        }}
      >
        <InputLabel htmlFor="component-simple">ifscCode</InputLabel>
        <Input
          id="component-simple"
          onChange={(e) => props.ifscCode(e.target.value)}
        />
      </FormControl>
    </div>
  );
}

export default ThirdStep;
