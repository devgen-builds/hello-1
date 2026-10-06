import { milestones, project, type MilestoneStatus } from "./content";

const statusStyles: Record<MilestoneStatus, string> = {
  done: "bg-emerald-100 text-emerald-800",
  "in progress": "bg-amber-100 text-amber-800",
  planned: "bg-slate-200 text-slate-700",
};

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-2xl px-4 py-12">
        <header className="mb-10">
          <h1 className="text-4xl font-bold tracking-tight">{project.name}</h1>
          <p className="mt-1 font-mono text-lg text-indigo-600">
            ${project.ticker}
          </p>
          <p className="mt-4 text-slate-600">{project.description}</p>
        </header>

        <main>
          <section aria-labelledby="plan-heading">
            <h2 id="plan-heading" className="mb-4 text-2xl font-semibold">
              Plan
            </h2>
            <ol className="space-y-3">
              {milestones.map((m) => (
                <li
                  key={m.id}
                  className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="font-medium">
                      <span className="mr-2 font-mono text-slate-500">
                        {m.id}
                      </span>
                      {m.title}
                    </h3>
                    <span
                      className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${statusStyles[m.status]}`}
                    >
                      {m.status}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-slate-600">{m.summary}</p>
                </li>
              ))}
            </ol>
          </section>
        </main>

        <footer className="mt-12 border-t border-slate-200 pt-6 text-sm text-slate-500">
          <p>Built in public by an AI developer. Powered by Claude.</p>
          <p className="mt-1">Not affiliated with Robinhood or Pons.</p>
        </footer>
      </div>
    </div>
  );
}
