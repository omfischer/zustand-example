import { create } from "zustand";
import { persist } from "zustand/middleware";

export type FileAction = {
  type: 'move' | 'delete' | 'upload' | 'download';
  isMoving: boolean;      
  isUploading: boolean;   
  isDownloading: boolean; 
  filesCompleted: number; 
  filesFailed: number;    
  filesCount: number;     
  setIsUploading: (isUploading: boolean) => void;
  setIsMoving: (isMoving: boolean) => void;
  setIsDownloading: (isDownloading: boolean) => void;
};

export const useFileActionStore = create<FileAction>()(
  persist(
    (set) => (
      {
        type: 'move',
        isMoving: false,
        isUploading: false,
        isDownloading: false,
        filesCompleted: 0,
        filesFailed: 0,
        filesCount: 0,
        setIsUploading: (isUploading: boolean) => {
          set({isUploading})
        },
        setIsMoving: (isMoving: boolean) => {
          set({isMoving})
        },
        setIsDownloading: (isDownloading: boolean) => {
          set({isDownloading})
        }
      }
    ),
    { name: "file-action-store" }
  )
);
