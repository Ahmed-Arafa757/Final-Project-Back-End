var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var Product = new Schema(
  {
    /* _id: String, */
    productId:
    {
      type: Number,
    },
    productName: {
      type: String,
    },
    productInfo: {
      color: {
        type: [String],
      },
      material: {
        type: String,
      },
      weight: {
        type: String,
      },
      description: {
        type: String,
      },
    },
    productPrice: {
        currentPrice: {
          type: Number,
        },
        discount: {
          type: Number,
        },
        finalPrice: {
          type: Number,
        },
        currency: {
          type: String,
        },
    },
    productRate: {
      type: Number,
    },
    productImages: {
      type: [String],
    },
    productType: {
      type: String,
    },
    productCategory: {
      type: String,
    },                      //CategoryID
    productSubCategory: {
      type: Number,
    },                      //Category -> Sub array[]
    keywords: {
      type: [String],
    },
    warehouseId: {
      type: String,
    },                      //warehouseId
    productStock: {
      type: Number,
    },
    productSales: {
      type: String,
    },                      //salesId
  }
  ,
  { collection: "Products" }
);

const Products = mongoose.model("Products", Product);

module.exports = Products;
