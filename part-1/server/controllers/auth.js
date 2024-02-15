const bcrypt = require('bcryptjs')

const users = []

module.exports = {
    login: (req, res) => {
      console.log('Logging In User')
      console.log(req.body)
      const { username, password } = req.body
      // for (let i = 0; i < users.length; i++) {
      //   if (users[i].username === username && users[i].password === password) {
      //     res.status(200).send(users[i])
      //   }
      // }
      // res.status(400).send("User not found.")

      for (let i = 0; i < users.length; i++) {
        if (users[i].username === username) {
          if(bcrypt.compareSync(password, users[i].passwordHash)) {

            let userToReturn = {...users[i]}
            delete userToReturn.passwordHash
            
            res.status(200).send(userToReturn)
            return
          }
        }
      }
      res.status(400).send("User not found.")
    },
    register: (req, res) => {
      console.log('Registering User')
      console.log(req.body)

      const { username, password, email, lastName, firstName } = req.body

      const salt = bcrypt.genSaltSync(5);
      const passwordHash = bcrypt.hashSync(password, salt);

      let newUser = {
        username,
        email,
        firstName,
        lastName,
        passwordHash,
      }

      users.push(newUser)
      let userToReturn = {...newUser}
      delete userToReturn.passwordHash
      res.status(200).send(userToReturn)
    }
}