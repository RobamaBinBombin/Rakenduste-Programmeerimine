console.log("i am index file");

const itemsList = require("./itemsList.js");
const items = require("./item.js");

window.addEventListener("load", () => {
  console.log("Document loaded, itemsList.js");
  itemsList.setupItemList();
  items.setupItem();
});
