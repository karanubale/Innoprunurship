import mongoose from "mongoose";

const dataSchema = new mongoose.Schema({
    // name: {
    //     type: String,
    //     required: true
    // },
    email: {
        type: String,
        required: true,
        unique: true
    },
    inn: {
        type: [Number],
        
    },
    enn: {
        type: [Number],
        
    }
    ,ipvalue: Number
}, { timestamps: true });

const dataModel = mongoose.models.data || mongoose.model("data", dataSchema);
export default dataModel;
