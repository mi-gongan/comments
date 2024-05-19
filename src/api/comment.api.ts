import { Comment } from "@types";
import api from ".";

const getComments = async () => api.get("/comments");

const getComment = async (id: number) => api.get(`/comments/${id}`);

const writeComment = async (comment: Comment) =>
  api.post("/comments", {
    comment,
  });

const updateComment = async (id: number, content: Pick<Comment, "content">) =>
  api.put(`/comments/${id}`, { content });

const deleteComment = async (id: number) => api.delete(`/comments/${id}`);

const updateCommentDisplay = async (id: number, isDisplayed: boolean) =>
  api.put(`/comments/${id}/display`, { isDisplayed });

const updateCommentsOrder = async (comments: Comment[]) =>
  api.put("/comments/order", { comments });

export const commentApi = {
  getComments,
  getComment,
  writeComment,
  updateComment,
  deleteComment,
  updateCommentDisplay,
  updateCommentsOrder,
};
