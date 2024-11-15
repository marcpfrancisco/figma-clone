import Tooltip from '@/components/Tooltip';
import {
  FileIcon,
  ImageIcon,
  LayoutIcon,
  PaletteIcon,
  SettingsIcon,
  SquarePlusIcon,
} from 'lucide-react';
import Image from 'next/image';

const LeftPanel = () => {
  return (
    <section className="flex flex-col bg-white border-t border-gray-200 min-w-[227px] sticky left-0 h-full max-sm:hidden select-none overflow-y-auto pb-20">
      <nav className="flex flex-1 flex-col gap-y-4 pt-18">
        <button className="group relative rounded-xl p-2 text-blue-600 bg-gray-100">
          <SquarePlusIcon className="h-6 w-6 stroke-current" />
          <Tooltip>
            Add elements <span className="text-gray-400">(A)</span>
          </Tooltip>
        </button>

        <a
          className="group rounded-xl relative p-2 text-gray-400 hover:bg-gray-100"
          href="#"
        >
          <LayoutIcon className="h-6 w-6 stroke-current" />
          <Tooltip>
            Layouts <span className="text-gray-400">(L)</span>
          </Tooltip>
        </a>

        <a
          className="group rounded-xl relative p-2 text-gray-400 hover:bg-gray-100"
          href="#"
        >
          <PaletteIcon className="h-6 w-6 stroke-current" />
          <Tooltip>
            Themes <span className="text-gray-400">(P)</span>
          </Tooltip>
        </a>

        <a
          className="group rounded-xl relative p-2 text-gray-400 hover:bg-gray-100"
          href="#"
        >
          <FileIcon className="h-6 w-6 stroke-current" />
          <Tooltip>
            Assets <span className="text-gray-400">(F)</span>
          </Tooltip>
        </a>

        <a
          className="group rounded-xl relative p-2 text-gray-400 hover:bg-gray-100"
          href="#"
        >
          <ImageIcon className="h-6 w-6 stroke-current" />
          <Tooltip>
            Images <span className="text-gray-400">(I)</span>
          </Tooltip>
        </a>
      </nav>
      <div className="flex flex-col items-center pb-4">
        <button className="group rounded-xl relative p-2 text-gray-400 hover:bg-gray-100">
          <SettingsIcon className="h-6 w-6 stroke-current" />
          <Tooltip>
            Settings <span className="text-gray-400">(I)</span>
          </Tooltip>
        </button>

        <button className="pt-2 rounded-full overflow-hidden">
          <Image
            className="h-10 w-10 object-cover"
            src="/globe.svg"
            width={10}
            height={10}
            alt="Avatar"
          />
        </button>
      </div>
    </section>
  );
};

export default LeftPanel;
