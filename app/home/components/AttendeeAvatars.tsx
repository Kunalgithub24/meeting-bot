import React from 'react'
interface AttendeeAvatarsProps {
  attendees: any
  getAttendeeList: (attendees: any) => string[]
  getInitials: (name: string) => string
}

const attendeeColors = [
  "#1E3A8A", // Dark Royal Blue
  "#1E40AF", // Navy Blue
  "#1E3A5F", // Deep Slate Blue
  "#172554", // Midnight Indigo
  "#0F172A", // Rich Dark Navy
  "#1D4ED8", // Deep Blue
  "#312E81", // Dark Indigo
  "#3730A3", // Deep Violet-Blue
];

// const attendeeColors = [
//   "#3B82F6", // Blue 500 — clean, vibrant, readable
//   "#60A5FA", // Blue 400 — lighter soft blue
//   "#93C5FD", // Blue 300 — very light but still professional
//   "#5B8DFE", // Custom calm blue
//   "#4F7FF0", // Muted professional blue
//   "#6E9BFF", // Soft sky-blue tone
//   "#4A6CF7", // Productive light indigo-blue
//   "#7BA7FF", // Light pastel blue
// ];


function AttendeeAvatars({ attendees, getAttendeeList, getInitials }: AttendeeAvatarsProps) {
  const attendeeList = getAttendeeList(attendees)
  return (
    <div className='flex -space-x-2'>
      {attendeeList.slice(0, 4).map((attendee, index) => (
        <div
          key={index}
          className='relative group'
          title={attendee}
        >
          <div
            style={{ backgroundColor: attendeeColors[index % attendeeColors.length] }}
            className=' w-6 h-6 rounded-full border-2 border-background flex items-center justify-center text-white text-xs font-medium hover:scale-110 transition-transform cursor-pointer'>
            
            {getInitials(attendee)}
          </div>
          <div className='absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10'>
            {attendee}
          </div>
        </div>
      ))}
      {attendeeList.length > 4 && (
        <div
          className='w-6 h-6 rounded-full bg-gray-500 border-2 border-background flex items-center justify-center text-white text-xs font-medium'
          title={`+${attendeeList.length - 4} more`}

        >
          +{attendeeList.length - 4}
        </div>
      )}

    </div>
  )
}

export default AttendeeAvatars
