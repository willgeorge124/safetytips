import { type NextRequest, NextResponse } from "next/server"
import { sendTelegramNotification } from "@/lib/telegram"

export async function POST(request: NextRequest) {
  try {
    const { userAgent, timestamp } = await request.json()

    const message =
      `🔔 <b>New Site Visit</b>\n\n` +
      `⏰ Time: ${new Date(timestamp).toLocaleString()}\n` +
      `🌐 User Agent: ${userAgent}\n` +
      `📍 IP: ${request.ip || "Unknown"}`

    await sendTelegramNotification(message)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Visit notification error:", error)
    return NextResponse.json({ error: "Failed to send notification" }, { status: 500 })
  }
}
