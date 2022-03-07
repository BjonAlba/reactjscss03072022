import Planet from '../img/planet.gif'
import Ship from '../img/ship.gif'

const SidePanel = () => {
    return (
        <>
            <aside id="SidePanel">
                <img src={Planet} alt="Rotating Planet" id='Planet'></img>
                <div>
                    NOTES: <br/>
                    {'>'} IYAK SA GEDLI <br/>
                    {'>'} Practice Coding <br/>
                    {'>'} Wag na mag puyat :'{'<'} <br/>
                    {'>'} Set Priorities right <br/>
                    {'>'} Don't drink coffee after 3PM <br/>
                    {'>'} Finish Code Vein pag may time :'( <br/>
                    {'>'} Don't forget to Race my Pegaxy <br/>
                    {'>'} Make sure my Bomb Crypto Talibans is always tired <br/>
                    {'>'} Clean the mansion at Nintia Estate <br/>            
                </div>
                <img src={Ship} alt="Hovering Space Ship" id='Ship'></img>
            </aside>
        </>
    )
}

export default SidePanel;