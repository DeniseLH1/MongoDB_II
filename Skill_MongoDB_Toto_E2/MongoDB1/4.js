db.account.insertMany([
    {
        "accountNumber": "002",
        "client": {
          "identificationType": "CE",
          "identificationNumber": "100",
          "firstName": "Morgan",
          "surname": "Howe",
          "email": "morganhowe@comtrek.com",
          "phone": "+57 879 517 2153"
        },
        "mainCurrency": "usd",
        "currencies": [
          "cop",
          "usd"
        ],
        "movements": [
          {
            "type": "withdrawal",
            "amount": 282,
            "date": "2025-02-10T03:36:55 +05:00"
          },
          {
            "type": "withdrawal",
            "amount": 986,
            "date": "2025-01-14T09:39:15 +05:00"
          }
        ],
        "registered": "2025-02-28T07:37:02 +05:00",
        "active": true
      },
      {
        "accountNumber": "003",
        "client": {
          "identificationType": "CC",
          "identificationNumber": "101",
          "firstName": "Bianca",
          "surname": "House",
          "email": "biancahouse@comtrek.com",
          "phone": "+57 934 468 3253"
        },
        "mainCurrency": "usd",
        "currencies": [
          "cop",
          "usd"
        ],
        "movements": [
          {
            "type": "withdrawal",
            "amount": 512,
            "date": "2025-02-01T09:58:31 +05:00"
          }
        ],
        "registered": "2025-02-24T04:51:41 +05:00",
        "active": true
      },
      {
        "accountNumber": "004",
        "client": {
          "identificationType": "CE",
          "identificationNumber": "102",
          "firstName": "Silvia",
          "surname": "Armstrong",
          "email": "silviaarmstrong@comtrek.com",
          "phone": "+57 971 453 3057"
        },
        "mainCurrency": "usd",
        "currencies": [
          "cop",
          "usd"
        ],
        "movements": [
          {
            "type": "withdrawal",
            "amount": 578,
            "date": "2025-02-11T05:23:34 +05:00"
          }
        ],
        "registered": "2025-02-26T04:47:07 +05:00",
        "active": true
      },
      {
        "accountNumber": "005",
        "client": {
          "identificationType": "CE",
          "identificationNumber": "103",
          "firstName": "Gibbs",
          "surname": "Mullins",
          "email": "gibbsmullins@comtrek.com",
          "phone": "+57 925 429 3502"
        },
        "mainCurrency": "usd",
        "currencies": [
          "cop",
          "usd"
        ],
        "movements": [
          {
            "type": "deposit",
            "amount": 21,
            "date": "2025-01-17T04:08:37 +05:00"
          }
        ],
        "registered": "2025-02-27T10:35:07 +05:00",
        "active": true
      }
    ]
  
)

