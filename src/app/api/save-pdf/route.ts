// app/api/save-pdf/route.ts
import { writeFile } from "fs/promises";
import { NextResponse } from "next/server";
import path from "path";

export async function POST(request: Request) {
  try {
    const data = await request.formData();
    const pdfFile = data.get("pdf") as File;

    if (!pdfFile) {
      return NextResponse.json(
        { error: "No PDF file received" },
        { status: 400 }
      );
    }

    const bytes = await pdfFile.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Buat path untuk menyimpan file
    const pdfPath = path.join(process.cwd(), "public", "pdfs", pdfFile.name);

    // Simpan file
    await writeFile(pdfPath, buffer);

    return NextResponse.json({
      message: "PDF saved successfully",
      path: `/pdfs/${pdfFile.name}`,
    });
  } catch (error) {
    console.error("Error saving PDF:", error);
    return NextResponse.json({ error: "Failed to save PDF" }, { status: 500 });
  }
}
