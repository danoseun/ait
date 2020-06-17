import 'dotenv/config';
import model from '../database/models';
import { hashPassword } from '../utils/password';
import { createToken } from '../middleware/auth';

/**
 * userController
 */
export const userController = {
  /**
     * signup new user
     */

  async registerUser(req, res) {
    try {
      const { username, password } = req.body;

      const hash = hashPassword(password);

      const userObj = { username, password: hash };
      const newUser = await model.User.create(userObj);
      return res.status(201).json({
        status: 'created',
        newUser
      });
    } catch (error) {
      return res.status(500).json({
        status: 500,
        error: error.message
      });
    }
  },

  /**
   * login user
   */

  async loginUser(req, res) {
    const userDetails = req.body;
    delete userDetails.password;
    try {
      const token = createToken(userDetails);
      return res.status(200).json({
        status: 'logged in successfully',
        token
      });
    } catch (error) {
      return res.status(500).json({
        status: 500,
        error: error.message
      });
    }
  }
};
