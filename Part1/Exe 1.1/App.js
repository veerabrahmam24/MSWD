import React from 'react'

const Header=(props)=>{
  return(
  <div>
    <p>Header-Course: {props.Course}</p>
  </div>
  )
}
const Content=(props)=>{
  return(
    <div>
      <p>Content PartName: {props.p1} and Exercise:{props.ex1}</p>
      <p>Content PartName: {props.p2} and Exercise:{props.ex2}</p>
      <p>Content PartName: {props.p3} and Exercise:{props.ex3}</p>
    </div>
  )
}
const Total=(props)=>{
  return(
    <div>
      <p>Total: total{props.total}</p>
    </div>
  )
}
const App = () => {
  const Course = 'Full Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header Course={Course} />
      <Content p1= {part1} ex1 = {exercises1} p2 = {part2} ex2 = {exercises2} p3 = {part3} ex3 = {exercises3} />
      <Total total = {exercises1 + exercises2 + exercises3} />
    </div>
  )
}

export default App