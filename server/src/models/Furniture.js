import { Schema, model } from "mongoose";

const furnitureSchema = Schema({
    make:{
        type: String,
        required: [true, "Make information is required"]
    },
    model: {
        type: String,
        required: [true, "Model information is required"]
    },
    year: {
        type: Number,
        required: [true, "Year information is required"]
    },
    description: {
        type: String,
        required: [true, "Description information is required"]
    },
    price: {
        type: Number,
        required: [true, "Price information is required"]
    },
    image: {
        type: String,
        required: [true, "Image information is required"]
    },
    material: {
        type: String,
    },
});

const Furniture = model('Furniture', furnitureSchema);

export default Furniture;