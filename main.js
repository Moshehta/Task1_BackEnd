const yargs = require("yargs");
const AddCommand = require("./add");
const DeleteCommand = require("./delete");
const ReadCommand = require("./read");
const ViewCommand = require("./view"); 

yargs.command({
    command: "add",
    describe: "Add an item",
    builder:
    {
    fname: 
        {
            describe: "First name",
            demandOption: true,
            type: "string"
        },
        lname: 
        {
            describe: "Last name",
            demandOption: true,
            type: "string"
        }
    },
    handler:(argv) => {
      AddCommand.addData(argv.id, argv.fname, argv.lname,argv.age , argv.city);
    }
  })
  .command({
    command: "delete",
    describe: "Delete an item",
    builder: {
      id: {
        describe: "ID of the item to delete",
        demandOption: true,
        type: "string"
      }
    },
    handler:(argv) => {
      DeleteCommand.deleteData(argv.id);
    }
  })
  .command({
    command: "read",
    describe: "Read data",
    builder: {
      id: {
        describe: "ID of the item to read",
        demandOption: true,
        type: "string"
      }
    },
    handler:(argv) => {
      ReadCommand.readData(argv.id);
    }
  })
  .command({
    command: "list",
    describe: "List all items",
    handler:() => {
      ViewCommand.listData();
    }
  })
  yargs.parse();