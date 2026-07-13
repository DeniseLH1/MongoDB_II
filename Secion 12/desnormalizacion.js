//guia de desnormalizcion primero creamos una base de datos llamada
//campus_pedidos
//luego una coleccion llamada pedidos 

//crear un documento e insertar esto
{
    "fechaPedido":{
      "$date": "2026-07-13"
    },
    "estado":"pendiente",
    "cliente":{
      "idCliente":1,
      "nombre":"Ana Torres",
      "email":"ana.torres@example.com",
      "telefono":"3001112233",
      "ciudad":"Bogota",
      "direccion":"Cra 10 #20-30"
    },
   "items":[
     {
       "idProducto":1,
       "nombre": "Teclado Mecanico",
       "categoria":"Perifericos",
       "precioUnitario": 250000,
       "cantidad":1,
       "subtotal":250000
     },
     {
       "idProducto":2,
       "nombre": "Mouse inalambrico",
       "categoria":"Perifericos",
       "precioUnitario": 90000,
       "cantidad":2,
       "subtotal":180000
     },
     {
       "idProducto":3,
       "nombre": "Monitor 24 pulgadas",
       "categoria":"Pantallas",
       "precioUnitario": 680000,
       "cantidad":1,
       "subtotal":680000
     }
   ],
    "totales":{
      "subTotal":1110000,
      "descuento":20000,
      "impuestoPorcentaje":19,
      "impuesto":207100,
      "total":1297100
    }
  }