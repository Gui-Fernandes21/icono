const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const { user, staff, student } = prisma;

const authMutations = {
  signup: {
    async resolve(parent, { data }) {
      const { email, name, secret } = data;

      if (!email || !name || !secret) {
        throw new Error(
          "Please provide every piece of information about the new User."
        );
      }

      const hashedPassword = await bcrypt.hash(secret, 12);

      const createdUser = await user.create({
        data: {
          email,
          name,
          secret: hashedPassword,
        },
      });

      const token = jwt.sign(
        { data: { createdUser } },
        "Icon Jiu Jitsu Brussels",
        { expiresIn: "1h" }
      );

      return { token, userId: createdUser.id };
    },
  },

  login: {
    async resolve(parent, { data }) {
      const { email, secret } = data;

      
      if (!email || !secret) return new Error("Please provide every piece of information about the new User.");
      
      const userMatch = await user.findUnique({ where: { email } });
      
      if (!userMatch) return new Error("There is no user with this email registered!");
      
      const passwordMatch = await bcrypt.compare(secret, userMatch.secret);
      
      if (!passwordMatch) return new Error("Please enter the correct password!");
      
      const token = jwt.sign(
        { data: { userMatch } },
        "Icon Jiu Jitsu Brussels",
        { expiresIn: "1h" }
      );

      return { token, userId: userMatch.id };
    },
  },
};

module.exports = { authMutations };
