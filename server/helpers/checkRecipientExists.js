const axios = require("axios").default;

const getAllRecipients = () => {

  const recipientsRoute = process.env.REACT_APP_SERVER + ":" + process.env.REACT_APP_SERVER_PORT + "/recipients";

  axios.get(recipientsRoute)
  .then((response) => {
    // console.log(response);
    const recipientList = [...response.data];
    console.log(recipientList);
    return recipientList;
  })
  .catch((error) => {
    if (error.response) {
      alert(`Error! ${error.message}`);
    } else if (error.request) {
      console.log("network error");
    } else {
      console.log(error);
    }
  });

};
module.exports = {getAllRecipients}