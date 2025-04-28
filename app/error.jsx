"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { AlertTriangle } from "lucide-react"

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <AlertTriangle className="h-16 w-16 text-destructive mb-6" />
      <h2 className="text-3xl font-bold mb-4">Une erreur est survenue</h2>
      <p className="text-muted-foreground mb-8 max-w-md">
        Nous sommes désolés, une erreur inattendue s'est produite. Notre équipe a été notifiée.
      </p>
      <div className="flex gap-4">
        <Button onClick={() => reset()}>Réessayer</Button>
        <Button variant="outline" onClick={() => (window.location.href = "/")}>
          Retour à l'accueil
        </Button>
      </div>
    </div>
  )
}
