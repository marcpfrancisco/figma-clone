import {
  ChevronDownIcon,
  ChevronLeftIcon,
  EyeIcon,
  MonitorIcon,
  PackageIcon,
  RatioIcon,
  SmartphoneIcon,
} from 'lucide-react';

const Navbar = () => {
  return (
    <>
      <header className="flex h-18 items-center justify-center gap-x-6 border-b border-gray-200 bg-white px-8">
        <button className="flex items-center justify-center rounded-xl bg-gray-100 p-2">
          <ChevronLeftIcon className="h-6 w-6 stroke-current text-gray-400" />
        </button>

        <button className="flex flex-col rounded-xl border border-gray-200 bg-gray-100 px-6 py-2">
          <div className="flex items-center gap-x-2">
            <span className="text-sm font-semibold">
              Page: Homepage - Welcome
            </span>
            <ChevronDownIcon className="h-5 w-5 stroke-current text-gray-400" />
          </div>
          <div className="text-xs text-gray-400">
            https://domain.example.com/
          </div>
        </button>

        <button className="flex items-center justify-center gap-x-2 rounded-xl bg-gray-100 px-4 py-2">
          <EyeIcon className="w-6 h-6 stroke-current text-gray-400" />
          <span className="text-sm font-semibold leading-6">Preview</span>
        </button>

        <div className="h-full w-px bg-gray-200" />
        <div className="flex items-center gap-x-3">
          {/* Desktop  */}
          <button className="rounded-xl p-2 text-blue-600 bg-gray-100">
            <MonitorIcon className="h-6 w-6 stroke-current" />
          </button>

          {/* Mobile  */}
          <button className="rounded-xl p-2 text-gray-400 hover:bg-gray-100">
            <SmartphoneIcon className="h-6 w-6 stroke-current" />
          </button>

          {/* Tablet Landscape  */}
          <button className="rounded-xl p-2 text-gray-400 hover:bg-gray-100">
            <RatioIcon className="h-6 w-6 stroke-current" />
          </button>
        </div>
        <div className="h-full w-px bg-gray-200" />

        <button className="flex items-center justify-center gap-x-3 rounded-xl bg-gray-100 px-4 py-2">
          <span className="text-sm font-semibold leading-6">960 PX / 100%</span>
          <ChevronDownIcon className="h-6 w-6 stroke-current text-gray-400" />
        </button>

        <button className="flex item-center justify-center rounded-xl bg-gray-100 p-2">
          <PackageIcon className="h-6 w-6 stroke-current text-gray-400" />
        </button>
      </header>
    </>
  );
};

export default Navbar;
