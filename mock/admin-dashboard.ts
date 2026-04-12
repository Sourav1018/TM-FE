export const REVENUE_DATA = [
  { month: "MAY", actual: 100000, projected: 110000 },
  { month: "JUN", actual: 120000, projected: 115000 },
  { month: "JUL", actual: 115000, projected: 120000 },
  { month: "AUG", actual: 130000, projected: 125000 },
  { month: "SEP", actual: 142580, projected: 135000 },
  { month: "OCT", actual: 155000, projected: 145000 },
]

export const KPI_DATA = {
  totalLeads: {
    value: "1,284",
    trend: "+12.5%",
    trendColor: "positive" as const,
    progress: 78,
  },
  convertedLeads: {
    value: "312",
    conversionRate: "24.2%",
    target: "400",
  },
  totalRevenue: {
    value: "$142,580",
    trend: "8% increase from last month",
  }
}
