import { NextResponse } from "next/server";
import data from "@/app/Data/project_data.json";

export async function GET() {
  try {
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching project data:", error);
    return NextResponse.json(
      { error: "Failed to fetch project data" },
      { status: 500 }
    );
  }
}
