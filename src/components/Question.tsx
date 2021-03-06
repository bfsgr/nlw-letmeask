import '../styles/question.scss';
import { ReactNode } from 'react';

type QuestionProps = {
  children?: ReactNode;
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  isAnswered?: boolean;
  isHighlighted?: boolean;
};

export function Question({
  content,
  author,
  children = '',
  isHighlighted = false,
  isAnswered = false,
}: QuestionProps) {
  return (
    <div
      className={`question ${isAnswered ? 'answered' : ''} ${
        isHighlighted && !isAnswered ? 'highlighted' : ''
      }`}
    >
      <p>{content}</p>
      <footer>
        <div className="user-info">
          <img src={author.avatar} alt={author.name} />
          <span>{author.name}</span>
        </div>
        <div>{children}</div>
      </footer>
    </div>
  );
}
