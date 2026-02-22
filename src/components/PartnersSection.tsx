const parrain = {
  name: "VINCI Energies",
  src: "/Logo_VE_bleu_Rouge.png",
};

const partenaires = [
  { name: "Groupe ADF", src: "/logos/groupe-adf.png" },
  { name: "CEA", src: "/logos/cea.png" },
];

export default function PartnersSection() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-heading font-bold text-center text-foreground mb-4">PARRAIN</h2>
        <div className="flex justify-center mb-12">
          <div className="w-72 h-32 bg-white rounded-lg flex items-center justify-center border border-border p-4">
            <img src={parrain.src} alt={parrain.name} className="object-contain h-24 w-auto" />
          </div>
        </div>

        <h2 className="text-3xl font-heading font-bold text-center text-foreground mb-8">NOS PARTENAIRES</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 items-center justify-items-center">
          {partenaires.map((p) => (
            <div key={p.name} className="w-36 h-20 bg-white rounded-lg flex items-center justify-center border border-border p-2">
              <img src={p.src} alt={p.name} className="object-contain h-16 w-auto" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
