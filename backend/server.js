const { serverPort } = require("./config");
const { app } = require("./app/app");
const db = require("./dbConfig");

(async () => {
  try {
    await db.connect();
    console.log("Database connection succes.");
  } catch (e) {
    console.error("e", e.message);
  }
})();

app.listen(serverPort, () => {
  console.log(`Server running. Use our API on port: ${serverPort}`);
});
