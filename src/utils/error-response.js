export const errorResponse = (res, statuscode, err) => {
  console.log(err)
  
  return res
    .status(statuscode || 500)
    .json({
      statusCode: statuscode,
      message: err || "Internal server error",
      errorType: err.name || "Unknown errorType",
    });
};
