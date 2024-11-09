import DefaultLayout from './DefaultLayout';

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DefaultLayout classsName="w-full flex flex-col relative">
      {children}
    </DefaultLayout>
  );
}
