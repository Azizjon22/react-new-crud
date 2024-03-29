import React from 'react'

class AddUser extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            firstname: "",
            lastname: "",
            bio: "",
            age: 1,
            isHappy: false,
        }
    }
  render() {
    return (
        <form ref={(el => this.myForm = el)}>
            <input placeholder='ism' onChange={(e) => this.setState({firstname: e.target.value})}/>
            <input placeholder='familya' onChange={(e) => this.setState({lastname: e.target.value})}/>
            <textarea placeholder='bio' onChange={(e) => this.setState({bio: e.target.value})}></textarea>
            <input placeholder='yosh' onChange={(e) => this.setState({age: e.target.value})}/>
            <label htmlFor="isHappy">Baxtli msiz?</label>
            <input type='checkbox' id='isHappy' onChange={(e) => this.setState({isHappy: e.target.checked})}/>
            <button type="button" onClick={() => {
                this.myForm.reset()
            this.props.onAdd({
                firstname: this.state.firstname,
                lastname: this.state.lastname,
                bio: this.state.bio,
                age: this.state.age,
                isHappy: this.state.isHappy,
            })}}> Qoshish</button>
        </form>
    )
  }
}

export default AddUser