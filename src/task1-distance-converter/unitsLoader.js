import fs from "fs";
import path from "path";

const UNITS_PATH = path.resolve(process.cwd(), "src/task1-distance-converter/units.config.json");

export function loadUnits() {
    const raw = fs.readFileSync(UNITS_PATH, "utf-8");
    return JSON.parse(raw);
}
