import type { GlanceRow } from "@/lib/blog-data";

export function BlogGlanceTable({ rows }: { rows: GlanceRow[] }) {
  return (
    <div className="overflow-x-auto rounded-2xl bg-card ring-1 ring-primary/10">
      <table className="w-full text-left text-sm sm:text-base">
        <thead className="bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-900 text-white">
          <tr>
            <th className="px-4 py-3 font-heading font-semibold sm:px-5">
              Activity
            </th>
            <th className="px-4 py-3 font-heading font-semibold sm:px-5">
              Legal in California in 2026?
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr
              key={row.activity}
              className={index % 2 === 0 ? "bg-card" : "bg-emerald-50/60"}
            >
              <td className="px-4 py-3 font-medium text-foreground sm:px-5">
                {row.activity}
              </td>
              <td className="px-4 py-3 text-muted-foreground sm:px-5">
                {row.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
