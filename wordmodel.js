const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://abc:JC6iGsqHVePQxIjW@cluster0.mvyuv.mongodb.net/Tuvung09112020?retryWrites=true&w=majority', 
    {
        useNewUrlParser: true, 
        useUnifiedTopology: true
    });

const Word = mongoose.model('Word', { 
    en: { type : String , require : true , unique : true , uppercase : true}, 
    vn: { type : String , require : true , uppercase : true},
    ismemorized : {type : Boolean , require : true , default : false } 
});

module.exports = {Word};

// SELECT
// Word.find({})
// .then(word => console.log(word))
// .catch(error => console.log(error))


// INSERT
// const newWord = new Word({en : 'One', vn : 'Một'})
// newWord.save()
// .then(word => console.log(word))
// .catch(error => console.log(error))

// UPDATE
// Word.findByIdAndUpdate('5fd7573dd594ed057877ed10', {ismemorized : true} , {new : true})
// .then(word => console.log(word))
// .catch(error => console.log(error))

// DELETE
// Word.findByIdAndDelete('5fd7573dd594ed057877ed10')
// .then(word => console.log(word))
// .catch(error => console.log(error))