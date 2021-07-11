// const fs = require("fs");
// const FileIO = require("../fileIO");

// jest.mock("fs");

// describe("FileIO", () => {
//   describe("read", () => {
//     it("should call fs.readFileSync with the passed in 'file' argument", () => {
//       const fileIO = new FileIO();
//       const file = "message.txt";
//       let data;
      
//       fs.readFileSync.mockReturnValue("Hello World!");
//       data = fileIO.read(file);

//       expect(data).toEqual("Hello World!");
//       expect(fs.readFileSync).lastCalledWith(file, "utf8");
//     });
//   });