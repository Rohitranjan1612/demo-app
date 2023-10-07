import React from "react";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import moment from "moment";

function FirstStep(props: any) {
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
        <InputLabel htmlFor="component-simple">fpo Name</InputLabel>
        <Input
          id="component-simple"
          onChange={(e) => props.setfpoName(e.target.value)}
        />
      </FormControl>
      <FormControl
        variant="standard"
        style={{
          margin: "10px 0px",
        }}
      >
        <InputLabel htmlFor="component-simple">
          name Of Resource Institute
        </InputLabel>
        <Input
          id="component-simple"
          onChange={(e) => props.setnameOfResourceInstitute(e.target.value)}
        />
      </FormControl>
      <FormControl
        variant="standard"
        style={{
          margin: "10px 0px",
        }}
      >
        <InputLabel htmlFor="component-simple">spoc Name</InputLabel>
        <Input
          id="component-simple"
          onChange={(e) => props.setspocName(e.target.value)}
        />
      </FormControl>
      <FormControl
        variant="standard"
        style={{
          margin: "10px 0px",
        }}
      >
        <InputLabel htmlFor="component-simple">poc Designation</InputLabel>
        <Input
          id="component-simple"
          onChange={(e) => props.setpocDesignation(e.target.value)}
        />
      </FormControl>
      <FormControl
        variant="standard"
        style={{
          margin: "10px 0px",
        }}
      >
        <InputLabel htmlFor="component-simple">spoc Mobile Number</InputLabel>
        <Input
          id="component-simple"
          onChange={(e) => props.setspocMobileNumber(e.target.value)}
        />
      </FormControl>
      <FormControl
        variant="standard"
        style={{
          margin: "10px 0px",
        }}
      >
        <InputLabel htmlFor="component-simple">spoc Email</InputLabel>
        <Input
          id="component-simple"
          onChange={(e) => props.setspocEmail(e.target.value)}
        />
      </FormControl>
      <FormControl
        variant="standard"
        style={{
          margin: "10px 0px",
        }}
      >
        <InputLabel htmlFor="component-simple">spoc Website</InputLabel>
        <Input
          id="component-simple"
          onChange={(e) => props.setspocWebsite(e.target.value)}
        />
      </FormControl>
      <FormControl
        variant="standard"
        style={{
          margin: "10px 0px",
        }}
      >
        <InputLabel htmlFor="component-simple">register Office</InputLabel>
        <Input
          id="component-simple"
          onChange={(e) => props.setregisterOffice(e.target.value)}
        />
      </FormControl>
      <FormControl
        variant="standard"
        style={{
          margin: "10px 0px",
        }}
      >
        <InputLabel htmlFor="component-simple">
          administrative Office
        </InputLabel>
        <Input
          id="component-simple"
          onChange={(e) => props.setadministrativeOffice(e.target.value)}
        />
      </FormControl>
      <FormControl
        variant="standard"
        style={{
          margin: "10px 0px",
        }}
      >
        <InputLabel htmlFor="component-simple">rent Or Leased</InputLabel>
        <Input
          id="component-simple"
          onChange={(e) => props.setrentOrLeased(e.target.value)}
        />
      </FormControl>
      <FormControl
        variant="standard"
        style={{
          margin: "10px 0px",
        }}
      >
        <InputLabel htmlFor="component-simple">incorporation Period</InputLabel>
        <Input
          id="component-simple"
          onChange={(e) => props.setincorporationPeriod(e.target.value)}
        />
      </FormControl>
      <FormControl
        variant="standard"
        style={{
          margin: "10px 0px",
        }}
      >
        <InputLabel htmlFor="component-simple">balance Sheet</InputLabel>
        <Input
          id="component-simple"
          onChange={(e) => props.setbalanceSheet(e.target.value)}
        />
      </FormControl>
      <FormControl
        variant="standard"
        style={{
          margin: "10px 0px",
        }}
      >
        <InputLabel htmlFor="component-simple">
          subscribed Share Capital
        </InputLabel>
        <Input
          id="component-simple"
          onChange={(e) => props.setsubscribedShareCapital(e.target.value)}
        />
      </FormControl>
      <FormControl
        variant="standard"
        style={{
          margin: "10px 0px",
        }}
      >
        <InputLabel htmlFor="component-simple">pan Available</InputLabel>
        <Input
          id="component-simple"
          onChange={(e) => props.setpanAvailable(e.target.value)}
        />
      </FormControl>
      <FormControl
        variant="standard"
        style={{
          margin: "10px 0px",
        }}
      >
        <InputLabel htmlFor="component-simple">gst Available</InputLabel>
        <Input
          id="component-simple"
          onChange={(e) => props.setgstAvailable(e.target.value)}
        />
      </FormControl>
      <FormControl
        variant="standard"
        style={{
          margin: "10px 0px",
        }}
      >
        <InputLabel htmlFor="component-simple">ceo</InputLabel>
        <Input
          id="component-simple"
          onChange={(e) => props.setceo(e.target.value)}
        />
      </FormControl>
      <FormControl
        variant="standard"
        style={{
          margin: "10px 0px",
        }}
      >
        <InputLabel htmlFor="component-simple">
          total Number Of Sml Farmer
        </InputLabel>
        <Input
          id="component-simple"
          onChange={(e) => props.settotalNumberOfSmlFarmer(e.target.value)}
        />
      </FormControl>
      <FormControl
        variant="standard"
        style={{
          margin: "10px 0px",
        }}
      >
        <InputLabel htmlFor="component-simple">
          total Land Holding Of Sml Farmer
        </InputLabel>
        <Input
          id="component-simple"
          onChange={(e) => props.settotalLandHoldingOfSmlFarmer(e.target.value)}
        />
      </FormControl>
      <FormControl
        variant="standard"
        style={{
          margin: "10px 0px",
        }}
      >
        <InputLabel htmlFor="component-simple">
          total Number Of Med Farmer
        </InputLabel>
        <Input
          id="component-simple"
          onChange={(e) => props.settotalNumberOfMedFarmer(e.target.value)}
        />
      </FormControl>
      <FormControl
        variant="standard"
        style={{
          margin: "10px 0px",
        }}
      >
        <InputLabel htmlFor="component-simple">
          total Land Holding Of Med Farmer
        </InputLabel>
        <Input
          id="component-simple"
          onChange={(e) => props.settotalLandHoldingOfMedFarmer(e.target.value)}
        />
      </FormControl>
      <FormControl
        variant="standard"
        style={{
          margin: "10px 0px",
        }}
      >
        <InputLabel htmlFor="component-simple">
          total Number Of Big Farmer
        </InputLabel>
        <Input
          id="component-simple"
          onChange={(e) => props.settotalNumberOfBigFarmer(e.target.value)}
        />
      </FormControl>
      <FormControl
        variant="standard"
        style={{
          margin: "10px 0px",
        }}
      >
        <InputLabel htmlFor="component-simple">
          total Land Holding Of Big Farmer
        </InputLabel>
        <Input
          id="component-simple"
          onChange={(e) => props.settotalLandHoldingOfBigFarmer(e.target.value)}
        />
      </FormControl>{" "}
      <FormControl
        variant="standard"
        style={{
          margin: "10px 0px",
        }}
      >
        <InputLabel htmlFor="component-simple">
          number Of Woman Share Holders
        </InputLabel>
        <Input
          id="component-simple"
          onChange={(e) => props.setnumberOfWomanShareHolders(e.target.value)}
        />
      </FormControl>
      <FormControl
        variant="standard"
        style={{
          margin: "10px 0px",
        }}
      >
        <InputLabel htmlFor="component-simple">
          number Of St Share Holders
        </InputLabel>
        <Input
          id="component-simple"
          onChange={(e) => props.setnumberOfStShareHolders(e.target.value)}
        />
      </FormControl>
      <FormControl
        variant="standard"
        style={{
          margin: "10px 0px",
        }}
      >
        <InputLabel htmlFor="component-simple">
          number Of Sc Share Holders
        </InputLabel>
        <Input
          id="component-simple"
          onChange={(e) => props.setnumberOfScShareHolders(e.target.value)}
        />
      </FormControl>
      <FormControl
        variant="standard"
        style={{
          margin: "10px 0px",
        }}
      >
        <InputLabel htmlFor="component-simple">
          increase In Last Six Months
        </InputLabel>
        <Input
          id="component-simple"
          onChange={(e) => props.setincreaseInLastSixMonths(e.target.value)}
        />
      </FormControl>
      <FormControl
        variant="standard"
        style={{
          margin: "10px 0px",
        }}
      >
        <InputLabel htmlFor="component-simple">
          number Of Active Members
        </InputLabel>
        <Input
          id="component-simple"
          onChange={(e) => props.setnumberOfActiveMembers(e.target.value)}
        />
      </FormControl>
      <FormControl
        variant="standard"
        style={{
          margin: "10px 0px",
        }}
      >
        <InputLabel htmlFor="component-simple">
          non Members Availing Service Fpc
        </InputLabel>
        <Input
          id="component-simple"
          onChange={(e) =>
            props.setnonMembersAvailingServiceFpc(e.target.value)
          }
        />
      </FormControl>
      <FormControl
        variant="standard"
        style={{
          margin: "10px 0px",
        }}
      >
        <InputLabel htmlFor="component-simple">fpo Role</InputLabel>
        <Input
          id="component-simple"
          onChange={(e) => props.setfpoRole(e.target.value)}
        />
      </FormControl>
    </div>
  );
}

export default FirstStep;
