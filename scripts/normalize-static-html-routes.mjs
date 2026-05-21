import { copyFile, mkdir, readFile, rename, rm, stat } from "node:fs/promises";
import path from "node:path";

const routeDirs = [
  {
    sourceDir: path.join("dist", "help", "markers.html"),
    targetFile: path.join("dist", "help", "markers.html")
  }
];

for (const route of routeDirs) {
  const sourceFile = path.join(route.sourceDir, "index.html");
  const tempFile = `${route.targetFile}.__tmp__`;

  try {
    const info = await stat(sourceFile);
    if (!info.isFile()) continue;
  } catch {
    continue;
  }

  await mkdir(path.dirname(route.targetFile), { recursive: true });
  await copyFile(sourceFile, tempFile);
  await rm(route.sourceDir, { recursive: true, force: true });
  await rename(tempFile, route.targetFile);
}
