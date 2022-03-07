import SidePanel from '../Components/SidePanel';
import CodeVein from '../img/CodeVein.png'

const SectionSunday = () => {
    return (
        <>
            <SidePanel />
            <section id="Sunday">
                <h1>MY SUNDAY</h1>
                
                <p>
                    CHILL AT HOME <br/>
                    AND PLAY GAMES PART 2<br/>
                </p>
                
                <p>
                It was one of my best friends' birthday, Erwin. He had an outing with his family so I had no one to play games with. I did greet him Happy Birthday. Anyway, I decided to play a game on my own instead. I played CODE VEIN like the sweaty gamer I am. The game is Too EZ compared to dark souls. Breezed through every bosses in one go without dying once (on some rare instances, some boss took me 3 tries), I don't even need time to memorize their moveset because they die easily. I die more often by mobs mobbing me from every side.
                </p>
                <img src={CodeVein} alt="Screenshot of a game called Code Vein" />
                <p><i>Picture of a Chill moment in CODE VEIN</i></p>
            </section>
        </>
    )
}

export default SectionSunday;