export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#030712]">
      <div className="flex flex-col items-center gap-4">
        <div className="w-10 h-10 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin" />
        <span className="font-mono text-xs uppercase tracking-widest text-slate-400">
          Streaming Architectural Nodes...
        </span>
      </div>
    </div>
  );
}
