import { motion } from "framer-motion";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";

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

const COLORS_STRUCTURE = [
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
        <p className="text-muted-foreground">{payload[0].value}%</p>
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

const CompanyStatsSection = () => {
  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-heading font-bold text-center mb-12"
        >
          STATISTIQUES ENTREPRISES
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col items-center"
          >
            <h3 className="text-xl font-heading font-bold mb-4 text-center">Secteurs d'activités</h3>
            <div className="w-full h-[350px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={sectorData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={renderCustomLabel}
                    outerRadius={120}
                    dataKey="value"
                  >
                    {sectorData.map((_, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS_SECTOR[index % COLORS_SECTOR.length]} />
                    ))}
                  </Pie>
                  <Tooltip content={<CustomTooltip />} />
                  <Legend
                    layout="vertical"
                    align="right"
                    verticalAlign="middle"
                    wrapperStyle={{ fontSize: "12px", fontFamily: "Montserrat", color: "hsl(0, 0%, 90%)" }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center"
          >
            <h3 className="text-xl font-heading font-bold mb-4 text-center">Types de structures</h3>
            <div className="w-full h-[350px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={structureData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={renderCustomLabel}
                    outerRadius={120}
                    dataKey="value"
                  >
                    {structureData.map((_, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS_STRUCTURE[index % COLORS_STRUCTURE.length]} />
                    ))}
                  </Pie>
                  <Tooltip content={<CustomTooltip />} />
                  <Legend
                    layout="vertical"
                    align="right"
                    verticalAlign="middle"
                    wrapperStyle={{ fontSize: "12px", fontFamily: "Montserrat", color: "hsl(0, 0%, 90%)" }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CompanyStatsSection;
