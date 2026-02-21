import { motion, AnimatePresence } from "framer-motion";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const sectorData = [
  { name: "BTP / Construction", value: 22 },
  { name: "Énergie", value: 18 },
  { name: "Conseil / Ingénierie", value: 15 },
  { name: "Informatique / Numérique", value: 14 },
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

const CleanPieChart = ({
  data,
  colors,
}: {
  data: { name: string; value: number }[];
  colors: string[];
}) => (
  <div className="w-full h-[380px]">
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={140}
          innerRadius={60}
          dataKey="value"
          paddingAngle={1}
        >
          {data.map((_, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} stroke="none" />
          ))}
        </Pie>
        <Tooltip content={<CustomTooltip />} />
      </PieChart>
    </ResponsiveContainer>
  </div>
);

const CompanyStatsSection = () => {
  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-heading font-bold text-center mb-10"
        >
          STATISTIQUES ENTREPRISES
        </motion.h2>

        <Tabs defaultValue="sector" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="sector">Secteurs d'activités</TabsTrigger>
            <TabsTrigger value="structure">Types de structures</TabsTrigger>
          </TabsList>

          <AnimatePresence mode="wait">
            <TabsContent value="sector" key="sector">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
                <CleanPieChart data={sectorData} colors={COLORS_SECTOR} />
              </motion.div>
            </TabsContent>
            <TabsContent value="structure" key="structure">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
                <CleanPieChart data={structureData} colors={COLORS_STRUCTURE} />
              </motion.div>
            </TabsContent>
          </AnimatePresence>
        </Tabs>
      </div>
    </section>
  );
};

export default CompanyStatsSection;
