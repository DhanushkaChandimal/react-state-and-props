import { Component } from "react"

class ClassStateTest extends Component{

    constructor(){
        super()
        this.state = {
            name: "Dhanuska"
        }

        this.changeName = this.changeName.bind(this)
    }

    changeName(){
        this.setState({name: "Chandimal"})
    }

    render() {
        const name = this.state.name;
        return (
            <div>
                <p>Hello, {name}!</p>

                <button onClick={this.changeName}>Change Name</button>
            </div>
        )
    }
}

export default ClassStateTest