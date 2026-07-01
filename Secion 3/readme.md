//En este readme estan todos los pasos de lo que hicimos este archivo llamado secion 3 es de la clse del dia 1 de julio del 2026 ademas el archivo clients invoices y products son los archivos que usamos para hacer este proyecto. Nota: en products modifique unos datos que dijo el profe asi que importante de que uses este 

//Primero:
// Creamos la base de datos llmada acme_store
use acme_store

// Luego 
// Insertamos datos de products invoices y clients 
// Por ejemplo:
db.invoices.insertMany(
    //aqui el archivo json llamado invoices
)

//--------------Ejercicios usando match: -----------------------------

db.products.aggregate([
    {$match:{
        category: "Almacenamiento"
    }}
]);

//facturas del cliente con el siguiente id:15024445
db.invoices.aggregate([
  { $match: {
    "client.id": 15024445
  }}
]); 

//traer todos los facturas con el producto con el codigo p3
db.invoices.aggregate([
  { $match: {
    "items.code": "P003"
  }}
]);

//contar productos hay por categoria dentro de la colleccion productos
// nos permite sumas promedios conteos etc 
db.products.aggregate([
    {$group:{
        //para agrupar hay que usar un atributo en particular para agrupar
        _id: "$category",
        count: {$sum:1}
    }}
]);


//buscar cunatos clientes hay por cada ciudad de colombia 
db.clients.aggregate([
    {$group:{
        _id: "$location.city",
        count: {$sum:1}
    }}
]);

//productos sacar promedio de precios por cada categoria de productos que esten activos
db.products.aggregate([
    { $match: { active: true }},
    { $group: {
        _id: "$category",
        promedio: { $avg: "$price" }
    }}
]);
