import mongoose from "mongoose"

const main = async () => {
  await mongoose.connect('mongodb+srv://admin:admin123@testing.t8hixjy.mongodb.net/?retryWrites=true&w=majority')
  console.log('database connected')
}
export default main