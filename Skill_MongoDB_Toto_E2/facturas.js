//db para facturas


db.facturas.insertMany([
    {
    no_fact: 100001,
    fecha: "2025-01-02",
    cliente: "Toto Cruz",
    id_cliente: 1045000125,
    asesor: "Eduin Salas",
    id_asesor: 100,
    observaciones: "Pago contra entrega",
    items: [
        { item: 1, cod_producto: 1001, nombre_producto: "Arroz", val_unitario: 2500, iva: 10, cantidad: 2, bodega: "B01", subtotal: 5500 },

        { item: 2, cod_producto: 1005, nombre_producto: "Aceite", val_unitario: 1500, iva: 19, cantidad: 1, bodega: "B02", subtotal: 1785 },

        { item: 3, cod_producto: 1015, nombre_producto: "Sal", val_unitario: 500, iva: 5, cantidad: 1, bodega: "B01", subtotal: 525 },

        { item: 4, cod_producto: 1051, nombre_producto: "Café", val_unitario: 1000, iva: 19, cantidad: 1, bodega: "B03", subtotal: 1190 }
    
        ],
        total_Bruto: 8000,
        total_iva: 1000,
        total_descuento: 0,
        total: 9000
    }
]);
