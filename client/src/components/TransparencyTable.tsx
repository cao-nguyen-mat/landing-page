/*
 * CAO NGUYÊN MẬT — "Mùa Hoa Trắng" Editorial Journal theme
 * Product Transparency table: quiet paper-like rows, pending data marked honestly.
 */
import { Pending } from "@/components/editorial";

export default function TransparencyTable({
  rows,
}: {
  rows: { label: string; value: string; pending?: boolean }[];
}) {
  return (
    <dl className="divide-y divide-border border-y border-border">
      {rows.map((r) => (
        <div
          key={r.label}
          className="grid grid-cols-[7rem_1fr] sm:grid-cols-[11rem_1fr] gap-4 py-4 text-sm md:text-[0.95rem] items-baseline"
        >
          <dt className="font-label text-[0.66rem] tracking-[0.18em] uppercase text-muted-foreground">
            {r.label}
          </dt>
          <dd className="leading-relaxed text-foreground">
            {r.pending ? <Pending>{r.value}</Pending> : r.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}
