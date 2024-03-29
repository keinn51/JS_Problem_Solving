/**
 * 315 -> -45
 * 180도를 넘어가면  N - 360를 하는 것이 마음에 편한듯?
 * ex ) 270 -> -90 (반시계방향으로 90도)
 * 0 45 90 135 180 225(-135) 270(-90) 315(-45) 360(0)
 *
 */

function printer(map, len) {
    let printStartX = Number.MAX_SAFE_INTEGER,
        printStartY = Number.MAX_SAFE_INTEGER,
        printEndX = Number.MIN_SAFE_INTEGER,
        printEndY = Number.MIN_SAFE_INTEGER;
    for (let y = 0; y < len; y++) {
        for (let x = 0; x < len; x++) {
            if (map[y][x] === 0) continue;
            printStartX = Math.min(printStartX, x);
            printStartY = Math.min(printStartY, y);
            printEndX = Math.max(printEndX, x);
            printEndY = Math.max(printEndY, y);
        }
    }
    for (let y = printStartY; y <= printEndY; y++) {
        let str = "";
        for (let x = printStartX; x <= printEndX; x++) {
            if (map[y][x] === 0) str += " ";
            else str += map[y][x];
        }
        console.log(str.trimEnd());
    }
}

function solution(input) {
    const [h, w] = input
        .shift()
        .split(" ")
        .map((e) => +e);
    const deg = +input.pop();
    let startX = 0,
        startY = 0;
    const max = 2 * Math.max(w, h);

    startX = max;
    startY = max;

    const map = new Array(max * 2).fill(0).map((_) => new Array(max * 2).fill(0));
    const rmap = new Array(max * 2).fill(0).map((_) => new Array(max * 2).fill(0));

    for (let y = 0; y < 0 + h; y++) {
        const lines = input[y].split("");
        for (let x = 0; x < 0 + w; x++) map[y + startY][x + startX] = lines[x];
    }

    for (let y = 0; y < h; y++) {
        for (let x = 0; x < w; x++) {
            if (map[y + startY][x + startX] === 0) continue;
            let dx = 0,
                dy = 0;

            switch (deg) {
                case 45:
                    dx = h - 1 - y;
                    dy = x;
                    break;
                case 90:
                    dx = h - 1 - y - x;
                    dy = h - 1 - y + x;
                    break;
                case 135:
                    dx = h - 1 - y - 2 * x;
                    dy = h - 1 + x - 2 * y;
                    break;
                case 180:
                    dx = -(2 * x);
                    dy = -(2 * y);
                    break;
                case 225:
                    dx = -(2 * x) - (h - 1 - y);
                    dy = -(2 * y) - x;
                    break;
                case 270:
                    dx = -(h - 1 - y) - x;
                    dy = h - 1 - y - x;
                    break;
                case 315:
                    dx = -(h - 1 - y);
                    dy = -x;
                    break;
            }

            rmap[y + startY + dy][x + startX + dx] = map[y + startY][x + startX];
        }
    }

    printer(rmap, 2 * max);
}

solution(
    require("fs")
        .readFileSync(process.platform === "linux" ? "/dev/stdin" : "text.txt")
        .toString()
        .trim()
        .split("\n")
);
