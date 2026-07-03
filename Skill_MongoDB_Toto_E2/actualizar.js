db.account.updateOne(
    {"accountNumber": "006"},
    { $set:  {
        "accountNumber": "006",
        "client": {
          "identificationType": "CE",
          "identificationNumber": "106",
          "firstName": "Jennifer",
          "surname": "Perez",
          "email": "jenniferperez@comtrek.com",
          "phone": "+57 925 429 3502"
        },
        "mainCurrency": "qtz",
        "currencies": [
          "qtz"
        ],
        "movements": [],
        "registered": "2026-06-18T10:35:07 +05:00",
        "active": true
      } },
      //upser sirve para crear uno de cero por si no encuentra el documento
      { upsert: true }
);
