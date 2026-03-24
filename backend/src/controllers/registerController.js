const db = require('../database/db.js');
const bcrypt = require('bcrypt');

async function registerController (req, res) {
    const { nombre, correo, contrasena } = req.body;
    const insert = 'INSERT INTO usuario (nombre, correo, contrasena) values (?, ?, ?)';
    const query = 'SELECT correo FROM usuario where correo = ?';

    try {
        const [ rows ] = await db.query(query, [correo]);
        if (rows.length > 0) {
            return res.status(409).json({msg:'Already registered mail'});
        };

        const hash = await bcrypt.hash(contrasena, 10);
        await db.query(insert, [nombre, correo, hash]);
        return res.status(201).json({msg:'Successfully registed user'});

    } catch (err) {
        return res.status(500).json({msg:'Server error'});
    };
};

module.exports = registerController;