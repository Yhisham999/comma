const bcrypt = require("bcrypt");

const enteredPassword = "password123";
const storedHashedPassword =
  "$2b$10$qzwTMcGZyJj5lkYUwIYBeuNp.IO0JGbslyepQII8fv2zp9Gf60dWy"; /

bcrypt.compare(enteredPassword, storedHashedPassword).then((match) => {
  console.log(match ? "Password matches" : "Password mismatch");
});
