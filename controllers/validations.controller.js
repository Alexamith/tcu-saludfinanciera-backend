const validationStatus400 = async (res, msg) => {
  return res.json({
    ok: false,
    msg: msg,
    status:400
  });
};
const validationStatus401 = async (res, msg) => {
  return res.status(401).json({
    ok: false,
    msg: msg,
  });
};
const validationStatus201 = async (res, msg, data) => {
  res.status(201).json({
    ok: true,
    msg: msg,
  });
};

const validationStatus201WithData = async (res, data) => {
  res.status(201).json({
    ok: true,
    data
  });
};
const validationStatus500 = async (res) => {
  res.status(500).json({
    ok: false,
    msg: "something went wrong",
  });
};

module.exports = {
  validationStatus400,
  validationStatus401,
  validationStatus201,
  validationStatus201WithData,
  validationStatus500
};