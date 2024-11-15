import { TypeIcon } from 'lucide-react';
import ShapesTools from './ShapesTools';

const Elements = () => {
  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-white border border-gray-200 p-4 flex justify-center gap-4 max-w-md w-full rounded-xl shadow-lg">
      {/* ShapesTools */}
      <ShapesTools />

      <div className="cursor-pointer" tabIndex={1}>
        <TypeIcon className="h-6 w-6 stroke-current text-gray-400 text-primary" />
      </div>
    </div>
  );
};

export default Elements;
