import DefaultLayout from './DefaultLayout';

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DefaultLayout classsName="flex bg-gray-100 font-sans text-gray 900">
      {children}
    </DefaultLayout>
  );
}
