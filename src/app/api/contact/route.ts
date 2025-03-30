import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const data = await req.formData();
    const pdfFile = data.get("pdf") as File;
    const email = data.get("email") as string;

    if (!pdfFile || !email) {
      return NextResponse.json(
        { error: "Missing PDF or email" },
        { status: 400 }
      );
    }

    const bytes = await pdfFile.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Kirim email dengan Resend
    const response = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "yolooaster@gmail.com",
      subject: "Form Submission - Support Portfolio",
      text: "Attached is your submitted form in PDF format.",
      attachments: [
        {
          filename: pdfFile.name,
          content: buffer.toString("base64"),
          contentType: "application/pdf",
        },
      ],
    });

    if (response.error) {
      throw new Error(response.error.message);
    }

    return NextResponse.json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
