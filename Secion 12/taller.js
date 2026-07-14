//Parte 3: Construcción de la Colección reservas
{
    "_id": "objectId",
    "id_reserva": "number",//identificador único de la reserva
    "fecha_inicio": "ISODate",
    "fecha_fin": "ISODate ",
    "estado": "string",
    
    "cliente": {
      "id_cliente": "Number ",
      "nombre": "String",
      "documento": "String",
      "telefono": "String",
      "ciudad": "String"
    },
    
    "vehiculo": {
      "id_vehiculo": "Number",
      "placa": "String ",
      "marca": "String",
      "modelo": "String",
      "categoria": "String",
      "valor_dia_congelado": "Number/Decimal"
    },
    
    "servicios_adicionales": [
      {
        "id_servicio": "Number",
        "nombre": "String",
        "valor_congelado": "Number/Decimal ",//precio del servicio al momento de reservar
        "cantidad": "Number "//cuántos solicitó
      }
    ],
    
    "totales": {
      "subtotal_vehiculo": "Number/Decimal ",//valor_dia_congelado * total de días
      "subtotal_servicios": "Number/Decimal ",//suma de los servicios por su cantidad
      "valor_total": "Number/Decimal "//subtotal_vehiculo + subtotal_servicios
    }
}

//-----------------------------------------------------------------------------------------------------------------
//parte 4
db.reservas.insertMany([
  {
    _id: ObjectId("65e77777f1d234567890aa01"),
    id_reserva: 1,
    fecha_inicio: ISODate("2026-07-01T00:00:00Z"),
    fecha_fin: ISODate("2026-07-05T00:00:00Z"), // 4 días de alquiler
    estado: "Activa",
    cliente: {
      id_cliente: 1,
      nombre: "Carlos Ruiz",
      documento: "10980001",
      telefono: "3105551111",
      ciudad: "Bogotá"
    },
    vehiculo: {
      id_vehiculo: 2,
      placa: "XYZ987",
      marca: "Mazda",
      modelo: "CX5",
      categoria: "SUV",
      valor_dia_congelado: 260000.00
    },
    servicios_adicionales: [
      { id_servicio: 1, nombre: "GPS", valor_congelado: 25000.00, cantidad: 1 },
      { id_servicio: 3, nombre: "Seguro Premium", valor_congelado: 60000.00, cantidad: 1 }
    ],
    totales: {
      subtotal_vehiculo: 1040000.00, // (260,000 * 4 días)
      subtotal_servicios: 85000.00,  // (25,000 * 1 + 60,000 * 1)
      valor_total: 1125000.00        // Subtotal vehículo + servicios (Superior a $500.000)
    }
  },
  {
    _id: ObjectId("65e77777f1d234567890aa02"),
    id_reserva: 2,
    fecha_inicio: ISODate("2026-07-10T00:00:00Z"),
    fecha_fin: ISODate("2026-07-12T00:00:00Z"), // 2 días de alquiler
    estado: "Finalizada",
    cliente: {
      id_cliente: 2,
      nombre: "Laura Gómez",
      documento: "10980002",
      telefono: "3158882222",
      ciudad: "Medellín"
    },
    vehiculo: {
      id_vehiculo: 1,
      placa: "ABC123",
      marca: "Toyota",
      modelo: "Corolla",
      categoria: "Sedán",
      valor_dia_congelado: 180000.00
    },
    servicios_adicionales: [
      { id_servicio: 2, nombre: "Silla para bebé", valor_congelado: 35000.00, cantidad: 1 }
    ],
    totales: {
      subtotal_vehiculo: 360000.00,  // (180,000 * 2 días)
      subtotal_servicios: 35000.00,  // (35,000 * 1)
      valor_total: 395000.00
    }
  },
  {
    _id: ObjectId("65e77777f1d234567890aa03"),
    id_reserva: 3,
    fecha_inicio: ISODate("2026-07-15T00:00:00Z"),
    fecha_fin: ISODate("2026-07-20T00:00:00Z"), // 5 días de alquiler
    estado: "Activa",
    cliente: {
      id_cliente: 1,
      nombre: "Carlos Ruiz",
      documento: "10980001",
      telefono: "3105551111",
      ciudad: "Bogotá"
    },
    vehiculo: {
      id_vehiculo: 2,
      placa: "XYZ987",
      marca: "Mazda",
      modelo: "CX5",
      categoria: "SUV",
      valor_dia_congelado: 260000.00
    },
    servicios_adicionales: [
      { id_servicio: 1, nombre: "GPS", valor_congelado: 25000.00, cantidad: 1 }
    ],
    totales: {
      subtotal_vehiculo: 1300000.00, // (260,000 * 5 días)
      subtotal_servicios: 25000.00,  // (25,000 * 1)
      valor_total: 1325000.00
    }
  }
]);