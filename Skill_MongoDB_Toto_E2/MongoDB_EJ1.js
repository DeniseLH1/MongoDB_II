db.estudiantes.insertMany([
    //xd
    {
      _id: 1,
      nombre: "Juan Perez",
      edad: 25,
      email: "juan@mail.com",
      ciudad: "Bucaramanga"
    },
     {
      _id: 2,
      nombre: "Antonio Cruz",
      edad: 17,
      email: "ac1872653@mail.com",
      ciudad: "Medellin"
    },
     {
      _id: 3,
      nombre: "Checo perez",
      edad: 35,
      email: "checko@mail.com",
      ciudad: "Bogota"
    },
     {
      _id: 4,
      nombre: "Felipe Gomez",
      edad: 20,
      email: "Feli@mail.com",
      ciudad: "Cali"
    },
    
  ]);
  
  //$gte significa mayor o igual que
  //$gt mayor que
  //$lt menor
  //$lte menor o igual que
  //eq igual que
  //ne not equals
  
  db.estudiantes.find({
    edad: {$gt:25}
    
    });
  
  
    //para actualizar
  
  db.estudiantes.updateOne(
    { nombre: "Antonio Cruz" },  // 1. Filtro: ¿A quién busco?
    { $set: { edad: 18 } }       // 2. Acción: Uso $set para cambiar la edad a 18
  );
  
  //para eliminar
  db.estudiantes.deleteOne(
    {nombre: "Antonio Cruz"}
  )
  
  
  db.cursos.insertMany([
    {
      _id:101,
      nombre: "MongoDB",
      duracion: 40,
      instructor: "Eduin Salas"
    },
      {
      _id:102,
      nombre: "Java",
      duracion: 40,
      instructor: "Cristian Diaz"
    },
      {
      _id:103,
      nombre: "Python",
      duracion: 35,
      instructor: "Kevin Dominguez"
    }
  ])
  
  db.inscripciones.insertMany([
    {
      estudiante_id: 1,
      curso_id: 101,
      fecha: "2026-06-15"
    },
      {
      estudiante_id: 1,
      curso_id: 102,
      fecha: "2026-06-15"
    },
      {
      estudiante_id: 2,
      curso_id: 101,
      fecha: "2026-06-16"
    },
      {
      estudiante_id: 3,
      curso_id: 103,
      fecha: "2026-06-17"
    },
  ])
  
  db.cursos.find({});
  