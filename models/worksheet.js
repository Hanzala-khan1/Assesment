const mongoose = require("mongoose")
const worksheetSchema = new mongoose.Schema({
    worksheet: [
        {
            Question: String,
            options: [
                {
                    text: String,
                    isCorrect: Boolean
                }
            ]
        }
    ]

});

module.exports = mongoose.model('Worksheet', worksheetSchema);