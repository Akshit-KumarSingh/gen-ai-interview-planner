require("dotenv").config();

const app = require("./src/app");
const connectToDB = require("./src/config/database");

console.log(connectToDB);

connectToDB();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server is running");
});
