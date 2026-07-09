db.createUser({
    user:'auxiliarventas',
    pwd: 'Abcd123*',
    customData:{description:'Usuario auxiliar de ventas encargado de los repostes',userId:'asdfa41as3fas3df1a1df'},
    roles:[
        'read',
        {role:'readWrite',db:'campus'},
        {role:'read',db:'acmeStore'}
    ]
})

db.createUser({
    user: 'auxiliaracademico',
    pwd: '120626',
    customData: { description: 'Usuario auxiliar de academico encargado de los reportes', userId: 'asdfa41as3fas3df1a1df' },
    roles: [
      { role: 'readWrite', db: 'acme_school' },
      { role: 'read', db: 'acme_store' }
    ]
  });
   