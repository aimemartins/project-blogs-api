const { createToken } = require('../auth/auth');
const { userService } = require('../services/index');

const createUser = async (req, res) => {
  try {
    const { displayName, email, password, image } = req.body;

    const getEmail = await userService.getByEmail(email);
    if (getEmail) {
      return res.status(409).json({ message: 'User already registered' });
    }

    const user = await userService.createUser({ displayName, email, password, image });

    if (!user) throw Error;

    const { password: _, ...userWithoutPassword } = user.dataValues;

    const token = createToken(userWithoutPassword);

    return res.status(201).json({ token });
  } catch (error) {
    res.status(500).json({
      message: 'Erro ao salvar o usuário no banco',
      error: error.message,
    });
  }
};

module.exports = {
  createUser,
};