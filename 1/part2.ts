import { InputReader } from "../lib/inputReader";

interface Elf {
    index: number;
    calories: number;
}

console.time("Execution Time");

const input: InputReader = new InputReader("./1/input.txt");
let all: Elf[] = [];
let current: Elf | null = null;
let index = 1;

input.on("line", (line: string) => {
    if (line === "") {
        all.push(current!);
        index++;
        current = null;
    } else {
        if (current) {
            current.calories += parseInt(line);
        } else {
            current = {
                index,
                calories: parseInt(line)
            };
        }
    }
});

input.on("end", () => {
    all.sort((a, b) => b.calories - a.calories);
    console.log(
        "total:",
        all.slice(0, 3).reduce((acc, c) => (acc += c.calories), 0)
    );
    console.timeEnd("Execution Time");
});
