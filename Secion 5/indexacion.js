// use campus

// db.createCollection("books")

/*
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
*/

// creacion de  indices
db.books.createIndex({autor:1});


db.books.createIndex( 
    {titulo:1},
    {name:'inx_books_titulo'}
);


db.books.getIndexes();

//-----------------------------------------------------------------------------------
//este sera usando la base de datos de acme_store:

db.invoices.createIndex(
    {invoiceNumber:1},
    {
        name:'inx_invoice_invoiceNumber',
        unique:true,
        background:true
    }
)


db.invoices.getIndexes();


db.invoices.insertOne({invoiceNumber:'FACT-0001'});


db.inventory.insertOne({
    "_id":6,
    "item":{
        "name": "XZ",
        "code": "999"
    },
    "tags":["A"]
})


db.campus.inventory.createIndex(
    {qty: -1},
    {
        name:'inx_inventory_qty',
        sparse:true,
        background:true
  }
  );


db.createCollection(
    'userSessions',
    { autoIndexId:false}
)


db.userSessions.createIndex(
    {userCode: 1},
    {
        name: 'inx_userSessions_userCode',
        unique: true,
        expireAfterSession: 60
    }
);


db.userSessions.dropIndex('inx_userSessions_userCode');


db.userSessions.insertOne(
    {
        userCode: '001',
        sessionHash: 'nedjdhiegfhedfuefhue',
        page: 'Como evitar el sueño en clases'
    }
    
)

db.userSessions.insertOne(
    {
        userCode: '002',
        sessionHash: 'nedjdhiegfhedfuefhue',
        page: 'Como evitar el chisme en clases'
    }    
)

db.userSessions.insertOne(
    {
        userCode: '003',
        sessionHash: 'nedjdhiegfhedfuefhue',
        page: 'Como evitar el sueño en clases',
        createAt: new Date()
    }
)

db.userSessions.insertOne(
    {
        userCode: '004',
        sessionHash: 'nedjdhiegfhedfuefhue',
        page: 'Como evitar el chisme en clases',
        createAt: new Date()
    }
)


db.orders.createIndex(
    {store:1,status:-1},
    {name: 'i9nx_orders_store_status'}
)


//--------------------7 de julio usando la base de datos llamado campus------------------------
//indice simple esta compuesto por un solo campo
db.inventory.createIndex(
    //en este indexaremos por 2 indices
    //1 es acendente y -1 es decendente
    {"item.code":1},
    {name:'inx_inventory_itemCode'}

)
//para obtener indices creados 
db.inventory.getIndexes()


db.inventory.find({"item.code": "123"})


//creacion de un subindice para el nombre y codigo de item
db.inventory.createIndex(
    {"item.code":1,"item.name":-1},
    {name:'inx_inventory_itemCode_itemName'}

)


//creacion de un subindice para el nombre de item
db.inventory.createIndex(
    {"item.name":1},
    {name:'inx_inventory_itemName'}
)