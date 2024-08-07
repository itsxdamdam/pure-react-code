// Import and Export

// const moment = require("moment");
// import { get } from 'lodash';

// console.log(moment().format('YYYY-MM-DD'));

// console.log(get)

import hi from "./user.js";
import { printName, BASE_URL } from "./user.js";

const user = {
  firstName: "idan",
  lastName: "lomo"
}

hi()
printName(user)
console.log(BASE_URL)