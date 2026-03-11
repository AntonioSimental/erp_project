"use client"

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer
} from "recharts"

const data = [
  { mes: "Ene", ventas: 400 },
  { mes: "Feb", ventas: 300 },
  { mes: "Mar", ventas: 500 },
  { mes: "Abr", ventas: 200 },
  { mes: "May", ventas: 700 }
]

export default function SalesChart() {
  return (
    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="mes" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="ventas" stroke="#8884d8" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}