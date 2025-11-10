exports.success = (res, message, data) => {
  res.json({ status: "success", message, data });
};

exports.fail = (res, message, code = 400) => {
  res.status(code).json({ status: "fail", message });
};
