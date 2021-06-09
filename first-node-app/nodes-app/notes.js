const fs =require('fs')
const chalk = require('chalk')
const validator = require('validator')

const getNotes = () => {
    return "Your notes..";
}

const addNotes = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)
    if(!duplicateNote){
        notes.push({
            title:title,
            body:body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('new note added'))
    } else{
        console.log(chalk.red.inverse('title taken!'))
    }   

}

const saveNotes  = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}

debugger
const loadNotes = () => {
    try{
        const bufferData = fs.readFileSync('notes.json')
        const dataJSON = bufferData.toString()
        return JSON.parse(dataJSON)
    }
    catch(e){
        return []
    }

}

const removeNotes= (title)=> {
    const notes = loadNotes()
    const updatedNotes = notes.filter((note)=> note.title!==title)    
    //console.log(chalk.green('title removed'))
    if(notes.length === updatedNotes.length || notes.length === 0){
        console.log(chalk.red.inverse('no node found'))
    } else{
        console.log(chalk.green.inverse('note removed'))
        saveNotes(updatedNotes)
    }
    
}

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.green.inverse("Your Notes"))
    notes.forEach(note => console.log(note.title))
}

const readNotes = (title) =>{
    const notes = loadNotes()
    const note = notes.find(note => note.title === title)
    if(note){
        console.log(chalk.bold.green.inverse("Title: " + note.title))
        console.log('Body: '+ note.body )
    } else{
        console.log(chalk.red.inverse('note is not find'))
    }
}

console.log(validator.isEmail('tara@email.com'));

module.exports = {
    getNotes:getNotes,
    addNotes:addNotes,
    removeNotes:removeNotes,
    listNotes: listNotes,
    readNotes: readNotes
}  