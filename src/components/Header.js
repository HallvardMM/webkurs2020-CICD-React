import React from 'react'

const styles = {
    height: '60px',
    width: '100vw',
    padding: '10px',
    textAlign: 'center',
    fontSize: '30px',
};

const Header = () => {
    return (
        <div style={styles}>
            <header><b>Hvor vil du reise? </b> </header>
        </div>
    )
}

export default Header
