const nodemailer = require('nodemailer')
const sendGridTransport = require('nodemailer-sendgrid-transport')

const transporter = nodemailer.createTransport(
    sendGridTransport({
        auth:{
            api_key:process.env.API_SENDGRID
        }
    })
)


const sendEmailController = (req,res) =>{
    try {
        const {name,email,msg} = req.body

        if(!name || !email || !msg){
            return res.status(400).json({success:false,message:"All fields are required"})
        }

        transporter.sendMail({
            to:"nijpadariya@gmail.com",
            from:"nijbp23@iitk.ac.in",
            subject:'Regarding Mern Portfolio',
            html:`
            <h5>Detail Information</h5>
            <ul>
                <li>Name: ${name}</li>
                <li>Email: ${email}</li>

                <li>Message: ${msg}</li>
            </ul>

            `
        })
        return res.status(200).json({success:true,message:"Email sent successfully"})
    } catch (error) {
        console.log(error);
        return res.status(500).json({message:"Something went wrong",error})
    }
}


module.exports = {
    sendEmailController
}