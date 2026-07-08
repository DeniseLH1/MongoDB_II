db.createUser({
    user:'auxiliarventas',
    pws: 'Abcd123*',
    roles:[
        'read',
        {role:'readWrite',db:'campus'},
        {role:'read',db:'acmeStore'}
    ]
})