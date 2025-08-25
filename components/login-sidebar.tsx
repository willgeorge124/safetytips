import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MapPin } from "lucide-react"

export function LoginSidebar() {
  return (
    <div className="w-80 bg-primary text-white p-6 min-h-screen">
      <div className="space-y-6">
        {/* Login Form */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Sign in to Online Banking</h2>
          <div className="space-y-4">
            <Input placeholder="Online ID" className="bg-white text-black border-0" />
            <Input type="password" placeholder="Passcode" className="bg-white text-black border-0" />
            <div className="flex items-center space-x-2 text-sm">
              <input type="checkbox" id="save-id" className="rounded" />
              <label htmlFor="save-id">Save Online ID</label>
            </div>
            <Button className="w-full bg-secondary hover:bg-secondary/90 text-white font-semibold">Sign In</Button>
          </div>

          <div className="mt-4 space-y-2 text-sm">
            <a href="#" className="block text-white hover:underline">
              Forgot ID/Passcode?
            </a>
            <a href="#" className="block text-white hover:underline">
              Security & Help
            </a>
            <a href="#" className="block text-white hover:underline">
              Enroll
            </a>
          </div>
        </div>

        {/* Location Services */}
        <div className="border-t border-red-400 pt-6">
          <div className="flex items-start space-x-3">
            <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
            <div>
              <p className="text-sm font-medium">Find your closest financial center or ATM</p>
              <p className="text-xs mt-1 opacity-90">Search by address, city and state or ZIP code</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
