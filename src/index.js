const express = require("express");
const bodyParser = require("body-parser");

const { PORT, DB_SYNC } = require("./config/serverConfig");
const apiRoutes = require("./routes/index");
const app = express();

const db = require("./models/index");

const { User, Role } = require("./models/index");

const serverConfigSetup = (req, res) => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use("/api", apiRoutes);

  app.listen(PORT, async (req, re) => {
    console.log(`Server started at ${PORT}`);
    if (DB_SYNC == true) {
      db.sequelize.sync({ alert: true });
    }

    // const u1 = await User.findByPk(7);
    // const r1 = await Role.findByPk(2);
    // u1.addRole(r1);
  });
};

serverConfigSetup();
