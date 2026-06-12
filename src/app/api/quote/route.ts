import sgMail from "@sendgrid/mail";

const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
const TO_EMAIL = "info@ultimate-buildings.com";
const FROM_EMAIL = "noreply@ultimate-buildings.com";

if (SENDGRID_API_KEY) {
  sgMail.setApiKey(SENDGRID_API_KEY);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { companyName, contactName, email, phone, materialsNeeded, message } = body;

    if (!companyName || !contactName || !email || !phone) {
      return Response.json({ error: "Missing required fields" }, { status: 400 });
    }

    if (!SENDGRID_API_KEY) {
      return Response.json({ error: "SendGrid not configured" }, { status: 500 });
    }

    await sgMail.send({
      to: TO_EMAIL,
      from: FROM_EMAIL,
      replyTo: email,
      subject: `Quote Request from ${companyName} — ${contactName}`,
      text: [
        `Company: ${companyName}`,
        `Contact: ${contactName}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        `Materials Needed: ${materialsNeeded || "Not specified"}`,
        ``,
        `Message:`,
        message || "No additional message",
      ].join("\n"),
      html: [
        `<h2>New Quote Request</h2>`,
        `<table>`,
        `<tr><td><strong>Company:</strong></td><td>${companyName}</td></tr>`,
        `<tr><td><strong>Contact:</strong></td><td>${contactName}</td></tr>`,
        `<tr><td><strong>Email:</strong></td><td><a href="mailto:${email}">${email}</a></td></tr>`,
        `<tr><td><strong>Phone:</strong></td><td><a href="tel:${phone}">${phone}</a></td></tr>`,
        `<tr><td><strong>Materials:</strong></td><td>${materialsNeeded || "Not specified"}</td></tr>`,
        `</table>`,
        `<h3>Message:</h3>`,
        `<p>${(message || "No additional message").replace(/\n/g, "<br>")}</p>`,
      ].join("\n"),
    });

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ error: "Failed to send email" }, { status: 500 });
  }
}
