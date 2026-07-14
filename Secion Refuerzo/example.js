// primer forma crar una coleccion
db.createCollection('products',{validator:{
    $jsonSchema:{
        bsonType:'object',
        required:[_id, name,price],
        properties:{
          _id:{bsonType:'objectId'},
          name:{
            bsonType:'string',
            minLength:2,
            maxLength:150,
            description:'Nombre del producto de tipo string con mínimo 2 caracteres y máximo 150'
          },
          price:{
            bsonType:'number',
            minimum:0
          },
          stock:{
            bsonType:'number',
            minimum:0
          },
        },
        additionalProperties:false //esto si se pone en false se restringe y no se puede añadir informacion extra 
    }
}}),

db.createCollection('clients', { validator: {
  $jsonSchema: {
    bsonType: 'object',
    required: [ _id, name, email,direccion_envio ],
    properties: {
      _id: { bsonType: 'objectId' },
      name: {
        bsonType: 'string',
        minLength: 2,
        maxLength: 100,
        description: 'Nombre del cliente con un minimo de 2 y un máximo de 100'
      },
      email: {
        bsonType: 'string',
        pattern:'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$'
      }, 
      direccion_envio: {
        bsonType: 'string',
        minLength: 2,
        direccion_envio: 'Dirección con un minimo de 2'
      }
    },
    additionalProperties:true 
}}});


