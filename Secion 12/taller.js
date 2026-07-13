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