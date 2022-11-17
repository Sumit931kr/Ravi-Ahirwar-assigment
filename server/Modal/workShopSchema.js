import mongoose from "mongoose";

const workShopSchema = new mongoose.Schema({
    workshopname: String,
    venue: String,
    type: String,
    url: String,
    date: String
})

const WorkShop = new mongoose.model("WorkShop", workShopSchema);

export default WorkShop

