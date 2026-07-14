Taller: Desnormalización de una Base de Datos Relacional a MongoDB

Una empresa dedicada al alquiler de vehículos administra su información mediante una base de datos relacional. El sistema almacena:
Clientes, Vehículos, Reservas y Detalles de servicios adicionales. 
El objetivo del proyecto es pasar el script SQL a MongoDB 

Actividades a Desarrollar Parte 1:  análisis del modelo relacional
		Claves Primarias (Primary Keys):
    • clientes: id_cliente 
    • vehiculos: id_vehiculo 
    • servicios: id_servicio 
    • reservas: id_reserva 
    • reserva_servicios: id_detalle

		Claves Foráneas (Foreign Keys):
	En reservas: 
    • id_cliente 
    • id_vehiculo. 
	En reserva_servicios: 
    • id_reserva 
    • id_servicio


Relaciones Uno a Muchos:
Un cliente puede tener muchas reservas, un vehículo puede estar en muchas reservas.
Tablas Puente (Many-to-Many): 
La tabla reserva_servicios: rompe la relación muchos a muchos entre reservas y servicios, permitiendo así asociar diferentes servicios adicionales a una misma reserva con una cantidad específica.
Parte 2: Diseño del Modelo Desnormalizado para MongoDB
Información Embebida: datos esenciales del cliente, del vehículo y el listado de servicios comprados. Esto evitara hacer consultas secundarias al renderizar la reserva. 
Información Duplicada: se duplicarán datos dinámicos del cliente como el nombre y teléfono)y del vehículo como la marca, modelo, placa. Se aceptara esta duplicación porque cambia con muy poca frecuencia. 
Información por Referencia: mantendremos los identificadores originales como id_cliente e id_vehiculo dentro del documento por si en el futuro se requiere cruzar datos con una colección maestra de auditoría. 
Snapshot Histórico: los campos valor_dia del vehículo y valor del servicio deben congelarse dentro del documento de la reserva en el momento de la creación. Si el precio de lista general cambia mañana, el precio acordado en los contratos antiguos no debe alterarse.
Parte 3: Construcción de la Colección reservas
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

Parte 4: Inserción de Datos
Escribir un script de inserción que registre mínimo tres reservas diferentes. Cada documento contara con los siguientes bloques de una manera coherente:
    • Cliente: Datos de contacto e identificación del cliente.
    • Vehículo: Características, placa y categoría del vehículo rentado
    • Servicios: Array de servicios adicionales adquiridos con sus cantidades correspondientes.
    • Totales: Atributos calculados de forma explícita (Subtotales, Valor Total de la Reserva)
    • Fechas: Fecha de inicio y fin estructuradas correctamente en formato de fecha ISODate.
    • Estado: Estado actual del ciclo de vida de la reserva (ej. Activa, Finalizada, Cancelada).

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
subtotal_servicios: 85000.00, // (25,000 * 1 + 60,000 * 1)
valor_total: 1125000.00 // Subtotal vehículo + servicios (Superior a $500.000)
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
subtotal_vehiculo: 360000.00, // (180,000 * 2 días)
subtotal_servicios: 35000.00, // (35,000 * 1)
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
subtotal_servicios: 25000.00, // (25,000 * 1)
valor_total: 1325000.00
}
}
]);

Parte 5: Implementación de Consultas
1. Buscar todas las reservas correspondientes a un cliente específico 
db.reservas.find({ "cliente.documento": "10980001" });

2. Buscar todas las reservas cuyo estado actual sea "Activa"
db.reservas.find({ estado: "Activa" });

3. Buscar reservas cuyo vehículo asignado pertenezca a la categoría "SUV"
db.reservas.find({ "vehiculo.categoria": "SUV" });

4. Buscar reservas cuyo valor total acumulado sea estrictamente superior a $500.000
db.reservas.find({ "totales.valor_total": { $gt: 500000 } });

5. Buscar todas las reservas que hayan incluido de manera específica el servicio adicional de "GPS"
db.reservas.find({ "servicios_adicionales.nombre": "GPS" });

Parte 6: Cuestionario de Análisis Técnico
1. ¿Qué ventajas arquitectónicas y de rendimiento tiene este modelo respecto al modelo relacional original?
    •  La principal ventaja es la velocidad de lectura (Baja Latencia). En el modelo relacional, para mostrar una reserva completa, el servidor debe hacer 4 operaciones JOIN cruzando 5 tablas en disco, lo que consume mucha CPU. En MongoDB, al estar toda la información unificada dentro del mismo documento, se resuelve con una sola operación de lectura en memoria, reduciendo el impacto en el servidor. 
2. ¿Qué información quedó explícitamente duplicada a lo largo del proceso de desnormalización?
    •  Quedaron duplicados los datos informativos del cliente (nombre, documento, telefono, ciudad), las características fijas del vehículo (placa, marca, modelo, categoria) y los nombres de los servicios adicionales (GPS, Silla para bebé, etc.) a lo largo de los diferentes documentos de reservas de la colección. 
3. ¿Por qué esta duplicación de datos se considera aceptable bajo el paradigma NoSQL y las reglas de negocio de este sistema?
    • Se considera aceptable porque en los sistemas modernos el almacenamiento en disco es muy económico, mientras que el tiempo de procesamiento de los servidores (CPU) es costoso. Dado que una reserva es un documento histórico que se consulta frecuentemente pero cambia muy poco una vez creado, priorizar lecturas rápidas sacrificando un poco de espacio en disco es un trato sumamente eficiente. 
4. ¿Qué impacto y acciones de actualización ocurrirían en la base de datos si un cliente cambia su nombre en su perfil maestro?
        ◦ Impacto: Provoca una inconsistencia temporal entre la colección maestra de clientes y el historial de reservas. 
        ◦ Acciones: Si la regla de negocio exige que las reservas viejas mantengan el nombre original por motivos legales/de facturación, no se hace nada. Si se requiere actualizar el nombre en todo el historial, se debe ejecutar un comando updateMany filtrando por el id_cliente para renombrarlo en todas sus reservas asociadas. 
5. ¿Qué ocurriría en el sistema si la empresa decide cambiar el precio de lista por día de un vehículo? ¿Cómo afecta a las reservas pasadas y futuras?
        ◦ Reservas Pasadas: No se ven afectadas en absoluto. Gracias al patrón de Snapshot Historical, el precio original quedó congelado en el campo valor_dia_congelado, protegiendo la integridad financiera de los contratos viejos. 
        ◦ Reservas Futuras: Al momento de crear una nueva reserva, el sistema consultará el nuevo precio de lista de la colección de vehículos y lo guardará actualizado en el nuevo documento. 
6. ¿Qué ocurriría si cambia el precio base de un servicio adicional (como GPS)? ¿Cómo se maneja este cambio en los documentos ya existentes?
    • Se maneja exactamente igual que con los vehículos. Los documentos ya existentes no sufren modificaciones porque el precio pactado quedó resguardado en el campo valor_congelado dentro del arreglo de servicios. Esto evita que se alteren retroactivamente las cuentas y los balances de los servicios que el cliente ya pagó y disfrutó en su momento. 
