"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowRight, Mail } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import React from "react"

export default function LoginPage() {
  const router = useRouter()

  const handleLogin = () => {
    // Logic for login can be added here
    router.push("/auth/verify-otp")
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">

      {/* Login Card */}
      <Card className="w-full max-w-md overflow-hidden border-none bg-white/95  shadow-2xl shadow-blue-100/50 p-8 md:p-12">
        <CardContent className="flex flex-col items-center p-0">
          {/* Logo Section */}
          <div className="mb-6 flex flex-col items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary">
              <div className="h-7 w-7 border-2 border-black rounded-full flex items-center justify-center">
                <div className="h-2.5 w-2.5 bg-black rounded-full" />
              </div>
            </div>
            <div className="text-center">
              <h1 className="text-3xl font-bold tracking-tight text-foreground">Horizon Companion</h1>
              <p className="mt-1 text-sm font-medium text-slate-500">Your Sunlit Path Awaits</p>
            </div>
          </div>

          {/* Form */}
          <form className="w-full space-y-8 mt-4">
            {/* Email Address */}
            <div className="space-y-3">
              <Label className="text-sm font-semibold text-foreground ml-1">Email Address</Label>
              <div className="relative group">
                <Mail className="absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400 transition-colors group-focus-within:text-primary" />
                <Input
                  type="email"
                  placeholder="name@example.com"
                  className="h-14 border-none bg-slate-100 pl-14 pr-4 text-base rounded-2xl focus-visible:ring-2 focus-visible:ring-primary/20"
                />
              </div>
            </div>

            {/* Submit Button */}
            <Button
              type="button"
              onClick={handleLogin}
              className="h-14 w-full bg-[#00658D] text-lg font-bold rounded-full hover:bg-[#005575] transition-all shadow-lg shadow-blue-900/10"
            >
              Sign In
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            {/* Footer */}
            <p className="text-center text-sm font-medium text-slate-500">
              New to Horizon?{" "}
              <Link href="/auth/signup" className="font-bold text-[#00658D] hover:underline">
                Create Account
              </Link>
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
