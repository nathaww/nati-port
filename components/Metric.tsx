type MetricProps = {
  label: string;
  value: string;
  caption?: string;
};

export function Metric({ label, value, caption }: MetricProps) {
  return (
    <div className="text-center font-[Arial]">
      <div className="text-3xl md:text-4xl font-bold text-emerald-700 dark:text-emerald-400 mb-1">
        {value}
      </div>
      <div className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
        {label}
      </div>
      {caption && (
        <div className="text-xs text-slate-500 dark:text-slate-500">
          {caption}
        </div>
      )}
    </div>
  );
}
