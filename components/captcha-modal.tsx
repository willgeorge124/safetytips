"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

interface CaptchaModalProps {
  isOpen: boolean
  onVerified: () => void
}

export function CaptchaModal({ isOpen, onVerified }: CaptchaModalProps) {
  const [captchaQuestion, setCaptchaQuestion] = useState("")
  const [correctAnswer, setCorrectAnswer] = useState(0)
  const [userAnswer, setUserAnswer] = useState("")
  const [error, setError] = useState("")

  const generateCaptcha = () => {
    const num1 = Math.floor(Math.random() * 10) + 1
    const num2 = Math.floor(Math.random() * 10) + 1
    const operations = ["+", "-", "*"]
    const operation = operations[Math.floor(Math.random() * operations.length)]

    let answer = 0
    let question = ""

    switch (operation) {
      case "+":
        answer = num1 + num2
        question = `${num1} + ${num2}`
        break
      case "-":
        answer = num1 - num2
        question = `${num1} - ${num2}`
        break
      case "*":
        answer = num1 * num2
        question = `${num1} × ${num2}`
        break
    }

    setCaptchaQuestion(question)
    setCorrectAnswer(answer)
  }

  useEffect(() => {
    if (isOpen) {
      generateCaptcha()
      setUserAnswer("")
      setError("")
    }
  }, [isOpen])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const answer = Number.parseInt(userAnswer)

    if (isNaN(answer)) {
      setError("Please enter a valid number")
      return
    }

    if (answer === correctAnswer) {
      onVerified()
    } else {
      setError("Incorrect answer. Please try again.")
      generateCaptcha()
      setUserAnswer("")
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full mx-4">
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-[#e31837] rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Security Verification</h2>
          <p className="text-gray-600">Please solve this simple math problem to continue</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="text-center">
            <div className="bg-gray-100 p-4 rounded-lg mb-4">
              <span className="text-2xl font-bold text-gray-900">{captchaQuestion} = ?</span>
            </div>
            <input
              type="text"
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              placeholder="Enter your answer"
              className="w-full p-3 border border-gray-300 rounded-lg text-center text-lg focus:outline-none focus:ring-2 focus:ring-[#0066b2] focus:border-transparent"
              autoFocus
            />
          </div>

          {error && <div className="text-red-600 text-sm text-center bg-red-50 p-2 rounded">{error}</div>}

          <div className="flex space-x-3">
            <Button type="button" variant="outline" onClick={generateCaptcha} className="flex-1 bg-transparent">
              New Question
            </Button>
            <Button type="submit" className="flex-1 bg-[#0066b2] hover:bg-[#004d8a] text-white">
              Verify
            </Button>
          </div>
        </form>

        <div className="mt-4 text-xs text-gray-500 text-center">
          This verification helps protect against automated access
        </div>
      </div>
    </div>
  )
}
