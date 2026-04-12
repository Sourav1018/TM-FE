"use client"

import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts"
import { REVENUE_DATA } from "@/mock/admin-dashboard"

export function RevenueChart() {
  return (
    <div className="h-[400px] w-full rounded-3xl bg-white p-8 mb-4 shadow-sm shadow-black/[0.03]">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h3 className="font-heading text-xl font-bold text-foreground">Revenue Growth</h3>
          <p className="text-sm font-medium text-muted-foreground">Net revenue vs projected targets</p>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-[#00658D]" />
            <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Actual</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-[#00AEEF]" />
            <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Projected</span>
          </div>
        </div>
      </div>
      
      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={REVENUE_DATA}
            margin={{ top: 10, right: 10, left: 0, bottom: 20 }}
          >
            <defs>
              <linearGradient id="colorActual" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#00658D" stopOpacity={0.1}/>
                <stop offset="95%" stopColor="#00658D" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorProjected" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#00AEEF" stopOpacity={0.1}/>
                <stop offset="95%" stopColor="#00AEEF" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="#E8ECEE" />
            <XAxis 
              dataKey="month" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#40484C', fontSize: 10, fontWeight: 700 }}
              dy={20}
            />
            <YAxis hide />
            <Tooltip 
              contentStyle={{ 
                borderRadius: '16px', 
                border: 'none', 
                boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
                padding: '12px'
              }}
              labelStyle={{ fontWeight: 'bold', marginBottom: '4px' }}
            />
            <Area
              type="monotone"
              dataKey="actual"
              stroke="#00658D"
              strokeWidth={3}
              fillOpacity={1}
              fill="url(#colorActual)"
              dot={{ r: 4, fill: '#00658D', strokeWidth: 2, stroke: '#FFFFFF' }}
              activeDot={{ r: 6, strokeWidth: 0 }}
            />
            <Area
              type="monotone"
              dataKey="projected"
              stroke="#00AEEF"
              strokeWidth={3}
              strokeDasharray="5 5"
              fillOpacity={1}
              fill="url(#colorProjected)"
              dot={{ r: 4, fill: '#00AEEF', strokeWidth: 2, stroke: '#FFFFFF' }}
              activeDot={{ r: 6, strokeWidth: 0 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
