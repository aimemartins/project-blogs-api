const { verifyToken } = require('../auth/auth');

const validateToken = (req, res, next) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      return res.status(401).json({ message: 'Não autorizado' });
    }

    const payload = verifyToken(authorization);

    /* o req é um objeto que trasita no endpoint. Quando colocamos os middlewares um atras do 
    outro o req é o mesmo. Eu posso esconder dentro do req um objeto ) */

    req.data = payload.data;
    next();
  } catch (error) {
    return res.status(500).json({ message: 'Erro ao acessar o endpoint', error: error.message });
  }
};

module.exports = validateToken;