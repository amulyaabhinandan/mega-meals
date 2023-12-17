import React from "react"

class ProfileClass extends React.Component {
  constructor(props) {
    super(props)
    console.log("constructor")
  }

  componentDidMount() {
    console.log("componentDidMount")
  }

  render() {
    console.log("render")
    return (
      <div>
        <h1>Hello, this Profile Page built through Class Component</h1>
        <h3>My name is {this.props.name}</h3>
      </div>
    )
  }
}

export default ProfileClass
