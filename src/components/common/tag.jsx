export const Tag = ({ children, className }) => {
  return (
    <div
      className={`bg-black/[.8] px-7 py-4 rounded-2xl w-full h-max ${className}`}
    >
      {children}
    </div>
  );
};
