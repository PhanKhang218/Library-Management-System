const db = require("../database/dbConnector");

// API trả về danh sách các cuốn sách trong bảng "books"
exports.Book = async (req, res) => {
  try {
    // Lấy dữ liệu từ bảng "books" kết nối với bảng "authors" và "categories"
    const sql = `
      SELECT Book.*, Author.name AS author_name, Category.name AS category_name
      FROM Book
      LEFT JOIN Author ON Book.author_id = Author.id
      LEFT JOIN Category ON Book.category_id = Category.id
    `;
    const [rows, fields] = await db.promise().execute(sql);

    // Trả về kết quả cho client
    res.json(rows);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Lỗi server" });
  }
};
