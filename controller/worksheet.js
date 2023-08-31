const Worksheet = require("../models/worksheet.js")


module.exports = {

    /////////// add comment ///////////////
    async addworksheet(req, res, next) {
        try {
            // res.send(req.body)

            const worksheet = await new Worksheet(req.body);
            await worksheet.save()
            return res.status(200).send({
                success: true,
                message: "worksheet Added",
                status: 200,
                data: worksheet
            })

        } catch (error) {
            next(error)
        }
    },

    //////////// get comment /////////////////
    async getworksheet(req, res, next) {
        try {
            const worksheet = await Worksheet.find()
            return res.status(200).send({
                success: true,
                message: "Worksheet",
                status: 200,
                data: worksheet
            })
        } catch (error) {
            next(error)
        }
    },
}