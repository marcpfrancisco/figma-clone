const Tooltip = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="absolute inset-y-0 left-12 group-hover:flex hidden items-centers">
      <div className="relative whitespace-nowrap px-4 py-2 bg-white rounded-md font-semibold drop-shadow-lg text-gray-900">
        <div className="absolute inset-y-0 flex items-center -left-1">
          <div className="w-2 h-2 bg-white rotate-45"></div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Tooltip;
