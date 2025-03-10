import { useState } from 'react'
import { FaCalendarAlt, FaClock, FaMapMarkerAlt, FaUserMd, FaEllipsisV } from 'react-icons/fa'

const Appointments = () => {
  const [appointments, setAppointments] = useState([
    {
      id: 1,
      doctor: 'Dr. Sarah Johnson',
      specialty: 'Cardiologist',
      date: '2025-05-15',
      time: '10:00 AM',
      location: 'Heart Care Center',
      status: 'upcoming',
      notes: 'Annual heart checkup'
    },
    {
      id: 2,
      doctor: 'Dr. Michael Chen',
      specialty: 'Dermatologist',
      date: '2025-05-20',
      time: '2:30 PM',
      location: 'Skin Health Clinic',
      status: 'upcoming',
      notes: 'Follow-up on skin condition'
    },
    {
      id: 3,
      doctor: 'Dr. Emily Rodriguez',
      specialty: 'General Practitioner',
      date: '2025-04-10',
      time: '9:15 AM',
      location: 'Community Health Center',
      status: 'completed',
      notes: 'Regular checkup'
    },
    {
      id: 4,
      doctor: 'Dr. James Wilson',
      specialty: 'Orthopedist',
      date: '2025-03-25',
      time: '11:30 AM',
      location: 'Bone & Joint Clinic',
      status: 'completed',
      notes: 'Knee pain assessment'
    },
    {
      id: 5,
      doctor: 'Dr. Lisa Park',
      specialty: 'Neurologist',
      date: '2025-02-18',
      time: '3:45 PM',
      location: 'Neurology Center',
      status: 'completed',
      notes: 'Headache consultation'
    }
  ])

  const [activeTab, setActiveTab] = useState('upcoming')
  const [selectedAppointment, setSelectedAppointment] = useState(null)
  const [showModal, setShowModal] = useState(false)

  const filteredAppointments = appointments.filter(
    appointment => appointment.status === activeTab
  )

  const handleViewDetails = (appointment) => {
    setSelectedAppointment(appointment)
    setShowModal(true)
  }

  return (
    <div className="container mx-auto px-4 py-6 max-w-7xl">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-dark-dark dark:text-white">Appointments</h1>
          <p className="text-neutral-darkest dark:text-neutral-light">Manage your doctor appointments</p>
        </div>
        <div className="mt-4 md:mt-0">
          <button className="btn btn-primary">+ New Appointment</button>
        </div>
      </div>

      <div className="card">
        <div className="flex border-b border-neutral dark:border-dark-light mb-4">
          <button 
            className={`px-4 py-2 text-sm font-medium ${
              activeTab === 'upcoming' 
                ? 'text-primary border-b-2 border-primary' 
                : 'text-neutral-darkest dark:text-neutral-light'
            }`}
            onClick={() => setActiveTab('upcoming')}
          >
            Upcoming
          </button>
          <button 
            className={`px-4 py-2 text-sm font-medium ${
              activeTab === 'completed' 
                ? 'text-primary border-b-2 border-primary' 
                : 'text-neutral-darkest dark:text-neutral-light'
            }`}
            onClick={() => setActiveTab('completed')}
          >
            Past
          </button>
        </div>

        {filteredAppointments.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-neutral dark:divide-dark-light">
              <thead className="bg-neutral-lightest dark:bg-dark">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-darkest dark:text-neutral-light uppercase tracking-wider">
                    Doctor
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-darkest dark:text-neutral-light uppercase tracking-wider">
                    Date & Time
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-darkest dark:text-neutral-light uppercase tracking-wider">
                    Location
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-darkest dark:text-neutral-light uppercase tracking-wider">
                    Notes
                  </th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-neutral-darkest dark:text-neutral-light uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-dark-light divide-y divide-neutral dark:divide-dark">
                {filteredAppointments.map(appointment => (
                  <tr key={appointment.id} className="hover:bg-neutral-lightest dark:hover:bg-dark">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary-light flex items-center justify-center text-white">
                          {appointment.doctor.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-dark-dark dark:text-white">{appointment.doctor}</div>
                          <div className="text-sm text-neutral-darkest dark:text-neutral-light">{appointment.specialty}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-dark-dark dark:text-white">
                        {new Date(appointment.date).toLocaleDateString('en-US', { 
                          month: 'short', 
                          day: 'numeric', 
                          year: 'numeric' 
                        })}
                      </div>
                      <div className="text-sm text-neutral-darkest dark:text-neutral-light">{appointment.time}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-dark-dark dark:text-white">{appointment.location}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-dark-dark dark:text-white">{appointment.notes}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button 
                        onClick={() => handleViewDetails(appointment)}
                        className="text-primary hover:text-primary-dark mr-3"
                      >
                        View
                      </button>
                      {activeTab === 'upcoming' ? (
                        <>
                          <button className="text-primary hover:text-primary-dark mr-3">Reschedule</button>
                          <button className="text-accent hover:text-accent-dark">Cancel</button>
                        </>
                      ) : (
                        <button className="text-primary hover:text-primary-dark">Book Again</button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="text-center py-8">
            <p className="text-neutral-darkest dark:text-neutral-light">No {activeTab} appointments found.</p>
            {activeTab === 'upcoming' && (
              <button className="mt-2 btn btn-primary text-sm">Schedule an Appointment</button>
            )}
          </div>
        )}
      </div>

      {/* Appointment Details Modal */}
      {showModal && selectedAppointment && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-dark-light rounded-lg shadow-xl max-w-md w-full mx-4">
            <div className="p-6">
              <div className="flex justify-between items-start">
                <h3 className="text-lg font-semibold text-dark-dark dark:text-white">Appointment Details</h3>
                <button 
                  onClick={() => setShowModal(false)}
                  className="text-neutral-darkest dark:text-neutral-light hover:text-dark-dark dark:hover:text-white"
                >
                  &times;
                </button>
              </div>
              
              <div className="mt-4">
                <div className="flex items-center mb-3">
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-primary-light flex items-center justify-center text-white">
                    {selectedAppointment.doctor.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="ml-4">
                    <div className="text-md font-medium text-dark-dark dark:text-white">{selectedAppointment.doctor}</div>
                    <div className="text-sm text-neutral-darkest dark:text-neutral-light">{selectedAppointment.specialty}</div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div>
                    <p className="text-sm text-neutral-darkest dark:text-neutral-light">Date</p>
                    <p className="text-md text-dark-dark dark:text-white">
                      {new Date(selectedAppointment.date).toLocaleDateString('en-US', { 
                        month: 'long', 
                        day: 'numeric', 
                        year: 'numeric' 
                      })}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-neutral-darkest dark:text-neutral-light">Time</p>
                    <p className="text-md text-dark-dark dark:text-white">{selectedAppointment.time}</p>
                  </div>
                  <div className="col-span-2">
                    <p className="text-sm text-neutral-darkest dark:text-neutral-light">Location</p>
                    <p className="text-md text-dark-dark dark:text-white">{selectedAppointment.location}</p>
                  </div>
                  <div className="col-span-2">
                    <p className="text-sm text-neutral-darkest dark:text-neutral-light">Notes</p>
                    <p className="text-md text-dark-dark dark:text-white">{selectedAppointment.notes}</p>
                  </div>
                </div>
                
                <div className="mt-6 flex justify-end space-x-3">
                  {selectedAppointment.status === 'upcoming' ? (
                    <>
                      <button className="btn btn-outline">Reschedule</button>
                      <button className="btn btn-accent">Cancel</button>
                    </>
                  ) : (
                    <button className="btn btn-primary">Book Again</button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Appointments