const BookService = require('../services/book.service')

const getAll = async (_req, res) => {
  try {
    const books = await BookService.getAll();
    return res.status(200).json(books);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await BookService.getById(id);
    if (!book) return res.status(404).json({ message: 'Book not found' });
    return res.status(200).json(book);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

const create = async (req, res) => {
  try {
    const { title, author, pageQuantity } = req.body;
    if (!title || !author || !pageQuantity) {
      return res.status(400).json({ message: 'Invalid data' });
    }
    const book = await BookService.create(title, author, pageQuantity);
    return res.status(201).json(book);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

}

module.exports = {
  getAll,
  getById,
  create,
};