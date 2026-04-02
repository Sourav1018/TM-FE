"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowRight, HelpCircle, Mail, Smartphone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import React from "react"

export default function SignupPage() {
  const router = useRouter()

  const handleSignup = () => {
    router.push("/auth/verify-otp")
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4 md:p-8">
      {/* Main Container */}
      <Card className="flex w-full max-w-250 overflow-hidden border-none bg-white shadow-2xl shadow-blue-100/50">
        {/* Left Side - Image & Branding */}
        <div className="relative hidden w-1/2 md:block">
          <Image
            src="/images/signup.png"
            alt="Signup Background"
            fill
            className="object-cover"
            priority
          />
          {/* Overlay Content */}
          <div className="absolute inset-0 flex flex-col bg-black/10 p-12 text-white">
            {/* Logo Section */}
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary">
                <div className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-black">
                  <div className="h-2 w-2 rounded-full bg-black" />
                </div>
              </div>
              <span className="text-xl font-bold tracking-tight text-white md:text-2xl">
                Horizon Companion
              </span>
            </div>

            {/* Bottom Content Group (Hero Text + Social Proof) */}
            <div className="mt-auto space-y-8 pb-4">
              {/* Hero Text */}
              <div className="space-y-4">
                <h1 className="text-3xl leading-tight font-bold text-white md:text-4xl">
                  Your path to <br />
                  <span className="text-secondary">unforgettable</span> moments.
                </h1>
                <p className="max-w-sm text-base opacity-90 md:text-lg">
                  Join a community of curious explorers and let our sunlit path
                  guide your next great adventure.
                </p>
              </div>

              {/* Social Proof */}
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map((i) => (
                    <Avatar key={i} className="h-10 w-10 border-2 border-white">
                      <AvatarImage
                        src={`https://i.pravatar.cc/100?u=${i + 10}`}
                        alt="user"
                      />
                      <AvatarFallback>U</AvatarFallback>
                    </Avatar>
                  ))}
                </div>
                <p className="text-sm font-medium opacity-90">
                  Joined by 12k+ travelers
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Signup Form */}
        <CardContent className="flex w-full flex-col p-8 md:w-1/2 md:p-12">
          {/* Header */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-foreground md:text-3xl">
              Start Your Journey
            </h2>
            <p className="mt-2 text-sm text-slate-500 md:text-base">
              Create your free account to unlock exclusive experiences.
            </p>
          </div>

          {/* Form */}
          <form className="space-y-6">
            {/* Email Address */}
            <div className="space-y-2">
              <Label className="text-sm font-semibold text-foreground">
                Email Address
              </Label>
              <div className="group relative">
                <Mail className="absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 text-slate-400 transition-colors group-focus-within:text-primary" />
                <Input
                  type="email"
                  placeholder="explorer@horizon.com"
                  className="h-14 border-none bg-slate-100 pr-4 pl-12 text-sm focus-visible:ring-2 focus-visible:ring-primary/20 md:text-base"
                />
              </div>
            </div>

            {/* Phone Number */}
            <div className="space-y-2">
              <Label className="text-sm font-semibold text-foreground">
                Phone Number
              </Label>
              <div className="group relative">
                <Smartphone className="absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 text-slate-400 transition-colors group-focus-within:text-primary" />
                <Input
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  className="h-14 border-none bg-slate-100 pr-4 pl-12 text-sm focus-visible:ring-2 focus-visible:ring-primary/20 md:text-base"
                />
              </div>
            </div>

            {/* Terms & Privacy */}
            <div className="flex items-start justify-start gap-3">
              <Checkbox
                id="terms"
                className="my-0.5 h-5 w-5 border-slate-300 accent-primary"
              />
              <Label
                htmlFor="terms"
                className="flex-wrap text-sm leading-relaxed text-slate-500"
              >
                I agree to the{" "}
                <Link
                  href="#"
                  className="font-semibold text-primary underline-offset-4 hover:underline"
                >
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link
                  href="#"
                  className="font-semibold text-primary underline-offset-4 hover:underline"
                >
                  Privacy Policy
                </Link>
                .
              </Label>
            </div>

            {/* Submit Button */}
            <Button
              type="button"
              onClick={handleSignup}
              className="h-14 w-full bg-primary text-lg font-bold hover:bg-primary/90"
            >
              Create Account
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            {/* Footer */}
            <p className="text-center text-slate-500">
              Already have an account?{" "}
              <Link
                href="/auth/login"
                className="font-bold text-primary hover:underline"
              >
                Log in
              </Link>
            </p>
          </form>
        </CardContent>
      </Card>

      {/* Floating Help Button */}
      <div className="fixed right-8 bottom-8">
        <Button className="h-12 gap-2 bg-secondary px-6 font-bold text-black shadow-lg shadow-yellow-200 hover:bg-secondary/90">
          <HelpCircle className="h-5 w-5" />
          Need help?
        </Button>
      </div>
    </div>
  )
}
