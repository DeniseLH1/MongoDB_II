db.account.find(
    { "currencies": "qtz"},
    { "accountNumber": 1, "client": 1}
).count();
