import { ChevronDownIcon } from 'lucide-react';

const Accordion = ({
  title,
  children,
}: {
  title: string;
  children?: React.ReactNode;
}) => {
  return (
    <details className="group">
      <summary className="flex cursor-pointer list-none items-center justify-between border-b border-gray-200 py-4 px-6  ">
        <span className="text-sm font-semibold capitalize">{title}</span>
        <ChevronDownIcon className="h-5 w-5 rotate-90 stroke-current text-gray-400 group-open:rotate-0 transition-transform" />
      </summary>

      <div className="border-b border-gray-200 px-6 py-4">{children}</div>
    </details>
  );
};

export default Accordion;
