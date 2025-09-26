// Telegram notification service
export async function sendTelegramNotification(message: string) {
  const botToken = "8429298751:AAE85VdVg1JnTI6rLvNuAaharNuuwY7zJtw"
  const chatId = "7165753869"

  if (!botToken || !chatId) {
    console.error("Telegram bot token or chat ID not configured")
    return
  }

  try {
    const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: "HTML",
      }),
    })

    if (!response.ok) {
      throw new Error(`Telegram API error: ${response.status}`)
    }

    return await response.json()
  } catch (error) {
    console.error("Failed to send Telegram notification:", error)
  }
}
