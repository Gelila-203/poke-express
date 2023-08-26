const React = require('react')
const headerStyle={
    color:"pink",
    fontSize:"24"
}
const linkStyle={
    color:'red',
    fontSize: '24px'
}

    class Show extends React.Component {
       render () {

        const pokey = this.props.pokey;
        return (
            <div>
                <h1> Show Page </h1>
                <h1 style={headerStyle}> 
                     Gotta Catch 'Em All!    
                </h1>
                <h2>The {pokey.name} and  </h2>
                 
                 <img src= {pokey.img}  alt='Pokemon Img'/>
                 <br/>
                 <br/>

                 
                <nav>
                        <a style={linkStyle} href='/pokemon'> Back </a>
                </nav>

               
            </div>
         
         );
        }
     }

     module.exports  = Show;


// const React = require('react')
// class Show extends React.Component {
// render () {
//     return(
//         <div>
//              <h1 style={headerStyle}> 
//                     Gotta Catch 'Em All! 
//                 </h1>
//                 <h2>
//                 {pokey.name}
//                 </h2>
//                 <img src={pokey.img} alt='Pokemon ingage'/>
                
                
//         </div>
//     )
// }
// }
//  module.exports = Show;