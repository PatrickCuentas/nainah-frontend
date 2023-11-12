import { cn } from "../utils";

export default function Container({ children, className, size = "md" }) {
  const sizes = {
    sm: "max-w-[30rem]",
    md: "max-w-[68.75rem]",
    lg: "max-w-[111.25rem]",
    xl: "max-w-[153.75rem]"
  };

  const sizeClass = sizes[size];

  return (
    <section className={cn(`mx-auto w-full ${sizeClass}`, className)}>
      {children}
    </section>
  );
}
