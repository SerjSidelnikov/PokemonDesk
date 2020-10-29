const concat = (str1: string, str2: string): string => {
  return str1 + str2;
};

console.log(concat('Hello ', 'World'));

interface WithDataInterface {
  howIDoIt: string;
  someArray: Array<string | number>;
}

interface MyHomeTaskInterface extends WithDataInterface {
  withData: Array<WithDataInterface>;
}

const MyHomeTask: MyHomeTaskInterface = {
  howIDoIt: "I Do It Wel",
  someArray: ["string one", "string two", 42],
  withData: [
    {
      howIDoIt: "I Do It Wel",
      someArray: ["string one", 23]
    }
  ],
};

interface MyArray<T> {
  [N: number]: T;

  reduce<U>(fn: (prevValue: U, curValue: T, curIndex: number, arr: T[]) => U, initValue: U): U;
}

const tsArr: MyArray<number> = [1, 2, 3, 4, 5];

const res = tsArr.reduce((a, b) => a + b, 0);
const res2 = tsArr.reduce((a, b) => a + b, '');
