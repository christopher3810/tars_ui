import React from 'react';

interface ArticleProps {
  title: string;
  author: string;
  date: string;
  content: string;
}

const Article: React.FC<ArticleProps> = ({ title, author, date, content }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <p className="text-sm text-gray-600 mb-4">By {author} on {date}</p>
      <div className="prose">
        {content}
      </div>
    </div>
  );
};

export default Article;
