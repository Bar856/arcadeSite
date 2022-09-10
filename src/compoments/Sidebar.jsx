import React from 'react'
import { slide as Menu } from 'react-burger-menu';
import {Link} from 'react-scroll'
import '../css/Sidebar.css';

export default class ParentComponent extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      menuOpen: false
    }
  }
  handleStateChange (state) {
    this.setState({menuOpen: state.isOpen})  
  }
  closeMenu () {
    this.setState({menuOpen: false})
  }
  toggleMenu () {
    this.setState(state => ({menuOpen: !state.menuOpen}))
  }

  render () {
    return (
      <Menu isOpen={this.state.menuOpen}
      onStateChange={(state) => this.handleStateChange(state)}
      >
          <Link onClick={() => this.closeMenu()} state={{ sidebarOpen: true }} className="hoverMouse menu-item" to="home" spy={true} smooth={true} >Home</Link>
          <Link onClick={() => this.closeMenu()} className="hoverMouse menu-item" to="about" spy={true} smooth={true} >About</Link>
          <Link onClick={() => this.closeMenu()} className="hoverMouse menu-item" to="djs" spy={true} smooth={true} >Dj's</Link>
          <Link onClick={() => this.closeMenu()} className="hoverMouse menu-item" to="contact" spy={true} smooth={true} >Contact</Link>
          <Link onClick={() => this.closeMenu()} className="hoverMouse menu-item" to="sets" spy={true} smooth={true} >Our Music</Link>
      </Menu>    
    
  );
  }
}
