//import  setupExpressServer from "./server.js";
const setupExpressServer = require("./server")

const PORT = process.env.PORT || 9000;
const app = setupExpressServer();
app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
