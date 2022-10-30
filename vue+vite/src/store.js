import { reactive, computed, watch, ref } from 'vue'

export const tip = reactive({
    type: 'warning',
    value: '估计有点问题',
    show: false
})

export function changeTip(type, value) {
    tip.type = type || tip.type;
    tip.value = value || tip.value;
    tip.show = true;
}

export const initInfo = reactive({
    max: [],
    allocation: [],
    available: []
})

export const needInfo = computed(() => {
    return initInfo.max.map((row, i) => {
        return row.map((m, j) => {
            m = m || 0;
            let a = initInfo.allocation[i][j] || 0;
            // if (m < a) changeTip('error', '错误，请检查初始条件')
            return m - a;
        })
    })
})

export const presetInfo = reactive({
    resource: {
        value: 0,
        show: 'R'
    },
    process: {
        value: 0,
        show: 'P'
    }
})

watch([() => presetInfo.resource.value, () => presetInfo.process.value], ([r, p]) => {
    r = r * 1;
    p = p * 1;
    if (r && p) {
        initInfo.max = Array(p).fill(0).map(item => Array(r).fill(0));
        initInfo.allocation = Array(p).fill(0).map(item => Array(r).fill(0));
        initInfo.available = Array(r).fill(0);
    }
})

const registerInputDepends = [{ name: presetInfo, extra: true }];
const registerInput = computed(() => {
    let obj = {};
    registerInputDepends.forEach(dep => {
        for (let key in dep.name) {
            obj[key] = dep.name;
        }
    })
    return obj;
})

export function handleInputChange(name, value) {
    let dep = registerInput.value[name];
    dep[name].value = value;
}

export const inputExtra = computed(() => {
    let obj = {};
    registerInputDepends.forEach(dep => {
        if (dep.extra) {
            for (let key in dep.name) {
                let info = dep.name[key];
                if (info.show) {
                    let arr = Array(info.value * 1).fill(0);
                    obj[key] = arr.map((item, index) => info.show + index)
                }
            }
        }
    })
    return obj;
})

export const showResult = ref('');

