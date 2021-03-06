const mongoose = require("mongoose");
const Schema = mongoose.Schema;
 
const DirectorSchema = Schema({
    name:  {
        type: String,
        required: [true, '`{PATH}` alanına veri girilmesi mecburidir!'],
        maxlength: [100, '`{PATH}` alanı (`{VALUE}`), `{MAXLENGTH}` haneden küçük olamaz!'],
        minlength: [5, '`{PATH}` alanı (`{VALUE}`), `{MINLENGTH}` haneden fazla karakter içermelidir!']
    },
    surname:  {
        type: String,
        required: [true, '`{PATH}` alanına veri girilmesi mecburidir!'],
        maxlength: [100, '`{PATH}` alanı (`{VALUE}`), `{MAXLENGTH}` haneden küçük olamaz!'],
        minlength: [5, '`{PATH}` alanı (`{VALUE}`), `{MINLENGTH}` haneden fazla karakter içermelidir!']
    },
    bio:  {
        type: String,
        required: [true, '`{PATH}` alanına veri girilmesi mecburidir!'],
        maxlength: [1000, '`{PATH}` alanı (`{VALUE}`), `{MAXLENGTH}` haneden küçük olamaz!'],
        minlength: [50, '`{PATH}` alanı (`{VALUE}`), `{MINLENGTH}` haneden fazla karakter içermelidir!']
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("director", DirectorSchema);