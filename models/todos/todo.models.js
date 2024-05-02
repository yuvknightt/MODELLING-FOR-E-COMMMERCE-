import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  content : {
    type: String,
    required: true,
  },
   complete : {
     type: Boolean,
     default: false
   },
   createdBy: {

    type: mongoose.Schema.Types.ObjectId,
    ref:"User"
   },

   subTodos: [
     {
       type: mongoose.Schema.Types.ObjectId,
       ref:"SubTodo",
     }, // array of subtodo
   ]

},{timestamps:true});


export const Todo = mongoose.model("Todo",todoSchema);  // kya naam likhna h and kis basis par banana h hume save one k baad todos ye naam hoga


// now  relating these with each other 

