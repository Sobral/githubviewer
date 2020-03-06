import { FaPlus, FaSpinner } from 'react-icons/fa';
import React from 'react';

export default props => {
  const { loading } = props;

  if (loading) {
    return <FaSpinner color="#FFF" size={14} />;
  }

  return <FaPlus color="#FFF" size={14} />;
};
