const { Router } = require("express");
const authController = require("../controllers/auth.controllers");
const authMiddleware = require("../middleware/auth.middleware");

const authRouter = Router();

/**
 * @route POST /api/auth/register
 * @description Register a new user
 * @access Public
 */
authRouter.post("/register", authController.registerUserController);

/**
 * @route POST /api/auth/login
 * @description Login user
 * @access Public
 */
authRouter.post("/login", authController.loginUserController);

/**
 * @route GET/api/auth/logout
 * @description clear token from user cookies and add the token in the blacklist
 @access public 
*/
authRouter.get("/logout", authController.logoutUserController);

/**
 * @route GEt/api/auth/get-me
 * @description get the current logged in user details
 * @access private
 */
authRouter.get(
  "/get-me",
  authMiddleware.authUser,
  authController.getMeController,
);

module.exports = authRouter;
