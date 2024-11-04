"use client";

import { useEffect } from "react";
import grapesjs from "grapesjs";
import "grapesjs-preset-webpage";

const Editor = () => {
  useEffect(() => {
    const editor = grapesjs.init({
      container: "#gjs",
      plugins: ["grapesjs-preset-webpage"],
      storageManager: {
        type: "remote",
        autosave: true,
        autoload: true,
        stepsBeforeSave: 1,
      },
    });
  }, []);

  return <div id="gjs" style={{ height: "100vh", width: "100%" }} />;
};

export default Editor;
