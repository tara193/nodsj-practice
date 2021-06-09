const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

//const command = process.argv[2]
//console.log(process.argv)
//const command = yargs.argv
//console.log(yargs.argv)
yargs.command({
    command:'add',
    describe:'add new notes',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'Note body',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv) {
        notes.addNotes(argv.title, argv.body)
    }
})
yargs.command({
    command:'remove',
    describe:'remove notes',
    builder:{
        title:{
            describe:'title',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.removeNotes(argv.title)        
    }
})
yargs.command({
    command:'list',
    describe:'list notes',    
    handler(){
        notes.listNotes()
    }
})

yargs.command({
    command:'read',
    description:'read notes',
    builder:{
        title:{
            describe:'note title',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.readNotes(argv.title)
    }
})

yargs.parse()
//console.log(yargs.argv)














// if(command === "add"){
//     console.log("Adding notes")
// } else if(command === "remove"){
//     console.log("removing notes")
// }

//const getNotes = require ('./notes.js');
//const add  = require('./utility.js');

//const notes = getNotes();
//console.log(notes);

//const sum = add(4,-2);
//console.log(sum);

// console.log(chalk.bold.green('Success'));





// const fs =  require('fs');
// fs.writeFileSync('note.txt', 'This is new file');
// fs.appendFileSync('note.txt', '  Here is the appended that');

