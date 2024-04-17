import mongoose from 'mongoose';

const listingSchema = new mongoose.Schema(
  {
    // name: {
    //   type: String,
    //   required: true,
    // },
    // description: {
    //   type: String,
    //   required: true,
    // },
    // address: {
    //   type: String,
    //   required: true,
    // },
    // sellerName: {
    //   type: String,
    //   required: true,
    // },
    supplierName: {
      type: String,
      required: true,
    },
    itemCode: {
      type: String,
      required: true,
    },
    itemName: {
      type: String,
      required: true,
    },
    orderQuentity: {
      type: Number,
      required: true,
    },
    userRef: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Listing = mongoose.model('PurchaseOrder', listingSchema);

export default Listing;
