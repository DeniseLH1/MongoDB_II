db.account.find({ "movements.amount": { $gt: 300 } }).count();


// maincurrency sea igual a qtz y adicionalmente el monto sea menor o igual a 30 
db.account.find({ 
    "mainCurrency": 'qtz', 
    "movements.amount": { $lte: 30 } 
  });

//   ahora muestra solo las cuentas donde el tipo de movimiento ha sido 
  
  db.accounts.find({ "movements.type": "deposit" });

// la identificacion sea igual a Ce Y EL MMAIN CURRENCY SEA IGual a usd con eq o ne

db.accounts.find({ 
    "client.identificationType": { $ne: "CE" }, 
    "mainCurrency": { $ne: "usd" } 
  });

