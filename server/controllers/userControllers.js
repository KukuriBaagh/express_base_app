const authUser = (req, res, next) => {
  res.send('Auth User');
  res.status(200);
};

const registerUser = (req, res, next) => {
  res.status(200).send('Register User');
};

export { authUser, registerUser };
