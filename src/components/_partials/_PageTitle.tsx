import React from 'react';
import './PageTitle.css';

interface PageTitleProps {
  message: string
}

export const PageTitle: React.FC<PageTitleProps> = ({message}) => {
    return (
      <h3 className="page-title">{message}</h3>
    );
}