db.inventory.updateOne(
    { "item.code" : "000" },
    { $set: 
            { 
             item: {  name: "producto 5" }  
            }
     }
);

