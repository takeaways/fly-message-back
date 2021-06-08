import dotenv from "dotenv";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import app from "./server.js";

dotenv.config();

// eslint-disable-next-line no-undef
const PORT = process.env.PORT; 
app.listen(PORT, ()=>{
  console.log(`Server start port on ${PORT}`);
});

const password = "111s"
const hashed = bcrypt.hashSync(password, 10);
console.log(hashed)

bcrypt.compareSync(password, hashed)

const secret = 'asdpkasdk20k#_#*#';
const token = jwt.sign({
  id:'userId',
  isAdmin:true
}, secret,
{expiresIn:2})//2s

console.log(token)
setTimeout(()=>{
  const a= jwt.verify(token, secret)
  console.log(a)
},3000)
