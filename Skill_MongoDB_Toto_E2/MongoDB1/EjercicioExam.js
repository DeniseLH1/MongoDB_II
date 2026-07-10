
// Creacion y - o seleccion de la base de datos a usar
// use acmeBank;

//Creacion de la colección
db.createCollection("accounts",{autoIndexId:true});

// insertar un solo documento
db.accounts.insertOne(
{
    "accountNumber": "10001",
    "openingDate": {
      "$date": "2026-06-12T13:44:12.967Z"
    },
    "client": {
      "id": "18450000153",
      "firstName": "Juan",
      "lastName": "Gómez",
      "email": "juan.gómez@gmail.com",
      "phone": "+52 5559176883",
      "address": "Av. Insurgentes # 29 - 19"
    },
    "accountBalance": 3.5,
    "movements": [
      {
        "reference": "M-14000011",
        "type": "Deposit",
        "movementDate": {
          "$date": "2026-06-12T15:44:12.967Z"
        },
        "amount": 468.12
      },
      {
        "reference": "M-14000012",
        "type": "Withdrawal",
        "movementDate": {
          "$date": "2026-06-17T15:44:12.967Z"
        },
        "amount": 163.37
      },
      {
        "reference": "M-14000013",
        "type": "Withdrawal",
        "movementDate": {
          "$date": "2026-06-22T15:44:12.967Z"
        },
        "amount": 301.25
      }
    ]
  }
);

// la funcion find se usa para buscar
db.accounts.find();

