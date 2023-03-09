const { categoryService } = require('../services/index');

const createCategory = async (req, res) => {
  try {
    const { name } = req.body;
    const category = await categoryService.createCategory({ name });
  
    return res.status(201).json(category);
  } catch (error) {
    res.status(500).json({
      message: 'Erro ao salvar a categoria no banco',
      error: error.message,
    });
  }
};

module.exports = {
  createCategory,
};