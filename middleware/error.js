const errorHnadling = (err, req, res, next) => {
  console.log("m2");
  res.status(err.status || 500).json({
    error: {
      message: err.message || "Internal Server Error",
    },
  });
};

module.exports = errorHnadling;
