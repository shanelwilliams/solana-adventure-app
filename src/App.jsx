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

    const resetGame = () => {
        setCurrentSceneId(1);
        setEnergy(100);
        setBugsFixed(0);
    };

    if (energy <= 0) {
        return (
            <div className="crash-screen">
                <h1>💥 MEMORY CRASH: SYSTEM FAILURE</h1>

                <img 
                src="https://plus.unsplash.com/premium_photo-1768374180121-f86dc6a506e3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" 
                alt="System Crash"
                className="crash-image" 
                />

                <p>Your energy fully dropped to 0%.</p>
                <button onClick={resetGame}>🔄 Reboot & Restart</button>
            </div>
        );
    }

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
        walletButtonText = `Connected: ${publicKey}`
    }

    return (
        <div style={{
            backgroundImage: `url(${currentScene.backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '100vh',
            color: 'white'
        }}>
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
                    
                    {currentScene.choices.length > 0 ? (
                        currentScene.choices.map((choice, index) => (
                            <button
                                key={index}
                                onClick={() => handleChoice(choice)}
                                className="choice-btn"
                            >
                                {choice.text}
                            </button>
                        ))
                    ) : (
                        <div className="victory-panel">
                            <h3 style={{ color: "00ff66" }}>🎉 HACKATHON COMPLETE!</h3>
                            <button onClick={resetGame} className="restart-btn">🔄 Run Another Project Sprint</button>
                        </div>
                    )}
                </div>
        </div>
    )
}