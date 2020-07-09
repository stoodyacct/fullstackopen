import React from 'react';
import ReactDOM from 'react-dom';

const Header = ({course}) => {
  return (
    <h1>{course.name}</h1>
  )
};

const Part = ({course}) => {
  return (
    <>
      <div>
        {course.parts[0].name} {course.parts[0].exercises}
      </div>
      <div>
        {course.parts[1].name} {course.parts[1].exercises}
      </div>
      <div>
        {course.parts[2].name} {course.parts[2].exercises}
      </div>
    </>
  )
};

const Content = ({course}) => {
  return (
    <div>
      <Part course={course} />
    </div>
  )
};

const Total = ({course}) => {
  return (
    <div>
      <p>Number of exercises {course.parts[0].exercises + 
      course.parts[1].exercises + course.parts[2].exercises}</p>
    </div>
  )
};

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))