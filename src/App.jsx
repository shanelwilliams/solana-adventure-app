import React, { useState } from "react";
import { storyData } from "./storyData";

export default function App() {

    const [connected, setConnected] = useState(false);
    const [isConnecting, setIsConnecting] = useState(false);
    const [publicKey, setPublicKey] = useState("")

    // Where the player starts story timeline
    const [currentSceneId, setCurrentSceneId] = useState(1);
    // Player stamina level
    const [energy, setEnergy] = useState(100);
    // Score tracking progress
    const [bugsFixed, setBugsFixed] = useState(0);

    const currentScene = storyData[currentSceneId];

    const handleChoice = (choice) => {
        const newEnergy = Math.max(0, energy - choice.energyCost);

        setEnergy(newEnergy);
        setBugsFixed(bugsFixed + choice.bugsFixed);
        setCurrentSceneId(choice.nextScene);
    };

    const handleWalletClick = () => {
        if (connected) {
            setConnected(false);
            setPublicKey("");
        } else {
            setIsConnecting(true);
            setTimeout(() => {
                setConnected(true);
                setIsConnecting(false);
                setPublicKey("ShAn3L...W1lL1aMs");
            }, 1000);
        }
    };

    let walletButtonText = "🔌 Connect Phantom";
    if (isConnecting) {
        walletButtonText = "⚡ Authorizing...";
    } else if (connected) {
        walletButtonText = `Connected: ${publicKey}`;
    }

    return (
        <div>
            <header className="game-header">
            <h1>Hackathon Simulator</h1>

            <button onClick={handleWalletClick} className="wallet-toggle-btn">
                {walletButtonText}
            </button>

            <p>🔋 Energy: {energy}%</p>
            <p>🐛 Bugs Squashed: {bugsFixed}</p>
            </header>

                <div className="story-container">
                    <h2>{currentScene.title}</h2>
                    <p>{currentScene.text}</p>
                </div>

                <div className="choices-container">
                    {currentScene.choices.map((choice, index) => (
                        <button
                        key={index}
                        onClick={() => handleChoice(choice)}
                        className="choice-btn"
                        >
                            {choice.text}
                        </button>
                    ))}
                </div>
        </div>
    )
}