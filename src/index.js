console.log("i am index file");

//const itemsList = require("./homepage.js");
//const items = require("./itempage.js");
import homepage from "./homepage.js";
import itempage from "./itempage.js";

window.addEventListener("load", () => {
  console.log("Document loaded, itemsList.js");
  homepage.setupItemList();
  itempage.setupItemList();
});
