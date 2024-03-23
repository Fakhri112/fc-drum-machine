import { useEffect, useState } from "react";

const audioData = [
	"Heater 1",
	"Heater 2",
	"Heater 3",
	"Heater 4",
	"Clap",
	"Open HH",
	"Kick n' Hat",
	"Kick",
	"Closed HH",
];

function App() {
	const [keyClickedButton, SetKeyClickedButton] = useState("");
	const [choosedAudio, SetChoosedAudio] = useState("");

	useEffect(() => {
		window.addEventListener("keyup", function (event) {
			const keyPress = (key: string) => {
				event.preventDefault();
				let getButtonId = window.document.getElementById(
					key,
				) as HTMLButtonElement;
				getButtonId.click();
				SetKeyClickedButton(key);
				setTimeout(() => SetKeyClickedButton(""), 100);
			};

			switch (event.key) {
				case "q":
					keyPress("Heater-1");
					break;
				case "w":
					keyPress("Heater-2");
					break;
				case "e":
					keyPress("Heater-3");
					break;
				case "a":
					keyPress("Heater-4");
					break;
				case "s":
					keyPress("Clap");
					break;
				case "d":
					keyPress("Open-HH");
					break;
				case "z":
					keyPress("Kick-n-hat");
					break;
				case "x":
					keyPress("Kick");
					break;
				case "c":
					keyPress("Closed-HH");
					break;

				default:
					break;
			}
		});
	}, []);

	const handlePlayAudio = (name: string, key: string) => {
		let getAudioId = document.getElementById(key) as HTMLAudioElement;
		getAudioId.pause();
		getAudioId.currentTime = 0;
		getAudioId.play();
		SetChoosedAudio(name);
		return true;
	};

	return (
		<>
			<div className="h-screen bg-slate-800 grid place-items-center">
				<div>
					<div
						id="drum-machine"
						className="p-3 rounded-md flex flex-col items-center gap-2 w-[22em] 
        					w-[40em] border-b-8 border-neutral-400 bg-neutral-300">
						<div className="w-full font-light text-center">The Drum Pad</div>
						<div className="w-full flex flex-col items-center gap-4">
							<div
								id="display"
								className="w-full h-14 bg-gray-400 grid place-items-center font-bold text-2xl">
								{choosedAudio}
							</div>
						</div>
						<div className="gap-3  grid grid-cols-3 grid-rows-3 w-full">
							<button
								onClick={() => handlePlayAudio(audioData[0], "Q")}
								onKeyUp={() => handlePlayAudio(audioData[0], "Q")}
								className={`drum-pad ${
									keyClickedButton == "Heater-1"
										? "translate-y-1 border-b-0 mb-1 text-2xl bg-yellow-500"
										: null
								}`}
								id="Heater-1">
								Q
								<audio
									className="clip"
									src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
									id="Q"></audio>
							</button>
							<button
								onClick={() => handlePlayAudio(audioData[1], "W")}
								onKeyUp={() => handlePlayAudio(audioData[1], "W")}
								className={`drum-pad ${
									keyClickedButton == "Heater-2"
										? "translate-y-1 border-b-0 mb-1 text-2xl bg-yellow-500"
										: null
								}`}
								id="Heater-2">
								W
								<audio
									className="clip"
									src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
									id="W"></audio>
							</button>
							<button
								onClick={() => handlePlayAudio(audioData[2], "E")}
								onKeyUp={() => handlePlayAudio(audioData[2], "E")}
								className={`drum-pad ${
									keyClickedButton == "Heater-3"
										? "translate-y-1 border-b-0 mb-1 text-2xl bg-yellow-500"
										: null
								}`}
								id="Heater-3">
								E
								<audio
									className="clip"
									src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
									id="E"></audio>
							</button>
							<button
								onClick={() => handlePlayAudio(audioData[3], "A")}
								onKeyUp={() => handlePlayAudio(audioData[3], "A")}
								className={`drum-pad ${
									keyClickedButton == "Heater-4"
										? "translate-y-1 border-b-0 mb-1 text-2xl bg-yellow-500"
										: null
								}`}
								id="Heater-4">
								A
								<audio
									className="clip"
									src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
									id="A"></audio>
							</button>
							<button
								onClick={() => handlePlayAudio(audioData[4], "S")}
								onKeyUp={() => handlePlayAudio(audioData[4], "S")}
								className={`drum-pad ${
									keyClickedButton == "Clap"
										? "translate-y-1 border-b-0 mb-1 text-2xl bg-yellow-500"
										: null
								}`}
								id="Clap">
								S
								<audio
									className="clip"
									src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
									id="S"></audio>
							</button>
							<button
								onClick={() => handlePlayAudio(audioData[5], "D")}
								onKeyUp={() => handlePlayAudio(audioData[5], "D")}
								className={`drum-pad ${
									keyClickedButton == "Open-HH"
										? "translate-y-1 border-b-0 mb-1 text-2xl bg-yellow-500"
										: null
								}`}
								id="Open-HH">
								D
								<audio
									className="clip"
									src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
									id="D"></audio>
							</button>
							<button
								onClick={() => handlePlayAudio(audioData[6], "Z")}
								onKeyUp={() => handlePlayAudio(audioData[6], "Z")}
								className={`drum-pad ${
									keyClickedButton == "Kick-n-hat"
										? "translate-y-1 border-b-0 mb-1 text-2xl bg-yellow-500"
										: null
								}`}
								id="Kick-n-hat">
								Z
								<audio
									className="clip"
									src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
									id="Z"></audio>
							</button>
							<button
								onClick={() => handlePlayAudio(audioData[7], "X")}
								onKeyUp={() => handlePlayAudio(audioData[7], "X")}
								className={`drum-pad ${
									keyClickedButton == "Kick"
										? "translate-y-1 border-b-0 mb-1 text-2xl bg-yellow-500"
										: null
								}`}
								id="Kick">
								X
								<audio
									className="clip"
									src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
									id="X"></audio>
							</button>
							<button
								onClick={() => handlePlayAudio(audioData[8], "C")}
								onKeyUp={() => handlePlayAudio(audioData[8], "C")}
								className={`drum-pad ${
									keyClickedButton == "Closed-HH"
										? "translate-y-1 border-b-0 mb-1 text-2xl bg-yellow-500"
										: null
								}`}
								id="Closed-HH">
								C
								<audio
									className="clip"
									src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
									id="C"></audio>
							</button>
						</div>
					</div>
					<p className="text-center font-semibold text-white mt-2">
						Designed by Fakhrie
					</p>
				</div>
			</div>
		</>
	);
}

export default App;
