'use client';

import { useState } from 'react';

export default function CommentForm({ postSlug }: { postSlug: string }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    try {
      // Submit to API
      const response = await fetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify({ name, email, comment, postSlug }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      if (!response.ok) {
        throw new Error('Failed to submit comment');
      }
      
      setIsSubmitted(true);
      // Reset form
      setName('');
      setEmail('');
      setComment('');
    } catch (error) {
      console.error('Error submitting comment:', error);
      setError('There was an error submitting your comment. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="comment-success">
        <p>Thank you for your comment! It will be reviewed and published soon.</p>
        <button 
          onClick={() => setIsSubmitted(false)} 
          className="add-another-button"
        >
          Add Another Comment
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="comment-form">
      <h3>Leave a Comment</h3>
      {error && <p className="error-message">{error}</p>}
      
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="name">Name *</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="form-input"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="email">Email * (will not be published)</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="form-input"
          />
        </div>
      </div>
      
      <div className="form-group">
        <label htmlFor="comment">Comment *</label>
        <textarea
          id="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
          rows={4}
          className="form-textarea"
        />
      </div>
      
      <button 
        type="submit" 
        disabled={isSubmitting} 
        className="submit-button"
      >
        {isSubmitting ? 'Submitting...' : 'Submit Comment'}
      </button>
    </form>
  );
}