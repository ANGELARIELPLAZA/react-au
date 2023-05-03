// Importar dependencias
const jwt = require("jwt-simple");
const moment = require("moment");

// Clave secreta
const secret = "ghp_lWYMim1LRkuw7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MEaG7AXGCeXMUUrXM3WsgbM";

// Crear una funcion para generar tokens
const createToken = (usuario) => {
    const payload = {
        id: usuario._id,
        name: usuario.name,
        email: usuario.email,
        role: usuario.role,
        iat: moment().unix(),
        exp: moment().add(6, "hours").unix()
    };

    // Devolver jwt token codificado
    return jwt.encode(payload, secret);
}


module.exports = {
    secret,
    createToken
}

