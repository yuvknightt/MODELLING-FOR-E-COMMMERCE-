import mongoose from "mongoose";

const subTodoSchema = new mongoose.Schema({
  content: {
    type:String,
    required:true
  },
  complete:{
    type: Boolean,
    default:false
  },
  createdBy: {
    type: mngoose.Schema.Types.ObjectId,
    ref:'User',
  }

},{ timestamp: true });

export const SubTodo = mongoose.model('sub_todo',subTodoSchema);