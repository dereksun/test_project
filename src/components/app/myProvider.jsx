import React from 'react';

export const MyContext = React.createContext(
)
    
export class MyProvider extends React.Component{
    state = {
    isSideMenuOpen : false
    }
    render(){
    return (
        <MyContext.Provider value={{
            state: this.state,
            toggleSideMenu: () => 
            {
                console.log(this.state.isSideMenuOpen)
                this.setState(
                    {isSideMenuOpen: !this.state.isSideMenuOpen},
                    () => {
                        console.log(this.state.isSideMenuOpen)
                    }
                    )
                },
            stateChangeHandler: (newState) => this.setState(
                {isSideMenuOpen: newState.isOpen})
            }}>
            {this.props.children}
        </MyContext.Provider>
    )
    }
}