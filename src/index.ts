import { removePlaceholders } from "./utils";

type Config = Record<string, string>;

type Prefixes = Set<string>;
type CodeToBodyMap = Map<string, string>;

class AsceticPhone {
  config: Config;
  prefixes: Prefixes;
  codeToBodyMap: CodeToBodyMap;

  constructor(config: Config) {
    this.config = config;

    const [prefixes, codeToBodyMap]: [Prefixes, CodeToBodyMap] = Object.keys(
      config
    ).reduce<[Prefixes, CodeToBodyMap]>(
      (acc, key) => {
        // set
        acc[0].add(removePlaceholders(key));

        // map
        acc[1].set(removePlaceholders(key), config[key]);

        return acc;
      },
      [new Set(), new Map()]
    );

    this.prefixes = prefixes;
    this.codeToBodyMap = codeToBodyMap;
  }

  format(phone: string) {
    let targetPrefix: string | undefined;

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

    const targetMask: string | undefined = this.codeToBodyMap.get(targetPrefix);

    if (targetMask === undefined) {
      return phone;
    }

    let resultValue: string = "";

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

export type { Config };
export { AsceticPhone };
