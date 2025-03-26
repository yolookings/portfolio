import React, { useState } from "react";
import Alert from "../components/Alert"; // Pastikan path ke Alert sesuai
import { PDFDocument, rgb, StandardFonts } from "pdf-lib";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState<"success" | "info" | "warning">(
    "success"
  );
  const [isAlertVisible, setIsAlertVisible] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const generatePDF = async () => {
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage([595.28, 841.89]); // A4 size
    const { width, height } = page.getSize();

    // Title Section
    page.drawText("Form Support Portfolio", {
      x: 50,
      y: height - 50,
      size: 24,
      font: await pdfDoc.embedFont(StandardFonts.HelveticaBold),
    });

    // Date Section
    page.drawText(`Date: ${new Date().toLocaleDateString()}`, {
      x: 50,
      y: height - 90, // Menambah jarak dari judul
      size: 12,
      font: await pdfDoc.embedFont(StandardFonts.Helvetica),
    });

    // Separator Line for Title
    page.drawLine({
      start: { x: 50, y: height - 100 }, // Menambah jarak dari tanggal
      end: { x: width - 50, y: height - 100 },
      thickness: 1,
      color: rgb(0, 0, 0),
    });

    // Customer Information Title
    page.drawText("Customer Information:", {
      x: 50,
      y: height - 130, // Menambah jarak dari garis pemisah
      size: 16,
      font: await pdfDoc.embedFont(StandardFonts.HelveticaBold),
    });

    // Customer Info Details (Name and Email)
    page.drawText(`Name: ${formData.name}`, {
      x: 50,
      y: height - 160, // Menambah jarak dari judul Customer Information
      size: 12,
      font: await pdfDoc.embedFont(StandardFonts.Helvetica),
    });

    page.drawText(`Email: ${formData.email}`, {
      x: 50,
      y: height - 180, // Menambah jarak dari nama
      size: 12,
      font: await pdfDoc.embedFont(StandardFonts.Helvetica),
    });

    // Separator Line for Customer Info
    page.drawLine({
      start: { x: 50, y: height - 190 }, // Menambah jarak dari email
      end: { x: width - 50, y: height - 190 },
      thickness: 1,
      color: rgb(0, 0, 0),
    });

    // Message Section Title
    page.drawText("Message:", {
      x: 50,
      y: height - 220, // Menambah jarak dari garis pemisah
      size: 16,
      font: await pdfDoc.embedFont(StandardFonts.HelveticaBold),
    });

    // Message Content
    page.drawText(formData.message, {
      x: 50,
      y: height - 240, // Menambah jarak dari judul Message
      size: 12,
      font: await pdfDoc.embedFont(StandardFonts.Helvetica),
      maxWidth: width - 100,
    });

    return await pdfDoc.save();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      showAlert("Please fill in all fields", "warning");
      return;
    }

    try {
      setIsSubmitting(true);

      const pdfBytes = await generatePDF();
      const file = new File(
        [pdfBytes],
        `form_${formData.name}_${Date.now()}.pdf`,
        {
          type: "application/pdf",
        }
      );

      const formDataToSend = new FormData();
      formDataToSend.append("pdf", file);

      const response = await fetch("/api/save-pdf", {
        method: "POST",
        body: formDataToSend,
      });

      if (!response.ok) {
        throw new Error("Failed to save PDF");
      }

      const result = await response.json();
      console.log("PDF saved successfully:", result.path);

      setFormData({
        name: "",
        email: "",
        message: "",
      });

      showAlert("Message sent successfully!", "success");
    } catch (error) {
      console.error("Error:", error);
      showAlert("Failed to save PDF. Please try again.", "warning");
    } finally {
      setIsSubmitting(false);
    }
  };

  const showAlert = (message: string, type: "success" | "info" | "warning") => {
    setAlertMessage(message);
    setAlertType(type);
    setIsAlertVisible(true);
  };

  const handleCloseAlert = () => {
    setIsAlertVisible(false);
  };

  return (
    <div>
      <form className="max-w-md mx-auto px-4 sm:px-6" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="w-full mb-4 p-3 bg-gray-800 rounded"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          className="w-full mb-4 p-3 bg-gray-800 rounded"
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          rows={5}
          className="w-full mb-4 p-3 bg-gray-800 rounded"
        ></textarea>
        <button
          type="submit"
          className="w-full py-3 bg-blue-600 rounded hover:bg-blue-700"
        >
          Send Message
        </button>
      </form>

      {isAlertVisible && (
        <Alert
          message={alertMessage}
          type={alertType}
          onClose={handleCloseAlert}
        />
      )}
    </div>
  );
};

export default ContactForm;
