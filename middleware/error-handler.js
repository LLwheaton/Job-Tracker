// Handle errors that happen in the existing routes
const errorHandlerMiddleware = (err, req, res, next) => {
    console.log(err);
    res.status(500).json({msg:'There was an error'});
}

export default errorHandlerMiddleware