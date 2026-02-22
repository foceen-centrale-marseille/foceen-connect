import { motion } from "framer-motion";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const schoolData = [
  { name: "Ecole Centrale Méditerranée", value: 986 },
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
    className="flex flex-col sm:flex-row items-center justify-center gap-6"
  >
    <div className="w-full sm:w-auto h-[260px] min-w-[220px]">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={100}
            innerRadius={40}
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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* FORCED FLEX ROW on lg */}
      <div className="flex flex-col lg:flex-row items-center gap-8">
        {/* LEFT: Text — 40% on desktop */}
        <div className="w-full lg:w-[40%]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xl lg:text-2xl font-heading font-bold text-foreground mb-4">FORUM FOCÉEN</h2>
            <p className="text-sm leading-relaxed font-body text-muted-foreground">
              Attirant plus de 2500 visiteurs et 136 entreprises, le FOCÉEN est le plus grand forum de recrutement de la région Sud-Est. Notre but est de trouver les meilleures offres de stages et d'emplois pour les élèves de la région d'Aix-Marseille. Certifiée par la norme ISO 9001 et ISO 20121, notre association prône la qualité ainsi que l'excellence, le professionnalisme et l'autonomie mais aussi l'éco-responsabilité et la solidarité.
            </p>
          </motion.div>
        </div>

        {/* RIGHT: Charts — 60% on desktop */}
        <div className="w-full lg:w-[60%]">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl lg:text-2xl font-heading font-bold text-center text-foreground mb-6">PROFILS ÉTUDIANTS</h3>
            <Tabs defaultValue="school" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-6">
                <TabsTrigger value="school">Par école</TabsTrigger>
                <TabsTrigger value="interest">Intérêts</TabsTrigger>
                <TabsTrigger value="level">Niveau</TabsTrigger>
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
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);

export default StudentStatsSection;
