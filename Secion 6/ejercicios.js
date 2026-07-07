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
   

 