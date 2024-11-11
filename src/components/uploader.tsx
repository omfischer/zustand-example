"use client";
import React from 'react';
import { useFileActionStore } from '~/store';

const FileUploader = () => {
  // const [selectedFile, setSelectedFile] = useState(null);
  const { isUploading, setIsUploading } = useFileActionStore();

  return (
    <div style={{ padding: '20px', border: '1px solid #ddd', width: '300px' }}>
      <h3>File Uploader</h3>
      {/* <input type="file" onChange={handleFileChange} /> */}
      <button className="bg-blue-400 p-2 rounded-full m-2" onClick={() => setIsUploading(!isUploading)}>
        {isUploading ? 'Uploading...' : 'Upload'}
      </button>
    </div>
  );
};

export default FileUploader;