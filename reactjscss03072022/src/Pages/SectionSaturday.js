import SidePanel from '../Components/SidePanel';
import Muck from '../img/Muck.png'
import SMC from '../img/SMC.png'

const SectionSaturday = () => {
    return (
        <>
            <SidePanel />
            <section id="Saturday">
                <h1>MY SATURDAY</h1>
                
                <p>
                    CHILL AT HOME <br/>
                    AND PLAY GAMES<br/>
                </p>
                
                <p>
                    Me and my 2 best friends hanged out on Discord and played MUCK like the sweaty ass gamers we are, finishing the game, killing the final boss BOB, Twice!
                </p>
                <img src={Muck} alt="Screenshot of a game called Muck" />
                <p><i>Picture of a Bruh moment in MUCK</i></p>
                
                <p>
                    Then after getting bored playing MUCK, we decided to play another game called Super Mecha Champions. Yet again, like the sweaty and salty gamers we are, We destroyed every Chinese, Japanese, and Korean players we encountered. I even had an Epic Gamer Moment at the very last game we had. It was a 1 v 1 Clutch! Damn BOAH!!!
                </p>
                <img src={SMC} alt="Screenshot of a game called Super Mecha Champions" />
                <p><i>Picture of an Epic moment in SMC</i></p>   
            </section>
        </>
    )
}

export default SectionSaturday;