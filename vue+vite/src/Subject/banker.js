import { initInfo, needInfo, presetInfo, inputExtra, showResult } from "../store";
export function banker() {
    let row = presetInfo.process.value * 1;
    let { available, max, allocation } = initInfo;

    let sum = [];
    let flag = Array(row).fill(false);
    let work = [].concat(available);
    let handler = function(i, record, flag, work) {
        if (record.length === row) {
            sum.push(record);
            return;
        }
        if (i >= row) return;
        for (let j = 0; j < row; j++) {
            let isVaild = needInfo.value[j].every((n,k) => n*1 <= work[k]*1);
            if (!flag[j] && isVaild) {
                let copyFlag = flag.concat([]);
                copyFlag[j] = true;
                let copyWork = allocation[j].map((a, k) => a*1 + work[k]*1);
                handler(i+1, record.concat(j), copyFlag, copyWork);
            }
        }
    }
    handler(0, [], flag, work);
    showResult.value = sum.length ? sum.map(result => result.map(r => inputExtra.value.process[r]).join(' -> '))
        : '不安全状态，无安全序列';
}