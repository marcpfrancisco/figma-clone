import {
  ArrowUpIcon,
  ChevronDownIcon,
  CircleIcon,
  ImageIcon,
  SlashIcon,
  SquareIcon,
  StarIcon,
  TriangleIcon,
} from 'lucide-react';

const ShapesTools = () => {
  return (
    <>
      <div className="relative flex items-center group">
        <div className="flex items-center cursor-pointer" tabIndex={0}>
          <SquareIcon className="h-6 w-6 stroke-current text-gray-400" />
          <span className="flex items-center justify-center hover:bg-gray-100 h-full rounded-xl">
            <ChevronDownIcon className="h-4 w-4 stroke-current text-gray-400 transition-transform group-focus-within:rotate-180" />
          </span>
        </div>

        {/* Popover content */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-white border border-gray-200 shadow-lg rounded-lg p-2 w-32 opacity-0 pointer-events-none transition-opacity duration-150 group-focus-within:opacity-100 group-focus-within:pointer-events-auto z-50">
          <div className="flex flex-col items-center w-full">
            <button className="flex items-center w-full p-2 hover:bg-gray-100 rounded-md">
              <SquareIcon className="h-4 w-4 stroke-current text-blue-600" />
              <span className="text-sm font-medium text-blue-600 ml-2">
                Rectangle
              </span>
            </button>

            <button className="flex items-center w-full p-2 hover:bg-gray-100 rounded-md">
              <SlashIcon className="h-4 w-4 stroke-current text-gray-400" />
              <span className="text-sm font-medium ml-2 text-gray-400">
                Line
              </span>
            </button>

            <button className="flex items-center w-full p-2 hover:bg-gray-100 rounded-md">
              <ArrowUpIcon className="h-4 w-4 stroke-current text-gray-400" />
              <span className="text-sm font-medium ml-2 text-gray-400">
                Arrow
              </span>
            </button>

            <button className="flex items-center w-full p-2 hover:bg-gray-100 rounded-md">
              <CircleIcon className="h-4 w-4 stroke-current text-gray-400" />
              <span className="text-sm font-medium ml-2 text-gray-400">
                Ellipse
              </span>
            </button>

            <button className="flex items-center w-full p-2 hover:bg-gray-100 rounded-md">
              <TriangleIcon className="h-4 w-4 stroke-current text-gray-400" />
              <span className="text-sm font-medium ml-2 text-gray-400">
                Polygon
              </span>
            </button>

            <button className="flex items-center w-full p-2 hover:bg-gray-100 rounded-md">
              <StarIcon className="h-4 w-4 stroke-current text-gray-400" />
              <span className="text-sm font-medium ml-2 text-gray-400">
                Star
              </span>
            </button>

            <button className="flex items-center w-full p-2 hover:bg-gray-100 rounded-md">
              <ImageIcon className="h-4 w-4 stroke-current text-gray-400" />
              <span className="text-sm font-medium ml-2 text-gray-400">
                Image
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShapesTools;
