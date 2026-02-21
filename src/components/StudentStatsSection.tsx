import { motion } from "framer-motion";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";

const schoolData = [
  { name: "Centrale Méditerranée", value: 986 },
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
  { name: "Informatique / Numérique", value: 16 },
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
  "hsl(197, 71%, 50%)",
  "hsl(197, 71%, 63%)",
  "hsl(197, 71%, 75%)",
  "hsl(213, 40%, 25%)",
  "hsl(213, 40%, 35%)",
  "hsl(213, 35%, 45%)",
  "hsl(197, 50%, 40%)",
  "hsl(197, 50%, 55%)",
  "hsl(213, 30%, 55%)",
  "hsl(197, 40%, 70%)",
  "hsl(213, 25%, 65%)",
  "hsl(197, 30%, 80%)",
  "hsl(213, 20%, 75%)",
  "hsl(197, 20%, 85%)",
];

const COLORS_INTEREST = [
  "hsl(197, 71%, 45%)",
  "hsl(197, 71%, 55%)",
  "hsl(197, 71%, 65%)",
  "hsl(213, 40%, 20%)",
  "hsl(213, 40%, 30%)",
  "hsl(213, 35%, 40%)",
  "hsl(197, 50%, 50%)",
  "hsl(213, 30%, 50%)",
  "hsl(197, 40%, 75%)",
];

const COLORS_LEVEL = [
  "hsl(197, 71%, 50%)",
  "hsl(197, 71%, 63%)",
  "hsl(213, 40%, 20%)",
  "hsl(213, 35%, 35%)",
  "hsl(197, 50%, 75%)",
];

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-card border border-border rounded-lg px-3 py-2 shadow-lg text-sm">
        <p className="font-heading font-semibold">{payload[0].name}</p>
        <p className="text-muted-foreground">
          {payload[0].dataKey === "value" && typeof payload[0].value === "number" && payload[0].value > 100
            ? `${payload[0].value} élèves`
            : `${payload[0].value}%`}
        </p>
      </div>
    );
  }
  return null;
};

const renderCustomLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }: any) => {
  if (percent < 0.04) return null;
  const RADIAN = Math.PI / 180;
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);
  return (
    <text x={x} y={y} fill="white" textAnchor="middle" dominantBaseline="central" fontSize={11} fontWeight={600}>
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const ChartBlock = ({
  title,
  data,
  colors,
  delay = 0,
}: {
  title: string;
  data: { name: string; value: number }[];
  colors: string[];
  delay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    className="flex flex-col items-center"
  >
    <h3 className="text-xl font-heading font-bold mb-4 text-center">{title}</h3>
    <div className="w-full h-[350px]">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomLabel}
            outerRadius={120}
            dataKey="value"
          >
            {data.map((_, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
          <Legend
            layout="vertical"
            align="right"
            verticalAlign="middle"
            wrapperStyle={{ fontSize: "12px", fontFamily: "Montserrat" }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  </motion.div>
);

const StudentStatsSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-heading font-bold text-center text-foreground mb-12"
        >
          PROFILS ÉTUDIANTS
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <ChartBlock
            title="Répartition des élèves par école"
            data={schoolData}
            colors={COLORS_SCHOOL}
            delay={0.1}
          />
          <ChartBlock
            title="Domaines d'intérêts"
            data={interestData}
            colors={COLORS_INTEREST}
            delay={0.2}
          />
        </div>

        <div className="flex justify-center">
          <div className="w-full max-w-lg">
            <ChartBlock
              title="Niveau d'étude"
              data={studyLevelData}
              colors={COLORS_LEVEL}
              delay={0.3}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentStatsSection;
