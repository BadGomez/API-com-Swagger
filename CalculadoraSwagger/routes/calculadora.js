const express = require("express")
const router = express.Router()

router.get("/soma/:a/:b", (req, res) => {
    const c = parseInt(req.params.a) + parseInt(req.params.b);
    //console.log(req.params.a , req.params.b , c)
    res.send(c.toString());
})

router.get("/subtracao/:a/:b", (req, res) => {
    const c = parseInt(req.params.a) - parseInt(req.params.b);
    //console.log(req.params.a , req.params.b , c)
    res.send(c.toString());
})

router.get("/multiplicacao/:a/:b", (req, res) => {
    const c = parseInt(req.params.a) * parseInt(req.params.b);
    //console.log(req.params.a , req.params.b , c)
    res.send(c.toString());
})

router.get("/divisao/:a/:b", (req, res) => {
    const c = parseInt(req.params.a) / parseInt(req.params.b);
    //console.log(req.params.a , req.params.b , c)
    res.send(c.toString());
})

/**
 * @swagger
 * components:
 *   schemas:
 *     Calculadora:
 *       type: object
 *       required:
 *         - a
 *         - b
 *       properties:
 *         a:
 *           type: number
 *           description: Primeiro Número
 *         b:
 *           type: number
 *           description: Segundo Número
 */

/**
 * @swagger
 * /calculadora/soma/{a}/{b}:
 *   get:
 *     parameters:
 *       - in: path
 *         name: a
 *         schema:
 *           type: number
 *         required: true
 *       - in: path
 *         name: b
 *         schema:
 *           type: number
 *         required: true
 *     responses:
 *       200:
 *         description: soma
 *         content:
 *           application/json:
 *             schema:
 *             type: object
 *             items:
 *               $ref: '#/components/schemas/Calculadora'
 *       404:
 *         description: erro
 *           
 */

/**
 * @swagger
 * /calculadora/subtracao/{a}/{b}:
 *   get:
 *     parameters:
 *       - in: path
 *         name: a
 *         schema:
 *           type: number
 *         required: true
 *       - in: path
 *         name: b
 *         schema:
 *           type: number
 *         required: true
 *     responses:
 *       200:
 *         description: subtração
 *         content:
 *           application/json:
 *             schema:
 *             type: object
 *             items:
 *               $ref: '#/components/schemas/Calculadora'
 *       404:
 *         description: erro
 *           
 */

/**
 * @swagger
 * /calculadora/multiplicacao/{a}/{b}:
 *   get:
 *     parameters:
 *       - in: path
 *         name: a
 *         schema:
 *           type: number
 *         required: true
 *       - in: path
 *         name: b
 *         schema:
 *           type: number
 *         required: true
 *     responses:
 *       200:
 *         description: multiplicação
 *         content:
 *           application/json:
 *             schema:
 *             type: object
 *             items:
 *               $ref: '#/components/schemas/Calculadora'
 *       404:
 *         description: erro
 *           
 */

/**
 * @swagger
 * /calculadora/divisao/{a}/{b}:
 *   get:
 *     parameters:
 *       - in: path
 *         name: a
 *         schema:
 *           type: number
 *         required: true
 *       - in: path
 *         name: b
 *         schema:
 *           type: number
 *         required: true
 *     responses:
 *       200:
 *         description: divisao
 *         content:
 *           application/json:
 *             schema:
 *             type: object
 *             items:
 *               $ref: '#/components/schemas/Calculadora'
 *       404:
 *         description: erro
 *           
 */

 module.exports = router;