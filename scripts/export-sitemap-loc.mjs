import fs from "node:fs/promises";
import path from "node:path";
import { Workbook, SpreadsheetFile } from "@oai/artifact-tool";

const projectRoot = "D:\\Git-Project\\xiangqi_auto";
const sitemapPath = path.join(projectRoot, "dist", "sitemap.xml");
const outputDir = path.join(projectRoot, "outputs");
const outputPath = path.join(outputDir, "local-sitemap-loc-checklist.xlsx");
const previewPath = path.join(outputDir, "local-sitemap-loc-checklist-preview.png");

function extractLocs(xmlText) {
  return [...xmlText.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]);
}

const sitemapXml = await fs.readFile(sitemapPath, "utf8");
const locs = extractLocs(sitemapXml);

await fs.mkdir(outputDir, { recursive: true });

const workbook = Workbook.create();
const sheet = workbook.worksheets.add("Sitemap LOCs");
sheet.showGridLines = false;
sheet.freezePanes.freezeRows(1);

sheet.getRange("A1:D1").values = [["序号", "loc", "核对状态", "备注"]];
sheet.getRange(`A2:D${locs.length + 1}`).values = locs.map((loc, index) => [
  index + 1,
  loc,
  "",
  ""
]);

sheet.getRange("A1:D1").format = {
  fill: "#1F4E78",
  font: { bold: true, color: "#FFFFFF" }
};

sheet.getRange(`A2:A${locs.length + 1}`).format.numberFormat = "0";
sheet.getRange(`A1:D${locs.length + 1}`).format = {
  wrapText: true,
  verticalAlignment: "top"
};

sheet.getRange("A:A").format.columnWidthPx = 70;
sheet.getRange("B:B").format.columnWidthPx = 520;
sheet.getRange("C:C").format.columnWidthPx = 120;
sheet.getRange("D:D").format.columnWidthPx = 220;
sheet.getRange(`A2:D${locs.length + 1}`).format.rowHeightPx = 24;

sheet.getRange(`A1:D${locs.length + 1}`).format.borders = {
  top: { style: "Continuous", color: "#D0D7DE" },
  bottom: { style: "Continuous", color: "#D0D7DE" },
  left: { style: "Continuous", color: "#D0D7DE" },
  right: { style: "Continuous", color: "#D0D7DE" },
  insideHorizontal: { style: "Continuous", color: "#E5E7EB" },
  insideVertical: { style: "Continuous", color: "#E5E7EB" }
};

sheet.getRange(`C2:C${locs.length + 1}`).dataValidation = {
  rule: {
    type: "list",
    values: ["待确认", "正常", "异常"]
  }
};

const inspect = await workbook.inspect({
  kind: "table",
  range: `Sitemap LOCs!A1:D10`,
  include: "values",
  tableMaxRows: 10,
  tableMaxCols: 4
});

if (!inspect.ndjson?.includes("loc")) {
  throw new Error("Workbook verification failed: loc column missing.");
}

const preview = await workbook.render({
  sheetName: "Sitemap LOCs",
  range: `A1:D20`,
  scale: 1,
  format: "png"
});

await fs.writeFile(previewPath, new Uint8Array(await preview.arrayBuffer()));

const xlsx = await SpreadsheetFile.exportXlsx(workbook);
await xlsx.save(outputPath);

console.log(outputPath);
