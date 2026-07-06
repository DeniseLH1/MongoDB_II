// use campus

// db.createCollection("books")

db.books.insertMany( 
[
    {
        _id: 1,  
        titulo: 'El aleph',
        autor: 'Borges',
        editorial: ['Siglo XXI', 'Planeta'],
        precio: 20,
        cantidad: 50 
    },
    {
        _id: 2,  
        titulo: 'Martin Fierro',
        autor: 'José Hernández',
        editorial: ['Siglo XXI'],
        precio: 50,
        cantidad: 12
    },
    {
        _id: 3,  
        titulo: 'Aprenda PHP',
        autor: 'Mario Molina',
        editorial: ['Siglo XXI','Planeta'],
        precio: 50,
        cantidad: 20
    },
    {
        _id: 4,  
        titulo: 'Java en 10 minutos',
        editorial: ['Siglo XXI'],
        precio: 45,
        cantidad: 1 
    }
]);