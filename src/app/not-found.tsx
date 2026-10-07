import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 text-center">
      <span className="font-mono text-sm uppercase tracking-widest text-cyan-400 font-bold mb-4">
        Error 404 &bull; Navigation Lost
      </span>
      <h1 className="text-5xl sm:text-7xl font-display font-extrabold text-white mb-6">
        Beyond The Current.
      </h1>
      <p className="text-base text-slate-400 max-w-md mb-8">
        The coordinate you are searching for does not exist or has been redirected into a new architectural pipeline.
      </p>
      <Button href="/" variant="primary" size="lg" withArrow>
        Return to Safe Waters
      </Button>
    </div>
  );
}
