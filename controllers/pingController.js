// Sends pong
exports.pingServer = async (req, res, next) => {
  try {
    res.status(200).json('pong')
  } catch (err) {
    console.trace(err);
    res.status(500).json({ message: err.message })
  }
  next();
};