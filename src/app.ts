import express from "express";
import cors from "cors";

import itemsRoutes from "./routes/items-routes.js";
import institutionRoutes from "./routes/institutions-routes.js";
import feesRoutes from "./routes/fees-routes.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use(itemsRoutes);
app.use(institutionRoutes);
app.use(feesRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running in port ${PORT}`));
