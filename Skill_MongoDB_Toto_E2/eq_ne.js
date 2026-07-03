db.account.find(
    { "client.identificationType" : { $eq: "CC" } }
);

db.account.find(
    { "mainCurrency" : { $ne: "cop" } }
);

