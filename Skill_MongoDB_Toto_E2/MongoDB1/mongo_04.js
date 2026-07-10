db.account.insertOne(
    {
        "accountNumber": "001",
        "client": {
          "identificationType": "CC",
          "identificationNumber": "100",
          "firstName": "Deanna",
          "surname": "Pate",
          "email": "deannapate@comtrek.com",
          "phone": "+57 831 567 3831"
        },
        "mainCurrency": "usd",
        "currencies": [
          "cop",
          "usd"
        ],
        "movements": [
          {
            "type": "withdrawal",
            "amount": 29,
            "date": "2025-03-06T03:55:39 +05:00"
          },
          {
            "type": "deposit",
            "amount": 318,
            "date": "2025-01-13T01:22:01 +05:00"
          }
        ],
        "registered": "2025-02-20T11:40:26 +05:00",
        "active": true
      },
    
  );