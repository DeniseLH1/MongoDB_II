db.createUser({
    user:'auxiliarventas',
    pws: 'Abcd123*',
    customData:{description:'Usuario auxiliar de ventas encargado de los repostes',userId:'asdfa41as3fas3df1a1df'},
    roles:[
        'read',
        {role:'readWrite',db:'campus'},
        {role:'read',db:'acmeStore'}
    ]
})