const mongoose = require('mongoose')

const NoteSchema = mongoose.Schema({
    title : String, 
    content : String, 
}, {
    TimeRanges : true
});

module.exports = mongoose.model('Note', NoteSchema);