document.addEventListener('DOMContentLoaded', () => {
    // Initial list of emojis with their names
    const emojis = [
        { emoji: '🪨', name: 'rock' },
        { emoji: '📄', name: 'paper' },
        { emoji: '✂️', name: 'scissors' },
        { emoji: '🔥', name: 'fire' },
        { emoji: '💧', name: 'water' },
        { emoji: '🌪️', name: 'tornado' },
        { emoji: '🌵', name: 'cactus' },
        { emoji: '🧙‍♂️', name: 'wizard' },
        { emoji: '🐉', name: 'dragon' },
        { emoji: '🗡️', name: 'sword' },
        { emoji: '🛡️', name: 'shield' },
        { emoji: '🧸', name: 'teddy bear' },
        { emoji: '🦈', name: 'shark' },
        { emoji: '🦖', name: 'dinosaur' },
        { emoji: '🚀', name: 'rocket' },
        { emoji: '🌞', name: 'sun' },
        { emoji: '🌚', name: 'moon' },
        { emoji: '⚡', name: 'lightning' },
        { emoji: '🌈', name: 'rainbow' },
        { emoji: '🧊', name: 'ice' }
    ];

    // Game state
    let currentEmoji = emojis[0]; // Start with rock
    let winningStreak = 0;
    let conversationHistory = [];

    // DOM elements
    const currentEmojiDisplay = document.getElementById('current-emoji-display');
    const currentEmojiName = document.getElementById('current-emoji-name');
    const userInput = document.getElementById('user-input');
    const submitBtn = document.getElementById('submit-btn');
    const resultMessage = document.getElementById('result-message');
    const streakCount = document.getElementById('streak-count');
    const emojiGrid = document.getElementById('emoji-grid');
    const historyList = document.getElementById('history-list');

    // Set initial emoji
    currentEmojiDisplay.textContent = currentEmoji.emoji;
    currentEmojiName.textContent = currentEmoji.name;

    // Populate emoji grid
    emojis.forEach(emojiObj => {
        const emojiItem = document.createElement('div');
        emojiItem.className = 'emoji-item';
        emojiItem.textContent = emojiObj.emoji;
        emojiItem.title = emojiObj.name;
        emojiItem.addEventListener('click', () => {
            userInput.value = emojiObj.name;
        });
        emojiGrid.appendChild(emojiItem);
    });

    // Handle user submission
    submitBtn.addEventListener('click', handleSubmission);
    userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleSubmission();
        }
    });

    async function handleSubmission() {
        const userResponse = userInput.value.trim();
        
        if (!userResponse) {
            resultMessage.textContent = "Please enter something that would beat the current emoji!";
            resultMessage.style.color = "#f44336";
            return;
        }

        resultMessage.textContent = "Thinking...";
        resultMessage.style.color = "#333";

        try {
            const result = await checkIfBeats(userResponse, currentEmoji);
            
            if (result.isWinner) {
                winningStreak++;
                resultMessage.textContent = `Yes! ${userResponse} beats ${currentEmoji.name}! ${result.reason}`;
                resultMessage.style.color = "#4CAF50";
                
                // Find or add the emoji
                const matchingEmoji = emojis.find(e => e.name.toLowerCase() === userResponse.toLowerCase());
                let nextEmoji;
                
                if (matchingEmoji) {
                    nextEmoji = matchingEmoji;
                } else if (result.suggestedEmoji) {
                    nextEmoji = {
                        emoji: result.suggestedEmoji,
                        name: userResponse.toLowerCase()
                    };
                    emojis.push(nextEmoji);
                    
                    // Add to emoji grid
                    const emojiItem = document.createElement('div');
                    emojiItem.className = 'emoji-item';
                    emojiItem.textContent = nextEmoji.emoji;
                    emojiItem.title = nextEmoji.name;
                    emojiItem.addEventListener('click', () => {
                        userInput.value = nextEmoji.name;
                    });
                    emojiGrid.appendChild(emojiItem);
                } else {
                    nextEmoji = {
                        emoji: '❓',
                        name: userResponse.toLowerCase()
                    };
                }
                
                // Add to history
                addToHistory(currentEmoji, nextEmoji, true);
                
                // Set as new challenge
                currentEmoji = nextEmoji;
                currentEmojiDisplay.textContent = currentEmoji.emoji;
                currentEmojiName.textContent = currentEmoji.name;
            } else {
                winningStreak = 0;
                resultMessage.textContent = `Sorry! ${userResponse} doesn't beat ${currentEmoji.name}. ${result.reason}`;
                resultMessage.style.color = "#f44336";
                
                // Add to history with no matching emoji
                addToHistory(currentEmoji, { emoji: '❌', name: userResponse }, false);
            }
            
            streakCount.textContent = winningStreak;
            userInput.value = '';
            
        } catch (error) {
            console.error("Error:", error);
            resultMessage.textContent = "Oops! Something went wrong. Please try again.";
            resultMessage.style.color = "#f44336";
        }
    }

    async function checkIfBeats(challenger, defending) {
        const systemPrompt = `You are the judge in a game of "Rock Paper Anything". 
Assess if the challenger's item would logically beat the defending item in a "rock paper scissors" style comparison.
Follow these rules:
1. Consider both real-world physics and pop culture references.
2. Provide a short explanation for your decision.
3. Be reasonable but creative in your judgments.
4. If the challenger wins, provide an appropriate emoji that represents the challenger item.

Response must be in this JSON format:
{
  "isWinner": boolean,
  "reason": "brief explanation",
  "suggestedEmoji": "emoji character" (only if isWinner is true)
}`;

        // Create a new message
        const newMessage = {
            role: "user",
            content: `Defending: ${defending.name} (${defending.emoji})
Challenger: ${challenger}
Is the challenger the winner? Why or why not?`
        };
        
        // Add to conversation history
        conversationHistory.push(newMessage);
        // Keep only the last 10 messages
        conversationHistory = conversationHistory.slice(-10);
        
        // Send to LLM
        const completion = await websim.chat.completions.create({
            messages: [
                {
                    role: "system",
                    content: systemPrompt
                },
                ...conversationHistory
            ],
            json: true
        });
        
        try {
            const result = JSON.parse(completion.content);
            
            // Add the response to conversation history
            conversationHistory.push({
                role: "assistant",
                content: completion.content
            });
            
            return result;
        } catch (error) {
            console.error("Error parsing LLM response:", error);
            throw new Error("Failed to get a valid response");
        }
    }

    function addToHistory(defending, challenger, wasSuccessful) {
        const historyItem = document.createElement('div');
        historyItem.className = 'history-item';
        
        const result = wasSuccessful ? 'win' : 'lose';
        const reasonText = resultMessage.textContent.split(wasSuccessful ? `Yes! ${challenger.name} beats ${defending.name}! ` : `Sorry! ${challenger.name} doesn't beat ${defending.name}. `)[1] || '';
        
        historyItem.innerHTML = `
            <div class="history-item-emoji">${defending.emoji}</div>
            <div class="history-item-text">
                <span class="${result}">${wasSuccessful ? '✓' : '✕'}</span>
                ${challenger.name} (${challenger.emoji})
                <div class="history-item-reason">${reasonText}</div>
            </div>
        `;
        
        historyList.insertBefore(historyItem, historyList.firstChild);
    }
});