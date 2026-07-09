db.users.drop();
db.createCollection('users', {
    validator: {
      $jsonSchema: {
        bsonType: 'object',
        required:['username','email'],
        properties: {
          username: {
            bsonType: 'string',
            minLength:2,
            description:'El nombre de ususario debe contener mínimo 2 caracteres'
          },
          employee: {
            bsonType: "object",
            required: ["name"],
            items: {
                bsonType: "object",
                properties: {
                    name: {
                        bsonType: "string"
                    },
                    gender: {
                        bsonType: "string",
                        enum: ["M", "F"]
            }}},
          email: {
            bsonType: 'string',
            pattern:'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
          }, 
          password:{
              bsonType:'string',
              //minLength:8,
              //maxLength:20
              pattern: "^[A-Za-z0-9]{8,20}$"
          },
          securityLevel:{
            bsonType:'number',
            minimum:1,
            maximum:4
          },
          admin:{
            bsonType:'bool'
          },
          tags:{
            bsonType:'array',
            uniqueItems:true,
            items:{
                bsonType:'string'
            }
          },
          offices: {
            bsonType: 'array',
            items: {
                bsonType: 'object',
                required:['office','securityLevel'],
                properties: {
                    office: {
                        bsonType: 'string'
                    },
                    securityLevel: {
                        bsonType: 'number',
                        minimum: 1,
                        maximum: 4
                    }
                }
            }
        },
          status:{
            bsonType:'string',
            enum:['Active','Suspended','Inactive']
        }
      }
    }
  }}});

db.users.insertOne({
    username:'pepe',
    email:'pepe@gmail.com'
})

db.users.insertOne({
    username:'juana',
    password: 'Abc123'
})

db.users.insertOne({
    username: 'pepe',
    email: 'pepe@mail.com',
    phone: '+502569854178',
    password: 'Abc123456',
    status: 'Hola'
  });


  db.users.insertOne({
    username: 'pepe',
    email: 'pepe@mail.com',
    phone: '+502569854178',
    password: 'Abc123456',
    securityLevel:1,
    admin:true,
    tags:'hola',
    status: 'Suspended'
  });

  db.users.insertOne({
    username: 'pepe',
    email: 'pepe@mail.com',
    phone: '+502569854178',
    password: 'Abc123456',
    securityLevel:1,
    admin:true,
    tags:['admin','auxSys'],
    status: 'Suspended'
  });

  db.users.insertOne({
    username: 'pepe',
    
    email: 'pepe@mail.com',
    phone: '+502569854178',
    password: 'Abc123456',
    securityLevel:1,
    admin:true,
    tags:['admin','auxSys'],
    status: 'Suspended'
  });

    