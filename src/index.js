require("dotenv").config();
const app = require("./app");

app.listen(process.env.PORT, ()=>{
  console.log(`Listening to ${process.env.PORT}`);
})
