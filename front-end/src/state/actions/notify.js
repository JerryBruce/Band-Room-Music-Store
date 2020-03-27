// import { local } from "../../api";
import { NOTIFICATION_SENT } from "./types";
import Axios from "axios";

export const notify = inquiry => {
  return async function() {
    const options = {
      method: "POST",
      url: "http://localhost:3000/inquiry",
      data: inquiry
    };
    console.log(options);
    Axios(options).then(res => {
      console.log(res);
    });
  };
};
