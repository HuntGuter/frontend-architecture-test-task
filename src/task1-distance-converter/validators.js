export function validateInput({ distance, convert_to }, units) {
    if (!distance || typeof distance.value !== "number") {
        throw new Error("Invalid distance value");
    }

    if (!units[distance.unit] || !units[convert_to]) {
        throw new Error("Unsupported unit");
    }
}
