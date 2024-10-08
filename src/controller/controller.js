const httpStatus = require("http-status");
const { getData } = require("../service/service");

const handleGetInfo = async (req, res) => {
  try {
    const response = await getData();
    if (response) res.status(httpStatus.OK).json(response);
    else res.status(httpStatus.NOT_FOUND).json({ msg: "Data not found" });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({ error: error });
  }
};

module.exports = { handleGetInfo };
