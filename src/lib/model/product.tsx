// model is also know as schema
import mongoose from "mongoose";

const productModel = new mongoose.Schema({
  email: String,
  school: String,
 
});
export const Product = mongoose.models.products || mongoose.model("products", productModel);
