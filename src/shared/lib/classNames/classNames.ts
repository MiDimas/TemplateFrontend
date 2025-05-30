export type Mods = Record<string, boolean | string | undefined>;
export type Additional = Array<string | undefined>;
export function classNames(cls: string, mods: Mods = {}, additional: Additional = []): string {
    const arr = [
        cls,
        ...Object.entries(mods)
            .filter(([_className, value]) => !!value)
            .map(([className]) => className),
    ];
    console.log(arr);
    console.log(additional);
    console.log(cls)
    if (additional) {
        additional = additional.filter(Boolean);
        arr.push(...(additional as Array<string>));
    }
    return arr.join(' ');
}
