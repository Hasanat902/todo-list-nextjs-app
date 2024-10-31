import mongoose from "mongoose"

export const ConnectDB = async () => {
    await mongoose.connect('mongodb+srv://hasanat902:abc123456789@cluster0.g35fl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/todo-app');
    console.log("DB Connected");
}