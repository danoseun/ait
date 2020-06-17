import model from '../database/models';

export const findUserByUsername = (username) => model.User.findOne({ where: { username } });
