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

const Legend = ({ data, colors, light = false }: { data: { name: string; value: number }[]; colors: string[]; light?: boolean }) => (
  <div className="flex flex-col gap-1.5">
    {data.map((entry, i) => (
      <div key={entry.name} className="flex items-center gap-2">
        <span
          className="inline-block w-3 h-3 rounded-sm shrink-0"
          style={{ backgroundColor: colors[i % colors.length] }}
        />
        <span className={`text-xs font-body leading-tight ${light ? "text-primary-foreground/80" : "text-foreground/80"}`}>
          {entry.name}
        </span>
      </div>
    ))}
  </div>
);

const ChartWithLegend = ({
  data,
  colors,
  light = false,
}: {
  data: { name: string; value: number }[];
  colors: string[];
  light?: boolean;
}) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.3 }}
    className="flex flex-col md:flex-row items-center justify-center gap-6"
  >
    <div className="w-full md:w-auto h-[320px] min-w-[280px]">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={130}
            innerRadius={55}
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
    <Legend data={data} colors={colors} light={light} />
  </motion.div>
);

const CompanyStatsSection = () => (
  <section className="py-16 bg-primary text-primary-foreground">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl font-heading font-bold text-center mb-10"
      >
        STATISTIQUES ENTREPRISES
      </motion.h2>

      <Tabs defaultValue="sector" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="sector">Secteurs d'activités</TabsTrigger>
          <TabsTrigger value="structure">Types de structures</TabsTrigger>
        </TabsList>

        <TabsContent value="sector">
          <ChartWithLegend data={sectorData} colors={COLORS_SECTOR} light />
        </TabsContent>
        <TabsContent value="structure">
          <ChartWithLegend data={structureData} colors={COLORS_STRUCTURE} light />
        </TabsContent>
      </Tabs>
    </div>
  </section>
);

export default CompanyStatsSection;
