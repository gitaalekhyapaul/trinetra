import express, { Express, Request, Response, NextFunction } from "express";
import cors, { CorsOptions } from "cors";
import { config as dotenvConfig } from "dotenv";
import { join } from "path";

import { errorHandler, ApiError } from "./error/error.handler";
import { errors } from "./error/error.constants";
import authRoutes from "./auth/auth.routes";
import classRoutes from "./class/class.routes";
import { DatabaseService } from "./services/database.service";

dotenvConfig();
const app: Express = express();

const whitelist = ["null", `${process.env.HOSTNAME}`];
const corsOptions: CorsOptions = {
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);
    else {
      if (whitelist.indexOf(origin!) !== -1) {
        return callback(null, true);
      } else {
        console.log("Rejected Origin: `%o`", origin);
        return callback({
          ...errors.CORS_ERROR,
          name: "CORS_ERROR",
        } as ApiError);
      }
    }
  },
};
if (process.env.NODE_ENV === "production") {
  app.use(cors(corsOptions));
} else {
  app.use(cors());
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/class", classRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(join(__dirname, "..", "client", "build")));
  app.use("*", (req: Request, res: Response, next: NextFunction) => {
    try {
      res.render(join(__dirname, "..", "client", "build", "index.html"));
    } catch (err) {
      next(err);
    }
  });
} else {
  app.use("*", (req: Request, res: Response) => {
    res.status(404).json({
      success: false,
      error: `Cannot ${req.method} ${req.originalUrl}`,
    });
  });
}

app.use(errorHandler);

Promise.all([DatabaseService.getInstance().initialize()])
  .then(() => {
    app.listen(process.env.PORT!, () => {
      console.log(
        `Server:${process.env.NODE_ENV} Listening for Requests on Port ${process.env.PORT}`
      );
    });
  })
  .catch((_) => {
    process.exit(1);
  });

process.on("SIGTERM", () => {
  process.exit(0);
});
process.on("SIGINT", () => {
  process.exit(0);
});
