import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FileQuestion } from "lucide-react"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
      <FileQuestion className="h-16 w-16 text-muted-foreground mb-6" />
      <h2 className="text-3xl font-bold mb-4">Page non trouvée</h2>
      <p className="text-muted-foreground mb-8 max-w-md">La page que vous recherchez n'existe pas ou a été déplacée.</p>
      <Button asChild>
        <Link href="/">Retour à l'accueil</Link>
      </Button>
    </div>
  )
}
