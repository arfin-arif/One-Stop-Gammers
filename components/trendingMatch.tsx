import Image from "next/image";
import Countdown from "react-countdown";

const trendingMatch = () => {
    return (<div className="bg-black  p-2 mb-2">
        <div>
            <h1 className="text-2xl p-2 font-extrabold">Upcoming Matches</h1>
        </div>
        <div className="teams mb-2 px-2">

            <div className="team1 border-2 flex items-center justify-between p-4 ">
                <Image width='100' height='200' src='/team/team1.png' alt='team'></Image>
                <h1 className="text-2xl font-extrabold">DRAGONS</h1>
                <Countdown className="text-xl font-extrabold " date={Date.now() + 253685262}  >

                </Countdown>
                <h1 className="text-2xl font-extrabold">WARFARE</h1>
                <Image width='100' height='200' src='/team/team2.png' alt='team'></Image>

            </div>
            <div className="team1 border-2 flex items-center justify-between p-4 ">
                <Image width='100' height='200' src='/team/team3.png' alt='team'></Image>
                <h1 className="text-2xl font-extrabold">OWL CITY</h1>
                <Countdown className="text-xl font-extrabold " date={Date.now() + 253685262}  >

                </Countdown>
                <h1 className="text-2xl font-extrabold">GODFREY</h1>
                <Image width='100' height='200' src='/team/team4.png' alt='team'></Image>

            </div>
            <div className="team1 border-2 flex items-center justify-between p-4 ">
                <Image width='100' height='200' src='/team/team5.png' alt='team'></Image>
                <h1 className="text-2xl font-extrabold">SHIELDS</h1>
                <Countdown className="text-xl font-extrabold " date={Date.now() + 253685262}  >

                </Countdown>
                <h1 className="text-2xl font-extrabold">INSECTOID</h1>
                <Image width='100' height='200' src='/team/team6.png' alt='team'></Image>

            </div>
            <div className="team1 border-2 flex items-center justify-between p-4 ">
                <Image width='100' height='200' src='/team/team7.png' alt='team'></Image>
                <h1 className="text-2xl font-extrabold">DOCTORS</h1>
                <Countdown className="text-xl font-extrabold " date={Date.now() + 253685262}  >

                </Countdown>
                <h1 className="text-2xl font-extrabold">ELECTROS</h1>
                <Image width='100' height='200' src='/team/team8.png' alt='team'></Image>

            </div>
            <div className="team1 border-2 flex items-center justify-between p-4 ">
                <Image width='100' height='200' src='/team/team9.png' alt='team'></Image>
                <h1 className="text-2xl font-extrabold">LAGOON</h1>
                <Countdown className="text-xl font-extrabold " date={Date.now() + 253685262}  >

                </Countdown>
                <h1 className="text-2xl font-extrabold">HAWKINGS</h1>
                <Image width='100' height='200' src='/team/team10.png' alt='team'></Image>

            </div>

        </div>
    </div>
    );
};

export default trendingMatch;