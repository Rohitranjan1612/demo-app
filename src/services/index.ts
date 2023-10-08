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
  const formData = new FormData();
  formData.append("accountDetails", data.accountDetails);
  formData.append("registeredAddress", data.registeredAddress);
  formData.append("staffPhoto", data.staffPhoto);
  formData.append(
    "fpoDetailsRequest",
    new Blob([data.fpoDetailsRequest], {
      type: "application/json",
    })
  );
  formData.append("fpoDetailsId", data.fpoDetailsId);
  formData.append("gstValidity", data.gstValidity);
  formData.append("pollutionValidity", data.pollutionValidity);
  formData.append("fssaiValidity", data.fssaiValidity);
  formData.append("directMarketingValidity", data.directMarketingValidity);
  formData.append("importExportValidity", data.importExportValidity);
  formData.append("seedsValidity", data.seedsValidity);
  formData.append(
    "pesticideInsecticideValidity",
    data.pesticideInsecticideValidity
  );
  formData.append("fertilizerLicenseValidity", data.fertilizerLicenseValidity);
  formData.append("gstAvailable", data.gstAvailable);
  formData.append("panAvailable", data.panAvailable);
  formData.append("incorporationPeriod", data.incorporationPeriod);
  formData.append("rentOrLeased", data.rentOrLeased);

  return axios
    .post(
      "https://dev.bharatmandi.com//api/v1/farmer/fpo/add-fpo-details",
      formData,
      {
        headers: {
          Accept: "*/*",
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
