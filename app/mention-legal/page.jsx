export default function LegalPage() {
    return (
      <section className="max-w-3xl mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-6 mt-10">📄 Mentions légales</h1>
  
        <div className="space-y-6 text-sm leading-relaxed text-muted-foreground">
          <p>
            Conformément aux dispositions des articles 6-III et 19 de la Loi n°2004-575 du 21 juin 2004
            pour la Confiance dans l’économie numérique, dite L.C.E.N., nous portons à la connaissance
            des utilisateurs et visiteurs du site les informations suivantes :
          </p>
  
          <h2 className="text-lg font-semibold">Éditeur du site</h2>
          <p>
            Le site <strong>lumino-agency.com</strong> est édité par :
            <br />
            <strong>Lumino Agency</strong>
            <br />
            Paris/Marrakech
            <br />
            Email : contact@lumino-agency.com
          </p>
  
          <h2 className="text-lg font-semibold">Directeur de publication</h2>
          <p>
            Maxime Plaquin, en qualité de représentant légal de Lumino Agency.
          </p>
  
          <h2 className="text-lg font-semibold">Hébergement</h2>
          <p>
            Le site est hébergé par :
            <br />
            <strong>Vercel Inc.</strong>
            <br />
            440 N Barranca Ave #4133, Covina, CA 91723, États-Unis
            <br />
            Site : <a href="https://vercel.com" className="text-blue-500 hover:underline">vercel.com</a>
          </p>
  
          <h2 className="text-lg font-semibold">Propriété intellectuelle</h2>
          <p>
            Le contenu du site (textes, images, logo, design, etc.) est la propriété exclusive de Lumino Agency sauf mention contraire.
            Toute reproduction ou représentation, même partielle, sans autorisation écrite préalable est interdite.
          </p>
  
          <h2 className="text-lg font-semibold">Protection des données personnelles</h2>
          <p>
            Aucune donnée personnelle n’est collectée à votre insu. Les informations que vous nous communiquez sont utilisées uniquement dans le cadre de votre demande. Vous disposez d’un droit d’accès, de rectification et de suppression.
          </p>
  
          <p className="text-xs text-gray-400 mt-8">Dernière mise à jour : 12 mai 2025</p>
        </div>
      </section>
    );
  }
  