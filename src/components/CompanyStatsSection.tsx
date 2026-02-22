import { motion } from "framer-motion";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const sectorData = [
  { name: "BTP / Construction", value: 22 },
  { name: "Énergie", value: 18 },
  { name: "Conseil / Ingénierie", value: 15 },
  { name: "Info / Numérique", value: 14 },
  { name: "Industrie", value: 12 },
  { name: "Transport / Logistique", value: 8 },
  { name: "Finance / Banque", value: 6 },
  { name: "Environnement", value: 3 },
  { name: "Autres", value: 2 },
];

const structureData = [
  { name: "Grandes entreprises", value: 40 },
  { name: "ETI", value: 25 },
  { name: "PME", value: 20 },
  { name: "Startups", value: 10 },
  { name: "Organismes publics", value: 5 },
];

const COLORS_SECTOR = [
  "hsl(197, 71%, 45%)", "hsl(197, 71%, 55%)", "hsl(197, 71%, 65%)",
  "hsl(213, 40%, 20%)", "hsl(213, 40%, 30%)", "hsl(213, 35%, 40%)",
  "hsl(197, 50%, 50%)", "hsl(213, 30%, 50%)", "hsl(197, 40%, 75%)",
];

const COLORS_STRUCTURE = [
  "hsl(197, 71%, 50%)", "hsl(197, 71%, 63%)", "hsl(213, 40%, 20%)",
  "hsl(213, 35%, 35%)", "hsl(197, 50%, 75%)",
];

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-card border border-border rounded-lg px-3 py-2 shadow-lg text-sm">
        <p className="font-heading font-semibold text-foreground">{payload[0].name}</p>
        <p className="text-muted-foreground">{payload[0].value}%</p>
      </div>
    );
  }
  return null;
};

const Legend = ({ data, colors }: { data: { name: string; value: number }[]; colors: string[] }) => (
  <div className="flex flex-col gap-1.5">
    {data.map((entry, i) => (
      <div key={entry.name} className="flex items-center gap-2">
        <span
          className="inline-block w-3 h-3 rounded-sm shrink-0"
          style={{ backgroundColor: colors[i % colors.length] }}
        />
        <span className="text-xs font-body text-foreground/80 leading-tight">{entry.name}</span>
      </div>
    ))}
  </div>
);

const ChartWithLegend = ({
  data,
  colors,
}: {
  data: { name: string; value: number }[];
  colors: string[];
}) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.3 }}
    className="flex flex-col md:flex-row items-center justify-center gap-6"
  >
    <div className="w-full md:w-auto h-[280px] min-w-[240px]">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={110}
            innerRadius={45}
            dataKey="value"
            paddingAngle={1}
            label={false}
            labelLine={false}
          >
            {data.map((_, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} stroke="none" />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
        </PieChart>
      </ResponsiveContainer>
    </div>
    <Legend data={data} colors={colors} />
  </motion.div>
);

const CompanyStatsSection = () => (
  <section className="py-16 bg-background">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
        {/* Left column - Text (40%) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-[40%] lg:shrink-0"
        >
          <h2 className="text-xl lg:text-2xl font-heading font-bold text-foreground mb-4">136 EXPOSANTS</h2>
          <p className="text-sm font-body text-muted-foreground leading-relaxed">
            C'est plus de 136 entreprises qui font le déplacement chaque année pour présenter leurs activités et rencontrer les étudiants qui viennent se présenter à elles.
          </p>
        </motion.div>

        {/* Right column - Charts (60%) */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-[60%]"
        >
          <h3 className="text-2xl font-heading font-bold text-center text-foreground mb-6">STATISTIQUES ENTREPRISES</h3>
          <Tabs defaultValue="sector" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="sector">Secteurs d'activités</TabsTrigger>
              <TabsTrigger value="structure">Types de structures</TabsTrigger>
            </TabsList>

            <TabsContent value="sector">
              <ChartWithLegend data={sectorData} colors={COLORS_SECTOR} />
            </TabsContent>
            <TabsContent value="structure">
              <ChartWithLegend data={structureData} colors={COLORS_STRUCTURE} />
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </div>
  </section>
);

export default CompanyStatsSection;
