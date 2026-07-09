db.users.drop();
db.createCollection('users', {
    validator: {
      $jsonSchema: {
        bsonType: 'object',
        required:['username','email'],
        additionalProperties:false,
        properties: {
          username: {
            bsonType: 'string',
            minLength:2,
            description:'El nombre de ususario debe contener mínimo 2 caracteres'
          },
          email: {
            bsonType: 'string',
            pattern:'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
          }, 
          }
        }
  }});

// modificacion de esquema de validacion
//run comand puede solo ser validado por administradores 
db.runCommand({
  collMod:'users',
  validator:{
    $jsonSchema{

    }
  }
})