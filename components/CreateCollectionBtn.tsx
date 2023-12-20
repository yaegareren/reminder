"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import Sidebar from "./Sidebar";
function CreateCollectionBtn() {
  const [open, setOpen] = useState(false);
  const handleOpenChange = (open: boolean) => setOpen(open);

  return (
    <div className="w-full rounded-md">
      <Button
        variant={"outline"}
        className="dark:text-white w-full dark:bg-neutral-950 bg-white border border-blue-600 p-[2px]"
        onClick={() => setOpen(true)}
      >
        <span className="text-blue-500"> Create Collection </span>
      </Button>
      <Sidebar open={open} onOpenChange={handleOpenChange} />
    </div>
  );
}

export default CreateCollectionBtn;
