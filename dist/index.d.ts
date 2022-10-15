declare type Config = Record<string, string>;
declare type Prefixes = Set<string>;
declare type CodeToBodyMap = Map<string, string>;
declare class Phonedrawer {
    config: Config;
    prefixes: Prefixes;
    codeToBodyMap: CodeToBodyMap;
    constructor(config: Config);
    format(phone: string): string;
}
export type { Config };
export { Phonedrawer };
