import React from 'react'
const Header=()=>{
    return(
        <header  >
            <div className={"container"}>
            <div className="row">
                <div className="col-8">
                                <div><a href="https://tapcubestudios.com"><img src="https://tapcubestudios.com/wp-content/uploads/2018/06/TAP-CUBE-STUDIOS.png"/></a></div>
                </div>
                <div className={`col-4 extra-line  .ml-md-auto`}>
                    <div  className="menu-primary-container">
                    <ul  id="mainnav" className="mainnav" role="navigation">
                    <li id="menu-item-11860" class={`menu-item menu-item-type-post_type menu-item-object-page menu-item-11860`}>
                            <a className="nav-button" href="https://tapcubestudios.com">
                            Home
                            </a>
                        </li>
                    </ul>
                    </div>
                </div>
            </div>
            </div>
        </header>
    )
}
export default Header