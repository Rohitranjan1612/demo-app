import React from "react";

import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

function ForthStep(props: any) {
  return (
    <div
      style={{
        margin: "10px 20px 20px 85px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* <FormControl
        variant="standard"
        style={{
          margin: "10px 0px",
        }}
      >
        <InputLabel htmlFor="component-simple">FPO Details Id</InputLabel>
        <Input
          id="component-simple"
          onChange={(e) => props.setfpoDetailsId(e.target.value)}
          value={props.fpoDetailsId}
        />
      </FormControl> */}
      <FormControl
        variant="standard"
        style={{
          margin: "10px 0px",
        }}
      >
        <InputLabel htmlFor="component-simple">GST Validity</InputLabel>
        <Input
          id="component-simple"
          onChange={(e) => props.setgstValidity(e.target.value)}
          value={props.gstValidity}
        />
      </FormControl>
      <FormControl
        variant="standard"
        style={{
          margin: "10px 0px",
        }}
      >
        <InputLabel htmlFor="component-simple">Pollution Validity</InputLabel>
        <Input
          id="component-simple"
          onChange={(e) => props.setpollutionValidity(e.target.value)}
          value={props.pollutionValidity}
        />
      </FormControl>
      <FormControl
        variant="standard"
        style={{
          margin: "10px 0px",
        }}
      >
        <InputLabel htmlFor="component-simple">fssai Validity</InputLabel>
        <Input
          id="component-simple"
          onChange={(e) => props.setfssaiValidity(e.target.value)}
          value={props.fssaiValidity}
        />
      </FormControl>
      <FormControl
        variant="standard"
        style={{
          margin: "10px 0px",
        }}
      >
        <InputLabel htmlFor="component-simple">
          Direct Marketing Validity
        </InputLabel>
        <Input
          id="component-simple"
          onChange={(e) => props.setdirectMarketingValidity(e.target.value)}
          value={props.directMarketingValidity}
        />
      </FormControl>
      <FormControl
        variant="standard"
        style={{
          margin: "10px 0px",
        }}
      >
        <InputLabel htmlFor="component-simple">
          Import Export Validity
        </InputLabel>
        <Input
          id="component-simple"
          onChange={(e) => props.setimportExportValidity(e.target.value)}
          value={props.importExportValidity}
        />
      </FormControl>
      <FormControl
        variant="standard"
        style={{
          margin: "10px 0px",
        }}
      >
        <InputLabel htmlFor="component-simple">Seeds Validity</InputLabel>
        <Input
          id="component-simple"
          onChange={(e) => props.setseedsValidity(e.target.value)}
          value={props.seedsValidity}
        />
      </FormControl>
      <FormControl
        variant="standard"
        style={{
          margin: "10px 0px",
        }}
      >
        <InputLabel htmlFor="component-simple">
          Pest Icide Insect Icide Validity
        </InputLabel>
        <Input
          id="component-simple"
          onChange={(e) =>
            props.setpesticideInsecticideValidity(e.target.value)
          }
          value={props.pesticideInsecticideValidity}
        />
      </FormControl>
      <FormControl
        variant="standard"
        style={{
          margin: "10px 0px",
        }}
      >
        <InputLabel htmlFor="component-simple">
          Fertilizer License Validity
        </InputLabel>
        <Input
          id="component-simple"
          onChange={(e) => props.setfertilizerLicenseValidity(e.target.value)}
          value={props.fertilizerLicenseValidity}
        />
      </FormControl>
      <h5>Staff Photo</h5>
      <Button
        component="label"
        variant="contained"
        startIcon={<CloudUploadIcon />}
      >
        Staff Photo
        <VisuallyHiddenInput
          type="file"
          id="staffPhoto"
          onChange={() => {
            const file: any = document.querySelector("#staffPhoto");
            props.setstaffPhoto(file.files[0]);
          }}
        />
      </Button>
      {props.staffPhoto && (
        <img
          id="staffPhoto"
          width={"100"}
          style={{ marginTop: "10px" }}
          src={URL.createObjectURL(props.staffPhoto)}
        />
      )}
      <h5>Registered Address</h5>
      <Button
        component="label"
        variant="contained"
        startIcon={<CloudUploadIcon />}
      >
        Registered Address
        <VisuallyHiddenInput
          type="file"
          id="registeredAddress"
          onChange={() => {
            const file: any = document.querySelector("#registeredAddress");
            props.setregisteredAddress(file.files[0]);
          }}
        />
      </Button>
      {props.registeredAddress && (
        <img
          id="registeredAddress"
          width={"100"}
          style={{ marginTop: "10px" }}
          src={URL.createObjectURL(props.registeredAddress)}
        />
      )}
      <h5>Account Details</h5>
      <Button
        component="label"
        variant="contained"
        startIcon={<CloudUploadIcon />}
      >
        Account Details
        <VisuallyHiddenInput
          type="file"
          id="accountDetails"
          onChange={() => {
            const file: any = document.querySelector("#accountDetails");
            props.setaccountDetails(file.files[0]);
          }}
        />
      </Button>
      {props.accountDetails && (
        <img
          id="accountDetails"
          width={"100"}
          style={{ marginTop: "10px" }}
          src={URL.createObjectURL(props.accountDetails)}
        />
      )}
    </div>
  );
}

export default ForthStep;
