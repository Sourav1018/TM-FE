import { Button } from "@/components/ui/button"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Navbar } from "@/components/ui/navbar"

export default function Home() {
  return (
    <div className="bg-transparent">

      {/* Navbar */}
      <Navbar />

      {/* Main content */}
      <div className="flex flex-col gap-6 p-6">

        {/* Buttons section */}
        <div className="flex gap-4 items-center">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="inverted">Inverted</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="yellow">Yellow</Button>
          <Button variant="ghost">Ghost</Button>
        </div>

        {/* Card section */}
        <Card className="w-80">
          <CardContent>
            <CardTitle>Goa Trip</CardTitle>
            <p>3 Days / 2 Nights</p>

            {/* Button inside card */}
            <Button variant="primary" className="mt-4">
              View Details
            </Button>
          </CardContent>
        </Card>

        {/* Input test */}
        <div className="w-80">
          <Input placeholder="Enter your email" />
        </div>

        {/* Badge test */}
        <div className="flex gap-3">
          <Badge status="confirmed" />
          <Badge status="pending" />
          <Badge status="cancelled" />
        </div>

      </div>
    </div>
  )
}