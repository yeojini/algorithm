/**
 * 문제 설명
 * 현재 시간과 정인이가 나트륨을 던질 시간이 주어졌을 때, 기다려야 하는 시간을 계산하는 문제.
 * 시간은 hh:mm:ss 형식으로 주어진다.
 * 정인이는 적어도 1초를 기다려야 하며, 최대 24시간을 기다린다.
 * 기다려야 하는 시간을 hh:mm:ss 형식으로 출력한다.
 */

const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(path).toString().trim().split('\n');

const curTime = input[0];
const targetTime = input[1];

function timeToSec(time) {
  const [h, m ,s] = time.split(':').map(Number);
  return s + m * 60 + h * 3600;
}

const curSec = timeToSec(curTime);
const targetSec = timeToSec(targetTime);

const hideSec = curSec < targetSec ? targetSec - curSec : targetSec + 24 * 60 * 60 - curSec;

function secToTime(sec) {
  const h = Math.floor(sec / 3600) + '';
  const m = Math.floor((sec % 3600) / 60) + '';
  const s = Math.floor((sec % 3600) % 60) + '';
  return `${h.padStart(2,'0')}:${m.padStart(2,'0')}:${s.padStart(2,'0')}`
}

console.log(secToTime(hideSec));
