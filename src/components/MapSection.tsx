import { MapPin } from "lucide-react";

const MapSection = () => {
  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-heading font-bold text-center mb-2">PLAN D'ACCÈS</h2>
        <div className="flex items-center justify-center gap-2 mb-8">
          <MapPin size={18} className="text-cyan" />
          <span className="text-primary-foreground/80 font-body">Ecole Centrale de Marseille, 38 rue Frédéric Joliot-Curie, 13013 Marseille</span>
        </div>
        <div className="rounded-lg overflow-hidden h-[450px] shadow-lg">
          <iframe
            title="Ecole Centrale de Marseille"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2903.5!2d5.4384!3d43.3487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12c9bf4ce4b1f0e3%3A0x4f3f3b2e1c9b8a0d!2s%C3%89cole%20Centrale%20de%20Marseille!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr"
            style={{ width: "100%", height: "100%", border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
};

export default MapSection;
