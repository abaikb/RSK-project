import React from 'react';
import p from './Loader.module.css';

const Loader = () => {
  return (
    <div className={p.loader}>
      <div className={p.loader__spinner}></div>
    </div>
  );
};

export default Loader;
