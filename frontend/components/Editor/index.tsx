'use client';

import { useEffect, useState } from 'react';

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

import { BlockWithCategory } from '@/types';

const EditorComponent = () => {
  const [editor, setEditor] = useState<Editor | null>(null);

  useEffect(() => {
    const editorInstance = grapesjs.init({
      container: '#gjs',
      height: '100vh',
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
    });

    setEditor(editorInstance);

    // Categorize blocks using the block manager
    const blocks = editorInstance.BlockManager.getAll();
    blocks.forEach((block: BlockWithCategory) => {
      const category = block.get('category');

      if (category === 'Basic') {
        block.set('category', {
          id: 'layout',
          label: 'Layout',
        });
      } else if (category === 'Form') {
        block.set('category', {
          id: 'forms',
          label: 'Forms',
        });
      } else if (category === 'Media') {
        block.set('category', {
          id: 'media',
          label: 'Media',
        });
      }
      // Add additional categories as needed
    });

    // Optionally return a cleanup function here if needed, but do not return JSX
    return () => {
      editorInstance.destroy();
    };
  }, []);

  return <div id="gjs" style={{ height: '100vh', width: '100%' }} />;
};

export default EditorComponent;
