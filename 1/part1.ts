import { InputReader } from "../lib/inputReader";

console.time("Execution Time");
const input: InputReader = new InputReader("./1/input.txt");

let largest: number = -1;
let largest_idx: number = -1;

let current: number = 0;
let current_idx: number = 1;

input.on("line", (line: string) => {
    if (line === "") {
        if (current > largest) {
            largest = current;
            largest_idx = current_idx;
        }
        current_idx++;
        current = 0;
    } else {
        current += parseInt(line);
    }
});

input.on("end", () => {
    console.log(`Biggest: ${largest}: index ${largest_idx}`);
    console.timeEnd("Execution Time");
});
