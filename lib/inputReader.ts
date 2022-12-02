import EventEmitter from "node:events";
import readline from "node:readline";
import { createReadStream } from "node:fs";
import { resolve } from "node:path";

export class InputReader extends EventEmitter {
    /**
     *
     * @param path path of input file relative to project base
     */
    constructor(path: string) {
        super();

        try {
            const rl = readline.createInterface({
                input: createReadStream(resolve(__dirname, "../", path)),
                crlfDelay: Infinity
            });

            rl.on("line", (line) => {
                this.emit("line", line);
            });

            rl.on("close", () => {
                this.emit("end");
            });
        } catch (e) {
            console.error(e);
        }
    }
}
