const parrain = {
  name: "VINCI Energies",
  src: "/Logo_VE_bleu_Rouge.png",
};

const partenaires = [
  { name: "Métropole Aix-Marseille Provence", src: "/960px-Logo_Métropole_Aix_Marseille_Provence.svg.png" },
  { name: "Batiactu", src: "/81792a_3e8f982fc8a6497ca46a98b487517d35~mv2.png" },
  { name: "Haribo", src: "/png-clipart-logo-haribo-of-america-brand-bear-bear-animals-text.png" },
  { name: "Min. Enseignement Sup.", src: "/3840px-Logo_du_Ministère_de_l'Enseignement_Supérieur_et_de_la_Recherche_(2022).svg.png" },
  { name: "La Mie Câline", src: "/logo-la-mie-caline.png" },
  { name: "Cafés Richard", src: "/logo-cafes-richard.png" },
  { name: "Gomet'", src: "/logo.png" },
  { name: "Studyrama", src: "/752_ckeditor_agenda_53966_637f4194bed9f_1.png" },
];

export default function PartnersSection() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-heading font-bold text-center text-foreground mb-4">PARRAIN</h2>
        <div className="flex justify-center mb-12">
          <div className="w-56 h-28 bg-white rounded-lg flex items-center justify-center border border-border p-3">
            <img src={parrain.src} alt={parrain.name} className="object-contain h-20 w-auto" onError={(e) => {
              e.currentTarget.style.display = "none";
              const s = document.createElement("span");
              s.textContent = parrain.name;
              s.className = "text-sm font-bold text-center";
              e.currentTarget.parentElement?.appendChild(s);
            }} />
          </div>
        </div>

        <h2 className="text-3xl font-heading font-bold text-center text-foreground mb-8">NOS PARTENAIRES</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 items-center justify-items-center">
          {partenaires.map((p) => (
            <div key={p.name} className="w-36 h-20 bg-white rounded-lg flex items-center justify-center border border-border p-2">
              <img src={p.src} alt={p.name} className="object-contain h-16 w-auto" onError={(e) => {
                e.currentTarget.style.display = "none";
                const s = document.createElement("span");
                s.textContent = p.name;
                s.className = "text-xs font-bold text-center leading-tight";
                s.style.color = "hsl(var(--foreground) / 0.7)";
                e.currentTarget.parentElement?.appendChild(s);
              }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
