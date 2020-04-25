import React, { Component } from 'react';
import PuckBox from './PuckBox.jsx';
import avatars from './avatars.jsx'


class PuckSelect extends Component {
    constructor(props) {
        super(props)
        this.state = {
            columnOpen: false,
            rowOpen: null,
            avatar: null,
            opacity: this.props.opacity
        }
        this.onButtonClick = this.onButtonClick.bind(this)
      }

  onButtonClick() { this.setState({ columnOpen: true }) }
  handleClick(id) { this.setState({ rowOpen: id }) }
  handleClickColor(id) {
    this.setState({ avatar: id })
    this.props.handleSelect([this.state.rowOpen,id])
  }

  render() {

    if (this.state.avatar) {
      return (
        <div className='outer'>
          <input className='fade' type="button" onClick={this.onButtonClick} value="Repick"/>
          <div className='spacer'/>
          <div><img src={avatars[this.state.rowOpen][this.state.avatar]}/></div>
        </div>
      )
    } else {

      let puck_list = avatars.map(function(arr,i) { return arr[0] })
      let puck_array
      let fade = this.props.opacity
      if (this.state.columnOpen) {

        fade = 'fade'

        puck_array = puck_list.map((puck,id) => {

          if (this.state.rowOpen===id) {

            let variant_array = avatars[this.state.rowOpen].map((color,id) => {

              let selected = 'box'
              // if (id===0) { selected = 'box-selected' }
              let handleClickColor = () => this.handleClickColor(id)

              // avatar color variant selection
              return (
                <PuckBox
                handleClick={handleClickColor}
                key={id}
                image={color}
                style={selected}
                />
              )
            })

            return (
              <div className='inner'>
              {variant_array}
              </div>
            )

          } else {

            let handleClick = () => this.handleClick(id)

            let image_transparency = 'image'
            if (this.state.rowOpen && this.state.rowOpen!==id) {
              image_transparency = 'non-selected-image'
            }
            // avatar style selection
            return (
              <PuckBox
              handleClick={handleClick}
              key={id}
              image={puck}
              style='box'
              imageStyle={image_transparency}
              />
            )

          }

        })
      }

      return(
        <div className='outer'>
        <input className={fade} type="button" onClick={this.onButtonClick} value="Pick your puck"/>
        {puck_array}
        </div>
      )

    }



  }
}
export default PuckSelect
