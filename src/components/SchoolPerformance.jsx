import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useWindowResize } from "../util/windowResize";
import { schoolData } from '../util/schoolPerformance';


function SchoolPerformance() {

    const isMobile = useWindowResize();

    const renderCustomYAxisTick = ({ x, y, payload }) => (
      <text x={x} y={y} dx={-8} dy={4} textAnchor="end" fill="#7D7D7D">
        {payload.value}
      </text>
    );

    const renderCustomXAxisTick = ({ x, y, payload }) => (
      <text x={x} y={y}  dy={16} textAnchor="middle" fill="#7D7D7D">
        {payload.value}
      </text>
    );
    
      return (
        <div className='h-auto'>
    
    {isMobile ? (
      <h3 className="flex justify-center text-20 font-semibold py-4">School Performance</h3>
    ) : null}
        <div className={`h-600 ${isMobile ? 'h-80 w-78 py-4' : 'lg:w-740 h-600'} bg-white flex flex-col overflow-auto px-4 py-2 rounded-20`}>
        {!isMobile ? (
      <h3 className="flex justify-start text-20 font-semibold py-4 px-4">School Performance</h3>
    ) : null}
          
         <div className="w-full h-full">
         <ResponsiveContainer width="100%" height="100%">
  <AreaChart
    width={500}
    height={400}
    data={schoolData}
    margin={{
      top: 10,
      right: 30,
      left: 0,
      bottom: 20,
    }}
  >
    <defs>
      <linearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#3325CD" stopOpacity={0.8} />
        <stop offset="100%" stopColor="#2554CD" stopOpacity={0.1} />
      </linearGradient>
    </defs>
    <CartesianGrid strokeDasharray="3 3"  />
    <XAxis fill='#2540CD' stroke="#3325CD"  dataKey="name" tick={renderCustomXAxisTick} tickLine={false} axisLine={false} />
    <YAxis domain={[0, 600]} stroke="#3325CD"  ticks={[0, 200, 400, 600]} tick={renderCustomYAxisTick} tickLine={false} axisLine={false} />
    <Tooltip />
    <Area dataKey="uv" stroke="#3325CD" fill="url(#grad)" strokeDasharray="5 5" />
  </AreaChart>
</ResponsiveContainer>

         </div>
        </div>
        </div>
      );
    }
    
    export default SchoolPerformance;
    