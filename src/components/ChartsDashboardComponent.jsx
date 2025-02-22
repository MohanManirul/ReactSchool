import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, LineChart, Line, PieChart, Pie, Cell, AreaChart, Area } from "recharts";
import axios from "axios";

const ChartsDashboardComponent = () => {
  const [data, setData] = useState([]);

  // ✅ API থেকে ডাটা লোড করুন
  useEffect(() => {
    axios.get("https://dummyjson.com/products")
      .then((response) => {
        const formattedData = response.data.products.map((item) => ({
          name: item.title,
          price: item.price,
          stock: item.stock,
          rating: item.rating,
        }));
        setData(formattedData);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const colors = ["#FF5733", "#33FF57", "#3357FF", "#F5A623"];

  return (
    <div className="p-6 bg-base-200 min-h-screen flex flex-col items-center gap-8">
      <h2 className="text-3xl font-bold">📊 Charts Dashboard</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* ✅ Bar Chart */}
        <div className="card bg-base-100 shadow-xl p-4">
          <h3 className="text-lg font-bold text-center">📊 Price Comparison</h3>
          <BarChart width={300} height={250} data={data}>
            <XAxis dataKey="name" hide />
            <YAxis />
            <Tooltip />
            <Bar dataKey="price" fill="#6366F1" />
          </BarChart>
        </div>

        {/* ✅ Line Chart */}
        <div className="card bg-base-100 shadow-xl p-4">
          <h3 className="text-lg font-bold text-center">📈 Stock Availability</h3>
          <LineChart width={300} height={250} data={data}>
            <XAxis dataKey="name" hide />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="stock" stroke="#F97316" />
          </LineChart>
        </div>

        {/* ✅ Pie Chart */}
        <div className="card bg-base-100 shadow-xl p-4">
          <h3 className="text-lg font-bold text-center">🥧 Price Distribution</h3>
          <PieChart width={300} height={250}>
            <Pie data={data} dataKey="price" nameKey="name" cx="50%" cy="50%" outerRadius={80}>
              {data.map((_, index) => (
                <Cell key={index} fill={colors[index % colors.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </div>

        {/* ✅ Area Chart */}
        <div className="card bg-base-100 shadow-xl p-4">
          <h3 className="text-lg font-bold text-center">📉 Rating Trend</h3>
          <AreaChart width={300} height={250} data={data}>
            <XAxis dataKey="name" hide />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="rating" stroke="#E91E63" fill="#F48FB1" />
          </AreaChart>
        </div>

      </div>
    </div>
  );
};

export default ChartsDashboardComponent;
