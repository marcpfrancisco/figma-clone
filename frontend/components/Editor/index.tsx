'use client';

import { useEffect, useRef, useState } from 'react';

import grapesjs, { Editor } from 'grapesjs';

const EditorComponent = () => {
  const [editor, setEditor] = useState<Editor | null>(null);
  const editorRef = useRef<Editor | null>(null);

  // useEffect(() => {
  //   if (!editorRef.current) {
  //     const editorInstance = grapesjs.init({
  //       container: '#gjs',
  //       height: '100%',
  //       storageManager: false,
  //       plugins: [],
  //       pluginsOpts: {
  //         gjsPresetWebpage: {},
  //       },
  //       blockManager: {
  //         appendTo: '#blocks',
  //       },
  //     });

  //     const page = localStorage.getItem('Page') || '';
  //     const savedContent = JSON.parse(page);

  //     if (savedContent) {
  //       editorInstance.setComponents(savedContent.components);
  //     }

  //     editorRef.current = editorInstance;
  //     setEditor(editorInstance);
  //   }

  //   // Optionally return a cleanup function here if needed, but do not return JSX
  //   return () => {
  //     editorRef.current?.destroy();
  //     editorRef.current = null;
  //   };
  // }, []);

  // Function to handle preview
  const handlePreview = () => {
    if (editorRef.current) {
      const html = editorRef.current.getHtml(); // Get HTML from editorRef
      const css = editorRef.current.getCss(); // Get CSS from editorRef

      // Open new window for preview
      const previewWindow = window.open('', '_blank');

      // Write the content into the new window
      if (previewWindow) {
        previewWindow.document.open();
        previewWindow.document.write(`
        <html>
          <head>
            <style>${css}</style>
          </head>
          <body>${html}</body>
        </html>
      `);
        previewWindow.document.close();
      }
    }
  };

  // Function to handle save
  const handleSave = () => {
    if (editorRef.current) {
      const components = editorRef.current.getComponents();
      const content = {
        components: components.toJSON(),
      };

      // Store the HTML and CSS in localStorage
      localStorage.setItem('Page', JSON.stringify(content));

      alert('Template saved to local storage!');
    }
  };

  return <></>;
};

export default EditorComponent;
