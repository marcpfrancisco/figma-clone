'use client';

import { useEffect, useRef, useState } from 'react';

import grapesjs, { Editor } from 'grapesjs';
import gjsPresetBasic from 'grapesjs-blocks-basic';
import gjsPresetBlocksFlexbox from 'grapesjs-blocks-flexbox';
import gjsPresetComponentCountdown from 'grapesjs-component-countdown';
import gjsPresetCustomCode from 'grapesjs-custom-code';
import gjsPresetNavbar from 'grapesjs-navbar';
import gjsPresetExport from 'grapesjs-plugin-export';
import gjsPresetForms from 'grapesjs-plugin-forms';
import gjsPresetNewsLetter from 'grapesjs-preset-newsletter';
import gjsPresetWebpage from 'grapesjs-preset-webpage';
import gjsPresetStyleBg from 'grapesjs-style-bg';
import gjsPresetStyleGradient from 'grapesjs-style-gradient';
import gjsPresetTooltip from 'grapesjs-tooltip';

const EditorComponent = () => {
  const [editor, setEditor] = useState<Editor | null>(null);
  const editorRef = useRef<Editor | null>(null);

  useEffect(() => {
    if (!editorRef.current) {
      const editorInstance = grapesjs.init({
        container: '#gjs',
        height: '100%',
        storageManager: false,
        plugins: [
          gjsPresetWebpage,
          gjsPresetBasic,
          gjsPresetComponentCountdown,
          gjsPresetCustomCode,
          gjsPresetNavbar,
          gjsPresetStyleBg,
          gjsPresetNewsLetter,
          gjsPresetExport,
          gjsPresetStyleGradient,
          gjsPresetBlocksFlexbox,
          gjsPresetForms,
          gjsPresetTooltip,
        ],
        pluginsOpts: {
          gjsPresetWebpage: {},
        },
        blockManager: {
          appendTo: '#blocks',
        },
      });

      const page = localStorage.getItem('Page') || '';
      const savedContent = JSON.parse(page);

      if (savedContent) {
        editorInstance.setComponents(savedContent.components);
      }

      editorRef.current = editorInstance;
      setEditor(editorInstance);
    }

    // Optionally return a cleanup function here if needed, but do not return JSX
    return () => {
      editorRef.current?.destroy();
      editorRef.current = null;
    };
  }, []);

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

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <div className="flex items-center space-x-4 p-4 bg-gray-200">
        {/* Preview button */}
        <button
          onClick={handlePreview}
          className="p-2 bg-blue-500 text-white rounded"
        >
          Preview
        </button>

        {/* Save button */}
        <button
          onClick={handleSave}
          className="p-2 bg-green-500 text-white rounded"
        >
          Save
        </button>
      </div>

      {/* Blocks Panel - fixed width and scrollable */}
      <div className="flex flex-row flex-1">
        <div
          id="blocks"
          className="w-64 overflow-y-auto bg-white"
          style={{
            position: 'fixed',
            left: 0,
            top: '100px', // Starts below the navbar
            height: 'calc(100vh - 100px)', // Height adjusted for navbar
          }}
        >
          <h2 className="text-lg font-medium mb-4   ">Components</h2>
        </div>

        {/* Editor Panel - takes remaining space */}
        <div
          id="gjs"
          className="flex-1 ml-64" // Account for the fixed width of blocks
          style={{ height: '100%' }}
        />
      </div>
    </div>
  );
};

export default EditorComponent;
