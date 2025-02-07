const emailValidator = require("email-validator");

const handleTicketRequest = async(req, res) => {
    const { email } = req.body;

    //validate email
    if (!emailValidator.validate(email)) {
        return res.status(400).json({ message: "Invalid email format" });
    }

    //?maybe we store in db
    console.log("Receving email: ", email)

    res.status(200).json({
        message: "Ticket request is successful",
    })

}

module.exports = {handleTicketRequest}