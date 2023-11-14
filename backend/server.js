const { serverPort } = require("./config");
const { app } = require("./app");
const db = require("./dbConfig");

(async () => {
  try {
    await db.connect();
    console.log("Database connection succes.");
    app.listen(serverPort, async () => {
      console.log(`Server running. Use our API on port:3000`);
    });
  } catch (e) {
    console.error("e", e.message);
  }
})();
