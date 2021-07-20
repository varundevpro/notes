import { HeartIcon } from "@heroicons/react/solid";

export const Footer = () => {
  return (
    <footer className="text-center mt-auto pb-12">
      <span>Built with</span>
      <span className="sr-only">love</span>
      <HeartIcon className="w-6 h-6 inline-block mx-2 -mt-1 text-red-500" />
      <span>
        by{" "}
        <a
          href="http://varundevpro.github.io"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline font-bold"
        >
          Varun
        </a>
      </span>
    </footer>
  );
};
