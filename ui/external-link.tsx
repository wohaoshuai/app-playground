import { ArrowRightIcon } from '@heroicons/react/outline';

export const ExternalLink = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href?: string;
}) => {
  return (
    <a
      href={href}
      className="prose prose-sm prose-invert inline-flex max-w-none gap-x-2 rounded-lg bg-gray-700 px-3 py-1 text-sm font-medium text-gray-100 no-underline hover:bg-gray-500 hover:text-white"
    >
      <div>{children}</div>

      <ArrowRightIcon className="prose prose-sm prose-invert block w-4 max-w-none" />
    </a>
  );
};
