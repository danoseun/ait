/* eslint-disable valid-jsdoc */
import 'dotenv/config';
import model from '../database/models';
import { convertParamToNumber } from '../utils/paramconverter';
import { getCommentById } from '../utils/comment';

/**
 * commentController
 */
export const commentController = {
  /**
       * create new comment
       */

  async addComment(req, res) {
    try {
      const commentObj = {
        body: req.body.body,
        userId: req.authData.payload.id
      };
      const newComment = await model.Comment.create(commentObj);
      return res.status(201).json({
        status: 'created',
        newComment
      });
    } catch (error) {
      return res.status(500).json({
        status: 500,
        error: error.message
      });
    }
  },

  /**
     * get all comments
     */

  async getAllComments(req, res) {
    try {
      const comments = await model.Comment.findAll({
        include: [{
          model: model.Reply,
          as: 'replys'
        }]
      });
      return res.status(200).json({
        status: 'successfully fetched all comments',
        comments
      });
    } catch (error) {
      return res.status(500).json({
        status: 500,
        error: error.message
      });
    }
  },

  /**
   * update comment
   */
  async updateComment(req, res) {
    let { commentId } = req.params;
    commentId = convertParamToNumber(commentId);
    try {
      const comment = await getCommentById(commentId);

      if (!comment) {
        return res.status(404).json({
          message: 'comment unavailable'
        });
      }

      comment.body = req.body.body || comment.body;
      const updatedComment = await comment.save();
      return res.status(200).json({
        status: 'update successful',
        updatedComment
      });
    } catch (error) {
      return res.status(500).json({
        status: 500,
        error: error.message
      });
    }
  },

  /**
   * delete comment
   */
  async deleteComment(req, res) {
    let { commentId } = req.params;
    commentId = convertParamToNumber(commentId);

    try {
      const comment = await getCommentById(commentId);

      if (!comment) {
        return res.status(404).json({
          message: 'comment unavailable'
        });
      }

      await comment.destroy();
      return res.status(204).json({
        status: 'comment deleted'
      });
    } catch (error) {
      return res.status(500).json({
        status: 500,
        error: error.message
      });
    }
  }
};
