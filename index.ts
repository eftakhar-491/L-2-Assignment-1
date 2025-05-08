function formatString(input: string, toUpper?: boolean): string {
  if (typeof toUpper === "undefined" || toUpper) {
    return input.toUpperCase();
  } else {
    return input.toLowerCase();
  }
}

function filterByRating(
  items: {
    title: string;
    rating: number;
  }[]
): {
  title: string;
  rating: number;
}[] {
  return items.filter((item) => item.rating >= 4);
}

function concatenateArrays<T>(...arrays: T[][]): T[] {
  const result: T[] = [];
  for (const arr of arrays) {
    for (const item of arr) {
      result.push(item);
    }
  }
  return result;
}

class Vehicle {
  private make: string;
  private year: number;
  constructor(make: string, year: number) {
    this.make = make;
    this.year = year;
  }

  getInfo(): string {
    return `"Make: ${this.make}, Year: ${this.year}"`;
  }
}
class Car extends Vehicle {
  private model: string;
  constructor(make: string, year: number, model: string) {
    super(make, year);
    this.model = model;
  }
  getModel(): string {
    return this.model;
  }
}

function processValue(value: string | number): number {
  if (typeof value === "string") {
    return value.length;
  } else if (typeof value === "number" && !isNaN(value)) {
    return value * 2;
  } else {
    throw new Error("Invalid type");
  }
}

interface Product {
  name: string;
  price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
  if (products.length === 0) {
    return null;
  }
  let data = products[0];
  let mostExpensive = products.reduce((acc, current) => {
    return acc.price > current.price ? acc : current;
  }, data);

  return mostExpensive;
}

enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function getDayType(day: Day): string {
  if (day === Day.Sunday) {
    return "Weekend";
  }
  return "Weekday";
}

async function squareAsync(n: number): Promise<number> {
  return new Promise((resolve, rejected) => {
    if (n < 0) {
      rejected(new Error("Negative number not allowed"));
    }
    setTimeout(() => {
      resolve(n * n);
    }, 1000);
  });
}
