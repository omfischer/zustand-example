"use client";
import Link from "next/link";
import FileAction from "~/components/file-action";
import FileUploader from "~/components/uploader";
import { useFileActionStore } from "~/store";

export default function HomePage() {
  const { isUploading } = useFileActionStore()
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
        </h1>
        <h3 className="text-2xl font-bold">File actions</h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">

          <div>
            <FileUploader />
          </div>
          <div className={`${isUploading ? "block" : "hidden"}`}>
            <FileAction />
          </div>
        </div>
      </div>
    </main>
  );
}
