import React from 'react'

export default function Courses() {
  const courses = [
    { id: 1, title: 'Intro to React' },
    { id: 2, title: 'Advanced React Patterns' },
    { id: 3, title: 'State Management' },
  ]

  return (
    <div>
      <h2>Courses</h2>
      <ul>
        {courses.map((c) => (
          <li key={c.id}>{c.title}</li>
        ))}
      </ul>
    </div>
  )
}
