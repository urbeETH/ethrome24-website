"use client";

export default function Marquez({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={`marqueez_container ${className}`} >
      <div className={`marqueez_item ${className}`}>{children}</div>
    </div>
  );
}
