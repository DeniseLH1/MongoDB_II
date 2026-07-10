// Profile Collection
 
{
    code: "001",
    name: "Perfil 1",
    description: "Este es el perfil 1."
  }
   
   
  // Permissions collections
  {
    code: "01",
    name: "Leer",
  },
  {
    code: "02",
    name: "Escribir",
  }
   
   
  // Users Collection
  {
    username: "pepito",
    email: "pepito@mail.com",
    password: "123",
    profile: {
      code: "001",
      name: "Perfil 1",
      description: "Este es el perfil 1."
    },
    permissions: [
      {
        code: "01",
        name: "Leer",
      },
      {
        code: "02",
        name: "Escribir",
      }
    ]
  }
   
  const user = db.users.find({username: 'pepito'});
  user.profile.name
   