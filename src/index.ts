import { parse } from "csv-parse";
import * as fs from "fs";
import * as path from "path";
import { UsersInput } from "./interfaces/UsersInput";
import transformData from "./functions/transformData";
import { Transform } from "stream";
import { transform } from "stream-transform";
import * as fy from "csv-stringify";

//create a stream from the input file
const inputPath = path.resolve(__dirname, "../files/users.csv");
const inputStream = fs.createReadStream(inputPath);

//create output stream for transformed data
const outputPath = path.resolve(__dirname, "../files/users-output.csv");
const outputStream = fs.createWriteStream(outputPath);

const parser = parse({
  columns: true,
  skip_empty_lines: true,
});

const transformer = transform(transformData); //only pass the callback, signature is as expected.

inputStream
  .pipe(parser)
  .pipe(transformer)
  .pipe(fy.stringify({ header: true }))
  .pipe(outputStream)
  .on("finish", () => console.log("data transformation complete"));
