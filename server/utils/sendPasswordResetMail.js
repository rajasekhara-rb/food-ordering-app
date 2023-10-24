import nodemailer from "nodemailer";

const sendResetPasswordEmail = (name, email, token) => {
    try {

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "rajasekharabudda009@gmail.com",
                pass: process.env.PASSFORMAIL
            },
            tls: {
                rejectUnauthorized: false,
            }
        });

        const mailOptions = {
            from: "rajasekharabudda009@gmail.com",
            to: email,
            subject: "Reset Password",
            html: `<div>
            Hi ${name}. <br>
            To Reset your Foodie account password 
            <a href="https://foodie-food-ordering-app.netlify.app/resetpassword/${token}">Click here</a>
            <br>
            Thank you,<br>
            Regards,<br>
            Foodie App.
            </div>
            `
        };

        transporter.sendMail(mailOptions, (error, res) => {
            if (error) {
                console.log(error);
            }
            transporter.close()
            // res.status(200).json({ message: "Email sent to you" })
            console.log("email sent")
        })

    } catch (error) {
        res.status(500);
        throw new Error({ error: error.message })
    }
}

export default sendResetPasswordEmail;