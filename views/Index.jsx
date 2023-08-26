const React = require('react');

const headerStyle={
    color:"green",
    fontSize:"24"
}
const linkStyle={
    color:'red',
    fontSize: '24px'
}
class Index extends React.Component {
    render() {
        const { pokemon } = this.props;
        return(
            <div>
                <h1 style={headerStyle}> 
                    See all the Pokemon! 
                </h1>
                <ul>
                {pokemon.map((pokey, i) => {
                            return (
                                <li>

                                    The{' '}
                                    <a href={`/pokemon/${i}`}>
                                        {pokey.name}
                                    </a>{' '}
                                    is {pokey.img}. <br></br>
                                  
                                    <br />

                                </li>
                            );
                
            })}
                    
                    
                </ul>
                <nav>
                        <a  style={linkStyle}  href='/'> Back </a>
                </nav>
                
            </div>
        )
    }
}

module.exports = Index;