const { postService } = require('../services/index');

const createPost = async (req, res) => {
try {
  const { title, content, categoryIds } = req.body;
  const post = await postService.createPost({ title, content, categoryIds });
  return res.status(201).json(post);
} catch (error) {
  return res.status(500).json({
    message: 'Erro ao pegar todos os posts do banco',
    error: error.message,
  });
}
};

const getPosts = async (req, res) => {
  try {
    const posts = await postService.getPosts();
    return res.status(200).json(posts);
} catch (error) {
  return res.status(500).json({
    message: 'Erro ao salvar o post no banco',
    error: error.message,
  });
}
};

const getPostById = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await postService.getPostById(id);
    if (!post) return res.status(404).json({ message: 'Post does not exist' });
    
    return res.status(200).json(post);
  } catch (error) {
    return res.status(500).json({
      message: 'Erro ao pesquisar o post no banco',
      error: error.message,
    });
  }
};

module.exports = {
  createPost,
  getPosts,
  getPostById,
};