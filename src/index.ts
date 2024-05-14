import { server } from "./server/Server";
import dotenv from 'dotenv'

dotenv.config();
// Use 8080 as a default port instead 'process.env.PORT'
server.listen(process.env.PORT, () => console.log("Application working fine!"));