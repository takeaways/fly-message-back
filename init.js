import dotenv from "dotenv";
import app from "./server.js";

dotenv.config();

// eslint-disable-next-line no-undef
const PORT = process.env.PORT; 
app.listen(PORT, ()=>{
  console.log(`Server start port on ${PORT}`);
});