import { Router } from "express";
import {
  getAll,
  getOne,
  insertOne,
  deleteOne,
  updateOne,
  getPrice,
  getPrime,
} from "../controllers/productController.js";
const router = Router();
router.get("/", getAll);
router.get("/:barcode", getOne);
router.post("/", insertOne);
router.put("/:barcode", updateOne);
router.delete("/deleteOne/:barcode", deleteOne);


router.get("/getPrice", getPrice);
router.get("/getPrime/:price", getPrime);
export default router;
