import mongoose from 'mongoose';


const PostSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true,
    },
    picture: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    categories: {
        type: String,
        required: true,
    },
    createdDate: {
        type: date 
    }
})

 const post = mongoose.model('post',postSchema);

 export default post;