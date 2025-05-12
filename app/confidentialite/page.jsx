export default function PrivacyPolicyPage() {
    return (
      <section className="max-w-3xl mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-6 mt-10">🔒 Politique de confidentialité</h1>
  
        <div className="space-y-6 text-sm leading-relaxed text-muted-foreground">
          <p>
            Cette politique de confidentialité définit comment <strong>Lumino Agency</strong> collecte,
            utilise et protège les informations que vous nous transmettez.
          </p>
  
          <h2 className="text-lg font-semibold">1. Collecte des informations</h2>
          <p>
            Nous collectons des informations lorsque vous nous contactez via notre formulaire,
            notamment :
          </p>
          <ul className="list-disc list-inside ml-4">
            <li>Nom</li>
            <li>Adresse e-mail</li>
            <li>Numéro de téléphone (le cas échéant)</li>
          </ul>
  
          <h2 className="text-lg font-semibold">2. Utilisation des données</h2>
          <p>
            Les informations que vous nous fournissez sont utilisées uniquement pour :
          </p>
          <ul className="list-disc list-inside ml-4">
            <li>Répondre à votre demande</li>
            <li>Vous envoyer une proposition ou un devis</li>
            <li>Améliorer nos services</li>
          </ul>
  
          <h2 className="text-lg font-semibold">3. Partage des données</h2>
          <p>
            Vos données ne sont jamais revendues ni partagées avec des tiers à des fins commerciales.
            Elles peuvent être hébergées sur des outils sécurisés de notre infrastructure (ex : Vercel, OVH, Google).
          </p>
  
          <h2 className="text-lg font-semibold">4. Durée de conservation</h2>
          <p>
            Vos informations sont conservées pendant une durée maximale de 3 ans à compter du dernier contact,
            sauf demande de suppression.
          </p>
  
          <h2 className="text-lg font-semibold">5. Vos droits</h2>
          <p>
            Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez de droits :
          </p>
          <ul className="list-disc list-inside ml-4">
            <li>D’accès à vos données</li>
            <li>De rectification</li>
            <li>De suppression</li>
            <li>D’opposition</li>
          </ul>
          <p>
            Pour exercer ces droits : <a href="mailto:contact@lumino-agency.com" className="text-blue-500 hover:underline">contact@lumino-agency.com</a>
          </p>
  
          <h2 className="text-lg font-semibold">6. Cookies</h2>
          <p>
            Nous n’utilisons pas de cookies à des fins de tracking publicitaire. Des cookies techniques
            peuvent être utilisés pour le bon fonctionnement du site.
          </p>
  
          <p className="text-xs text-gray-400 mt-8">Dernière mise à jour : 12 mai 2025</p>
        </div>
      </section>
    );
  }
  