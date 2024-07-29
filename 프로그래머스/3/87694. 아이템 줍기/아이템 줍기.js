function solution(rectangle, characterX, characterY, itemX, itemY) {
    characterX *= 2;
    characterY *= 2;
    itemX *= 2;
    itemY *= 2;
    rectangle = rectangle.map(rec => rec.map(point => point * 2));
    
    const maxCoord = 102;
    const visited = Array.from({ length: maxCoord }, () => Array(maxCoord).fill(false));
    const map = Array.from({ length: maxCoord }, () => Array(maxCoord).fill(0));

    // 좌표 2배 확대 후 경계선은 1로, 내부는 2로 표시
    for (let [minX, minY, maxX, maxY] of rectangle) {
        for (let i = minX; i <= maxX; i++) {
            for (let j = minY; j <= maxY; j++) {
                if (i === minX || i === maxX || j === minY || j === maxY) {
                    if (map[i][j] === 2) continue; // 내부 표시된 부분은 건너뜀
                    map[i][j] = 1; // 경계선 표시
                } else {
                    map[i][j] = 2; // 내부 표시
                }
            }
        }
    }

    const directions = [
        [-1, 0], // 상
        [1, 0], // 하
        [0, -1], // 좌
        [0, 1] // 우
    ];

    const queue = [[characterX, characterY, 0]];
    visited[characterX][characterY] = true;

    function isSafe(x, y) {
        return x >= 0 && x < maxCoord && y >= 0 && y < maxCoord && !visited[x][y] && map[x][y] === 1;
    }

    while (queue.length) {
        const [curX, curY, distance] = queue.shift();
        if (curX === itemX && curY === itemY) {
            return distance / 2;
        }
        for (let [dx, dy] of directions) {
            const nextX = curX + dx;
            const nextY = curY + dy;
            if (isSafe(nextX, nextY)) {
                visited[nextX][nextY] = true;
                queue.push([nextX, nextY, distance + 1]);
            }
        }
    }
    return 0;
}
