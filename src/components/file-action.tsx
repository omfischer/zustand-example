"use client";
import React from 'react';
import { useFileActionStore } from '~/store';

const FileAction = () => {
  const { isUploading } = useFileActionStore();

  return (
    <div style={{ padding: '20px', border: '1px solid #ddd', width: '300px' }}>
      <div>
        {isUploading ? 'Files are being uploaded' : ''}
      </div>
    </div>
  );
};

export default FileAction;