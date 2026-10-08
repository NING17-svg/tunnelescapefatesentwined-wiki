import type { DataTableModule } from "@/types/modules";
import { RichText } from "@/components/content/RichText";

export function DataTableBlock({ guideModule }: { guideModule: DataTableModule }) {
  return (
    <section id={guideModule.id} className="content-module">
      <h2>{guideModule.heading}</h2>
      <div className="table-scroll">
        <table className="data-table">
          <thead>
            <tr>
              {guideModule.columns.map((column) => (
                <th key={column.key} scope="col">
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {guideModule.rows.map((row, rowIndex) => (
              <tr key={`${guideModule.id}-row-${rowIndex}`}>
                {guideModule.columns.map((column) => (
                  <td key={column.key}><RichText text={row[column.key] || "—"} inline /></td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
