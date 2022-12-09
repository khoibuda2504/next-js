//http://localhost:3000/api/users
import main from "../../database/connection"
import Kitten from "../../database/schema"


export default function get_Users(req,res) {
  main().catch(err => {
    console.log('heheheh')
    console.log(err)
  })

  const create = new Kitten({
    name: 'Khoi'
  })
  create.save().then((res) => {
    res.status(200).json(create)
  })
}