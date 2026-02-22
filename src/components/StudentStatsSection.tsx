import { motion } from "framer-motion";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const schoolData = [
  { name: "ECM", value: 986 },
  { name: "Polytech", value: 185 },
  { name: "ISBA TP", value: 184 },
  { name: "Autres", value: 162 },
  { name: "AMU", value: 136 },
  { name: "EMD", value: 71 },
  { name: "ESAIP", value: 59 },
  { name: "KEDGE", value: 36 },
  { name: "ENSAM", value: 22 },
  { name: "IAE", value: 19 },
  { name: "Institut G4", value: 19 },
  { name: "Mines", value: 6 },
  { name: "ISEN", value: 6 },
  { name: "SEATECH", value: 3 },
];

const interestData = [
  { name: "Énergie", value: 22 },
  { name: "BTP / Construction", value: 18 },
  { name: "Info / Numérique", value: 16 },
  { name: "Conseil", value: 12 },
  { name: "Industrie", value: 10 },
  { name: "Transport / Logistique", value: 8 },
  { name: "Finance / Banque", value: 7 },
  { name: "Environnement", value: 4 },
  { name: "Autres", value: 3 },
];

const studyLevelData = [
  { name: "Bac+5", value: 45 },
  { name: "Bac+4", value: 25 },
  { name: "Bac+3", value: 20 },
  { name: "Bac+2", value: 7 },
  { name: "Bac+1", value: 3 },
];

const COLORS_SCHOOL = [
  "hsl(197, 71%, 50%)", "hsl(197, 71%, 63%)", "hsl(197, 71%, 75%)",
  "hsl(213, 40%, 25%)", "hsl(213, 40%, 35%)", "hsl(213, 35%, 45%)",
  "hsl(197, 50%, 40%)", "hsl(197, 50%, 55%)", "hsl(213, 30%, 55%)",
  "hsl(197, 40%, 70%)", "hsl(213, 25%, 65%)", "hsl(197, 30%, 80%)",
  "hsl(213, 20%, 75%)", "hsl(197, 20%, 85%)",
];

const COLORS_INTEREST = [
  "hsl(197, 71%, 45%)", "hsl(197, 71%, 55%)", "hsl(197, 71%, 65%)",
  "hsl(213, 40%, 20%)", "hsl(213, 40%, 30%)", "hsl(213, 35%, 40%)",
  "hsl(197, 50%, 50%)", "hsl(213, 30%, 50%)", "hsl(197, 40%, 75%)",
];

const COLORS_LEVEL = [
  "hsl(197, 71%, 50%)", "hsl(197, 71%, 63%)", "hsl(213, 40%, 20%)",
  "hsl(213, 35%, 35%)", "hsl(197, 50%, 75%)",
];

const TOTAL_STUDENTS = 1894;

const CustomTooltip = ({ active, payload, isAbsolute }: any) => {
  if (active && payload && payload.length) {
    const raw = payload[0].value;
    const pct = isAbsolute ? ((raw / TOTAL_STUDENTS) * 100).toFixed(1) : raw;
    return (
      <div className="bg-card border border-border rounded-lg px-3 py-2 shadow-lg text-sm">
        <p className="font-heading font-semibold text-foreground">{payload[0].name}</p>
        <p className="text-muted-foreground">
          {isAbsolute ? `${raw} élèves (${pct}%)` : `${pct}%`}
        </p>
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
  isAbsolute = false,
}: {
  data: { name: string; value: number }[];
  colors: string[];
  isAbsolute?: boolean;
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
          <Tooltip content={<CustomTooltip isAbsolute={isAbsolute} />} />
        </PieChart>
      </ResponsiveContainer>
    </div>
    <Legend data={data} colors={colors} />
  </motion.div>
);

const StudentStatsSection = () => (
  <section className="py-16 bg-background">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl font-heading font-bold text-center text-foreground mb-10"
      >
        PROFILS ÉTUDIANTS
      </motion.h2>

      <Tabs defaultValue="school" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="school">Répartition par école</TabsTrigger>
          <TabsTrigger value="interest">Domaines d'intérêts</TabsTrigger>
          <TabsTrigger value="level">Niveau d'étude</TabsTrigger>
        </TabsList>

        <TabsContent value="school">
          <ChartWithLegend data={schoolData} colors={COLORS_SCHOOL} isAbsolute />
        </TabsContent>
        <TabsContent value="interest">
          <ChartWithLegend data={interestData} colors={COLORS_INTEREST} />
        </TabsContent>
        <TabsContent value="level">
          <ChartWithLegend data={studyLevelData} colors={COLORS_LEVEL} />
        </TabsContent>
      </Tabs>
    </div>
  </section>
);

export default StudentStatsSection;
