
db.tipo_de_categoria.insertMany([
    {
    _id: 1,
    nombre: "VIP",
    descuento: 10
    },
    {
    _id: 2,
    nombre: "Normal",
    descuento: 0
    }
]);

db.cliente.insertMany([
    {
    codigo: 1,
    _id_tipo_categoria: 1,
    nombre: "Toto" ,
    apellido: "Cruz",
    nick: "CruzToto",
    email: "cruz@mail.com",
    telefono: "1234-5678"
    }
]);


db.tarjeta.insertMany([
    {
    numero: 123456789,
    codigo_usuario: 1,
    fecha_expedicion: ISODate("2026-07-08"),
    estado: "Activa"
    }
]);

db.movimientos.insertMany([
    {
    _id: 12345678,
    codigo_cliente: 1,
    id_tipo_movimiento: 1,
    id_funcion: 1
    }
]);

db.tipo_movimiento.insertMany([
    {
    _id: 1,
    nombre: "Compra"
    }
]); 

db.funcion.insertMany([{
    _id: 1,
    id_pelicula: 1,
    id_lugar: 1,
    fecha_hora_inicio: ISODate("2026-07-08"),
    fecha_hora_fin: ISODate("2026-07-08")
}]);


db.pelicula.insertMany([
    {
    _id: 1,
    titulo: "Titanic",
    genero: "Drama",
    duracion: 120,
    sinopsis: "Historia de amor en un barco."
    }

]);

db.boleta.insertMany([
    {
        id_movimiento: 12345678,
        id_asiento: 12345678,
        fecha_adquisicion: ISODate("2026-07-08")

    }
]);

db.asiento.insertMany([
    {
        _id: 12345678,
        id_lugar: 12345678,
        id_tipo_de_fila: 12345678,
        codigo: 1
    }
]);

db.lugar.insertMany([
    {
        _id: 1,
        nombre: "Toto",
        precio: 45
    }
]);

db.tipo_de_fila.insertMany([
    {
        _id: 1,
        incremento: 10
    }

]);

