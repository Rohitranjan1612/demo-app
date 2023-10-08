import React from "react";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";

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
        <InputLabel htmlFor="component-simple">FPO Name</InputLabel>
        <Input
          id="component-simple"
          onChange={(e) => props.setfpoName(e.target.value)}
          value={props.fpoName}
        />
      </FormControl>
      <FormControl
        variant="standard"
        style={{
          margin: "10px 0px",
        }}
      >
        <InputLabel htmlFor="component-simple">
          Name Of Resource Institute
        </InputLabel>
        <Input
          id="component-simple"
          onChange={(e) => props.setnameOfResourceInstitute(e.target.value)}
          value={props.nameOfResourceInstitute}
        />
      </FormControl>
      <FormControl
        variant="standard"
        style={{
          margin: "10px 0px",
        }}
      >
        <InputLabel htmlFor="component-simple">Spoc Name</InputLabel>
        <Input
          id="component-simple"
          onChange={(e) => props.setspocName(e.target.value)}
          value={props.spocName}
        />
      </FormControl>
      <FormControl
        variant="standard"
        style={{
          margin: "10px 0px",
        }}
      >
        <InputLabel htmlFor="component-simple">Poc Designation</InputLabel>
        <Input
          id="component-simple"
          onChange={(e) => props.setpocDesignation(e.target.value)}
          value={props.pocDesignation}
        />
      </FormControl>
      <FormControl
        variant="standard"
        style={{
          margin: "10px 0px",
        }}
      >
        <InputLabel htmlFor="component-simple">Spoc Mobile Number</InputLabel>
        <Input
          id="component-simple"
          onChange={(e) => props.setspocMobileNumber(e.target.value)}
          value={props.spocMobileNumber}
        />
      </FormControl>
      <FormControl
        variant="standard"
        style={{
          margin: "10px 0px",
        }}
      >
        <InputLabel htmlFor="component-simple">Spoc Email</InputLabel>
        <Input
          id="component-simple"
          onChange={(e) => props.setspocEmail(e.target.value)}
          value={props.spocEmail}
        />
      </FormControl>
      <FormControl
        variant="standard"
        style={{
          margin: "10px 0px",
        }}
      >
        <InputLabel htmlFor="component-simple">Spoc Website</InputLabel>
        <Input
          id="component-simple"
          onChange={(e) => props.setspocWebsite(e.target.value)}
          value={props.spocWebsite}
        />
      </FormControl>
      <FormControl
        variant="standard"
        style={{
          margin: "10px 0px",
        }}
      >
        <InputLabel htmlFor="component-simple">Register Office</InputLabel>
        <Input
          id="component-simple"
          onChange={(e) => props.setregisterOffice(e.target.value)}
          value={props.registerOffice}
        />
      </FormControl>
      <FormControl
        variant="standard"
        style={{
          margin: "10px 0px",
        }}
      >
        <InputLabel htmlFor="component-simple">
          Administrative Office
        </InputLabel>
        <Input
          id="component-simple"
          onChange={(e) => props.setadministrativeOffice(e.target.value)}
          value={props.administrativeOffice}
        />
      </FormControl>
      <FormControl
        variant="standard"
        style={{
          margin: "10px 0px",
        }}
      >
        <InputLabel htmlFor="component-simple">Rent Or Leased</InputLabel>
        <Input
          id="component-simple"
          onChange={(e) => props.setrentOrLeased(e.target.value)}
          value={props.rentOrLeased}
        />
      </FormControl>
      <FormControl
        variant="standard"
        style={{
          margin: "10px 0px",
        }}
      >
        <InputLabel htmlFor="component-simple">Incorporation Period</InputLabel>
        <Input
          id="component-simple"
          onChange={(e) => props.setincorporationPeriod(e.target.value)}
          value={props.incorporationPeriod}
        />
      </FormControl>
      <FormControl
        variant="standard"
        style={{
          margin: "10px 0px",
        }}
      >
        <InputLabel htmlFor="component-simple">Balance Sheet</InputLabel>
        <Input
          id="component-simple"
          onChange={(e) => props.setbalanceSheet(e.target.value)}
          value={props.balanceSheet}
        />
      </FormControl>
      <FormControl
        variant="standard"
        style={{
          margin: "10px 0px",
        }}
      >
        <InputLabel htmlFor="component-simple">
          Subscribed Share Capital
        </InputLabel>
        <Input
          id="component-simple"
          onChange={(e) => props.setsubscribedShareCapital(e.target.value)}
          value={props.subscribedShareCapital}
        />
      </FormControl>
      <FormControl
        variant="standard"
        style={{
          margin: "10px 0px",
        }}
      >
        <InputLabel htmlFor="component-simple">Pan Available</InputLabel>
        <Input
          id="component-simple"
          onChange={(e) => props.setpanAvailable(e.target.value)}
          value={props.panAvailable}
        />
      </FormControl>
      <FormControl
        variant="standard"
        style={{
          margin: "10px 0px",
        }}
      >
        <InputLabel htmlFor="component-simple">GST Available</InputLabel>
        <Input
          id="component-simple"
          onChange={(e) => props.setgstAvailable(e.target.value)}
          value={props.gstAvailable}
        />
      </FormControl>
      <FormControl
        variant="standard"
        style={{
          margin: "10px 0px",
        }}
      >
        <InputLabel htmlFor="component-simple">CEO</InputLabel>
        <Input
          id="component-simple"
          onChange={(e) => props.setceo(e.target.value)}
          value={props.ceo}
        />
      </FormControl>
      <FormControl
        variant="standard"
        style={{
          margin: "10px 0px",
        }}
      >
        <InputLabel htmlFor="component-simple">
          Total Number Of Sml Farmer
        </InputLabel>
        <Input
          id="component-simple"
          onChange={(e) => props.settotalNumberOfSmlFarmer(e.target.value)}
          value={props.totalNumberOfSmlFarmer}
        />
      </FormControl>
      <FormControl
        variant="standard"
        style={{
          margin: "10px 0px",
        }}
      >
        <InputLabel htmlFor="component-simple">
          Total Land Holding Of Sml Farmer
        </InputLabel>
        <Input
          id="component-simple"
          onChange={(e) => props.settotalLandHoldingOfSmlFarmer(e.target.value)}
          value={props.totalLandHoldingOfSmlFarmer}
        />
      </FormControl>
      <FormControl
        variant="standard"
        style={{
          margin: "10px 0px",
        }}
      >
        <InputLabel htmlFor="component-simple">
          Total Number Of Med Farmer
        </InputLabel>
        <Input
          id="component-simple"
          onChange={(e) => props.settotalNumberOfMedFarmer(e.target.value)}
          value={props.totalNumberOfMedFarmer}
        />
      </FormControl>
      <FormControl
        variant="standard"
        style={{
          margin: "10px 0px",
        }}
      >
        <InputLabel htmlFor="component-simple">
          Total Land Holding Of Med Farmer
        </InputLabel>
        <Input
          id="component-simple"
          onChange={(e) => props.settotalLandHoldingOfMedFarmer(e.target.value)}
          value={props.totalLandHoldingOfMedFarmer}
        />
      </FormControl>
      <FormControl
        variant="standard"
        style={{
          margin: "10px 0px",
        }}
      >
        <InputLabel htmlFor="component-simple">
          Total Number Of Big Farmer
        </InputLabel>
        <Input
          id="component-simple"
          onChange={(e) => props.settotalNumberOfBigFarmer(e.target.value)}
          value={props.totalNumberOfBigFarmer}
        />
      </FormControl>
      <FormControl
        variant="standard"
        style={{
          margin: "10px 0px",
        }}
      >
        <InputLabel htmlFor="component-simple">
          Total Land Holding Of Big Farmer
        </InputLabel>
        <Input
          id="component-simple"
          onChange={(e) => props.settotalLandHoldingOfBigFarmer(e.target.value)}
          value={props.totalLandHoldingOfBigFarmer}
        />
      </FormControl>{" "}
      <FormControl
        variant="standard"
        style={{
          margin: "10px 0px",
        }}
      >
        <InputLabel htmlFor="component-simple">
          Number Of Woman Share Holders
        </InputLabel>
        <Input
          id="component-simple"
          onChange={(e) => props.setnumberOfWomanShareHolders(e.target.value)}
          value={props.numberOfWomanShareHolders}
        />
      </FormControl>
      <FormControl
        variant="standard"
        style={{
          margin: "10px 0px",
        }}
      >
        <InputLabel htmlFor="component-simple">
          Number Of St Share Holders
        </InputLabel>
        <Input
          id="component-simple"
          onChange={(e) => props.setnumberOfStShareHolders(e.target.value)}
          value={props.numberOfStShareHolders}
        />
      </FormControl>
      <FormControl
        variant="standard"
        style={{
          margin: "10px 0px",
        }}
      >
        <InputLabel htmlFor="component-simple">
          Number Of Sc Share Holders
        </InputLabel>
        <Input
          id="component-simple"
          onChange={(e) => props.setnumberOfScShareHolders(e.target.value)}
          value={props.numberOfScShareHolders}
        />
      </FormControl>
      <FormControl
        variant="standard"
        style={{
          margin: "10px 0px",
        }}
      >
        <InputLabel htmlFor="component-simple">
          Increase In Last Six Months
        </InputLabel>
        <Input
          id="component-simple"
          onChange={(e) => props.setincreaseInLastSixMonths(e.target.value)}
          value={props.increaseInLastSixMonths}
        />
      </FormControl>
      <FormControl
        variant="standard"
        style={{
          margin: "10px 0px",
        }}
      >
        <InputLabel htmlFor="component-simple">
          Number Of Active Members
        </InputLabel>
        <Input
          id="component-simple"
          onChange={(e) => props.setnumberOfActiveMembers(e.target.value)}
          value={props.numberOfActiveMembers}
        />
      </FormControl>
      <FormControl
        variant="standard"
        style={{
          margin: "10px 0px",
        }}
      >
        <InputLabel htmlFor="component-simple">
          Non Members Availing Service Fpc
        </InputLabel>
        <Input
          id="component-simple"
          onChange={(e) =>
            props.setnonMembersAvailingServiceFpc(e.target.value)
          }
          value={props.nonMembersAvailingServiceFpc}
        />
      </FormControl>
      <FormControl
        variant="standard"
        style={{
          margin: "10px 0px",
        }}
      >
        <InputLabel htmlFor="component-simple">FPO Role</InputLabel>
        <Input
          id="component-simple"
          onChange={(e) => props.setfpoRole(e.target.value)}
          value={props.fpoRole}
        />
      </FormControl>
    </div>
  );
}

export default FirstStep;
