import axios from "axios";

export function fetchPosts() {
  return axios
    .get("https://mocki.io/v1/072f4309-6b86-4ecc-b055-e16192d9f76a")
    .then((response) => {
      console.log({ response });
      return response;
    })
    .catch((error) => {
      console.error({ error });
    });
}

export function addFpoDetails(data: any) {
  return axios
    .post(
      "https://dev.bharatmandi.com//api/v1/farmer/fpo/add-fpo-details",
      {
        fpoDetailsId: null,
        accountDetails: null,
        gstValidity: null,
        pollutionValidity: null,
        fssaiValidity: null,
        directMarketingValidity: null,
        importExportValidity: null,
        seedsValidity: null,
        pesticideInsecticideValidity: null,
        fertilizerLicenseValidity: null,
        gstAvailable: null,
        panAvailable: null,
        incorporationPeriod: null,
        rentOrLeased: null,
        registeredAddress: null,
        staffPhoto: null,
        fpoDetailsRequest: JSON.stringify({
          fpoName: "fpo-naaammme",
          nameOfResourceInstitute: "innnsssititute",
          spocName: "spooc-naaame",
          pocDesignation: "designation",
          spocMobileNumber: "1234567890",
          spocEmail: "email",
          spocWebsite: "website",
          registerOffice: "register-office",
          administrativeOffice: "admin-office",
          rentOrLeased: "True",
          incorporationPeriod: "some-period",
          balanceSheet: 1,
          subscribedShareCapital: 2,
          panAvailable: "True",
          gstAvailable: "True",
          ceo: "True",
          totalNumberOfSmlFarmer: 1,
          totalLandHoldingOfSmlFarmer: 5,
          totalNumberOfMedFarmer: 2,
          totalLandHoldingOfMedFarmer: 5,
          totalNumberOfBigFarmer: 1,
          totalLandHoldingOfBigFarmer: 1,
          numberOfWomanShareHolders: 2,
          numberOfStShareHolders: 1,
          numberOfScShareHolders: 2,
          increaseInLastSixMonths: 1,
          numberOfActiveMembers: 2,
          nonMembersAvailingServiceFpc: 1,
          fpoRole: "Director",
          fpoComplianceRequest: {
            ertilizerValidityDate: "2023-12-12",
            pesticideInsecticideValidityDate: "2023-12-12",
            seedsValidityDate: "2023-12-12",
            mportExportValidityDate: "2023-12-12",
            directMarketingValidityDate: "2023-12-12",
            fssaiValidityDate: "2023-12-12",
            gstValidityDate: "2023-12-12",
            pollutionValidityDate: "2023-12-12",
          },
          fpoStaffRequest: {
            name: "name",
            dateOfBirth: "2001-12-12",
            qualification: "qualifiiication",
            pan: "ABCDEF",
            address: "some-add",
            occupation: "occupation",
            experience: 1,
            landLine: "123456",
            mobileNumber: "1234567890",
            associatedWithOthInstitutions: "instituation-some",
            authorizedSignature: "True",
            dateOfAppointment: "2020-12-12",
            salary: 800000,
            bankName: "ABC-BANK",
            bankAddress: "HYYYD",
            accountType: "SAVING",
            accountNumber: "1234556",
            ifscCode: "ABCFSS",
          },
        }),
      },
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI5ODQ0MjgyNTgzIiwiZXhwIjoxNjk3MTc4NTU3LCJpYXQiOjE2OTY1NzM3NTd9.b906J--ESCaAu_Rz4SQOonc91eF3EzduLVoAvhu4YQ2p8c6XcUuaBv8U_q_cs7OOwwOka4uASDY_QmIeRqv-cA",
        },
      }
    )
    .then((response) => {
      console.log({ response });
      return response;
    })
    .catch((error) => {
      console.error({ error });
    });
}
