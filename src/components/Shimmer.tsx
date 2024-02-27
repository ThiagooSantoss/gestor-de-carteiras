interface ShimmerProps {
  width: string | number;
  height: string | number;
  className?: string;
  isRedondo?: boolean;
}

export const Shimmer = (props: ShimmerProps) => {
  const { width, height, className = "", isRedondo = false } = props;

  let novoWidth = width;
  let novoHeight = height;

  if (typeof width === "number") {
    novoWidth = `${width}px`;
  }

  if (typeof height === "number") {
    novoHeight = `${height}px`;
  }

  return (
    <div
      className={`${className} bg-slate-400 ${
        isRedondo ? "rounded-full" : "rounded"
      } animate-pulse`}
      style={{ width: novoWidth, height: novoHeight }}
    />
  );
};
