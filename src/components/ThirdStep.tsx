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
        <InputLabel htmlFor="component-simple">Name</InputLabel>
        <Input
          id="component-simple"
          onChange={(e) => props.setname(e.target.value)}
          value={props.name}
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
            label="Date Of Birth"
            onChange={(e: any, value) => {
              props.setdateOfBirth(moment(e.$d).format("YYYY-MM-DD"));
            }}
            format="YYYY-MM-DD"
            slotProps={{ textField: { fullWidth: true, error: false } }}
            value={props.dateOfBirth && moment(props.dateOfBirth)}
          />
        </LocalizationProvider>
      </div>
      <FormControl
        variant="standard"
        style={{
          margin: "10px 0px",
        }}
      >
        <InputLabel htmlFor="component-simple">Qualification</InputLabel>
        <Input
          id="component-simple"
          onChange={(e) => props.setqualification(e.target.value)}
          value={props.qualification}
        />
      </FormControl>
      <FormControl
        variant="standard"
        style={{
          margin: "10px 0px",
        }}
      >
        <InputLabel htmlFor="component-simple">Pan</InputLabel>
        <Input
          id="component-simple"
          onChange={(e) => props.setpan(e.target.value)}
          value={props.pan}
        />
      </FormControl>
      <FormControl
        variant="standard"
        style={{
          margin: "10px 0px",
        }}
      >
        <InputLabel htmlFor="component-simple">Address</InputLabel>
        <Input
          id="component-simple"
          onChange={(e) => props.setaddress(e.target.value)}
          value={props.address}
        />
      </FormControl>
      <FormControl
        variant="standard"
        style={{
          margin: "10px 0px",
        }}
      >
        <InputLabel htmlFor="component-simple">Occupation</InputLabel>
        <Input
          id="component-simple"
          onChange={(e) => props.setoccupation(e.target.value)}
          value={props.occupation}
        />
      </FormControl>
      <FormControl
        variant="standard"
        style={{
          margin: "10px 0px",
        }}
      >
        <InputLabel htmlFor="component-simple">Experience</InputLabel>
        <Input
          id="component-simple"
          onChange={(e) => props.setexperience(e.target.value)}
          value={props.experience}
        />
      </FormControl>
      <FormControl
        variant="standard"
        style={{
          margin: "10px 0px",
        }}
      >
        <InputLabel htmlFor="component-simple">LandLine</InputLabel>
        <Input
          id="component-simple"
          onChange={(e) => props.setlandLine(e.target.value)}
          value={props.landLine}
        />
      </FormControl>
      <FormControl
        variant="standard"
        style={{
          margin: "10px 0px",
        }}
      >
        <InputLabel htmlFor="component-simple">Mobile Number</InputLabel>
        <Input
          id="component-simple"
          onChange={(e) => props.setmobileNumber(e.target.value)}
          value={props.mobileNumber}
        />
      </FormControl>
      <FormControl
        variant="standard"
        style={{
          margin: "10px 0px",
        }}
      >
        <InputLabel htmlFor="component-simple">
          Associated With Oth Institutions
        </InputLabel>
        <Input
          id="component-simple"
          onChange={(e) =>
            props.setassociatedWithOthInstitutions(e.target.value)
          }
        />
      </FormControl>
      <FormControl
        variant="standard"
        style={{
          margin: "10px 0px",
        }}
      >
        <InputLabel htmlFor="component-simple">Authorized Signature</InputLabel>
        <Input
          id="component-simple"
          onChange={(e) => props.setauthorizedSignature(e.target.value)}
          value={props.authorizedSignature}
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
            label="Date Of Appointment"
            onChange={(e: any, value) => {
              props.setdateOfAppointment(moment(e.$d).format("YYYY-MM-DD"));
            }}
            format="YYYY-MM-DD"
            slotProps={{ textField: { fullWidth: true, error: false } }}
            value={props.dateOfAppointment && moment(props.dateOfAppointment)}
          />
        </LocalizationProvider>
      </div>
      <FormControl
        variant="standard"
        style={{
          margin: "10px 0px",
        }}
      >
        <InputLabel htmlFor="component-simple">Salary</InputLabel>
        <Input
          id="component-simple"
          onChange={(e) => props.setsalary(e.target.value)}
          value={props.salary}
        />
      </FormControl>
      <FormControl
        variant="standard"
        style={{
          margin: "10px 0px",
        }}
      >
        <InputLabel htmlFor="component-simple">Bank Name</InputLabel>
        <Input
          id="component-simple"
          onChange={(e) => props.setbankName(e.target.value)}
          value={props.bankName}
        />
      </FormControl>
      <FormControl
        variant="standard"
        style={{
          margin: "10px 0px",
        }}
      >
        <InputLabel htmlFor="component-simple">Bank Address</InputLabel>
        <Input
          id="component-simple"
          onChange={(e) => props.setbankAddress(e.target.value)}
          value={props.bankAddress}
        />
      </FormControl>
      <FormControl
        variant="standard"
        style={{
          margin: "10px 0px",
        }}
      >
        <InputLabel htmlFor="component-simple">Account Type</InputLabel>
        <Input
          id="component-simple"
          onChange={(e) => props.setaccountType(e.target.value)}
          value={props.accountType}
        />
      </FormControl>
      <FormControl
        variant="standard"
        style={{
          margin: "10px 0px",
        }}
      >
        <InputLabel htmlFor="component-simple">Account Number</InputLabel>
        <Input
          id="component-simple"
          onChange={(e) => props.setaccountNumber(e.target.value)}
          value={props.accountNumber}
        />
      </FormControl>
      <FormControl
        variant="standard"
        style={{
          margin: "10px 0px",
        }}
      >
        <InputLabel htmlFor="component-simple">Ifsc Code</InputLabel>
        <Input
          id="component-simple"
          onChange={(e) => props.setifscCode(e.target.value)}
          value={props.ifscCode}
        />
      </FormControl>
    </div>
  );
}

export default ThirdStep;
