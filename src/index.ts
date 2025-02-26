import { parse } from "csv-parse/sync";
import * as fs from "fs";
import * as path from "path";
import { UsersInput } from "./interfaces/UsersInput";
import transformData from "./functions/transformData";

console.log("Hello, world!");

//get the csv file
const inputPath = path.resolve(__dirname, "../files/users.csv");
const inputFile = fs.readFileSync(inputPath, "utf8");

const inputUsers = parse(inputFile, {
  columns: true,
  skip_empty_lines: true,
}) as UsersInput[];

const outputData = transformData(inputUsers);

console.log(inputUsers[1]);
console.log(outputData[1]);
