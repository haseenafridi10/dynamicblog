'use client'
import React, { useState } from "react";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";

interface Comment {
  id: string;
  author: string;
  text: string;
}

interface CommentSectionProps {
  postId: string;
}

const CommentSection = ({ postId }: CommentSectionProps) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [editingCommentId, setEditingCommentId] = useState<string | null>(null);

  // Handle adding a new comment
  const handleAddComment = () => {
    if (newComment.trim() && authorName.trim()) {
      const newCommentObj: Comment = {
        id: new Date().toISOString(),
        author: authorName,
        text: newComment,
      };
      setComments([...comments, newCommentObj]);
      setNewComment("");
      setAuthorName("");
    }
  };

  // Handle editing a comment
  const handleEditComment = (commentID: string) => {
    const commentToEdit = comments.find((comment) => comment.id === commentID);
    if (commentToEdit) {
      setNewComment(commentToEdit.text);
      setAuthorName(commentToEdit.author);
      setEditingCommentId(commentID);
    }
  };

  // Handle saving the edited comment
  const handleSaveEditedComment = () => {
    if (newComment.trim() && authorName.trim() && editingCommentId) {
      const updatedComments = comments.map((comment) =>
        comment.id === editingCommentId
          ? { ...comment, text: newComment, author: authorName }
          : comment
      );
      setComments(updatedComments); // Update the state with the new comment list
      setNewComment("");
      setAuthorName("");
      setEditingCommentId(null); // Reset editing state
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      {/* Comments Header */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold">Comments</h2>
        <div className="mt-4 space-y-4">
          {comments.length > 0 ? (
            comments.map((comment) => (
              <Card key={comment.id} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-4 space-y-2">
                  <div className="font-semibold text-lg">{comment.author}</div>
                  <p className="text-gray-700">{comment.text}</p>
                  <Button
                    onClick={() => handleEditComment(comment.id)}
                    className="text-blue-600 hover:text-blue-800 mt-2"
                  >
                    Edit
                  </Button>
                </CardContent>
              </Card>
            ))
          ) : (
            <p className="text-slate-400">No Comments yet</p>
          )}
        </div>
      </div>

      {/* Comment Form */}
      <div className="mt-6 space-y-4">
        {/* Author Name Input */}
        <Input
          type="text"
          value={authorName}
          onChange={(e) => setAuthorName(e.target.value)}
          placeholder="Your Name"
          className="w-full mb-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        {/* Comment Input */}
        <Input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a Comment"
          className="w-full mb-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        {/* Submit / Save Button */}
        <Button
          onClick={editingCommentId ? handleSaveEditedComment : handleAddComment}
          className="w-full px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {editingCommentId ? "Save" : "Submit"}
        </Button>
      </div>
    </div>
  );
}

export default CommentSection;
