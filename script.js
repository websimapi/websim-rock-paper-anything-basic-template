document.addEventListener('DOMContentLoaded', () => {
    // Initial list of emojis with their names
    const emojis = [
        { emoji: '🪨', name: 'rock', imageUrl: '' },
        { emoji: '📄', name: 'paper', imageUrl: '' },
        { emoji: '✂️', name: 'scissors', imageUrl: '' },
        { emoji: '🔥', name: 'fire', imageUrl: '' },
        { emoji: '💧', name: 'water', imageUrl: '' },
        { emoji: '🌪️', name: 'tornado', imageUrl: '' },
        { emoji: '🌵', name: 'cactus', imageUrl: '' },
        { emoji: '🧙‍♂️', name: 'wizard', imageUrl: '' },
        { emoji: '🐉', name: 'dragon', imageUrl: '' },
        { emoji: '🗡️', name: 'sword', imageUrl: '' },
        { emoji: '🛡️', name: 'shield', imageUrl: '' },
        { emoji: '🧸', name: 'teddy bear', imageUrl: '' },
        { emoji: '🦈', name: 'shark', imageUrl: '' },
        { emoji: '🦖', name: 'dinosaur', imageUrl: '' },
        { emoji: '🚀', name: 'rocket', imageUrl: '' },
        { emoji: '🌞', name: 'sun', imageUrl: '' },
        { emoji: '🌚', name: 'moon', imageUrl: '' },
        { emoji: '⚡', name: 'lightning', imageUrl: '' },
        { emoji: '🌈', name: 'rainbow', imageUrl: '' },
        { emoji: '🧊', name: 'ice', imageUrl: '' },
        { emoji: '🔨', name: 'hammer', imageUrl: '' },
        { emoji: '🪓', name: 'axe', imageUrl: '' },
        { emoji: '🪚', name: 'saw', imageUrl: '' },
        { emoji: '🧲', name: 'magnet', imageUrl: '' },
        { emoji: '💣', name: 'bomb', imageUrl: '' },
        { emoji: '🧪', name: 'potion', imageUrl: '' },
        { emoji: '🧬', name: 'dna', imageUrl: '' },
        { emoji: '🦠', name: 'microbe', imageUrl: '' },
        { emoji: '🔬', name: 'microscope', imageUrl: '' },
        { emoji: '🧫', name: 'petri dish', imageUrl: '' },
        { emoji: '🧠', name: 'brain', imageUrl: '' },
        { emoji: '👻', name: 'ghost', imageUrl: '' },
        { emoji: '🤖', name: 'robot', imageUrl: '' },
        { emoji: '👽', name: 'alien', imageUrl: '' },
        { emoji: '🦹', name: 'supervillain', imageUrl: '' },
        { emoji: '🧚', name: 'fairy', imageUrl: '' },
        { emoji: '🧜', name: 'mermaid', imageUrl: '' },
        { emoji: '🧛', name: 'vampire', imageUrl: '' },
        { emoji: '🧟', name: 'zombie', imageUrl: '' },
        { emoji: '🦸', name: 'superhero', imageUrl: '' },
        { emoji: '🦇', name: 'bat', imageUrl: '' },
        { emoji: '🐺', name: 'wolf', imageUrl: '' },
        { emoji: '🦁', name: 'lion', imageUrl: '' },
        { emoji: '🐘', name: 'elephant', imageUrl: '' },
        { emoji: '🐅', name: 'tiger', imageUrl: '' },
        { emoji: '🦏', name: 'rhino', imageUrl: '' },
        { emoji: '🐊', name: 'crocodile', imageUrl: '' },
        { emoji: '🦅', name: 'eagle', imageUrl: '' },
        { emoji: '🦂', name: 'scorpion', imageUrl: '' },
        { emoji: '🕷️', name: 'spider', imageUrl: '' },
        { emoji: '🦗', name: 'cricket', imageUrl: '' },
        { emoji: '🐜', name: 'ant', imageUrl: '' },
        { emoji: '🐝', name: 'bee', imageUrl: '' },
        { emoji: '🦋', name: 'butterfly', imageUrl: '' },
        { emoji: '🐌', name: 'snail', imageUrl: '' },
        { emoji: '🐍', name: 'snake', imageUrl: '' },
        { emoji: '🐢', name: 'turtle', imageUrl: '' },
        { emoji: '🐙', name: 'octopus', imageUrl: '' },
        { emoji: '🦑', name: 'squid', imageUrl: '' },
        { emoji: '🦀', name: 'crab', imageUrl: '' },
        { emoji: '🦐', name: 'shrimp', imageUrl: '' },
        { emoji: '🐡', name: 'blowfish', imageUrl: '' },
        { emoji: '🐟', name: 'fish', imageUrl: '' },
        { emoji: '🐬', name: 'dolphin', imageUrl: '' },
        { emoji: '🐳', name: 'whale', imageUrl: '' },
        { emoji: '🐎', name: 'horse', imageUrl: '' },
        { emoji: '🦄', name: 'unicorn', imageUrl: '' },
        { emoji: '🦓', name: 'zebra', imageUrl: '' },
        { emoji: '🦌', name: 'deer', imageUrl: '' },
        { emoji: '🐄', name: 'cow', imageUrl: '' },
        { emoji: '🐖', name: 'pig', imageUrl: '' },
        { emoji: '🐏', name: 'ram', imageUrl: '' },
        { emoji: '🐑', name: 'sheep', imageUrl: '' },
        { emoji: '🐐', name: 'goat', imageUrl: '' },
        { emoji: '🐫', name: 'camel', imageUrl: '' },
        { emoji: '🦒', name: 'giraffe', imageUrl: '' },
        { emoji: '🦘', name: 'kangaroo', imageUrl: '' },
        { emoji: '🐃', name: 'water buffalo', imageUrl: '' },
        { emoji: '🐂', name: 'ox', imageUrl: '' },
        { emoji: '🐄', name: 'cow', imageUrl: '' },
        { emoji: '🐁', name: 'mouse', imageUrl: '' },
        { emoji: '🐀', name: 'rat', imageUrl: '' },
        { emoji: '🐿️', name: 'chipmunk', imageUrl: '' },
        { emoji: '🦔', name: 'hedgehog', imageUrl: '' },
        { emoji: '🐇', name: 'rabbit', imageUrl: '' },
        { emoji: '🐈', name: 'cat', imageUrl: '' },
        { emoji: '🐩', name: 'poodle', imageUrl: '' },
        { emoji: '🐕', name: 'dog', imageUrl: '' },
        { emoji: '🐔', name: 'chicken', imageUrl: '' },
        { emoji: '🐧', name: 'penguin', imageUrl: '' },
        { emoji: '🐦', name: 'bird', imageUrl: '' },
        { emoji: '🐤', name: 'chick', imageUrl: '' },
        { emoji: '🦆', name: 'duck', imageUrl: '' },
        { emoji: '🦢', name: 'swan', imageUrl: '' },
        { emoji: '🦉', name: 'owl', imageUrl: '' },
        { emoji: '🐸', name: 'frog', imageUrl: '' },
        { emoji: '🦎', name: 'lizard', imageUrl: '' },
        { emoji: '🐾', name: 'paw prints', imageUrl: '' },
        { emoji: '🌲', name: 'evergreen tree', imageUrl: '' },
        { emoji: '🌳', name: 'deciduous tree', imageUrl: '' },
        { emoji: '🌴', name: 'palm tree', imageUrl: '' },
        { emoji: '🌱', name: 'seedling', imageUrl: '' },
        { emoji: '🌿', name: 'herb', imageUrl: '' },
        { emoji: '☘️', name: 'shamrock', imageUrl: '' },
        { emoji: '🍀', name: 'four leaf clover', imageUrl: '' },
        { emoji: '🎍', name: 'bamboo', imageUrl: '' },
        { emoji: '🍄', name: 'mushroom', imageUrl: '' },
        { emoji: '🌸', name: 'cherry blossom', imageUrl: '' },
        { emoji: '🌹', name: 'rose', imageUrl: '' },
        { emoji: '🌻', name: 'sunflower', imageUrl: '' },
        { emoji: '🌺', name: 'hibiscus', imageUrl: '' },
        { emoji: '🌷', name: 'tulip', imageUrl: '' },
        { emoji: '🌼', name: 'blossom', imageUrl: '' },
        { emoji: '🌾', name: 'sheaf of rice', imageUrl: '' },
        { emoji: '🍁', name: 'maple leaf', imageUrl: '' },
        { emoji: '🍂', name: 'fallen leaf', imageUrl: '' },
        { emoji: '🌰', name: 'chestnut', imageUrl: '' },
        { emoji: '🌍', name: 'earth', imageUrl: '' },
        { emoji: '🌋', name: 'volcano', imageUrl: '' },
        { emoji: '🏔️', name: 'mountain', imageUrl: '' },
        { emoji: '🌊', name: 'wave', imageUrl: '' },
        { emoji: '🏜️', name: 'desert', imageUrl: '' },
        { emoji: '🏝️', name: 'desert island', imageUrl: '' },
        { emoji: '🏞️', name: 'national park', imageUrl: '' },
        { emoji: '🏟️', name: 'stadium', imageUrl: '' },
        { emoji: '🏠', name: 'house', imageUrl: '' },
        { emoji: '🏢', name: 'office building', imageUrl: '' },
        { emoji: '🏰', name: 'castle', imageUrl: '' },
        { emoji: '🏭', name: 'factory', imageUrl: '' },
        { emoji: '🗼', name: 'tokyo tower', imageUrl: '' },
        { emoji: '🗽', name: 'statue of liberty', imageUrl: '' },
        { emoji: '⛩️', name: 'shinto shrine', imageUrl: '' },
        { emoji: '🕋', name: 'kaaba', imageUrl: '' },
        { emoji: '🕌', name: 'mosque', imageUrl: '' },
        { emoji: '🕍', name: 'synagogue', imageUrl: '' },
        { emoji: '⛪', name: 'church', imageUrl: '' },
        { emoji: '⛲', name: 'fountain', imageUrl: '' },
        { emoji: '⛺', name: 'tent', imageUrl: '' },
        { emoji: '🌃', name: 'night with stars', imageUrl: '' },
        { emoji: '🌄', name: 'sunrise over mountains', imageUrl: '' },
        { emoji: '🌅', name: 'sunrise', imageUrl: '' },
        { emoji: '🌇', name: 'sunset', imageUrl: '' },
        { emoji: '🌉', name: 'bridge at night', imageUrl: '' },
        { emoji: '🚂', name: 'steam locomotive', imageUrl: '' },
        { emoji: '🚃', name: 'railway car', imageUrl: '' },
        { emoji: '🚄', name: 'high-speed train', imageUrl: '' },
        { emoji: '🚅', name: 'bullet train', imageUrl: '' },
        { emoji: '🚆', name: 'train', imageUrl: '' },
        { emoji: '🚇', name: 'metro', imageUrl: '' },
        { emoji: '🚈', name: 'light rail', imageUrl: '' },
        { emoji: '🚉', name: 'station', imageUrl: '' },
        { emoji: '🚊', name: 'tram', imageUrl: '' },
        { emoji: '🚝', name: 'monorail', imageUrl: '' },
        { emoji: '🚞', name: 'mountain railway', imageUrl: '' },
        { emoji: '🚋', name: 'tram car', imageUrl: '' },
        { emoji: '🚌', name: 'bus', imageUrl: '' },
        { emoji: '🚍', name: 'oncoming bus', imageUrl: '' },
        { emoji: '🚐', name: 'minibus', imageUrl: '' },
        { emoji: '🚑', name: 'ambulance', imageUrl: '' },
        { emoji: '🚒', name: 'fire engine', imageUrl: '' },
        { emoji: '🚓', name: 'police car', imageUrl: '' },
        { emoji: '🚕', name: 'taxi', imageUrl: '' },
        { emoji: '🚗', name: 'car', imageUrl: '' },
        { emoji: '🚚', name: 'delivery truck', imageUrl: '' },
        { emoji: '🚛', name: 'articulated lorry', imageUrl: '' },
        { emoji: '🚜', name: 'tractor', imageUrl: '' },
        { emoji: '🚲', name: 'bicycle', imageUrl: '' },
        { emoji: '🛴', name: 'kick scooter', imageUrl: '' },
        { emoji: '🛵', name: 'motor scooter', imageUrl: '' },
        { emoji: '🏍️', name: 'motorcycle', imageUrl: '' },
        { emoji: '🚨', name: 'police car light', imageUrl: '' },
        { emoji: '⛽', name: 'fuel pump', imageUrl: '' },
        { emoji: '🚦', name: 'traffic light', imageUrl: '' },
        { emoji: '🚧', name: 'construction', imageUrl: '' },
        { emoji: '⚓', name: 'anchor', imageUrl: '' },
        { emoji: '⛵', name: 'sailboat', imageUrl: '' },
        { emoji: '🛶', name: 'canoe', imageUrl: '' },
        { emoji: '🚤', name: 'speedboat', imageUrl: '' },
        { emoji: '🚢', name: 'ship', imageUrl: '' },
        { emoji: '✈️', name: 'airplane', imageUrl: '' },
        { emoji: '🚁', name: 'helicopter', imageUrl: '' },
        { emoji: '🛰️', name: 'satellite', imageUrl: '' },
        { emoji: '🛸', name: 'ufo', imageUrl: '' },
        { emoji: '🕰️', name: 'mantelpiece clock', imageUrl: '' },
        { emoji: '⌚', name: 'watch', imageUrl: '' },
        { emoji: '⏰', name: 'alarm clock', imageUrl: '' },
        { emoji: '⏱️', name: 'stopwatch', imageUrl: '' },
        { emoji: '⏲️', name: 'timer clock', imageUrl: '' },
        { emoji: '⏳', name: 'hourglass', imageUrl: '' },
        { emoji: '⌨️', name: 'keyboard', imageUrl: '' },
        { emoji: '🖱️', name: 'computer mouse', imageUrl: '' },
        { emoji: '🖲️', name: 'trackball', imageUrl: '' },
        { emoji: '💻', name: 'laptop', imageUrl: '' },
        { emoji: '🖥️', name: 'desktop computer', imageUrl: '' },
        { emoji: '🕹️', name: 'joystick', imageUrl: '' },
        { emoji: '💾', name: 'floppy disk', imageUrl: '' },
        { emoji: '💿', name: 'cd', imageUrl: '' },
        { emoji: '📀', name: 'dvd', imageUrl: '' },
        { emoji: '📼', name: 'vhs', imageUrl: '' },
        { emoji: '📷', name: 'camera', imageUrl: '' },
        { emoji: '📹', name: 'video camera', imageUrl: '' },
        { emoji: '🎥', name: 'movie camera', imageUrl: '' },
        { emoji: '🎞️', name: 'film frames', imageUrl: '' },
        { emoji: '📞', name: 'telephone receiver', imageUrl: '' },
        { emoji: '☎️', name: 'telephone', imageUrl: '' },
        { emoji: '📟', name: 'pager', imageUrl: '' },
        { emoji: '📠', name: 'fax machine', imageUrl: '' },
        { emoji: '📺', name: 'television', imageUrl: '' },
        { emoji: '📻', name: 'radio', imageUrl: '' },
        { emoji: '🎙️', name: 'studio microphone', imageUrl: '' },
        { emoji: '💡', name: 'light bulb', imageUrl: '' },
        { emoji: '🔦', name: 'flashlight', imageUrl: '' },
        { emoji: '🕯️', name: 'candle', imageUrl: '' },
        { emoji: '💰', name: 'money bag', imageUrl: '' },
        { emoji: '💳', name: 'credit card', imageUrl: '' },
        { emoji: '💎', name: 'gem stone', imageUrl: '' },
        { emoji: '⚖️', name: 'balance scale', imageUrl: '' },
        { emoji: '🔧', name: 'wrench', imageUrl: '' },
        { emoji: '🔩', name: 'nut and bolt', imageUrl: '' },
        { emoji: '⚙️', name: 'gear', imageUrl: '' },
        { emoji: '🔗', name: 'link', imageUrl: '' },
        { emoji: '⛓️', name: 'chains', imageUrl: '' },
        { emoji: '💉', name: 'syringe', imageUrl: '' },
        { emoji: '💊', name: 'pill', imageUrl: '' },
        { emoji: '🚬', name: 'cigarette', imageUrl: '' },
        { emoji: '⚰️', name: 'coffin', imageUrl: '' },
        { emoji: '🏺', name: 'amphora', imageUrl: '' },
        { emoji: '🗺️', name: 'world map', imageUrl: '' },
        { emoji: '🧭', name: 'compass', imageUrl: '' },
        { emoji: '🧱', name: 'brick', imageUrl: '' },
        { emoji: '💈', name: 'barber pole', imageUrl: '' },
        { emoji: '🛢️', name: 'oil drum', imageUrl: '' },
        { emoji: '🛎️', name: 'bellhop bell', imageUrl: '' },
        { emoji: '🔑', name: 'key', imageUrl: '' },
        { emoji: '🗝️', name: 'old key', imageUrl: '' },
        { emoji: '🚪', name: 'door', imageUrl: '' },
        { emoji: '🛋️', name: 'couch and lamp', imageUrl: '' },
        { emoji: '🛌', name: 'person in bed', imageUrl: '' },
        { emoji: '🧸', name: 'teddy bear', imageUrl: '' },
        { emoji: '🖼️', name: 'framed picture', imageUrl: '' },
        { emoji: '🛍️', name: 'shopping bags', imageUrl: '' },
        { emoji: '🛒', name: 'shopping cart', imageUrl: '' },
        { emoji: '🎁', name: 'wrapped gift', imageUrl: '' },
        { emoji: '🎈', name: 'balloon', imageUrl: '' },
        { emoji: '🎀', name: 'ribbon', imageUrl: '' },
        { emoji: '🎊', name: 'confetti ball', imageUrl: '' },
        { emoji: '🎉', name: 'party popper', imageUrl: '' },
        { emoji: '🎏', name: 'carp streamer', imageUrl: '' },
        { emoji: '🎎', name: 'japanese dolls', imageUrl: '' },
        { emoji: '🎐', name: 'wind chime', imageUrl: '' },
        { emoji: '✉️', name: 'envelope', imageUrl: '' },
        { emoji: '🧧', name: 'red envelope', imageUrl: '' },
        { emoji: '📤', name: 'outbox tray', imageUrl: '' },
        { emoji: '📥', name: 'inbox tray', imageUrl: '' },
        { emoji: '📦', name: 'package', imageUrl: '' },
        { emoji: '📫', name: 'mailbox', imageUrl: '' },
        { emoji: '📮', name: 'postbox', imageUrl: '' },
        { emoji: '📜', name: 'scroll', imageUrl: '' },
        { emoji: '📃', name: 'page with curl', imageUrl: '' },
        { emoji: '📑', name: 'bookmark tabs', imageUrl: '' },
        { emoji: '📊', name: 'bar chart', imageUrl: '' },
        { emoji: '📈', name: 'chart increasing', imageUrl: '' },
        { emoji: '📉', name: 'chart decreasing', imageUrl: '' },
        { emoji: '📄', name: 'page facing up', imageUrl: '' },
        { emoji: '📅', name: 'calendar', imageUrl: '' },
        { emoji: '📆', name: 'tear-off calendar', imageUrl: '' },
        { emoji: '🗓️', name: 'spiral calendar', imageUrl: '' },
        { emoji: '📁', name: 'file folder', imageUrl: '' },
        { emoji: '📂', name: 'open file folder', imageUrl: '' },
        { emoji: '🗂️', name: 'card index dividers', imageUrl: '' },
        { emoji: '📰', name: 'newspaper', imageUrl: '' },
        { emoji: '🗞️', name: 'rolled-up newspaper', imageUrl: '' },
        { emoji: '📓', name: 'notebook', imageUrl: '' },
        { emoji: '📔', name: 'notebook with decorative cover', imageUrl: '' },
        { emoji: '📒', name: 'ledger', imageUrl: '' },
        { emoji: '📕', name: 'closed book', imageUrl: '' },
        { emoji: '📗', name: 'green book', imageUrl: '' },
        { emoji: '📘', name: 'blue book', imageUrl: '' },
        { emoji: '📙', name: 'orange book', imageUrl: '' },
        { emoji: '📚', name: 'books', imageUrl: '' },
        { emoji: '📖', name: 'open book', imageUrl: '' },
        { emoji: '🔖', name: 'bookmark', imageUrl: '' },
        { emoji: '🔗', name: 'link', imageUrl: '' },
        { emoji: '📎', name: 'paperclip', imageUrl: '' },
        { emoji: '🖇️', name: 'linked paperclips', imageUrl: '' },
        { emoji: '📐', name: 'triangular ruler', imageUrl: '' },
        { emoji: '📏', name: 'straight ruler', imageUrl: '' },
        { emoji: '📌', name: 'pushpin', imageUrl: '' },
        { emoji: '📍', name: 'round pushpin', imageUrl: '' },
        { emoji: '🖊️', name: 'pen', imageUrl: '' },
        { emoji: '🖋️', name: 'fountain pen', imageUrl: '' },
        { emoji: '🖌️', name: 'paintbrush', imageUrl: '' },
        { emoji: '🖍️', name: 'crayon', imageUrl: '' },
        { emoji: '📝', name: 'memo', imageUrl: '' },
        { emoji: '✏️', name: 'pencil', imageUrl: '' },
        { emoji: '🔎', name: 'magnifying glass tilted left', imageUrl: '' },
        { emoji: '🔍', name: 'magnifying glass tilted right', imageUrl: '' },
        { emoji: '🔐', name: 'locked with key', imageUrl: '' },
        { emoji: '🔒', name: 'locked', imageUrl: '' },
        { emoji: '🔓', name: 'unlocked', imageUrl: '' },
        // Added more emojis
        { emoji: '✨', name: 'sparkles', imageUrl: '' },
        { emoji: '⭐', name: 'star', imageUrl: '' },
        { emoji: '🌟', name: 'glowing star', imageUrl: '' },
        { emoji: '💫', name: 'dizzy', imageUrl: '' },
        { emoji: '💥', name: 'collision', imageUrl: '' },
        { emoji: '💨', name: 'dashing away', imageUrl: '' },
        { emoji: '💦', name: 'sweat droplets', imageUrl: '' },
        { emoji: '💯', name: 'hundred points', imageUrl: '' },
        { emoji: '🕳️', name: 'hole', imageUrl: '' },
        { emoji: '💫', name: 'dizzy symbol', imageUrl: '' },
        { emoji: '✨', name: 'sparkles', imageUrl: '' },
        { emoji: '⭐', name: 'star', imageUrl: '' },
        { emoji: '🌟', name: 'glowing star', imageUrl: '' },
        { emoji: '💥', name: 'collision', imageUrl: '' },
        { emoji: '💨', name: 'dash symbol', imageUrl: '' },
        { emoji: '💦', name: 'sweat droplets', imageUrl: '' },
        { emoji: '💯', name: 'hundred points symbol', imageUrl: '' },
        { emoji: '🕳️', name: 'hole', imageUrl: '' },
        { emoji: '🌍', name: 'Earth globe Europe-Africa', imageUrl: '' },
        { emoji: '🌎', name: 'Earth globe Americas', imageUrl: '' },
        { emoji: '🌏', name: 'Earth globe Asia-Australia', imageUrl: '' },
        { emoji: '🌑', name: 'new moon', imageUrl: '' },
        { emoji: '🌒', name: 'waxing crescent moon', imageUrl: '' },
        { emoji: '🌓', name: 'first quarter moon', imageUrl: '' },
        { emoji: '🌔', name: 'waxing gibbous moon', imageUrl: '' },
        { emoji: '🌕', name: 'full moon', imageUrl: '' },
        { emoji: '🌖', name: 'waning gibbous moon', imageUrl: '' },
        { emoji: '🌗', name: 'last quarter moon', imageUrl: '' },
        { emoji: '🌘', name: 'waning crescent moon', imageUrl: '' },
        { emoji: '🌀', name: 'cyclone', imageUrl: '' },
        { emoji: '🌫️', name: 'fog', imageUrl: '' },
        { emoji: '🌬️', name: 'wind face', imageUrl: '' },
        { emoji: '🌡️', name: 'thermometer', imageUrl: '' },
        { emoji: '⛱️', name: 'umbrella on ground', imageUrl: '' },
        { emoji: '❄️', name: 'snowflake', imageUrl: '' },
        { emoji: '☃️', name: 'snowman', imageUrl: '' },
        { emoji: '☄️', name: 'comet', imageUrl: '' },
        { emoji: '🌌', name: 'milky way', imageUrl: '' },
        { emoji: '🪐', name: 'ringed planet', imageUrl: '' },
        { emoji: '⚔️', name: 'crossed swords', imageUrl: '' }
        // ... continue adding more as needed
    ];

    // Remove duplicate emojis based on the 'emoji' character
    const uniqueEmojis = Array.from(new Map(emojis.map(item => [item.emoji, item])).values());

    // Game state
    let currentEmoji = uniqueEmojis[Math.floor(Math.random() * uniqueEmojis.length)]; // Randomly select initial emoji
    let winningStreak = 0;
    let conversationHistory = [];
    let currentEmojiPage = 0;
    const emojisPerPage = 60; // Increased number of emojis per page
    let totalEmojiPages = Math.ceil(uniqueEmojis.length / emojisPerPage);

    // DOM elements
    const currentEmojiDisplay = document.getElementById('current-emoji-display');
    const currentEmojiName = document.getElementById('current-emoji-name');
    const currentImage = document.getElementById('current-image');
    const currentLoadingSpinner = document.getElementById('current-loading-spinner');
    const userInput = document.getElementById('user-input');
    const submitBtn = document.getElementById('submit-btn');
    const resultMessage = document.getElementById('result-message');
    const streakCount = document.getElementById('streak-count');
    const emojiGrid = document.getElementById('emoji-grid');
    const historyList = document.getElementById('history-list');
    const prevPageBtn = document.getElementById('prev-page');
    const nextPageBtn = document.getElementById('next-page');
    const pageIndicator = document.getElementById('page-indicator');

    // Set initial emoji
    currentEmojiDisplay.textContent = currentEmoji.emoji;
    currentEmojiName.textContent = currentEmoji.name;
    generateImageForEmoji(currentEmoji, currentImage, currentLoadingSpinner);

    // Display emojis for the current page
    function displayEmojiPage(page) {
        emojiGrid.innerHTML = '';
        const startIndex = page * emojisPerPage;
        const endIndex = Math.min(startIndex + emojisPerPage, uniqueEmojis.length);

        for (let i = startIndex; i < endIndex; i++) {
            const emojiObj = uniqueEmojis[i];
            const emojiItem = document.createElement('div');
            emojiItem.className = 'emoji-item';
            emojiItem.textContent = emojiObj.emoji;
            emojiItem.title = emojiObj.name;
            emojiItem.addEventListener('click', () => {
                userInput.value = emojiObj.name;
            });
            emojiGrid.appendChild(emojiItem);
        }

        // Update page indicator
        pageIndicator.textContent = `Page ${page + 1} of ${totalEmojiPages}`;

        // Update button states
        prevPageBtn.disabled = page === 0;
        nextPageBtn.disabled = page === totalEmojiPages - 1;
    }

    // Page navigation event listeners
    prevPageBtn.addEventListener('click', () => {
        if (currentEmojiPage > 0) {
            currentEmojiPage--;
            displayEmojiPage(currentEmojiPage);
        }
    });

    nextPageBtn.addEventListener('click', () => {
        if (currentEmojiPage < totalEmojiPages - 1) {
            currentEmojiPage++;
            displayEmojiPage(currentEmojiPage);
        }
    });

    // Initial display of the first page of emojis
    displayEmojiPage(currentEmojiPage);

    // Generate and set image for initial emoji
    async function generateImageForEmoji(emojiObj, targetImageElement, targetSpinnerElement) {
        // Use provided elements or default to main display elements
        const imgElement = targetImageElement || currentImage;
        const spinnerElement = targetSpinnerElement || currentLoadingSpinner;

        imgElement.style.display = 'none'; // Hide image initially
        if (spinnerElement) spinnerElement.style.display = 'block'; // Show spinner

        // Check if image URL already exists
        if (emojiObj.imageUrl) {
            imgElement.src = emojiObj.imageUrl;
            imgElement.onerror = () => { // Handle error loading existing URL
                console.error(`Failed to load image: ${emojiObj.imageUrl}`);
                emojiObj.imageUrl = ''; // Clear invalid URL
                if (spinnerElement) spinnerElement.style.display = 'none';
                // Optionally show a placeholder or leave blank
                imgElement.style.display = 'none';
            };
            imgElement.onload = () => { // Ensure image is loaded before hiding spinner
                if (spinnerElement) spinnerElement.style.display = 'none';
                imgElement.style.display = 'block';
            }
            // If src is already set but might be cached, onerror might not fire reliably on first load
            // Check if image is already loaded/cached and display immediately
            if (imgElement.complete && imgElement.naturalWidth > 0) {
                if (spinnerElement) spinnerElement.style.display = 'none';
                imgElement.style.display = 'block';
            }

            return; // Exit if URL exists and is being loaded/displayed
        }

        // Generate new image if no URL exists
        try {
            const result = await websim.imageGen({
                prompt: `A detailed illustration of a ${emojiObj.name}, simple clean background, high quality, digital art style`,
                aspect_ratio: "1:1"
            });
            emojiObj.imageUrl = result.url;
            imgElement.src = emojiObj.imageUrl;
            imgElement.onload = () => { // Show image once loaded
                if (spinnerElement) spinnerElement.style.display = 'none';
                imgElement.style.display = 'block';
            };
            imgElement.onerror = () => { // Handle error loading newly generated URL
                console.error(`Failed to load newly generated image: ${emojiObj.imageUrl}`);
                emojiObj.imageUrl = ''; // Clear invalid URL
                if (spinnerElement) spinnerElement.style.display = 'none';
                imgElement.style.display = 'none';
            };
        } catch (error) {
            console.error("Error generating image:", error);
            emojiObj.imageUrl = ''; // Ensure imageUrl is cleared on error
            if (spinnerElement) spinnerElement.style.display = 'none';
            imgElement.style.display = 'none';
        }
    }

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

        submitBtn.disabled = true;
        userInput.disabled = true;
        resultMessage.textContent = "Thinking...";
        resultMessage.style.color = "#333";

        try {
            const result = await checkIfBeats(userResponse, currentEmoji);
            let challengerObjectForHistory; // To store the object used in history

            if (result.isWinner) {
                winningStreak++;
                resultMessage.textContent = `Yes! ${userResponse} beats ${currentEmoji.name}! ${result.reason}`;
                resultMessage.style.color = "#4CAF50";

                let nextEmoji = uniqueEmojis.find(e => e.name.toLowerCase() === userResponse.toLowerCase());

                if (!nextEmoji && result.suggestedEmoji && result.suggestedEmoji !== '❓') {
                    // Check if an emoji with the *suggested symbol* already exists
                    const existingWithEmoji = uniqueEmojis.find(e => e.emoji === result.suggestedEmoji);
                    if (existingWithEmoji) {
                        // If found, use the existing object but potentially update its name if different?
                        // For simplicity, let's just use the existing one. User can refine later if needed.
                        nextEmoji = existingWithEmoji;
                        // Ensure name consistency if user input differs slightly but emoji matches
                        // Optional: nextEmoji.name = userResponse.toLowerCase();
                    } else {
                        // Create a new emoji object
                        nextEmoji = {
                            emoji: result.suggestedEmoji,
                            name: userResponse.toLowerCase(),
                            imageUrl: '' // Needs image generation
                        };
                        uniqueEmojis.push(nextEmoji);
                        // Update pagination if necessary
                        totalEmojiPages = Math.ceil(uniqueEmojis.length / emojisPerPage);
                        if (uniqueEmojis.length > currentEmojiPage * emojisPerPage && uniqueEmojis.length <= (currentEmojiPage + 1) * emojisPerPage) {
                            // If the new emoji falls on the current page, refresh it
                            displayEmojiPage(currentEmojiPage);
                        } else {
                            // Otherwise, just update the total pages indicator
                            pageIndicator.textContent = `Page ${currentEmojiPage + 1} of ${totalEmojiPages}`;
                            nextPageBtn.disabled = currentEmojiPage === totalEmojiPages - 1;
                        }
                    }
                } else if (!nextEmoji) {
                    // Challenger is abstract or couldn't find a matching emoji
                    nextEmoji = {
                        emoji: '❓',
                        name: userResponse.toLowerCase(),
                        imageUrl: '' // No image for abstract concepts
                    };
                    // Note: We don't add abstract '❓' emojis to the main uniqueEmojis list
                }

                // --- Image Generation before History ---
                // Ensure the winning emoji (nextEmoji) has an image generated *before* adding to history
                if (nextEmoji.emoji !== '❓' && !nextEmoji.imageUrl) {
                    console.log(`Generating image for winner: ${nextEmoji.name}`);
                    // We use a temporary dummy img/spinner here, as we only need the URL populated.
                    // The actual display happens later or in history.
                    await generateImageForEmoji(nextEmoji, null, null);
                    console.log(`Image generated for ${nextEmoji.name}, URL: ${nextEmoji.imageUrl}`);
                }
                // --- End Image Generation ---

                challengerObjectForHistory = nextEmoji; // Use the determined/created object for history
                addToHistory(currentEmoji, challengerObjectForHistory, true, result.reason);

                // Update the current emoji for the next round ONLY if it's not abstract
                if (nextEmoji.emoji !== '❓') {
                    currentEmoji = nextEmoji;
                    currentEmojiDisplay.textContent = currentEmoji.emoji;
                    currentEmojiName.textContent = currentEmoji.name;
                    // Update the main image display (using the generated URL)
                    currentImage.src = currentEmoji.imageUrl || '';
                    currentImage.style.display = currentEmoji.imageUrl ? 'block' : 'none';
                    currentLoadingSpinner.style.display = 'none'; // Hide spinner if it was shown
                } else {
                    // If the winner was abstract, keep the previous currentEmoji
                    resultMessage.textContent += " (Keeping current item as winner was abstract)";
                }
            } else {
                // User lost
                winningStreak = 0;
                resultMessage.textContent = `Sorry! ${userResponse} doesn't beat ${currentEmoji.name}. ${result.reason}`;
                resultMessage.style.color = "#f44336";

                // Find or create a temporary object for the challenger for history display
                challengerObjectForHistory = uniqueEmojis.find(e => e.name.toLowerCase() === userResponse.toLowerCase()) || {
                    emoji: result.suggestedEmoji || '❓', // Use suggested emoji if available, else '❓'
                    name: userResponse,
                    imageUrl: '' // Attempt to generate image only if not abstract and needed
                };

                // Generate image for the losing challenger *if* it has a concrete emoji and no image yet
                if (challengerObjectForHistory.emoji !== '❓' && !challengerObjectForHistory.imageUrl) {
                    console.log(`Generating image for losing challenger: ${challengerObjectForHistory.name}`);
                    // Use dummy elements as we only need the URL for history
                    await generateImageForEmoji(challengerObjectForHistory, null, null);
                    console.log(`Image generated for ${challengerObjectForHistory.name}, URL: ${challengerObjectForHistory.imageUrl}`);
                }

                addToHistory(currentEmoji, challengerObjectForHistory, false, result.reason);
            }

            streakCount.textContent = winningStreak;
            userInput.value = '';
        } catch (error) {
            console.error("Error during submission:", error);
            resultMessage.textContent = "Oops! Something went wrong. Please try again.";
            resultMessage.style.color = "#f44336";
        } finally {
            submitBtn.disabled = false;
            userInput.disabled = false;
            userInput.focus();
        }
    }

    async function checkIfBeats(challenger, defending) {
        const systemPrompt = `You are the judge in a game of "Rock Paper Anything". 
Assess if the challenger's item would logically beat the defending item in a "rock paper scissors" style comparison.
Consider real-world physics, common knowledge, and pop culture references. Keep explanations concise (1-2 sentences).
If the challenger wins, suggest an appropriate single unicode emoji character that represents the challenger item. If no single emoji fits well, use '❓'. Do not invent new emojis.
Respond ONLY with valid JSON in this exact format:
{
  "isWinner": boolean,
  "reason": "string (1-2 sentences)",
  "suggestedEmoji": "string (single unicode emoji or '❓')"
}`;

        const userMessage = `Defending: ${defending.name} (${defending.emoji})\nChallenger: ${challenger}\n\nDoes the challenger win? Provide JSON response.`;

        const messages = [
            { role: "system", content: systemPrompt },
            { role: "user", content: userMessage }
        ];

        try {
            const completion = await websim.chat.completions.create({
                messages: messages,
                json: true
            });

            let rawResponse = completion.content?.trim();
            if (!rawResponse || !rawResponse.startsWith('{') || !rawResponse.endsWith('}')) {
                // Attempt to find JSON within potentially extraneous text (less ideal)
                const jsonMatch = rawResponse.match(/\{.*\}/s);
                if (jsonMatch) {
                    rawResponse = jsonMatch[0];
                } else {
                    throw new Error(`Received non-JSON response: ${completion.content}`);
                }
            }

            const result = JSON.parse(rawResponse);

            // Validate structure
            if (typeof result.isWinner !== 'boolean' || typeof result.reason !== 'string' || typeof result.suggestedEmoji !== 'string') {
                throw new Error(`Parsed JSON has incorrect structure: ${JSON.stringify(result)}`);
            }

            // Sanitize suggestedEmoji: ensure it's a single character or '❓'
            if (result.suggestedEmoji !== '❓') {
                const firstChar = [...result.suggestedEmoji][0]; // Handle multi-byte unicode
                // Basic check if it looks like an emoji (non-alphanumeric, not basic punctuation)
                // This is imperfect but better than nothing.
                if (firstChar && firstChar.length === 1 && /\p{Extended_Pictographic}/u.test(firstChar)) {
                    result.suggestedEmoji = firstChar;
                } else if (firstChar && firstChar.length > 1 && /\p{Extended_Pictographic}/u.test(firstChar)) {
                    // Handle multi-character single emojis like flags or complex sequences
                    result.suggestedEmoji = firstChar; // Keep the sequence if it's a known emoji pattern
                }
                else {
                    console.warn(`LLM suggested invalid emoji '${result.suggestedEmoji}', using '❓'`);
                    result.suggestedEmoji = '❓';
                }
            }

            return result;
        } catch (error) {
            console.error("Error processing LLM response:", error);
            // Provide a default fallback structure on error
            return {
                isWinner: false,
                reason: "Could not determine the outcome due to an internal error.",
                suggestedEmoji: "❓"
            };
        }
    }

    function addToHistory(defending, challenger, wasSuccessful, reasonText) {
        const historyItem = document.createElement('div');
        historyItem.className = 'history-item';

        const resultClass = wasSuccessful ? 'win' : 'lose';
        const resultIcon = wasSuccessful ? '✅' : '❌';

        // Ensure we have valid data, provide defaults if necessary
        const defendingEmoji = defending?.emoji || '❓';
        const defendingName = defending?.name || 'Unknown';
        const defendingImageUrl = defending?.imageUrl || '';

        const challengerEmoji = challenger?.emoji || '❓';
        const challengerName = challenger?.name || 'Unknown';
        const challengerImageUrl = challenger?.imageUrl || ''; // Use the potentially newly generated URL

        // --- Image HTML with Fallback ---
        const defendingImageHtml = defendingImageUrl
            ? `<img class="history-item-image" src="${defendingImageUrl}" alt="${defendingName}" title="${defendingName}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" onload="this.style.display='block'; this.nextElementSibling.style.display='none';">`
            : '';
        const defendingPlaceholderHtml = `<div class="history-item-image-placeholder" title="${defendingName}" style="${defendingImageUrl ? 'display: none;' : 'display: flex;'}"><span>${defendingEmoji}</span></div>`; // Show emoji in placeholder

        const challengerImageHtml = challengerImageUrl
            ? `<img class="history-item-image" src="${challengerImageUrl}" alt="${challengerName}" title="${challengerName}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" onload="this.style.display='block'; this.nextElementSibling.style.display='none';">`
            : '';
        const challengerPlaceholderHtml = `<div class="history-item-image-placeholder" title="${challengerName}" style="${challengerImageUrl ? 'display: none;' : 'display: flex;'}"><span>${challengerEmoji}</span></div>`;

        historyItem.innerHTML = `
            <div class="history-item-pair">
                <div class="history-item-entity defending">
                    <span class="history-emoji">${defendingEmoji}</span>
                    <div class="image-wrapper">
                        ${defendingImageHtml}
                        ${defendingPlaceholderHtml}
                    </div>
                    <span class="history-name">${defendingName}</span>
                </div>
                <div class="history-vs">vs</div>
                <div class="history-item-entity challenger">
                    <span class="history-emoji">${challengerEmoji}</span>
                    <div class="image-wrapper">
                        ${challengerImageHtml}
                        ${challengerPlaceholderHtml}
                    </div>
                    <span class="history-name">${challengerName}</span>
                </div>
            </div>
            <div class="history-item-details">
                <span class="history-result ${resultClass}">${resultIcon} ${wasSuccessful ? 'Win' : 'Loss'}</span>
                <div class="history-item-reason">${reasonText || 'No reason provided.'}</div>
            </div>
        `;
        // --- End Image HTML ---


        historyList.insertBefore(historyItem, historyList.firstChild);

        // Limit history size
        const maxHistoryItems = 50;
        while (historyList.children.length > maxHistoryItems) {
            historyList.removeChild(historyList.lastChild);
        }
    }
});