// insertar varios documentos
db.accounts.insertMany(
[ {
    "accountNumber": "10002",
    "openingDate": {
      "$date": "2026-06-07T13:44:12.967Z"
    },
    "client": {
      "id": "18450000154",
      "firstName": "Juan",
      "lastName": "Martínez",
      "email": "juan.martínez@gmail.com",
      "phone": "+52 5553015816",
      "address": "Av. Vitacura # 9 - 94"
    },
    "accountBalance": 1601.59,
    "movements": [
      {
        "reference": "M-14000021",
        "type": "Deposit",
        "movementDate": {
          "$date": "2026-06-07T15:44:12.967Z"
        },
        "amount": 1062.18
      },
      {
        "reference": "M-14000022",
        "type": "Deposit",
        "movementDate": {
          "$date": "2026-06-12T15:44:12.967Z"
        },
        "amount": 255.15
      },
      {
        "reference": "M-14000023",
        "type": "Deposit",
        "movementDate": {
          "$date": "2026-06-17T15:44:12.967Z"
        },
        "amount": 132.54
      },
      {
        "reference": "M-14000024",
        "type": "Deposit",
        "movementDate": {
          "$date": "2026-06-22T15:44:12.967Z"
        },
        "amount": 151.72
      }
    ]
  },
  {
    "accountNumber": "10003",
    "openingDate": {
      "$date": "2026-06-17T13:44:12.967Z"
    },
    "client": {
      "id": "18450000155",
      "firstName": "Pepe",
      "lastName": "Gómez",
      "email": "pepe.gómez@gmail.com",
      "phone": "+52 5557943806",
      "address": "Paseo de la Reforma # 57 - 35"
    },
    "accountBalance": 1594.92,
    "movements": [
      {
        "reference": "M-14000031",
        "type": "Deposit",
        "movementDate": {
          "$date": "2026-06-17T15:44:12.967Z"
        },
        "amount": 1189.99
      },
      {
        "reference": "M-14000032",
        "type": "Deposit",
        "movementDate": {
          "$date": "2026-06-22T15:44:12.967Z"
        },
        "amount": 404.93
      }
    ]
  },
  {
    "accountNumber": "10004",
    "openingDate": {
      "$date": "2026-06-17T13:44:12.967Z"
    },
    "client": {
      "id": "18450000156",
      "firstName": "Sofia",
      "lastName": "Rodríguez",
      "email": "sofia.rodríguez@gmail.com",
      "phone": "+52 5554858867",
      "address": "Av. Insurgentes # 75 - 19"
    },
    "accountBalance": 415.85,
    "movements": [
      {
        "reference": "M-14000041",
        "type": "Deposit",
        "movementDate": {
          "$date": "2026-06-17T15:44:12.967Z"
        },
        "amount": 639.28
      },
      {
        "reference": "M-14000042",
        "type": "Withdrawal",
        "movementDate": {
          "$date": "2026-06-22T15:44:12.967Z"
        },
        "amount": 223.43
      }
    ]
  },
  {
    "accountNumber": "10005",
    "openingDate": {
      "$date": "2026-06-07T13:44:12.967Z"
    },
    "client": {
      "id": "18450000157",
      "firstName": "Luis",
      "lastName": "Gómez",
      "email": "luis.gómez@gmail.com",
      "phone": "+52 5554131608",
      "address": "Av. El dorado # 18 - 65"
    },
    "accountBalance": 1091.33,
    "movements": [
      {
        "reference": "M-14000051",
        "type": "Deposit",
        "movementDate": {
          "$date": "2026-06-07T15:44:12.967Z"
        },
        "amount": 587.56
      },
      {
        "reference": "M-14000052",
        "type": "Withdrawal",
        "movementDate": {
          "$date": "2026-06-12T15:44:12.967Z"
        },
        "amount": 78.47
      },
      {
        "reference": "M-14000053",
        "type": "Deposit",
        "movementDate": {
          "$date": "2026-06-17T15:44:12.967Z"
        },
        "amount": 352.98
      },
      {
        "reference": "M-14000054",
        "type": "Deposit",
        "movementDate": {
          "$date": "2026-06-22T15:44:12.967Z"
        },
        "amount": 229.26
      }
    ]
  },
  {
    "accountNumber": "10006",
    "openingDate": {
      "$date": "2026-06-07T13:44:12.967Z"
    },
    "client": {
      "id": "18450000158",
      "firstName": "Juan",
      "lastName": "Martínez",
      "email": "juan.martínez@gmail.com",
      "phone": "+52 5552930227",
      "address": "Carrera 7 # 31 - 18"
    },
    "accountBalance": 70.71,
    "movements": [
      {
        "reference": "M-14000061",
        "type": "Deposit",
        "movementDate": {
          "$date": "2026-06-07T15:44:12.967Z"
        },
        "amount": 543.39
      },
      {
        "reference": "M-14000062",
        "type": "Withdrawal",
        "movementDate": {
          "$date": "2026-06-12T15:44:12.967Z"
        },
        "amount": 80.93
      },
      {
        "reference": "M-14000063",
        "type": "Deposit",
        "movementDate": {
          "$date": "2026-06-17T15:44:12.967Z"
        },
        "amount": 82.21
      },
      {
        "reference": "M-14000064",
        "type": "Withdrawal",
        "movementDate": {
          "$date": "2026-06-22T15:44:12.967Z"
        },
        "amount": 473.96
      }
    ]
  },
  {
    "accountNumber": "10007",
    "openingDate": {
      "$date": "2026-06-07T13:44:12.967Z"
    },
    "client": {
      "id": "18450000159",
      "firstName": "Carlos",
      "lastName": "Ramírez",
      "email": "carlos.ramírez@gmail.com",
      "phone": "+52 5557000866",
      "address": "Paseo de la Reforma # 15 - 6"
    },
    "accountBalance": 693.99,
    "movements": [
      {
        "reference": "M-14000071",
        "type": "Deposit",
        "movementDate": {
          "$date": "2026-06-07T15:44:12.967Z"
        },
        "amount": 207.66
      },
      {
        "reference": "M-14000072",
        "type": "Withdrawal",
        "movementDate": {
          "$date": "2026-06-12T15:44:12.967Z"
        },
        "amount": 94.66
      },
      {
        "reference": "M-14000073",
        "type": "Deposit",
        "movementDate": {
          "$date": "2026-06-17T15:44:12.967Z"
        },
        "amount": 67.74
      },
      {
        "reference": "M-14000074",
        "type": "Deposit",
        "movementDate": {
          "$date": "2026-06-22T15:44:12.967Z"
        },
        "amount": 513.25
      }
    ]
  },
  {
    "accountNumber": "10008",
    "openingDate": {
      "$date": "2026-06-07T13:44:12.967Z"
    },
    "client": {
      "id": "18450000160",
      "firstName": "Pepe",
      "lastName": "Sánchez",
      "email": "pepe.sánchez@gmail.com",
      "phone": "+52 5555592310",
      "address": "Paseo de la Reforma # 71 - 96"
    },
    "accountBalance": 1132.25,
    "movements": [
      {
        "reference": "M-14000081",
        "type": "Deposit",
        "movementDate": {
          "$date": "2026-06-07T15:44:12.967Z"
        },
        "amount": 741.25
      },
      {
        "reference": "M-14000082",
        "type": "Deposit",
        "movementDate": {
          "$date": "2026-06-12T15:44:12.967Z"
        },
        "amount": 161.15
      },
      {
        "reference": "M-14000083",
        "type": "Withdrawal",
        "movementDate": {
          "$date": "2026-06-17T15:44:12.967Z"
        },
        "amount": 163.3
      },
      {
        "reference": "M-14000084",
        "type": "Deposit",
        "movementDate": {
          "$date": "2026-06-22T15:44:12.967Z"
        },
        "amount": 393.15
      }
    ]
  },
  {
    "accountNumber": "10009",
    "openingDate": {
      "$date": "2026-06-17T13:44:12.967Z"
    },
    "client": {
      "id": "18450000161",
      "firstName": "Diego",
      "lastName": "Fernández",
      "email": "diego.fernández@gmail.com",
      "phone": "+52 5555019474",
      "address": "Av. Insurgentes # 49 - 44"
    },
    "accountBalance": 634.91,
    "movements": [
      {
        "reference": "M-14000091",
        "type": "Deposit",
        "movementDate": {
          "$date": "2026-06-17T15:44:12.967Z"
        },
        "amount": 236.57
      },
      {
        "reference": "M-14000092",
        "type": "Deposit",
        "movementDate": {
          "$date": "2026-06-22T15:44:12.967Z"
        },
        "amount": 398.34
      }
    ]
  },
  {
    "accountNumber": "10010",
    "openingDate": {
      "$date": "2026-06-12T13:44:12.967Z"
    },
    "client": {
      "id": "18450000162",
      "firstName": "Lucía",
      "lastName": "Rodríguez",
      "email": "lucía.rodríguez@gmail.com",
      "phone": "+52 5558214471",
      "address": "Carrera 7 # 83 - 41"
    },
    "accountBalance": 680.94,
    "movements": [
      {
        "reference": "M-14000101",
        "type": "Deposit",
        "movementDate": {
          "$date": "2026-06-12T15:44:12.967Z"
        },
        "amount": 462.05
      },
      {
        "reference": "M-14000102",
        "type": "Withdrawal",
        "movementDate": {
          "$date": "2026-06-17T15:44:12.967Z"
        },
        "amount": 85.71
      },
      {
        "reference": "M-14000103",
        "type": "Deposit",
        "movementDate": {
          "$date": "2026-06-22T15:44:12.967Z"
        },
        "amount": 304.6
      }
    ]
  },
  {
    "accountNumber": "10011",
    "openingDate": {
      "$date": "2026-06-02T13:44:12.967Z"
    },
    "client": {
      "id": "18450000163",
      "firstName": "Pepe",
      "lastName": "Pérez",
      "email": "pepe.pérez@gmail.com",
      "phone": "+52 5551123339",
      "address": "Av. El dorado # 83 - 85"
    },
    "accountBalance": 644.08,
    "movements": [
      {
        "reference": "M-14000111",
        "type": "Deposit",
        "movementDate": {
          "$date": "2026-06-02T15:44:12.967Z"
        },
        "amount": 270.39
      },
      {
        "reference": "M-14000112",
        "type": "Deposit",
        "movementDate": {
          "$date": "2026-06-07T15:44:12.967Z"
        },
        "amount": 451.07
      },
      {
        "reference": "M-14000113",
        "type": "Withdrawal",
        "movementDate": {
          "$date": "2026-06-12T15:44:12.967Z"
        },
        "amount": 571.3
      },
      {
        "reference": "M-14000114",
        "type": "Withdrawal",
        "movementDate": {
          "$date": "2026-06-17T15:44:12.967Z"
        },
        "amount": 22.62
      },
      {
        "reference": "M-14000115",
        "type": "Deposit",
        "movementDate": {
          "$date": "2026-06-22T15:44:12.967Z"
        },
        "amount": 516.54
      }
    ]
  },
  {
    "accountNumber": "10012",
    "openingDate": {
      "$date": "2026-06-07T13:44:12.967Z"
    },
    "client": {
      "id": "18450000164",
      "firstName": "Diego",
      "lastName": "Torres",
      "email": "diego.torres@gmail.com",
      "phone": "+52 5553711341",
      "address": "Paseo de la Reforma # 11 - 77"
    },
    "accountBalance": 863.9,
    "movements": [
      {
        "reference": "M-14000121",
        "type": "Deposit",
        "movementDate": {
          "$date": "2026-06-07T15:44:12.967Z"
        },
        "amount": 1147.46
      },
      {
        "reference": "M-14000122",
        "type": "Deposit",
        "movementDate": {
          "$date": "2026-06-12T15:44:12.967Z"
        },
        "amount": 517.29
      },
      {
        "reference": "M-14000123",
        "type": "Deposit",
        "movementDate": {
          "$date": "2026-06-17T15:44:12.967Z"
        },
        "amount": 538.55
      },
      {
        "reference": "M-14000124",
        "type": "Withdrawal",
        "movementDate": {
          "$date": "2026-06-22T15:44:12.967Z"
        },
        "amount": 1339.4
      }
    ]
  },
  {
    "accountNumber": "10013",
    "openingDate": {
      "$date": "2026-06-12T13:44:12.967Z"
    },
    "client": {
      "id": "18450000165",
      "firstName": "Ana",
      "lastName": "Fernández",
      "email": "ana.fernández@gmail.com",
      "phone": "+52 5559570645",
      "address": "Av. Insurgentes # 79 - 73"
    },
    "accountBalance": 4.74,
    "movements": [
      {
        "reference": "M-14000131",
        "type": "Deposit",
        "movementDate": {
          "$date": "2026-06-12T15:44:12.967Z"
        },
        "amount": 597.11
      },
      {
        "reference": "M-14000132",
        "type": "Withdrawal",
        "movementDate": {
          "$date": "2026-06-17T15:44:12.967Z"
        },
        "amount": 529.98
      },
      {
        "reference": "M-14000133",
        "type": "Withdrawal",
        "movementDate": {
          "$date": "2026-06-22T15:44:12.967Z"
        },
        "amount": 62.39
      }
    ]
  },
  {
    "accountNumber": "10014",
    "openingDate": {
      "$date": "2026-06-12T13:44:12.967Z"
    },
    "client": {
      "id": "18450000166",
      "firstName": "Luis",
      "lastName": "Pérez",
      "email": "luis.pérez@gmail.com",
      "phone": "+52 5556013255",
      "address": "Calle 26 # 92 - 48"
    },
    "accountBalance": 781.1,
    "movements": [
      {
        "reference": "M-14000141",
        "type": "Deposit",
        "movementDate": {
          "$date": "2026-06-12T15:44:12.967Z"
        },
        "amount": 637.84
      },
      {
        "reference": "M-14000142",
        "type": "Withdrawal",
        "movementDate": {
          "$date": "2026-06-17T15:44:12.967Z"
        },
        "amount": 383.76
      },
      {
        "reference": "M-14000143",
        "type": "Deposit",
        "movementDate": {
          "$date": "2026-06-22T15:44:12.967Z"
        },
        "amount": 527.02
      }
    ]
  },
  {
    "accountNumber": "10015",
    "openingDate": {
      "$date": "2026-06-12T13:44:12.967Z"
    },
    "client": {
      "id": "18450000167",
      "firstName": "Elena",
      "lastName": "Sánchez",
      "email": "elena.sánchez@gmail.com",
      "phone": "+52 5559728560",
      "address": "Paseo de la Reforma # 57 - 41"
    },
    "accountBalance": 435.59,
    "movements": [
      {
        "reference": "M-14000151",
        "type": "Deposit",
        "movementDate": {
          "$date": "2026-06-12T15:44:12.967Z"
        },
        "amount": 245.16
      },
      {
        "reference": "M-14000152",
        "type": "Deposit",
        "movementDate": {
          "$date": "2026-06-17T15:44:12.967Z"
        },
        "amount": 249.95
      },
      {
        "reference": "M-14000153",
        "type": "Withdrawal",
        "movementDate": {
          "$date": "2026-06-22T15:44:12.967Z"
        },
        "amount": 59.52
      }
    ]
  },
  {
    "accountNumber": "10016",
    "openingDate": {
      "$date": "2026-06-02T13:44:12.967Z"
    },
    "client": {
      "id": "18450000168",
      "firstName": "Diego",
      "lastName": "Fernández",
      "email": "diego.fernández@gmail.com",
      "phone": "+52 5556159010",
      "address": "Av. Insurgentes # 3 - 37"
    },
    "accountBalance": 178.61,
    "movements": [
      {
        "reference": "M-14000161",
        "type": "Deposit",
        "movementDate": {
          "$date": "2026-06-02T15:44:12.967Z"
        },
        "amount": 998.57
      },
      {
        "reference": "M-14000162",
        "type": "Withdrawal",
        "movementDate": {
          "$date": "2026-06-07T15:44:12.967Z"
        },
        "amount": 674.03
      },
      {
        "reference": "M-14000163",
        "type": "Withdrawal",
        "movementDate": {
          "$date": "2026-06-12T15:44:12.967Z"
        },
        "amount": 240.82
      },
      {
        "reference": "M-14000164",
        "type": "Deposit",
        "movementDate": {
          "$date": "2026-06-17T15:44:12.967Z"
        },
        "amount": 500.57
      },
      {
        "reference": "M-14000165",
        "type": "Withdrawal",
        "movementDate": {
          "$date": "2026-06-22T15:44:12.967Z"
        },
        "amount": 405.68
      }
    ]
  },
  {
    "accountNumber": "10017",
    "openingDate": {
      "$date": "2026-06-12T13:44:12.967Z"
    },
    "client": {
      "id": "18450000169",
      "firstName": "Elena",
      "lastName": "Pardo",
      "email": "elena.pardo@gmail.com",
      "phone": "+52 5559079697",
      "address": "Av. El dorado # 90 - 50"
    },
    "accountBalance": 427.84,
    "movements": [
      {
        "reference": "M-14000171",
        "type": "Deposit",
        "movementDate": {
          "$date": "2026-06-12T15:44:12.967Z"
        },
        "amount": 1047.73
      },
      {
        "reference": "M-14000172",
        "type": "Withdrawal",
        "movementDate": {
          "$date": "2026-06-17T15:44:12.967Z"
        },
        "amount": 123.96
      },
      {
        "reference": "M-14000173",
        "type": "Withdrawal",
        "movementDate": {
          "$date": "2026-06-22T15:44:12.967Z"
        },
        "amount": 495.93
      }
    ]
  },
  {
    "accountNumber": "10018",
    "openingDate": {
      "$date": "2026-06-07T13:44:12.967Z"
    },
    "client": {
      "id": "18450000170",
      "firstName": "Pepe",
      "lastName": "Torres",
      "email": "pepe.torres@gmail.com",
      "phone": "+52 5558298133",
      "address": "Calle 26 # 35 - 75"
    },
    "accountBalance": 587.92,
    "movements": [
      {
        "reference": "M-14000181",
        "type": "Deposit",
        "movementDate": {
          "$date": "2026-06-07T15:44:12.967Z"
        },
        "amount": 240.17
      },
      {
        "reference": "M-14000182",
        "type": "Withdrawal",
        "movementDate": {
          "$date": "2026-06-12T15:44:12.967Z"
        },
        "amount": 163.64
      },
      {
        "reference": "M-14000183",
        "type": "Withdrawal",
        "movementDate": {
          "$date": "2026-06-17T15:44:12.967Z"
        },
        "amount": 31.98
      },
      {
        "reference": "M-14000184",
        "type": "Deposit",
        "movementDate": {
          "$date": "2026-06-22T15:44:12.967Z"
        },
        "amount": 543.37
      }
    ]
  },
  {
    "accountNumber": "10019",
    "openingDate": {
      "$date": "2026-06-17T13:44:12.967Z"
    },
    "client": {
      "id": "18450000171",
      "firstName": "Ana",
      "lastName": "Ramírez",
      "email": "ana.ramírez@gmail.com",
      "phone": "+52 5556941998",
      "address": "Av. El dorado # 70 - 19"
    },
    "accountBalance": 701.17,
    "movements": [
      {
        "reference": "M-14000191",
        "type": "Deposit",
        "movementDate": {
          "$date": "2026-06-17T15:44:12.967Z"
        },
        "amount": 437.28
      },
      {
        "reference": "M-14000192",
        "type": "Deposit",
        "movementDate": {
          "$date": "2026-06-22T15:44:12.967Z"
        },
        "amount": 263.89
      }
    ]
  },
  {
    "accountNumber": "10020",
    "openingDate": {
      "$date": "2026-06-02T13:44:12.967Z"
    },
    "client": {
      "id": "18450000172",
      "firstName": "María",
      "lastName": "Fernández",
      "email": "maría.fernández@gmail.com",
      "phone": "+52 5553716572",
      "address": "Av. El dorado # 20 - 27"
    },
    "accountBalance": 538.34,
    "movements": [
      {
        "reference": "M-14000201",
        "type": "Deposit",
        "movementDate": {
          "$date": "2026-06-02T15:44:12.967Z"
        },
        "amount": 251.95
      },
      {
        "reference": "M-14000202",
        "type": "Withdrawal",
        "movementDate": {
          "$date": "2026-06-07T15:44:12.967Z"
        },
        "amount": 128.58
      },
      {
        "reference": "M-14000203",
        "type": "Deposit",
        "movementDate": {
          "$date": "2026-06-12T15:44:12.967Z"
        },
        "amount": 415.77
      },
      {
        "reference": "M-14000204",
        "type": "Withdrawal",
        "movementDate": {
          "$date": "2026-06-17T15:44:12.967Z"
        },
        "amount": 53.67
      },
      {
        "reference": "M-14000205",
        "type": "Deposit",
        "movementDate": {
          "$date": "2026-06-22T15:44:12.967Z"
        },
        "amount": 52.87
      }
    ]
  },
  {
    "accountNumber": "10021",
    "openingDate": {
      "$date": "2026-06-07T13:44:12.967Z"
    },
    "client": {
      "id": "18450000173",
      "firstName": "Lucía",
      "lastName": "López",
      "email": "lucía.lópez@gmail.com",
      "phone": "+52 5557230365",
      "address": "Av. El dorado # 24 - 79"
    },
    "accountBalance": 334.32,
    "movements": [
      {
        "reference": "M-14000211",
        "type": "Deposit",
        "movementDate": {
          "$date": "2026-06-07T15:44:12.967Z"
        },
        "amount": 1005.93
      },
      {
        "reference": "M-14000212",
        "type": "Deposit",
        "movementDate": {
          "$date": "2026-06-12T15:44:12.967Z"
        },
        "amount": 242.51
      },
      {
        "reference": "M-14000213",
        "type": "Withdrawal",
        "movementDate": {
          "$date": "2026-06-17T15:44:12.967Z"
        },
        "amount": 1026.85
      },
      {
        "reference": "M-14000214",
        "type": "Deposit",
        "movementDate": {
          "$date": "2026-06-22T15:44:12.967Z"
        },
        "amount": 112.73
      }
    ]
  },
  {
    "accountNumber": "10022",
    "openingDate": {
      "$date": "2026-06-17T13:44:12.967Z"
    },
    "client": {
      "id": "18450000174",
      "firstName": "Diego",
      "lastName": "Rodríguez",
      "email": "diego.rodríguez@gmail.com",
      "phone": "+52 5553959716",
      "address": "Av. Insurgentes # 65 - 62"
    },
    "accountBalance": 819.53,
    "movements": [
      {
        "reference": "M-14000221",
        "type": "Deposit",
        "movementDate": {
          "$date": "2026-06-17T15:44:12.967Z"
        },
        "amount": 290.81
      },
      {
        "reference": "M-14000222",
        "type": "Deposit",
        "movementDate": {
          "$date": "2026-06-22T15:44:12.967Z"
        },
        "amount": 528.72
      }
    ]
  },
  {
    "accountNumber": "10023",
    "openingDate": {
      "$date": "2026-06-12T13:44:12.967Z"
    },
    "client": {
      "id": "18450000175",
      "firstName": "María",
      "lastName": "Ramírez",
      "email": "maría.ramírez@gmail.com",
      "phone": "+52 5557292259",
      "address": "Calle 26 # 26 - 67"
    },
    "accountBalance": 722.95,
    "movements": [
      {
        "reference": "M-14000231",
        "type": "Deposit",
        "movementDate": {
          "$date": "2026-06-12T15:44:12.967Z"
        },
        "amount": 1159.79
      },
      {
        "reference": "M-14000232",
        "type": "Withdrawal",
        "movementDate": {
          "$date": "2026-06-17T15:44:12.967Z"
        },
        "amount": 730.26
      },
      {
        "reference": "M-14000233",
        "type": "Deposit",
        "movementDate": {
          "$date": "2026-06-22T15:44:12.967Z"
        },
        "amount": 293.42
      }
    ]
  },
  {
    "accountNumber": "10024",
    "openingDate": {
      "$date": "2026-06-12T13:44:12.967Z"
    },
    "client": {
      "id": "18450000176",
      "firstName": "Diego",
      "lastName": "Martínez",
      "email": "diego.martínez@gmail.com",
      "phone": "+52 5555669004",
      "address": "Av. Insurgentes # 14 - 82"
    },
    "accountBalance": 162.88,
    "movements": [
      {
        "reference": "M-14000241",
        "type": "Deposit",
        "movementDate": {
          "$date": "2026-06-12T15:44:12.967Z"
        },
        "amount": 608.19
      },
      {
        "reference": "M-14000242",
        "type": "Withdrawal",
        "movementDate": {
          "$date": "2026-06-17T15:44:12.967Z"
        },
        "amount": 372.47
      },
      {
        "reference": "M-14000243",
        "type": "Withdrawal",
        "movementDate": {
          "$date": "2026-06-22T15:44:12.967Z"
        },
        "amount": 72.84
      }
    ]
  },
  {
    "accountNumber": "10025",
    "openingDate": {
      "$date": "2026-06-12T13:44:12.967Z"
    },
    "client": {
      "id": "18450000177",
      "firstName": "Ana",
      "lastName": "Ramírez",
      "email": "ana.ramírez@gmail.com",
      "phone": "+52 5556461616",
      "address": "Carrera 7 # 80 - 66"
    },
    "accountBalance": 264.07,
    "movements": [
      {
        "reference": "M-14000251",
        "type": "Deposit",
        "movementDate": {
          "$date": "2026-06-12T15:44:12.967Z"
        },
        "amount": 249.12
      },
      {
        "reference": "M-14000252",
        "type": "Deposit",
        "movementDate": {
          "$date": "2026-06-17T15:44:12.967Z"
        },
        "amount": 99.24
      },
      {
        "reference": "M-14000253",
        "type": "Withdrawal",
        "movementDate": {
          "$date": "2026-06-22T15:44:12.967Z"
        },
        "amount": 84.29
      }
    ]
  },
  {
    "accountNumber": "10026",
    "openingDate": {
      "$date": "2026-06-12T13:44:12.967Z"
    },
    "client": {
      "id": "18450000178",
      "firstName": "Pepe",
      "lastName": "Gómez",
      "email": "pepe.gómez@gmail.com",
      "phone": "+52 5557621246",
      "address": "Av. El dorado # 98 - 42"
    },
    "accountBalance": -1.32,
    "movements": [
      {
        "reference": "M-14000261",
        "type": "Deposit",
        "movementDate": {
          "$date": "2026-06-12T15:44:12.967Z"
        },
        "amount": 651.26
      },
      {
        "reference": "M-14000262",
        "type": "Withdrawal",
        "movementDate": {
          "$date": "2026-06-17T15:44:12.967Z"
        },
        "amount": 643.42
      },
      {
        "reference": "M-14000263",
        "type": "Withdrawal",
        "movementDate": {
          "$date": "2026-06-22T15:44:12.967Z"
        },
        "amount": 9.16
      }
    ]
  },
  {
    "accountNumber": "10027",
    "openingDate": {
      "$date": "2026-06-07T13:44:12.967Z"
    },
    "client": {
      "id": "18450000179",
      "firstName": "Luis",
      "lastName": "Gómez",
      "email": "luis.gómez@gmail.com",
      "phone": "+52 5555091818",
      "address": "Av. Vitacura # 19 - 52"
    },
    "accountBalance": 428.59,
    "movements": [
      {
        "reference": "M-14000271",
        "type": "Deposit",
        "movementDate": {
          "$date": "2026-06-07T15:44:12.967Z"
        },
        "amount": 960.56
      },
      {
        "reference": "M-14000272",
        "type": "Withdrawal",
        "movementDate": {
          "$date": "2026-06-12T15:44:12.967Z"
        },
        "amount": 446.38
      },
      {
        "reference": "M-14000273",
        "type": "Deposit",
        "movementDate": {
          "$date": "2026-06-17T15:44:12.967Z"
        },
        "amount": 201.03
      },
      {
        "reference": "M-14000274",
        "type": "Withdrawal",
        "movementDate": {
          "$date": "2026-06-22T15:44:12.967Z"
        },
        "amount": 286.62
      }
    ]
  },
  {
    "accountNumber": "10028",
    "openingDate": {
      "$date": "2026-06-17T13:44:12.967Z"
    },
    "client": {
      "id": "18450000180",
      "firstName": "Carlos",
      "lastName": "Gómez",
      "email": "carlos.gómez@gmail.com",
      "phone": "+52 5551043337",
      "address": "Av. Insurgentes # 39 - 84"
    },
    "accountBalance": 582.94,
    "movements": [
      {
        "reference": "M-14000281",
        "type": "Deposit",
        "movementDate": {
          "$date": "2026-06-17T15:44:12.967Z"
        },
        "amount": 454.35
      },
      {
        "reference": "M-14000282",
        "type": "Deposit",
        "movementDate": {
          "$date": "2026-06-22T15:44:12.967Z"
        },
        "amount": 128.59
      }
    ]
  },
  {
    "accountNumber": "10029",
    "openingDate": {
      "$date": "2026-06-07T13:44:12.967Z"
    },
    "client": {
      "id": "18450000181",
      "firstName": "Sofia",
      "lastName": "Rodríguez",
      "email": "sofia.rodríguez@gmail.com",
      "phone": "+52 5556309715",
      "address": "Paseo de la Reforma # 37 - 47"
    },
    "accountBalance": 431.12,
    "movements": [
      {
        "reference": "M-14000291",
        "type": "Deposit",
        "movementDate": {
          "$date": "2026-06-07T15:44:12.967Z"
        },
        "amount": 576.95
      },
      {
        "reference": "M-14000292",
        "type": "Deposit",
        "movementDate": {
          "$date": "2026-06-12T15:44:12.967Z"
        },
        "amount": 119.51
      },
      {
        "reference": "M-14000293",
        "type": "Deposit",
        "movementDate": {
          "$date": "2026-06-17T15:44:12.967Z"
        },
        "amount": 382.36
      },
      {
        "reference": "M-14000294",
        "type": "Withdrawal",
        "movementDate": {
          "$date": "2026-06-22T15:44:12.967Z"
        },
        "amount": 647.7
      }
    ]
  },
  {
    "accountNumber": "10030",
    "openingDate": {
      "$date": "2026-06-02T13:44:12.967Z"
    },
    "client": {
      "id": "18450000182",
      "firstName": "Luis",
      "lastName": "Torres",
      "email": "luis.torres@gmail.com",
      "phone": "+52 5555543952",
      "address": "Paseo de la Reforma # 58 - 38"
    },
    "accountBalance": 447.92,
    "movements": [
      {
        "reference": "M-14000301",
        "type": "Deposit",
        "movementDate": {
          "$date": "2026-06-02T15:44:12.967Z"
        },
        "amount": 722.99
      },
      {
        "reference": "M-14000302",
        "type": "Withdrawal",
        "movementDate": {
          "$date": "2026-06-07T15:44:12.967Z"
        },
        "amount": 113.44
      },
      {
        "reference": "M-14000303",
        "type": "Withdrawal",
        "movementDate": {
          "$date": "2026-06-12T15:44:12.967Z"
        },
        "amount": 447.27
      },
      {
        "reference": "M-14000304",
        "type": "Withdrawal",
        "movementDate": {
          "$date": "2026-06-17T15:44:12.967Z"
        },
        "amount": 31.06
      },
      {
        "reference": "M-14000305",
        "type": "Deposit",
        "movementDate": {
          "$date": "2026-06-22T15:44:12.967Z"
        },
        "amount": 316.7
      }
    ]
  },
  {
    "accountNumber": "10031",
    "openingDate": {
      "$date": "2026-06-17T13:44:12.967Z"
    },
    "client": {
      "id": "18450000183",
      "firstName": "María",
      "lastName": "Martínez",
      "email": "maría.martínez@gmail.com",
      "phone": "+52 5552221283",
      "address": "Av. Vitacura # 20 - 79"
    },
    "accountBalance": 135.7,
    "movements": [
      {
        "reference": "M-14000311",
        "type": "Deposit",
        "movementDate": {
          "$date": "2026-06-17T15:44:12.967Z"
        },
        "amount": 291.77
      },
      {
        "reference": "M-14000312",
        "type": "Withdrawal",
        "movementDate": {
          "$date": "2026-06-22T15:44:12.967Z"
        },
        "amount": 156.07
      }
    ]
  },
  {
    "accountNumber": "10032",
    "openingDate": {
      "$date": "2026-06-12T13:44:12.967Z"
    },
    "client": {
      "id": "18450000184",
      "firstName": "Diego",
      "lastName": "López",
      "email": "diego.lópez@gmail.com",
      "phone": "+52 5553695865",
      "address": "Av. Insurgentes # 29 - 24"
    },
    "accountBalance": 819.45,
    "movements": [
      {
        "reference": "M-14000321",
        "type": "Deposit",
        "movementDate": {
          "$date": "2026-06-12T15:44:12.967Z"
        },
        "amount": 403.99
      },
      {
        "reference": "M-14000322",
        "type": "Deposit",
        "movementDate": {
          "$date": "2026-06-17T15:44:12.967Z"
        },
        "amount": 116.7
      },
      {
        "reference": "M-14000323",
        "type": "Deposit",
        "movementDate": {
          "$date": "2026-06-22T15:44:12.967Z"
        },
        "amount": 298.76
      }
    ]
  },
  {
    "accountNumber": "10033",
    "openingDate": {
      "$date": "2026-06-02T13:44:12.967Z"
    },
    "client": {
      "id": "18450000185",
      "firstName": "Lucía",
      "lastName": "López",
      "email": "lucía.lópez@gmail.com",
      "phone": "+52 5553833144",
      "address": "Carrera 7 # 80 - 67"
    },
    "accountBalance": 640.41,
    "movements": [
      {
        "reference": "M-14000331",
        "type": "Deposit",
        "movementDate": {
          "$date": "2026-06-02T15:44:12.967Z"
        },
        "amount": 550.93
      },
      {
        "reference": "M-14000332",
        "type": "Deposit",
        "movementDate": {
          "$date": "2026-06-07T15:44:12.967Z"
        },
        "amount": 449.11
      },
      {
        "reference": "M-14000333",
        "type": "Withdrawal",
        "movementDate": {
          "$date": "2026-06-12T15:44:12.967Z"
        },
        "amount": 389.07
      },
      {
        "reference": "M-14000334",
        "type": "Withdrawal",
        "movementDate": {
          "$date": "2026-06-17T15:44:12.967Z"
        },
        "amount": 404.32
      },
      {
        "reference": "M-14000335",
        "type": "Deposit",
        "movementDate": {
          "$date": "2026-06-22T15:44:12.967Z"
        },
        "amount": 433.76
      }
    ]
  },
  {
    "accountNumber": "10034",
    "openingDate": {
      "$date": "2026-06-07T13:44:12.967Z"
    },
    "client": {
      "id": "18450000186",
      "firstName": "María",
      "lastName": "Gómez",
      "email": "maría.gómez@gmail.com",
      "phone": "+52 5552262795",
      "address": "Calle 26 # 90 - 61"
    },
    "accountBalance": 36.5,
    "movements": [
      {
        "reference": "M-14000341",
        "type": "Deposit",
        "movementDate": {
          "$date": "2026-06-07T15:44:12.967Z"
        },
        "amount": 254.3
      },
      {
        "reference": "M-14000342",
        "type": "Deposit",
        "movementDate": {
          "$date": "2026-06-12T15:44:12.967Z"
        },
        "amount": 351.85
      },
      {
        "reference": "M-14000343",
        "type": "Deposit",
        "movementDate": {
          "$date": "2026-06-17T15:44:12.967Z"
        },
        "amount": 204.7
      },
      {
        "reference": "M-14000344",
        "type": "Withdrawal",
        "movementDate": {
          "$date": "2026-06-22T15:44:12.967Z"
        },
        "amount": 774.35
      }
    ]
  },
  {
    "accountNumber": "10035",
    "openingDate": {
      "$date": "2026-06-12T13:44:12.967Z"
    },
    "client": {
      "id": "18450000187",
      "firstName": "Sofia",
      "lastName": "Pérez",
      "email": "sofia.pérez@gmail.com",
      "phone": "+52 5559676151",
      "address": "Av. Vitacura # 42 - 21"
    },
    "accountBalance": 829.08,
    "movements": [
      {
        "reference": "M-14000351",
        "type": "Deposit",
        "movementDate": {
          "$date": "2026-06-12T15:44:12.967Z"
        },
        "amount": 913.63
      },
      {
        "reference": "M-14000352",
        "type": "Withdrawal",
        "movementDate": {
          "$date": "2026-06-17T15:44:12.967Z"
        },
        "amount": 178.19
      },
      {
        "reference": "M-14000353",
        "type": "Deposit",
        "movementDate": {
          "$date": "2026-06-22T15:44:12.967Z"
        },
        "amount": 93.64
      }
    ]
  },
  {
    "accountNumber": "10036",
    "openingDate": {
      "$date": "2026-06-07T13:44:12.967Z"
    },
    "client": {
      "id": "18450000188",
      "firstName": "Pepe",
      "lastName": "Martínez",
      "email": "pepe.martínez@gmail.com",
      "phone": "+52 5557288073",
      "address": "Av. Vitacura # 60 - 38"
    },
    "accountBalance": 241.49,
    "movements": [
      {
        "reference": "M-14000361",
        "type": "Deposit",
        "movementDate": {
          "$date": "2026-06-07T15:44:12.967Z"
        },
        "amount": 600.12
      },
      {
        "reference": "M-14000362",
        "type": "Withdrawal",
        "movementDate": {
          "$date": "2026-06-12T15:44:12.967Z"
        },
        "amount": 337.25
      },
      {
        "reference": "M-14000363",
        "type": "Deposit",
        "movementDate": {
          "$date": "2026-06-17T15:44:12.967Z"
        },
        "amount": 258.44
      },
      {
        "reference": "M-14000364",
        "type": "Withdrawal",
        "movementDate": {
          "$date": "2026-06-22T15:44:12.967Z"
        },
        "amount": 279.82
      }
    ]
  },
  {
    "accountNumber": "10037",
    "openingDate": {
      "$date": "2026-06-07T13:44:12.967Z"
    },
    "client": {
      "id": "18450000189",
      "firstName": "Pepe",
      "lastName": "Ramírez",
      "email": "pepe.ramírez@gmail.com",
      "phone": "+52 5551613361",
      "address": "Av. El dorado # 89 - 75"
    },
    "accountBalance": 141.88,
    "movements": [
      {
        "reference": "M-14000371",
        "type": "Deposit",
        "movementDate": {
          "$date": "2026-06-07T15:44:12.967Z"
        },
        "amount": 313.31
      },
      {
        "reference": "M-14000372",
        "type": "Withdrawal",
        "movementDate": {
          "$date": "2026-06-12T15:44:12.967Z"
        },
        "amount": 106.44
      },
      {
        "reference": "M-14000373",
        "type": "Deposit",
        "movementDate": {
          "$date": "2026-06-17T15:44:12.967Z"
        },
        "amount": 494.3
      },
      {
        "reference": "M-14000374",
        "type": "Withdrawal",
        "movementDate": {
          "$date": "2026-06-22T15:44:12.967Z"
        },
        "amount": 559.29
      }
    ]
  },
  {
    "accountNumber": "10038",
    "openingDate": {
      "$date": "2026-06-02T13:44:12.967Z"
    },
    "client": {
      "id": "18450000190",
      "firstName": "Luis",
      "lastName": "Fernández",
      "email": "luis.fernández@gmail.com",
      "phone": "+52 5555246121",
      "address": "Av. Vitacura # 11 - 11"
    },
    "accountBalance": 1167.16,
    "movements": [
      {
        "reference": "M-14000381",
        "type": "Deposit",
        "movementDate": {
          "$date": "2026-06-02T15:44:12.967Z"
        },
        "amount": 365.93
      },
      {
        "reference": "M-14000382",
        "type": "Deposit",
        "movementDate": {
          "$date": "2026-06-07T15:44:12.967Z"
        },
        "amount": 269.87
      },
      {
        "reference": "M-14000383",
        "type": "Withdrawal",
        "movementDate": {
          "$date": "2026-06-12T15:44:12.967Z"
        },
        "amount": 21.04
      },
      {
        "reference": "M-14000384",
        "type": "Deposit",
        "movementDate": {
          "$date": "2026-06-17T15:44:12.967Z"
        },
        "amount": 119.12
      },
      {
        "reference": "M-14000385",
        "type": "Deposit",
        "movementDate": {
          "$date": "2026-06-22T15:44:12.967Z"
        },
        "amount": 433.28
      }
    ]
  },
  {
    "accountNumber": "10039",
    "openingDate": {
      "$date": "2026-06-07T13:44:12.967Z"
    },
    "client": {
      "id": "18450000191",
      "firstName": "Elena",
      "lastName": "Gómez",
      "email": "elena.gómez@gmail.com",
      "phone": "+52 5556254962",
      "address": "Calle 26 # 21 - 88"
    },
    "accountBalance": 738.69,
    "movements": [
      {
        "reference": "M-14000391",
        "type": "Deposit",
        "movementDate": {
          "$date": "2026-06-07T15:44:12.967Z"
        },
        "amount": 803.8
      },
      {
        "reference": "M-14000392",
        "type": "Withdrawal",
        "movementDate": {
          "$date": "2026-06-12T15:44:12.967Z"
        },
        "amount": 366.4
      },
      {
        "reference": "M-14000393",
        "type": "Withdrawal",
        "movementDate": {
          "$date": "2026-06-17T15:44:12.967Z"
        },
        "amount": 77.66
      },
      {
        "reference": "M-14000394",
        "type": "Deposit",
        "movementDate": {
          "$date": "2026-06-22T15:44:12.967Z"
        },
        "amount": 378.95
      }
    ]
  },
  {
    "accountNumber": "10040",
    "openingDate": {
      "$date": "2026-06-17T13:44:12.967Z"
    },
    "client": {
      "id": "18450000192",
      "firstName": "Luis",
      "lastName": "Gómez",
      "email": "luis.gómez@gmail.com",
      "phone": "+52 5555697007",
      "address": "Av. El dorado # 67 - 22"
    },
    "accountBalance": 58.27,
    "movements": [
      {
        "reference": "M-14000401",
        "type": "Deposit",
        "movementDate": {
          "$date": "2026-06-17T15:44:12.967Z"
        },
        "amount": 279.4
      },
      {
        "reference": "M-14000402",
        "type": "Withdrawal",
        "movementDate": {
          "$date": "2026-06-22T15:44:12.967Z"
        },
        "amount": 221.13
      }
    ]
  },
  {
    "accountNumber": "10041",
    "openingDate": {
      "$date": "2026-06-17T13:44:12.967Z"
    },
    "client": {
      "id": "18450000193",
      "firstName": "Lucía",
      "lastName": "Fernández",
      "email": "lucía.fernández@gmail.com",
      "phone": "+52 5552730891",
      "address": "Av. Insurgentes # 93 - 32"
    },
    "accountBalance": 29.69,
    "movements": [
      {
        "reference": "M-14000411",
        "type": "Deposit",
        "movementDate": {
          "$date": "2026-06-17T15:44:12.967Z"
        },
        "amount": 444.85
      },
      {
        "reference": "M-14000412",
        "type": "Withdrawal",
        "movementDate": {
          "$date": "2026-06-22T15:44:12.967Z"
        },
        "amount": 415.16
      }
    ]
  },
  {
    "accountNumber": "10042",
    "openingDate": {
      "$date": "2026-06-02T13:44:12.967Z"
    },
    "client": {
      "id": "18450000194",
      "firstName": "Luis",
      "lastName": "Torres",
      "email": "luis.torres@gmail.com",
      "phone": "+52 5555804398",
      "address": "Av. Vitacura # 61 - 31"
    },
    "accountBalance": 1957.77,
    "movements": [
      {
        "reference": "M-14000421",
        "type": "Deposit",
        "movementDate": {
          "$date": "2026-06-02T15:44:12.967Z"
        },
        "amount": 756.98
      },
      {
        "reference": "M-14000422",
        "type": "Withdrawal",
        "movementDate": {
          "$date": "2026-06-07T15:44:12.967Z"
        },
        "amount": 62.94
      },
      {
        "reference": "M-14000423",
        "type": "Deposit",
        "movementDate": {
          "$date": "2026-06-12T15:44:12.967Z"
        },
        "amount": 500.32
      },
      {
        "reference": "M-14000424",
        "type": "Deposit",
        "movementDate": {
          "$date": "2026-06-17T15:44:12.967Z"
        },
        "amount": 309.42
      },
      {
        "reference": "M-14000425",
        "type": "Deposit",
        "movementDate": {
          "$date": "2026-06-22T15:44:12.967Z"
        },
        "amount": 453.99
      }
    ]
  },
  {
    "accountNumber": "10043",
    "openingDate": {
      "$date": "2026-06-02T13:44:12.967Z"
    },
    "client": {
      "id": "18450000195",
      "firstName": "María",
      "lastName": "Martínez",
      "email": "maría.martínez@gmail.com",
      "phone": "+52 5551360592",
      "address": "Av. Insurgentes # 84 - 45"
    },
    "accountBalance": 1059.09,
    "movements": [
      {
        "reference": "M-14000431",
        "type": "Deposit",
        "movementDate": {
          "$date": "2026-06-02T15:44:12.967Z"
        },
        "amount": 276.45
      },
      {
        "reference": "M-14000432",
        "type": "Deposit",
        "movementDate": {
          "$date": "2026-06-07T15:44:12.967Z"
        },
        "amount": 337.56
      },
      {
        "reference": "M-14000433",
        "type": "Withdrawal",
        "movementDate": {
          "$date": "2026-06-12T15:44:12.967Z"
        },
        "amount": 56.54
      },
      {
        "reference": "M-14000434",
        "type": "Deposit",
        "movementDate": {
          "$date": "2026-06-17T15:44:12.967Z"
        },
        "amount": 408.27
      },
      {
        "reference": "M-14000435",
        "type": "Deposit",
        "movementDate": {
          "$date": "2026-06-22T15:44:12.967Z"
        },
        "amount": 93.35
      }
    ]
  },
  {
    "accountNumber": "10044",
    "openingDate": {
      "$date": "2026-06-02T13:44:12.967Z"
    },
    "client": {
      "id": "18450000196",
      "firstName": "Ana",
      "lastName": "Ramírez",
      "email": "ana.ramírez@gmail.com",
      "phone": "+52 5554880015",
      "address": "Av. El dorado # 84 - 78"
    },
    "accountBalance": 56.44,
    "movements": [
      {
        "reference": "M-14000441",
        "type": "Deposit",
        "movementDate": {
          "$date": "2026-06-02T15:44:12.967Z"
        },
        "amount": 653.13
      },
      {
        "reference": "M-14000442",
        "type": "Withdrawal",
        "movementDate": {
          "$date": "2026-06-07T15:44:12.967Z"
        },
        "amount": 525.32
      },
      {
        "reference": "M-14000443",
        "type": "Withdrawal",
        "movementDate": {
          "$date": "2026-06-12T15:44:12.967Z"
        },
        "amount": 116.09
      },
      {
        "reference": "M-14000444",
        "type": "Withdrawal",
        "movementDate": {
          "$date": "2026-06-17T15:44:12.967Z"
        },
        "amount": 11.71
      },
      {
        "reference": "M-14000445",
        "type": "Deposit",
        "movementDate": {
          "$date": "2026-06-22T15:44:12.967Z"
        },
        "amount": 56.43
      }
    ]
  },
  {
    "accountNumber": "10045",
    "openingDate": {
      "$date": "2026-06-02T13:44:12.967Z"
    },
    "client": {
      "id": "18450000197",
      "firstName": "María",
      "lastName": "Rodríguez",
      "email": "maría.rodríguez@gmail.com",
      "phone": "+52 5556649128",
      "address": "Av. Insurgentes # 44 - 61"
    },
    "accountBalance": 743.87,
    "movements": [
      {
        "reference": "M-14000451",
        "type": "Deposit",
        "movementDate": {
          "$date": "2026-06-02T15:44:12.967Z"
        },
        "amount": 749.21
      },
      {
        "reference": "M-14000452",
        "type": "Deposit",
        "movementDate": {
          "$date": "2026-06-07T15:44:12.967Z"
        },
        "amount": 261.75
      },
      {
        "reference": "M-14000453",
        "type": "Withdrawal",
        "movementDate": {
          "$date": "2026-06-12T15:44:12.967Z"
        },
        "amount": 896.01
      },
      {
        "reference": "M-14000454",
        "type": "Deposit",
        "movementDate": {
          "$date": "2026-06-17T15:44:12.967Z"
        },
        "amount": 97.11
      },
      {
        "reference": "M-14000455",
        "type": "Deposit",
        "movementDate": {
          "$date": "2026-06-22T15:44:12.967Z"
        },
        "amount": 531.81
      }
    ]
  },
  {
    "accountNumber": "10046",
    "openingDate": {
      "$date": "2026-06-12T13:44:12.967Z"
    },
    "client": {
      "id": "18450000198",
      "firstName": "Sofia",
      "lastName": "López",
      "email": "sofia.lópez@gmail.com",
      "phone": "+52 5558157262",
      "address": "Av. Insurgentes # 48 - 9"
    },
    "accountBalance": 637.24,
    "movements": [
      {
        "reference": "M-14000461",
        "type": "Deposit",
        "movementDate": {
          "$date": "2026-06-12T15:44:12.967Z"
        },
        "amount": 958.91
      },
      {
        "reference": "M-14000462",
        "type": "Withdrawal",
        "movementDate": {
          "$date": "2026-06-17T15:44:12.967Z"
        },
        "amount": 676.95
      },
      {
        "reference": "M-14000463",
        "type": "Deposit",
        "movementDate": {
          "$date": "2026-06-22T15:44:12.967Z"
        },
        "amount": 355.28
      }
    ]
  },
  {
    "accountNumber": "10047",
    "openingDate": {
      "$date": "2026-06-02T13:44:12.967Z"
    },
    "client": {
      "id": "18450000199",
      "firstName": "Sofia",
      "lastName": "Ramírez",
      "email": "sofia.ramírez@gmail.com",
      "phone": "+52 5554264642",
      "address": "Av. El dorado # 81 - 11"
    },
    "accountBalance": 2196.84,
    "movements": [
      {
        "reference": "M-14000471",
        "type": "Deposit",
        "movementDate": {
          "$date": "2026-06-02T15:44:12.967Z"
        },
        "amount": 955.47
      },
      {
        "reference": "M-14000472",
        "type": "Deposit",
        "movementDate": {
          "$date": "2026-06-07T15:44:12.967Z"
        },
        "amount": 541.38
      },
      {
        "reference": "M-14000473",
        "type": "Deposit",
        "movementDate": {
          "$date": "2026-06-12T15:44:12.967Z"
        },
        "amount": 395.3
      },
      {
        "reference": "M-14000474",
        "type": "Deposit",
        "movementDate": {
          "$date": "2026-06-17T15:44:12.967Z"
        },
        "amount": 226.23
      },
      {
        "reference": "M-14000475",
        "type": "Deposit",
        "movementDate": {
          "$date": "2026-06-22T15:44:12.967Z"
        },
        "amount": 78.46
      }
    ]
  },
  {
    "accountNumber": "10048",
    "openingDate": {
      "$date": "2026-06-12T13:44:12.967Z"
    },
    "client": {
      "id": "18450000200",
      "firstName": "Luis",
      "lastName": "Sánchez",
      "email": "luis.sánchez@gmail.com",
      "phone": "+52 5551686625",
      "address": "Calle 26 # 75 - 10"
    },
    "accountBalance": 162.71,
    "movements": [
      {
        "reference": "M-14000481",
        "type": "Deposit",
        "movementDate": {
          "$date": "2026-06-12T15:44:12.967Z"
        },
        "amount": 807.27
      },
      {
        "reference": "M-14000482",
        "type": "Withdrawal",
        "movementDate": {
          "$date": "2026-06-17T15:44:12.967Z"
        },
        "amount": 286.26
      },
      {
        "reference": "M-14000483",
        "type": "Withdrawal",
        "movementDate": {
          "$date": "2026-06-22T15:44:12.967Z"
        },
        "amount": 358.3
      }
    ]
  },
  {
    "accountNumber": "10049",
    "openingDate": {
      "$date": "2026-06-02T13:44:12.967Z"
    },
    "client": {
      "id": "18450000201",
      "firstName": "Luis",
      "lastName": "Martínez",
      "email": "luis.martínez@gmail.com",
      "phone": "+52 5555517404",
      "address": "Av. El dorado # 59 - 46"
    },
    "accountBalance": 1259.89,
    "movements": [
      {
        "reference": "M-14000491",
        "type": "Deposit",
        "movementDate": {
          "$date": "2026-06-02T15:44:12.967Z"
        },
        "amount": 674.18
      },
      {
        "reference": "M-14000492",
        "type": "Withdrawal",
        "movementDate": {
          "$date": "2026-06-07T15:44:12.967Z"
        },
        "amount": 49.27
      },
      {
        "reference": "M-14000493",
        "type": "Deposit",
        "movementDate": {
          "$date": "2026-06-12T15:44:12.967Z"
        },
        "amount": 134.36
      },
      {
        "reference": "M-14000494",
        "type": "Deposit",
        "movementDate": {
          "$date": "2026-06-17T15:44:12.967Z"
        },
        "amount": 205.32
      },
      {
        "reference": "M-14000495",
        "type": "Deposit",
        "movementDate": {
          "$date": "2026-06-22T15:44:12.967Z"
        },
        "amount": 295.3
      }
    ]
  },
  {
    "accountNumber": "10050",
    "openingDate": {
      "$date": "2026-06-07T13:44:12.967Z"
    },
    "client": {
      "id": "18450000202",
      "firstName": "María",
      "lastName": "López",
      "email": "maría.lópez@gmail.com",
      "phone": "+52 5552151410",
      "address": "Av. Insurgentes # 98 - 55"
    },
    "accountBalance": 28.29,
    "movements": [
      {
        "reference": "M-14000501",
        "type": "Deposit",
        "movementDate": {
          "$date": "2026-06-07T15:44:12.967Z"
        },
        "amount": 254.07
      },
      {
        "reference": "M-14000502",
        "type": "Withdrawal",
        "movementDate": {
          "$date": "2026-06-12T15:44:12.967Z"
        },
        "amount": 85.92
      },
      {
        "reference": "M-14000503",
        "type": "Withdrawal",
        "movementDate": {
          "$date": "2026-06-17T15:44:12.967Z"
        },
        "amount": 127.45
      },
      {
        "reference": "M-14000504",
        "type": "Withdrawal",
        "movementDate": {
          "$date": "2026-06-22T15:44:12.967Z"
        },
        "amount": 12.41
      }
    ]
  }]);

  //para actualizar
  //set permite ejecutar una actualizacion en los campos donde se le digan 

  db.accounts.updateMany({}, {
    $set: {
        active: true
    }
  });


  db.accounts.find({},{accountNumber:1, accountBalance:1, active:1})

  db.accounts.updateMany({}, {
    $rename: { active: "accountActive" }
  });

  db.accounts.find({ accountNumber: {$eq: "10017" }}, // filtro
    {                                                 // operacion
        $set : {accountBalance : 0 , accountActive: false},
        $push: {
            movements : {
                    "reference": "M-14001504",
                    "type": "Withdrawal",
                    "movementDate": {
                      "$date": "2026-06-22T18:44:12.967Z"
                    },
                    "amount": 427.84
            }
            }
        }
  );

  db.accounts.find({
    accountNumber: { $eq: "10017" }},
    {
    accountBalance: 1,
    accountActive: 1,
    movements: 1
    }
);


db.accounts.find({
    accountNumber: { $eq: "10017" }},
    {
    $set: { accountBalance: 427.84, accountActive: true, },
    $pop: {movements: 1}
    }
);


db.accounts.updateOne({_id: ObjectId("6a396d525cfb00aab67acde3")},
    { $set: { "client.firstName": "Maria Lorena" }},
    // { $set: { cliente: {firstName: "Maria Lorena"}}}

);

db.accounts.updateOne({ accountNumber: "10051" },                          // filtro
    { $set: { client: { firstName: "Jennifer", lastName: "Morales" } } },  // operacion
    { upsert: true }                                                       // opciones
);


//ejemplo de borrar
db.accounts.deleteOne(
    {accountNumber: "10051"},
    {_id: ObjectId("6a342351d3ea2470e49e3d0d")},

      { upsert: true },
      { multi: true },
      { justOne: true ,
        collation: {
          locale: "es",
          strength: 2
      
        }
      },
      { hint: { accountNumber: 1 } },
      { session: mySession },
      { writeConcern: { w: "majority" } },
      { bypassDocumentValidation: true }
  
);

db.acounts.find(
    { "client.firstName": "Maria" },
    { "client.firstName": 1, "client.email": 1 }
)
