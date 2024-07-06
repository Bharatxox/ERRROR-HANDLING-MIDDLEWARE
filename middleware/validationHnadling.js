const validationHandling = (req, res, next) => {
  console.log("m1");
  const { firstName, lastName, email, password, phoneNumber } = req.body;
  if (!/^[A-Z]/.test(firstName)) {
    const error = new Error("First name must start with an uppercase letter.");
    error.status = 400;
    return next(error);
  }
  if (!/^[A-Z]/.test(lastName)) {
    const error = new Error("Last name must start with an uppercase letter.");
    error.status = 400;
    return next(error);
  }
  if (!/@/.test(email)) {
    const error = new Error('Email must contain an "@" symbol.');
    error.status = 400;
    return next(error);
  }
  if (
    !/(?=.*[!@#$%^&*])(?=.*[A-Z])(?=.*\d)[A-Za-z\d!@#$%^&*]{8,}/.test(password)
  ) {
    const error = new Error(
      "Password must contain at least one special character, one uppercase letter, one numeric character, and be at least 8 characters long."
    );
    error.status = 400;
    return next(error);
  }
  if (!/^\d{10,}$/.test(phoneNumber)) {
    const error = new Error(
      "PhoneNumber number must be at least 10 digits long."
    );
    error.status = 400;
    return next(error);
  }
  next();
};

module.exports = validationHandling;
