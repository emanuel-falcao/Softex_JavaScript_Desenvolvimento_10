const express = require('express');
const router = express.Router();

router.get('/user', (req,res)=>{
    res.send('Lista de Usuarios');
});

router.post('/user', (req,res)=>{
    res.send('Incluir usuario');
});

router.put('/user', (req,res)=>{
    res.send(`Edita o usuário ${req.params.id}`);
});

router.delete('/user', (req,res)=>{
    res.send(`Exclui o usuário ${req.params.id}`);
});

module.exports = router;