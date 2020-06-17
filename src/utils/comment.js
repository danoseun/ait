/* eslint-disable valid-jsdoc */
import model from '../database/models';

/** get comment function
*/
export const getCommentById = async (id) => {
  try {
    const Matter = model.Comment.findOne({
      where: { id },
    });
    return Matter;
  } catch (error) {
    throw error;
  }
};
