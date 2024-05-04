// Intersection type- combining other types

type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployeee = Admin & Employee;

const e1: ElevatedEmployeee = {
  name: "Paul",
  privileges: ["create-server", "delete-user"],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable | Numeric;
