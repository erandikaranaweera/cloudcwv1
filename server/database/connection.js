const mongoose = require('mongoose')

const connectDB = async () => {
    try{
        // mongodb connection string
        const con = await mongoose.connect(process.env.MONGO_URI,() => {
            console.log("Database is connected !");
        })

        //mongoose.connect("y", 

        console.log('MongoDB connected : ${con.connection.host}');
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}


module.exports = connectDB