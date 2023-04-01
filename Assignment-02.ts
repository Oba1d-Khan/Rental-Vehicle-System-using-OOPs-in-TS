abstract class Vehicle {
  make: string;
  model: string;
  year: number;
  rented: boolean;

  constructor(make: string, model: string, year: number, rented: boolean) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.rented = rented;
  }

  getMake(): string {
    return this.make;
  }

  getModel(): string {
    return this.model;
  }

  getYear(): number {
    return this.year;
  }

  isRented(): boolean {
    return this.rented;
  }

  setRented(rented: boolean): void {
    this.rented = rented;
  }

  abstract rentalRate(): number;

  rent(): void {
    if (this.isRented()) {
      console.log("Sorry, this vehicle is already rented.");
    } else {
      this.setRented(true);
      console.log("Thank you for renting this vehicle!");
    }
  }

  returnVehicle(): void {
    if (this.isRented()) {
      this.setRented(false);
      console.log("Thank you for returning this vehicle!");
    } else {
      console.log("This vehicle was not rented.");
    }
  }
}

class Car extends Vehicle {
  private numSeats: number;

  constructor(
    make: string,
    model: string,
    year: number,
    rented: boolean,
    numSeats: number
  ) {
    super(make, model, year, rented);
    this.numSeats = numSeats;
  }

  rentalRate(): number {
    return 50; // $50 per day for a car
  }

  getNumSeats(): number {
    return this.numSeats;
  }
}

class Truck extends Vehicle {
  private cargoCapacity: number;

  constructor(
    make: string,
    model: string,
    year: number,
    rented: boolean,
    cargoCapacity: number
  ) {
    super(make, model, year, rented);
    this.cargoCapacity = cargoCapacity;
  }

  rentalRate(): number {
    return 100;
  }

  getCargoCapacity(): number {
    return this.cargoCapacity;
  }
}

class Motorcycle extends Vehicle {
  private engineSize: number;

  constructor(
    make: string,
    model: string,
    year: number,
    rented: boolean,
    engineSize: number
  ) {
    super(make, model, year, rented);
    this.engineSize = engineSize;
  }

  rentalRate(): number {
    return 50;
  }

  getEngineSize(): number {
    return this.engineSize;
  }
}

const car1 = new Car("Toyota", "Corolla", 2022, false, 5);
car1.rent();
car1.rent();
car1.returnVehicle();
car1.rent();
car1.returnVehicle();

const truck1 = new Truck("Ford", "F-150", 2020, false, 2000);
truck1.rent();
truck1.returnVehicle();

const motorcycle1 = new Motorcycle(
  "Ducati",
  " Desmosedici RR limited-edition",
  2021,
  true,
  500
);
motorcycle1.returnVehicle();
