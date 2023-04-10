const db = require("../database/dbConnector");

exports.BookById = async (req, res) => {
  try {
    const bookId = req.params.id;
    const sql = `
        SELECT Book.*, Author.name AS author_name, Category.name AS category_name
        FROM Book
        LEFT JOIN Author ON Book.author_id = Author.id
        LEFT JOIN Category ON Book.category_id = Category.id
        WHERE Book.id = ?
      `;
    const [rows, fields] = await db.promise().execute(sql, [bookId]);

    if (rows.length === 0) {
      return res.status(404).json({ error: "Không tìm thấy sách" });
    }

    res.json(rows[0]);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Lỗi server" });
  }
};
