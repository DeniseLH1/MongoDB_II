use campus

db.createCollection('orders')

db.orders.insertMany()//agregar lo que esta en pedidos.json

db.orders.aggregate([
    {$match:{_id:"ORD-2024001"}},
    {$addFields:{$sum}}
])

//computted pattern se basa en que se puede calcular un valor a partir de otros valores, en este caso el total de la orden a partir de la cantidad y el precio de cada item.

db.orders.aggregate([
    { $match: { _id: "ORD-2024001" } },
    { $unwind: '$items' },
    { $group: {
      _id: '$_id',
      cliente: { $first: '$cliente' },
      fecha: { $first: '$fecha' },
      metodo_pago: { $first: '$metodo_pago' },
      estado: { $first: '$estado' },
      totalOrder: { $sum: { $multiply: [ '$items.qty', '$items.price' ] } },
      items: { $push: {
        p_id: '$p_id',
        name: '$name',
        qty: '$qty',
        price: '$price'
      }}
    }}
  ]);
  //15740000