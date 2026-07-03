
db.accounts.updateOne({ _id: ObjectId("6a342351d3ea2470e49e3d0d") },
{ $set: {active: false}  }
);


db.inventory.updateMany(
    {"item.code":"123"},
    {$inc:{qty:-5,price:80}}
);

db.inventory.updateOne(
    {"_id": 3},
    {$rename: {qty: "price"}}
);


db.inventory.updateMany(
    {},
    {$unset: { name: 1 }}
);



db.inventory.updateMany(
    {},
    { $min: { qty: 20 }}   
);

db.inventory.updateMany(
    {},
    { $max: {qty: 30} }
);


db.inventory.updateOne(
    {},
    { $currentDate: { lastUpdate: true } }
);

db.inventory.updateOne(
    { "_id": 1 },
    { $addToSet: { tags: "D" } }
);

db.inventory.updateOne(

    { "_id":1 },
    { $pop: { tags: -1 } }
);


db.inventory.updateOne(
    { "_id":1 },
);


db.inventory.updateOne(

    { "_id":1 },
    { $pull: { tags: "B" } }
);

db.inventory.updateOne(
    { "_id": 3 },
    { $pullAll: { tags: [ "A", "B" ] } }
);



db.inventory.deleteMany(
    {"_id": 3}
);


// pa eliminar una colleccion

db.inventory.drop();

//esto es para borrar la base de datos
// quiero revisar el codigo de mongo para ver si esta