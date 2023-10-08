import React, { useState, useEffect } from "react";
import { addFpoDetails } from "../services";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import style from "../styles/createPosts.module.css";
import FirstStep from "../components/FirstStep";
import SecondStep from "../components/SecondStep";
import ThirdStep from "../components/ThirdStep";
import ForthStep from "../components/ForthStep";

const steps = [
  {
    label: "FPO Details",
  },
  {
    label: "FPO Compliance Request",
  },
  {
    label: "FPO Staff Request",
  },
  {
    label: "FPO Other Request",
  },
];
function CreateFpoDetails() {
  // const [posts, setPosts] = useState([]);
  // const [loading, setLoading] = useState(false);

  const [fpoName, setfpoName] = useState(null);
  const [indexStep, setindexStep] = useState(0);
  const [nameOfResourceInstitute, setnameOfResourceInstitute] = useState(null);
  const [spocName, setspocName] = useState(null);
  const [pocDesignation, setpocDesignation] = useState(null);
  const [spocMobileNumber, setspocMobileNumber] = useState(null);
  const [spocEmail, setspocEmail] = useState(null);
  const [spocWebsite, setspocWebsite] = useState(null);
  const [registerOffice, setregisterOffice] = useState(null);
  const [administrativeOffice, setadministrativeOffice] = useState(null);
  const [rentOrLeased, setrentOrLeased] = useState(null);
  const [incorporationPeriod, setincorporationPeriod] = useState(null);
  const [balanceSheet, setbalanceSheet] = useState(null);
  const [subscribedShareCapital, setsubscribedShareCapital] = useState(null);
  const [panAvailable, setpanAvailable] = useState(null);
  const [gstAvailable, setgstAvailable] = useState(null);
  const [ceo, setceo] = useState(null);
  const [totalNumberOfSmlFarmer, settotalNumberOfSmlFarmer] = useState(null);
  const [totalLandHoldingOfSmlFarmer, settotalLandHoldingOfSmlFarmer] =
    useState(null);
  const [totalNumberOfMedFarmer, settotalNumberOfMedFarmer] = useState(null);
  const [totalLandHoldingOfMedFarmer, settotalLandHoldingOfMedFarmer] =
    useState(null);
  const [totalNumberOfBigFarmer, settotalNumberOfBigFarmer] = useState(null);
  const [totalLandHoldingOfBigFarmer, settotalLandHoldingOfBigFarmer] =
    useState(null);
  const [numberOfWomanShareHolders, setnumberOfWomanShareHolders] =
    useState(null);
  const [numberOfStShareHolders, setnumberOfStShareHolders] = useState(null);
  const [numberOfScShareHolders, setnumberOfScShareHolders] = useState(null);
  const [increaseInLastSixMonths, setincreaseInLastSixMonths] = useState(null);
  const [numberOfActiveMembers, setnumberOfActiveMembers] = useState(null);
  const [
    pesticideInsecticideValidityDate,
    setpesticideInsecticideValidityDate,
  ] = useState(null);
  const [fpoRole, setfpoRole] = useState(null);

  const [seedsValidityDate, setseedsValidityDate] = useState(null);
  const [mportExportValidityDate, setmportExportValidityDate] = useState(null);
  const [directMarketingValidityDate, setdirectMarketingValidityDate] =
    useState(null);
  const [fssaiValidityDate, setfssaiValidityDate] = useState(null);
  const [gstValidityDate, setgstValidityDate] = useState(null);
  const [pollutionValidityDate, setpollutionValidityDate] = useState(null);
  const [ertilizerValidityDate, setertilizerValidityDate] = useState(null);

  const [name, setname] = useState(null);
  const [dateOfBirth, setdateOfBirth] = useState(null);
  const [qualification, setqualification] = useState(null);
  const [pan, setpan] = useState(null);
  const [address, setaddress] = useState(null);
  const [occupation, setoccupation] = useState(null);
  const [experience, setexperience] = useState(null);
  const [landLine, setlandLine] = useState(null);
  const [mobileNumber, setmobileNumber] = useState(null);
  const [associatedWithOthInstitutions, setassociatedWithOthInstitutions] =
    useState(null);
  const [authorizedSignature, setauthorizedSignature] = useState(null);
  const [dateOfAppointment, setdateOfAppointment] = useState(null);
  const [salary, setsalary] = useState(null);
  const [bankName, setbankName] = useState(null);
  const [bankAddress, setbankAddress] = useState(null);
  const [accountType, setaccountType] = useState(null);
  const [accountNumber, setaccountNumber] = useState(null);
  const [ifscCode, setifscCode] = useState(null);
  const [nonMembersAvailingServiceFpc, setnonMembersAvailingServiceFpc] =
    useState(null);
  const [staffPhoto, setstaffPhoto] = useState(null);
  const [registeredAddress, setregisteredAddress] = useState(null);
  const [accountDetails, setaccountDetails] = useState(null);
  const [fpoDetailsId, setfpoDetailsId] = useState(null);
  const [gstValidity, setgstValidity] = useState(null);
  const [pollutionValidity, setpollutionValidity] = useState(null);
  const [fssaiValidity, setfssaiValidity] = useState(null);
  const [directMarketingValidity, setdirectMarketingValidity] = useState(null);
  const [importExportValidity, setimportExportValidity] = useState(null);
  const [seedsValidity, setseedsValidity] = useState(null);
  const [pesticideInsecticideValidity, setpesticideInsecticideValidity] =
    useState(null);
  const [fertilizerLicenseValidity, setfertilizerLicenseValidity] =
    useState(null);

  const [activeStep, setActiveStep] = React.useState(0);
  const getPosts = async () => {
    const details: any = {
      fpoDetailsId,
      accountDetails: accountDetails,
      gstValidity,
      pollutionValidity,
      fssaiValidity,
      directMarketingValidity,
      importExportValidity,
      seedsValidity,
      pesticideInsecticideValidity,
      fertilizerLicenseValidity,
      gstAvailable,
      panAvailable,
      incorporationPeriod,
      rentOrLeased,
      registeredAddress: registeredAddress,
      staffPhoto: staffPhoto,
      fpoDetailsRequest: JSON.stringify({
        fpoName,
        nameOfResourceInstitute,
        spocName,
        pocDesignation,
        spocMobileNumber,
        spocEmail,
        spocWebsite,
        registerOffice,
        administrativeOffice,
        rentOrLeased,
        incorporationPeriod,
        balanceSheet,
        subscribedShareCapital,
        panAvailable,
        gstAvailable,
        ceo,
        totalNumberOfSmlFarmer,
        totalLandHoldingOfSmlFarmer,
        totalNumberOfMedFarmer,
        totalLandHoldingOfMedFarmer,
        totalNumberOfBigFarmer,
        totalLandHoldingOfBigFarmer,
        numberOfWomanShareHolders,
        numberOfStShareHolders,
        numberOfScShareHolders,
        increaseInLastSixMonths,
        numberOfActiveMembers,
        nonMembersAvailingServiceFpc,
        fpoRole,
        fpoComplianceRequest: {
          ertilizerValidityDate,
          pesticideInsecticideValidityDate,
          seedsValidityDate,
          mportExportValidityDate,
          directMarketingValidityDate,
          fssaiValidityDate,
          gstValidityDate,
          pollutionValidityDate,
        },
        fpoStaffRequest: {
          name,
          dateOfBirth,
          qualification,
          pan,
          address,
          occupation,
          experience,
          landLine,
          mobileNumber,
          associatedWithOthInstitutions,
          authorizedSignature,
          dateOfAppointment,
          salary,
          bankName,
          bankAddress,
          accountType,
          accountNumber,
          ifscCode,
        },
      }),
    };
    const data: any = await addFpoDetails(details);
    console.log({ data });
  };
  const handleNext = (flag?: any) => {
    if (flag) {
      getPosts();
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setindexStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    setindexStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
    setindexStep(0);
  };

  return (
    <div style={{ margin: "10px 20px 20px 85px" }}>
      <div className={style.header}>Create FPO Details</div>
      <Box>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((step, index) => (
            <Step key={step.label}>
              <StepLabel>{step.label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length ? (
          <Paper square elevation={0} sx={{ p: 3 }}>
            <Typography>All steps completed - you&apos;re finished</Typography>
            <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
              Reset
            </Button>
          </Paper>
        ) : (
          <div
            style={{
              width: "50%",
            }}
          >
            {indexStep === 0 ? (
              <FirstStep
                setfpoName={setfpoName}
                setnameOfResourceInstitute={setnameOfResourceInstitute}
                setspocName={setspocName}
                setpocDesignation={setpocDesignation}
                setspocMobileNumber={setspocMobileNumber}
                setspocEmail={setspocEmail}
                setspocWebsite={setspocWebsite}
                setregisterOffice={setregisterOffice}
                setadministrativeOffice={setadministrativeOffice}
                setrentOrLeased={setrentOrLeased}
                setincorporationPeriod={setincorporationPeriod}
                setbalanceSheet={setbalanceSheet}
                setsubscribedShareCapital={setsubscribedShareCapital}
                setpanAvailable={setpanAvailable}
                setgstAvailable={setgstAvailable}
                setceo={setceo}
                settotalNumberOfSmlFarmer={settotalNumberOfSmlFarmer}
                settotalLandHoldingOfSmlFarmer={settotalLandHoldingOfSmlFarmer}
                settotalNumberOfMedFarmer={settotalNumberOfMedFarmer}
                settotalLandHoldingOfMedFarmer={settotalLandHoldingOfMedFarmer}
                settotalNumberOfBigFarmer={settotalNumberOfBigFarmer}
                settotalLandHoldingOfBigFarmer={settotalLandHoldingOfBigFarmer}
                setnumberOfWomanShareHolders={setnumberOfWomanShareHolders}
                setnonMembersAvailingServiceFpc={
                  setnonMembersAvailingServiceFpc
                }
                setnumberOfStShareHolders={setnumberOfStShareHolders}
                setnumberOfScShareHolders={setnumberOfScShareHolders}
                setincreaseInLastSixMonths={setincreaseInLastSixMonths}
                setnumberOfActiveMembers={setnumberOfActiveMembers}
                setfpoRole={setfpoRole}
              />
            ) : indexStep === 1 ? (
              <SecondStep
                setpesticideInsecticideValidityDate={
                  setpesticideInsecticideValidityDate
                }
                setertilizerValidityDate={setertilizerValidityDate}
                setseedsValidityDate={setseedsValidityDate}
                setmportExportValidityDate={setmportExportValidityDate}
                setdirectMarketingValidityDate={setdirectMarketingValidityDate}
                setfssaiValidityDate={setfssaiValidityDate}
                setgstValidityDate={setgstValidityDate}
                setpollutionValidityDate={setpollutionValidityDate}
              />
            ) : indexStep === 2 ? (
              <ThirdStep
                setname={setname}
                setdateOfBirth={setdateOfBirth}
                setqualification={setqualification}
                setpan={setpan}
                setaddress={setaddress}
                setoccupation={setoccupation}
                setexperience={setexperience}
                setlandLine={setlandLine}
                setmobileNumber={setmobileNumber}
                setassociatedWithOthInstitutions={
                  setassociatedWithOthInstitutions
                }
                setauthorizedSignature={setauthorizedSignature}
                setdateOfAppointment={setdateOfAppointment}
                setsalary={setsalary}
                setbankName={setbankName}
                setbankAddress={setbankAddress}
                setaccountType={setaccountType}
                setaccountNumber={setaccountNumber}
                setifscCode={setifscCode}
              />
            ) : (
              <ForthStep
                setfpoDetailsId={setfpoDetailsId}
                setgstValidity={setgstValidity}
                setpollutionValidity={setpollutionValidity}
                setfssaiValidity={setfssaiValidity}
                setdirectMarketingValidity={setdirectMarketingValidity}
                setimportExportValidity={setimportExportValidity}
                setseedsValidity={setseedsValidity}
                setpesticideInsecticideValidity={
                  setpesticideInsecticideValidity
                }
                setfertilizerLicenseValidity={setfertilizerLicenseValidity}
                setstaffPhoto={setstaffPhoto}
                setregisteredAddress={setregisteredAddress}
                setaccountDetails={setaccountDetails}
                accountDetails={accountDetails}
                registeredAddress={registeredAddress}
                staffPhoto={staffPhoto}
              />
            )}
            <div style={{ marginLeft: "80px" }}>
              <Button
                variant="contained"
                onClick={() => handleNext(indexStep === steps.length - 1)}
                sx={{ mt: 1, mr: 1 }}
              >
                {indexStep === steps.length - 1 ? "Finish" : "Continue"}
              </Button>
              <Button
                disabled={indexStep === 0}
                onClick={handleBack}
                sx={{ mt: 1, mr: 1 }}
              >
                Back
              </Button>
            </div>
          </div>
        )}
      </Box>
    </div>
  );
}

export default CreateFpoDetails;
