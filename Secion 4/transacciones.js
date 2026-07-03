const session = db.getMongo().startSession();

const inventory = session.getDatabase("campus").inventory

session.startTransaction();

inventory.updateOne(
    {_id:1},
    {$inc:{qty:-5}}
);

inventory.insertOne({
    _id:6,
    item: {
        name:"uv", 
        code:"999",
        description:"Inserted via transacción"
    },
    qty:10,
    tags:["U","V"]
})

// Cuando todo es color de rosa:
session.commitTransaction();
// Cuando no se está seguro:
session.abortTransaction();

session.endSession();

db.adminCommand({
    setParameter: 1,
    transactionLifetimeLimitSeconds: 120 }
);
// -------------------------------------------------

const session = db.getMongo().startSession();

const inventory = session.getDatabase("campus").inventory

const productsReturns = session.getDatabase("campus").productsReturns

session.startTransaction();

inventory.updateOne(
    {_id:2},
    {$inc:{qty:3}}
);
productsReturns.insertOne({
    product_id:2,
    reason: "Producto defectuoso",
    fecha: new date(),
    quantityReturned:3
});

session.commitTransaction();

session.endSession()