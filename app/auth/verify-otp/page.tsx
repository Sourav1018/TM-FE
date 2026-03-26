"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { formatTime, handleOtpChange, handleOtpKeyDown } from "@/utils"
import { ArrowRight, AtSign, Clock, Lock, ShieldCheck } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function VerifyOtpPage() {
  const [otp, setOtp] = useState(["", "", "", "", "", ""])
  const [timer, setTimer] = useState(59)

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => setTimer((prev) => prev - 1), 1000)
      return () => clearInterval(interval)
    }
  }, [timer])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background p-4 md:p-8">
      {/* Logo */}
      <div className="mb-12 flex items-center gap-2">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary">
          <div className="h-6 w-6 border-2 border-black rounded-full flex items-center justify-center">
            <div className="h-2 w-2 bg-black rounded-full" />
          </div>
        </div>
        <span className="text-xl md:text-2xl font-bold tracking-tight text-foreground">Horizon Companion</span>
      </div>

      {/* Main Card */}
      <Card className="relative w-full max-w-lg overflow-hidden rounded-[2.5rem] border-none bg-white p-8 shadow-2xl shadow-blue-100/50 md:p-12">
        <CardContent className="flex flex-col items-center p-0 text-center">
          {/* Shield Icon */}
          <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/5 text-primary">
            <ShieldCheck className="h-8 w-8" />
          </div>

          {/* Heading */}
          <h1 className="mb-2 text-3xl font-bold text-foreground">Verify Your Identity</h1>
          <p className="mb-8 text-slate-500">
            We&apos;ve sent a 6-digit code to your email <br />
            <span className="font-semibold text-primary">alex@example.com</span>
          </p>

          {/* OTP Inputs */}
          <div className="mb-8 flex justify-center gap-3 md:gap-4">
            {otp.map((digit, index) => (
              <Input
                key={index}
                id={`otp-${index}`}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) => handleOtpChange(index, e.target.value, otp, setOtp)}
                onKeyDown={(e) => handleOtpKeyDown(index, e.key, otp[index])}
                className="h-14 w-12 border-none bg-slate-100 text-center text-xl font-bold focus-visible:ring-2 focus-visible:ring-primary/20 md:h-16 md:w-14"
              />
            ))}
          </div>

          {/* Resend Timer */}
          <div className="mb-10 flex items-center gap-2 text-sm font-medium text-slate-500">
            <Clock className="h-4 w-4 text-orange-400" />
            <span>Resend code in <span className="text-orange-400">{formatTime(timer)}</span></span>
          </div>

          {/* Action Button */}
          <Button className="mb-8 h-14 w-full bg-primary text-lg font-bold hover:bg-primary/90">
            Verify & Proceed
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>

          {/* Change Email */}
          <Link href="#" className="mb-8 flex items-center gap-2 text-sm font-bold text-primary hover:underline">
            <AtSign className="h-4 w-4" />
            Change email address
          </Link>

          {/* Help Line */}
          <div className="h-px w-32 bg-slate-100 mb-6"></div>
          <p className="text-sm text-slate-500">
            Need help?{'  '}<Link href="#" className="font-semibold text-foreground underline decoration-slate-300 underline-offset-4">Contact Support</Link>
          </p>
        </CardContent>
      </Card>

      {/* Footer Badges */}
      <div className="mt-12 flex items-center gap-8 text-[11px] font-bold tracking-widest text-slate-400 uppercase">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-slate-300" />
          SECURE SSL
        </div>
        <div className="flex items-center gap-2">
          <Lock className="h-3 w-3" />
          ENCRYPTED
        </div>
      </div>
    </div>
  )
}
