// Handle errors that happen in the existing routes
const errorHandlerMiddleware = (err, req, res, next) => {
    console.log(err);
    res.status(500).json({msg: err});
}

export default errorHandlerMiddleware