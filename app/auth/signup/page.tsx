"use client"

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
          <div className="absolute inset-0 flex flex-col p-12 text-white bg-black/10">
            {/* Logo Section */}
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary">
                <div className="h-6 w-6 border-2 border-black rounded-full flex items-center justify-center">
                  <div className="h-2 w-2 bg-black rounded-full" />
                </div>
              </div>
              <span className="text-xl md:text-2xl font-bold tracking-tight text-white">Horizon Companion</span>
            </div>

            {/* Bottom Content Group (Hero Text + Social Proof) */}
            <div className="mt-auto space-y-8 pb-4">
              {/* Hero Text */}
              <div className="space-y-4">
                <h1 className="text-3xl md:text-4xl font-bold leading-tight text-white">
                  Your path to <br />
                  <span className="text-secondary">unforgettable</span> moments.
                </h1>
                <p className="text-base md:text-lg opacity-90 max-w-sm">
                  Join a community of curious explorers and let our sunlit path guide your next great adventure.
                </p>
              </div>

              {/* Social Proof */}
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-white bg-slate-200">
                      <Image
                        src={`https://i.pravatar.cc/100?u=${i + 10}`}
                        alt="user"
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
                <p className="text-sm font-medium opacity-90">Joined by 12k+ travelers</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Signup Form */}
        <CardContent className="flex w-full flex-col p-8 md:w-1/2 md:p-12">
          {/* Header */}
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">Start Your Journey</h2>
            <p className="mt-2 text-sm md:text-base text-slate-500">Create your free account to unlock exclusive experiences.</p>
          </div>

          {/* Form */}
          <form className="space-y-6">
            {/* Email Address */}
            <div className="space-y-2">
              <Label className="text-sm font-semibold text-foreground">Email Address</Label>
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400 transition-colors group-focus-within:text-primary" />
                <Input
                  type="email"
                  placeholder="explorer@horizon.com"
                  className="h-14 border-none bg-slate-100 pl-12 pr-4 text-base focus-visible:ring-2 focus-visible:ring-primary/20"
                />
              </div>
            </div>

            {/* Phone Number */}
            <div className="space-y-2">
              <Label className="text-sm font-semibold text-foreground">Phone Number</Label>
              <div className="relative group">
                <Smartphone className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400 transition-colors group-focus-within:text-primary" />
                <Input
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  className="h-14 border-none bg-slate-100 pl-12 pr-4 text-base focus-visible:ring-2 focus-visible:ring-primary/20"
                />
              </div>
            </div>

            {/* Terms & Privacy */}
            <div className="flex items-start lg:items-center gap-2">
              <Checkbox id="terms" className="h-5 w-5 border-slate-300 accent-primary" />
              <Label htmlFor="terms" className="text-sm text-slate-500">
                I agree to the <Link href="#" className="font-semibold text-primary underline-offset-4 hover:underline">Terms of Service</Link> and <Link href="#" className="font-semibold text-primary underline-offset-4 hover:underline">Privacy Policy</Link>.
              </Label>
            </div>

            {/* Submit Button */}
            <Button type="button" onClick={handleSignup} className="h-14 w-full bg-primary text-lg font-bold hover:bg-primary/90">
              Create Account
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            {/* Footer */}
            <p className="text-center text-slate-500">
              Already have an account?{" "}
              <Link href="#" className="font-bold text-primary hover:underline">
                Log in
              </Link>
            </p>
          </form>
        </CardContent>
      </Card>

      {/* Floating Help Button */}
      <div className="fixed bottom-8 right-8">
        <Button className="h-12 gap-2 bg-secondary px-6 font-bold text-black shadow-lg shadow-yellow-200 hover:bg-secondary/90">
          <HelpCircle className="h-5 w-5" />
          Need help?
        </Button>
      </div>
    </div>
  )
}
