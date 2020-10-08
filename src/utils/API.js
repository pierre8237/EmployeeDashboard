import axios from "axios";

export default {
  searchUsers: axios
    .get(
      "https://randomuser.me/api/?results=1&inc=cell,dob,email,name,picture&noinfo"
    )
    .then(function (response) {
      // handle success
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    })
};
//set upp axios as a key value pair?
