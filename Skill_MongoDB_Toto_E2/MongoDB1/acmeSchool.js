// creamos una base de datos acme_school

// use acme_school;

// creamos la coleccion de estudiantes
db.createCollection("students");


// Agregamos el documento de un nuevo estudiante ala coleccion de estudiantes, en la base de datos acme_school.

db.students.insertOne(
{
  "code": 3823,
  "name": "Chapman Tillman",
  "email": "chapmantillman@zaj.com",
  "courses": [
    {
      "code": 1,
      "name": "Introducción a la programación",
      "grade": 4.1
    },
    {
      "code": 5,
      "name": "Scrum",
      "grade": 3.4
    },
   {
     "code": 6,
     "name": "Javascript",
     "grade": 3.5
   }
],
"place": {
  "address": "Cra 170B # 94 - 58",
  "city": "Bogotá"
},
"age": 20
}
);




// Mostrar todos los estudiante
db.students.find({});

 // Agregamos las siguientes propiedades a los documentos de estudiantes:	Nombre: active, valor: true,	Nombre: modalidad, valor: Virtual

db.students.updateMany(
  {},
  {
    $set: {
      "active": true,
      "modalidad": "Virtual"
    }
  }
);



// 4. Actualizamos los datos de los siguientes estudiantes y sino existen los creamos para que en mongo se muestre: code: 6503, actualizar edad a 20	code: 6714, actualizar la ciudad de residencia a Barranquilla.	code: 3875, agregar un nuevo hobby, Volleyball. code: 2354, agregar los siguientes hobbies, Lectura y Música. code: 7066, agregar los siguientes hobbies, Fútbol, Lectura.	name: Hilary Lee, actualizar el correo electrónico a hilarylee09@pearlessa.com 
//lo hacemos con insertOne

db.students.insertOne(
  {
    "code": 6503
  },
  {
    $set: {
      "age": 20
    }
  },
  {
    upsert: true
  }
);

db.students.updateOne(
  {
    "code": 6714
  },
  {
    $set: {
      "place.city": "Barranquilla"
    }
  }
  ,
  {
    upsert: true
  }
);

db.students.updateOne(
  {
    "code": 3875
  },
  {
    $push: {
      "hobbies": "Volleyball"
    }
  }
  ,
  {
    upsert: true
  }
);

db.students.updateOne(
  {
    "code": 2354
  },
  {
    $push: {
      "hobbies": ["Lectura", "Música"]
    }
  }
  ,
  {
    upsert: true
  }
);
db.students.updateOne(
  {
    "code": 7066
  },
  {
    $push: {
      "hobbies": ["Fútbol", "Lectura"]
    }
  },
  {
    upsert: true
  }
);


//5.Renombramos la propiedad modalidad a modality.

db.students.updateMany(
  {},
  {
    $rename: {
      "modalidad": "modality"
    }
  }
);

// 6.Cambiamos la modalidad (modality) de los estudiantes que viven en Bucaramanga a “On Site”

db.students.updateMany(
  {
    "place.city": "Bucaramanga"
  },
  {
    $set: {
      "modality": "On Site"
    }
  }
);

// 7. Creamos acorde al codigo de los estudiantes las siguientes consultas: a.Consultar cuantos estudiantes viven en Barranquilla. b.Consultar cuantos estudiantes son mayores de edad. c.Consultar cuantos estudiantes no son de Bogotá. d.Consultar el código, nombre y hobbies de los estudiantes que tienen 18 años. e. Consultar el código, nombre y edad de los estudiantes que son menores de edad.

// a
db.students.find({"place.city": "Barranquilla"}).count();
// b
db.students.find({"age": { $gt: 18 }}).count();
// c
db.students.find({"place.city": { $ne: "Bogotá" }}).count();
// d
db.students.find({ "age": 18, "hobbies": { $exists: true } }).count();
// e
db.students.find({ "age": { $lt: 18 }, "hobbies": { $exists: true } }).count();

// 8. una consulta que Elimina la propiedad active de todos los estudiantes

db.students.updateMany(
  {},
  {
    $unset: {
      "active": 1
    }
  }
);

//9.Eliminar el hobby Ciclismo del estudiante con código 2354.

db.students.updateOne(
  {
    "code": 2354  //filtro
  },
  {
    $pull: {
      "hobbies": "Ciclismo" //operacion
    }
  }
);

// 10.Eliminar los hobbies Lectura y Senderismo del estudiante con código 3875.

db.students.updateOne(
  {
    "code": 3875
  },
  {
    $pull: {
      "hobbies": "Lectura",
      "hobbies": "Senderismo"
    }
  }
);


// 11.  Eliminar al estudiante con código 9241.

db.students.deleteOne(
  {
    "code": 9241
  }
);

// 12. Eliminar todos los estudiantes de la ciudad de Barranquilla.
db.students.deleteMany(
  {
    "city": "Barranquilla"

  }
);

// 13. Eliminar todos los estudiantes mayores de edad.
db.students.deleteMany(
  {
    "age": { $gt: 18 }
  }
);
// 14. Eliminar todos los estudiantes que no sean de Bogotá.
db.students.deleteMany(
  {
    "city": { $ne: "Bogotá" }
  }
);
