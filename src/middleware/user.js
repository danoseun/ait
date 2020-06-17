/* eslint-disable prefer-const */
import Validator from 'validatorjs';
import { findUserByUsername } from '../utils/user';
import { comparePassword } from '../utils/password';

/**
 * Validates user properties during creation
 */
export const userValidator = {
  async registerUserValidator(req, res, next) {
    console.log('req', req.body);
    let { username, password } = req.body;

    const rules = {
      username: 'required|min:2',
      password: 'required|min:2',
    };

    const validation = new Validator(req.body, rules);

    if (validation.fails()) {
      return res.status(400).json({
        status: 400,
        error: validation.errors.errors
      });
    }

    username = username.trim();
    try {
      const result = await findUserByUsername(username);
      console.log('use', result);

      if (result === null || result === undefined) {
        req.body.username = username;
        req.body.password = password;
        return next();
      }

      if (result.username === username) {
        return res.status(409).json({
          status: 409,
          error: 'username already exists'
        });
      }
    } catch (error) {
      return res.status(500).json({
        status: 500,
        error: error.message
      });
    }
  },

  async loginUserValidator(req, res, next) {
    let { username, password } = req.body;
    const rules = {
      username: 'required',
      password: 'required'
    };
    const validation = new Validator(req.body, rules);
    if (validation.fails()) {
      return res.status(400).json({
        status: 400,
        error: validation.errors.errors
      });
    }

    username = username.trim();
    let data;
    try {
      const result = await findUserByUsername(username);
      if (result === undefined || result === null) {
        return res.status(404).json({
          status: 404,
          error: 'Username not found'
        });
      }
      const compare = comparePassword(password, result.password);
      if (!compare) {
        return res.status(401).json({
          status: 401,
          error: 'Authentication failed'
        });
      }

      data = result;
    } catch (error) {
      return res.status(500).json({
        status: 500,
        error: error.message
      });
    }
    req.body = data;
    return next();
  }
};
