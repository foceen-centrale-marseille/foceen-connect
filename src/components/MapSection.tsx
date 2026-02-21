import { MapPin } from "lucide-react";

const MapSection = () => {
  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-heading font-bold text-center mb-2">PLAN D'ACCÈS</h2>
        <div className="flex items-center justify-center gap-2 mb-8">
          <MapPin size={18} className="text-cyan" />
          <span className="text-primary-foreground/80 font-body">Parc Chanot, Marseille</span>
        </div>
        <div className="rounded-lg overflow-hidden h-[400px] shadow-lg">
          <iframe
            title="Parc Chanot, Marseille"
            src="https://www.openstreetmap.org/export/embed.html?bbox=5.3900%2C43.2580%2C5.4070%2C43.2670&layer=mapnik&marker=43.2627%2C5.3984"
            style={{ width: "100%", height: "100%", border: 0 }}
            allowFullScreen
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default MapSection;
