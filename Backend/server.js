require("dotenv").config();

const app = require("./src/app");
const connectToDB = require("./src/config/database");

console.log(connectToDB);

connectToDB();

app.listen(3000, () => {
  console.log("Server is running");
});
