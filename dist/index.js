"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Phonedrawer = void 0;
const utils_1 = require("./utils");
class Phonedrawer {
    constructor(config) {
        this.config = config;
        const [prefixes, codeToBodyMap] = Object.keys(config).reduce((acc, key) => {
            // set
            acc[0].add((0, utils_1.removePlaceholders)(key));
            // map
            acc[1].set((0, utils_1.removePlaceholders)(key), config[key]);
            return acc;
        }, [new Set(), new Map()]);
        this.prefixes = prefixes;
        this.codeToBodyMap = codeToBodyMap;
    }
    format(phone) {
        let targetPrefix;
        const prefixesIterator = this.prefixes.entries();
        for (let [entry] of prefixesIterator) {
            if (phone.startsWith(entry)) {
                targetPrefix = entry;
                break;
            }
        }
        if (targetPrefix === undefined) {
            return phone;
        }
        const targetMask = this.codeToBodyMap.get(targetPrefix);
        if (targetMask === undefined) {
            return phone;
        }
        let resultValue = "";
        let maskIndex = 0;
        let phoneIndex = 0;
        while (maskIndex < targetMask.length) {
            if (targetMask[maskIndex] === " ") {
                resultValue += " ";
                maskIndex += 1;
            }
            resultValue += phone[phoneIndex];
            maskIndex += 1;
            phoneIndex += 1;
        }
        return resultValue;
    }
}
exports.Phonedrawer = Phonedrawer;
