function printName(person: { first: string; last: string }): void {
    console.log(`${person.first} ${person.last}`);
}
printName({ first: "mohammad", last: "Soleimanikia" });

// another way to declare OBJ in type script
let coordinate: { x: number; y: number } = { x: 34, y: 2 };

// return value of OBJ
const randomCoordinate = (): { x: number; y: number } => {
    return { x: Math.random(), y: Math.random() };
};

// alias
// re use coordinate type
// use type keyword to define the type
type Point = {
    x: number;
    y: number;
};
// use type
const doublePoint = (point: Point): Point => {
    return { x: point.x, y: point.y };
};

// nested objects
type song = {
    title: string;
    artist: string;
    numStream: string;
    credits: { writer: string; producer: string };
};

// optional property
type Person = {
    name: string;
    middleName?: string;
    lastName: string;
};

// read only modifier
type User = {
    readonly id: number;
    username: string;
};

const user: User = {
    id: 124,
    username: "jack",
};
// forbidden
// user.id = 56; //error

// intersection types:
type Circle = {
    radius: number;
};
type Colorful = {
    color: string;
};

type ColorfulCircle= Circle & Colorful;
