// import productModel from "../models/productModel.js";
// import categoryModel from "../models/categoryModel.js";
import userModel from "../models/userModel.js";
import dataModel from "../models/dataModel.js";

export const pushdataController = async (req, res) => {
    try {
        console.log(req.body);
        const { email, inn, enn } = req.body;
        // if (!name || !email || !inn || !enn) {
        //     return res.status(201).send({ success: false, message: "All fields are required" });
        // }

        const user = await dataModel.findOne({ email });
        const registered = await userModel.findOne({ email });

        if (!registered) {
            return res.status(201).send({
                success: false,
                message: "you are not registered ",
            });
        }

        if (user) {
            return res.status(201).send({
                success: false,
                message: "user can put data ones",
            });
        }

        const data = await new dataModel({ email, inn, enn }).save();
        console.log(data);
        //   await data.sav e();
        res.status(201).send({
            success: true,
            message: "Data saved successfully",
            data,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error saving data",
            error,
        });
    }
};



export const getSingledataController = async (req, res) => {
    try {
        // console.log(req);
        const { email } = req.body;
        const product = await dataModel.findOne({ email })

        if (!product) {
            return res.status(201).send({
                success: false,
                message: "does not have any data tp this user",
            });
        }

        res.status(200).send({
            success: true,
            message: "Single data Fetched",
            product,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Eror while getitng single data",
            error,
        });
    }
};

export const getAlldataController = async (req, res) => {
    try {
        const documents = await dataModel.find().limit(20);
        const result1 = documents.map(doc => doc.inn);
        // const result2 = documents.map(doc => doc.enn);
        res.json(result1);
    }
    catch (err) {
        res.status(500).json({ message: 'Server Error', error: err.message });
    }
}
export const getAlldataController2 = async (req, res) => {
    try {
        const documents = await dataModel.find().limit(20);
        const result1 = documents.map(doc => doc.enn);
        res.json(result1);
    }
    catch (err) {
        res.status(500).json({ message: 'Server Error', error: err.message });
    }
}

export const putipController = async (req, res) => {
    try {
      const { email, ipvalue } = req.body;
  
      // Validate input
      if (!email || ipvalue === undefined) {
        return res.status(400).json({ success: false, message: 'Invalid input' });
      }
  
      // Find the user by email and update the IP value
      const user = await dataModel.findOneAndUpdate(
        { email: email },
        { ipvalue: ipvalue },
        { new: true, runValidators: true }
      );
  
      if(!user) {
        return res.status(404).json({ success: false, message: 'User not found' });
      }
  
      res.status(200).json({ success: true, message: 'IP value updated successfully', user });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: 'Server Error' });
    }
  };