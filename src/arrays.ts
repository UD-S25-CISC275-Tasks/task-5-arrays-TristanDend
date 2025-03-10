/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    if (!numbers.length) return [];
    else if (numbers.length === 1) return [numbers[0], numbers[0]];
    else return [numbers[0], numbers[numbers.length - 1]];
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    return numbers.map((num: number): number => num * 3);
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    return numbers.map((num: string): number =>
        Number(num) ? Number(num) : 0,
    );
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    let removedDollarList = amounts.map((num: string): string =>
        num[0] === "$" ?
            num.length > 1 ?
                num.slice(1, num.length)
            :   num
        :   num,
    );
    if (removedDollarList.length === 1) {
        if (isNaN(parseInt(removedDollarList[0]))) return [0];
        return [parseInt(removedDollarList[0])];
    } else if (!removedDollarList.length) return [];
    else
        return removedDollarList.map((num: string): number =>
            isNaN(parseInt(num)) ? 0 : parseInt(num),
        );
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    let noQuestions: string[] = messages.filter(
        (message: string): boolean => message[message.length - 1] !== "?",
    );
    return noQuestions.map((message: string): string =>
        message[message.length - 1] === "!" ? message.toUpperCase() : message,
    );
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    let shortWordsList = words.filter(
        (word: string): boolean => word.length < 4,
    );
    return shortWordsList.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    if (!colors.length) return true;
    return colors.every(
        (color: string): boolean =>
            color === "blue" || color === "red" || color === "green",
    );
}

/**
 * Consumes an array of numbers, and produces a st
 * ring representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    if (!addends.length) return "0=0";
    let addendsCopy = addends.slice();
    let addSum = addendsCopy
        .reduce((sum: number, num: number) => sum + num, 0)
        .toString();
    addSum = addSum.concat("=", addends[0].toString());
    for (let i = 1; i < addends.length; i++)
        addSum = addSum.concat("+", addends[i].toString());
    return addSum;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    if (!values.length) return [0];
    let untilNegative = values.findIndex((value: number): boolean => value < 0);
    let valuesCopy = values.slice();
    if (untilNegative === -1)
        return [
            ...values,
            valuesCopy.reduce(
                (sum: number, value: number) => (sum += value),
                0,
            ),
        ];
    let valuesCopyCopy = values.slice(0, untilNegative);
    let tilNegativeCopy = untilNegative + 1;
    let finalSum = valuesCopyCopy.reduce(
        (sum: number, value: number) => (sum += value),
        0,
    );
    valuesCopy.splice(tilNegativeCopy, 0, finalSum);
    return valuesCopy;
}
