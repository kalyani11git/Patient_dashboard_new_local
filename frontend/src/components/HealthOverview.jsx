import { FaHeartbeat, FaWeight, FaThermometerHalf, FaTint } from 'react-icons/fa'

const HealthOverview = () => {
  const healthStats = [
    { 
      id: 1, 
      title: 'Heart Rate', 
      value: '72', 
      unit: 'bpm', 
      icon: <FaHeartbeat className="text-accent" />,
      change: '+3 from last check',
      status: 'normal'
    },
    { 
      id: 2, 
      title: 'BMI', 
      value: '23.5', 
      unit: 'kg/m²', 
      icon: <FaWeight className="text-primary" />,
      change: '-0.5 from last check',
      status: 'normal'
    },
    { 
      id: 3, 
      title: 'Temperature', 
      value: '98.6', 
      unit: '°F', 
      icon: <FaThermometerHalf className="text-secondary" />,
      change: 'No change',
      status: 'normal'
    },
    { 
      id: 4, 
      title: 'Blood Glucose', 
      value: '95', 
      unit: 'mg/dL', 
      icon: <FaTint className="text-accent" />,
      change: '-5 from last check',
      status: 'normal'
    }
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      {healthStats.map(stat => (
        <div key={stat.id} className="card hover:shadow-lg">
          <div className="stat-card">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-sm font-medium text-neutral-darkest dark:text-neutral-light">{stat.title}</h3>
                <div className="flex items-baseline">
                  <span className="text-2xl font-bold text-dark-dark dark:text-white">{stat.value}</span>
                  <span className="ml-1 text-sm text-neutral-darkest dark:text-neutral-light">{stat.unit}</span>
                </div>
              </div>
              <div className="p-2 rounded-full bg-neutral-lightest dark:bg-dark">
                {stat.icon}
              </div>
            </div>
            <div className="flex justify-between items-center mt-2">
              <span className="text-xs text-neutral-darkest dark:text-neutral-light">{stat.change}</span>
              <span className={`text-xs px-2 py-1 rounded-full ${
                stat.status === 'normal' 
                  ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400' 
                  : stat.status === 'warning'
                  ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400'
                  : 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400'
              }`}>
                {stat.status}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default HealthOverview