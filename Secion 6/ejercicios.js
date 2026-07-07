db.orders.find({
    status:'ordered',
    'customer.location.city':'Bogotá'
}).explain("executionStats")

db.orders.createIndex({
    status:1,
    'customer.location.city':1
})

//buscar ordenes con estado ordenado (shipped) que fueron realizaras en mayo 2026
db.orders.find({
    status:'shipped',
    order_date:{
        $gte: "2026-05-01T00:00:00Z",
        $lte: "2026-05-31T23:59:59Z"
      }
}).explain("executionStats")


db.orders.createIndex(
    { status: 1, order_date: 1 }
)
   

 //filtro para las ordenes de mayor valor 
 db.orders.find(
    {}, 
    { "totals.final_total": 1 }
).sort({ "totals.final_total": -1 }).limit(10);

 db.orders.createIndex(
    { 'totals.final_total': 1 }
)

//encontrar o mostrar ordenes que contengan almenos un producto con la categoria electronics y que la cantidad sea mayor a 2
db.orders.find({
    'items': { 
      $elemMatch: { category: "Electronics", quantity: { $gt: 2 } } 
    }
  });

//selecciona las ordenes que incluyan productos que tengan simultaneamente las etiquetas tags "gaming" y "peripherals"

db.orders.find({
    'items':{
        $elemMatch:{
            tags:{$all:["gaming","peripherals"]}
        }
    }
})

db.orders.createIndex(
    { 'item.tags': 1 }
)

//identificar las 5 ciudades que han generado el mayor volumen de ventas totales 

db.orders.aggregate([
    {$group: {
        _id: "$customer.location.city", 
        Ventas: { $sum: "$totals.final_total" } 
      } },
    {$sort: { Ventas: -1 } },
    { $limit: 5 }
  ]);


//calcula cual es el producto más vendido en cantidad total
db.orders.aggregate([
    {$unwind: "$items"},
    {
      $group: {
        _id: "$items.name",
        cantidadTotal: { $sum: "$items.quantity" }
      }},
    {$sort: { cantidadTotal: -1 }},
    {$limit: 1}
  ]);
   
// encuentra los productos unicos de la categoría "Home" que han sido comprados por clientes de nivel silver 
db.orders.aggregate([
    {
      $match: {
        "customer.tier": "silver",
        "items.category": "Home"
      }},
    {$unwind: "$items"},
    {
      $match: {
        "items.category": "Home"
      }},
    {
      $group: {
        _id: "$items.product_id",
        nombre_producto: { $first: "$items.name" },
        categoria: { $first: "$items.category" }
      }},
    {
      $project: {
        _id: 0,
        product_id: "$_id",
        name: "$nombre_producto",
        category: "$categoria"
      } }
  ])