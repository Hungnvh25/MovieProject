const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Tạo một danh sách mẫu dữ liệu
const sampleData = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' }
];

// Endpoint API trả về danh sách mẫu dữ liệu
app.get('/api/data', (req, res) => {
  res.json(sampleData);
});

// Khởi chạy server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
