db.createRole({
    role: "student",
    privileges:[
      {
        resource: { db: "acme_school", collection: "students" },
        actions: [ "find" ]
      }
    ],
    roles:[]
  });

  db.getRoles()

  db.getRole('student')

  db.createUser({
    user:"pepe",
    pwd:"pepe123",
    roles: ["student"]
  })

//-------------------------------------------------
//esto va en la nueva coleccion de pepe
use acme_school

//este da error
db.students.insertOne({code:1022})
//aqui saria datos de pepe

db.students.find({})

//----------------------------------------------------
db.grantRolesToUser("pepe",[
    {role:'readWrite',db:'acme_school'}
])

db.getUser('pepe')

db.revokeRolesFromUser("pepe",[
    {role:'student',db:'acme_school'}
])

//eliminacion de roles
db.dropRole('student')

db.dropUser('pepe')