module.exports = (err, req, res, next) => {
  console.error("❌ Server Error:", err.stack);
  res.status(500).json({
    status: "error",
    message: "Internal Server Error"
  });
};
