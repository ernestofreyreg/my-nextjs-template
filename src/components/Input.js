const { forwardRef } = require("react");

export const Input = forwardRef(function Input({ isError, ...props }, ref) {
  return (
    <input
      ref={ref}
      className={`border py-1 px-2 rounded focus:outline-none focus:ring focus:ring-sky-300 focus:ring-offset-0 ${
        isError && "border-red-600"
      }`}
      {...props}
    />
  );
});
