// import nodemailer from 'nodemailer';

// const sendConfirmationEmail = async (formData) => {
//   try {
//     // Create a transporter with your email provider's SMTP settings
//     const transporter = nodemailer.createTransport({
//       host: 'smtp.example.com', // Your SMTP server
//       port: 465, // SMTP port (for secure connection)
//       secure: true, // true for 465, false for other ports
//       auth: {
//         user: 'your_username',
//         pass: 'your_password'
//       }
//     });

//     // Define your email content
//     const emailHtml = `
//       <p>Hello ${formData.name},</p>
//       <p>Thank you for booking a table with us. Your booking details are:</p>
//       <ul>
//         <li>Date: ${formData.date}</li>
//         <li>Time: ${formData.time}</li>
//         <li>Number of Guests: ${formData.guests}</li>
//         <li>Occasion: ${formData.occasion}</li>
//       </ul>
//       <p>We look forward to seeing you!</p>
//     `;

//     // Set up your email options
//     const options = {
//       from: 'your_email@example.com', // Sender email address
//       to: formData.email, // Recipient email address (customer's email)
//       subject: 'Booking Confirmation', // Email subject
//       html: emailHtml // Email content in HTML format
//     };

//     // Send the email
//     await transporter.sendMail(options);
//     console.log('Confirmation email sent successfully');
//   } catch (error) {
//     console.error('Error sending confirmation email:', error);
//   }
// };

// export default sendConfirmationEmail;
