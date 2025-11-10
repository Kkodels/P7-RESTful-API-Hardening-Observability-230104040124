module.exports = (req, res, next) => {
  const { name, position, salary } = req.body;

  if (!name) {
    return res.status(400).json({ status: "fail", message: "Field 'name' wajib diisi" });
  }

  if (!position) {
    return res.status(400).json({ status: "fail", message: "Field 'position' wajib diisi" });
  }

  if (salary == null) {
    return res.status(400).json({ status: "fail", message: "Field 'salary' wajib diisi" });
  }

  next();
};
