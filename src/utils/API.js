import axios from "axios";

export default {
  searchUsers: axios.get(
    "https://randomuser.me/api/?results=1&inc=cell,dob,email,name,picture&noinfo"
  )
};
//set upp axios as a key value pair?
