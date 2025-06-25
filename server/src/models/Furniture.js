import { Schema, model, Types } from "mongoose";

const furnitureSchema = Schema({
    make:{
        type: String,
        required: [true, "Make information is required"],
        minLength: [4, "Make must have at least 4 characters"],
    },
    model: {
        type: String,
        required: [true, "Model information is required"],
        minLength: [4, "Model must have at least 4 characters"],
    },
    year: {
        type: Number,
        required: [true, "Year information is required"],
        min: [1950, "Year must be at least 1950"],
        max: [2050, "Year must be at least 2050"],
    },
    description: {
        type: String,
        required: [true, "Description information is required"],
        minLength: [10, "Description must be at least 10 characters"],
    },
    price: {
        type: Number,
        required: [true, "Price information is required"],
        min: [0, "Price must be positive number"],
    },
    img: {
        type: String,
        required: [true, "Image information is required"],
        validate: [/^https?:\/\//, "Invalid image URL"]
    },
    material: {
        type: String,
    },
    _ownerId: {
        type: Types.ObjectId,
        ref: 'User',
    },
});

const Furniture = model('Furniture', furnitureSchema);

export default Furniture;