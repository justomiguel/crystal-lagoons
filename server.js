const express = require("express");
const app = express();
const port = 3000;

const lagunas = [
    { id: 1, nombre: "San Alfonso del Mar", ubicacion: "Chile", tamaño: "8 hectáreas", tipo_agua: "Agua de mar", status: "En operación", imagen: "be3df927-6e98-4e9c-87ca-477cc4a29e7e.webp" },
    { id: 2, nombre: "Epperson Lagoon", ubicacion: "EE.UU.", tamaño: "6 hectáreas", tipo_agua: "Agua dulce", status: "En operación", imagen: "777c6303-5afe-46b9-a15c-c9fc50a85675.webp" },
    { id: 3, nombre: "District One Lagoon", ubicacion: "Dubái", tamaño: "10 hectáreas", tipo_agua: "Agua salada", status: "En construcción", imagen: "575707b2-2732-460f-b59f-8621e607a4aa.webp" },
    { id: 4, nombre: "Diamante Lagoon", ubicacion: "México", tamaño: "5 hectáreas", tipo_agua: "Agua dulce", status: "En operación", imagen: "be3df927-6e98-4e9c-87ca-477cc4a29e7e.webp" },
    { id: 5, nombre: "Cabo San Lucas Lagoon", ubicacion: "México", tamaño: "7 hectáreas", tipo_agua: "Agua de mar", status: "En construcción", imagen: "777c6303-5afe-46b9-a15c-c9fc50a85675.webp" },
    { id: 6, nombre: "Bali Lagoon", ubicacion: "Indonesia", tamaño: "9 hectáreas", tipo_agua: "Agua salada", status: "En operación", imagen: "575707b2-2732-460f-b59f-8621e607a4aa.webp" },
    { id: 7, nombre: "Costa del Sol Lagoon", ubicacion: "España", tamaño: "6 hectáreas", tipo_agua: "Agua de mar", status: "En planificación", imagen: "be3df927-6e98-4e9c-87ca-477cc4a29e7e.webp" },
    { id: 8, nombre: "Sydney Lagoon", ubicacion: "Australia", tamaño: "12 hectáreas", tipo_agua: "Agua dulce", status: "En operación", imagen: "777c6303-5afe-46b9-a15c-c9fc50a85675.webp" },
    { id: 9, nombre: "Tokyo Crystal Lagoon", ubicacion: "Japón", tamaño: "5 hectáreas", tipo_agua: "Agua de mar", status: "En construcción", imagen: "575707b2-2732-460f-b59f-8621e607a4aa.webp" },
    { id: 10, nombre: "Rio de Janeiro Lagoon", ubicacion: "Brasil", tamaño: "11 hectáreas", tipo_agua: "Agua dulce", status: "En planificación", imagen: "be3df927-6e98-4e9c-87ca-477cc4a29e7e.webp" },
    { id: 11, nombre: "Maui Lagoon", ubicacion: "Hawái", tamaño: "6 hectáreas", tipo_agua: "Agua salada", status: "En operación", imagen: "777c6303-5afe-46b9-a15c-c9fc50a85675.webp" },
    { id: 12, nombre: "Miami Beach Lagoon", ubicacion: "EE.UU.", tamaño: "8 hectáreas", tipo_agua: "Agua de mar", status: "En construcción", imagen: "575707b2-2732-460f-b59f-8621e607a4aa.webp" },
    { id: 13, nombre: "Cancún Lagoon", ubicacion: "México", tamaño: "10 hectáreas", tipo_agua: "Agua dulce", status: "En operación", imagen: "be3df927-6e98-4e9c-87ca-477cc4a29e7e.webp" },
    { id: 14, nombre: "Dubai Marina Lagoon", ubicacion: "Dubái", tamaño: "7 hectáreas", tipo_agua: "Agua salada", status: "En construcción", imagen: "777c6303-5afe-46b9-a15c-c9fc50a85675.webp" },
    { id: 15, nombre: "Los Angeles Crystal Lagoon", ubicacion: "EE.UU.", tamaño: "9 hectáreas", tipo_agua: "Agua de mar", status: "En operación", imagen: "575707b2-2732-460f-b59f-8621e607a4aa.webp" },
    { id: 16, nombre: "Paris Lagoon", ubicacion: "Francia", tamaño: "4 hectáreas", tipo_agua: "Agua dulce", status: "En planificación", imagen: "be3df927-6e98-4e9c-87ca-477cc4a29e7e.webp" },
    { id: 17, nombre: "Phuket Lagoon", ubicacion: "Tailandia", tamaño: "8 hectáreas", tipo_agua: "Agua salada", status: "En construcción", imagen: "777c6303-5afe-46b9-a15c-c9fc50a85675.webp" },
    { id: 18, nombre: "Toronto Crystal Lagoon", ubicacion: "Canadá", tamaño: "6 hectáreas", tipo_agua: "Agua de mar", status: "En operación", imagen: "575707b2-2732-460f-b59f-8621e607a4aa.webp" },
    { id: 19, nombre: "Cape Town Lagoon", ubicacion: "Sudáfrica", tamaño: "7 hectáreas", tipo_agua: "Agua dulce", status: "En planificación", imagen: "be3df927-6e98-4e9c-87ca-477cc4a29e7e.webp" },
    { id: 20, nombre: "Maldives Crystal Lagoon", ubicacion: "Maldivas", tamaño: "9 hectáreas", tipo_agua: "Agua salada", status: "En operación", imagen: "777c6303-5afe-46b9-a15c-c9fc50a85675.webp" }
];

// Endpoint para obtener todas las lagunas
app.get("/lagunas", (req, res) => {
    res.json(lagunas);
});

// Endpoint para obtener una laguna por ID
app.get("/lagunas/:id", (req, res) => {
    const laguna = lagunas.find(l => l.id === parseInt(req.params.id));
    if (laguna) {
        res.json(laguna);
    } else {
        res.status(404).json({ mensaje: "Laguna no encontrada" });
    }
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});