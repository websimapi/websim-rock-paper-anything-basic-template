document.addEventListener('DOMContentLoaded', () => {
    // Initial list of emojis with their names
    const emojis = [
        { emoji: '🪨', name: 'rock', imageUrl: '', isGeneratingImage: false },
        { emoji: '📄', name: 'paper', imageUrl: '', isGeneratingImage: false },
        { emoji: '✂️', name: 'scissors', imageUrl: '', isGeneratingImage: false },
        { emoji: '🔥', name: 'fire', imageUrl: '', isGeneratingImage: false },
        { emoji: '💧', name: 'water', imageUrl: '', isGeneratingImage: false },
        { emoji: '🌪️', name: 'tornado', imageUrl: '', isGeneratingImage: false },
        { emoji: '🌵', name: 'cactus', imageUrl: '', isGeneratingImage: false },
        { emoji: '🧙‍♂️', name: 'wizard', imageUrl: '', isGeneratingImage: false },
        { emoji: '🐉', name: 'dragon', imageUrl: '', isGeneratingImage: false },
        { emoji: '🗡️', name: 'sword', imageUrl: '', isGeneratingImage: false },
        { emoji: '🛡️', name: 'shield', imageUrl: '', isGeneratingImage: false },
        { emoji: '🧸', name: 'teddy bear', imageUrl: '', isGeneratingImage: false },
        { emoji: '🦈', name: 'shark', imageUrl: '', isGeneratingImage: false },
        { emoji: '🦖', name: 'dinosaur', imageUrl: '', isGeneratingImage: false },
        { emoji: '🚀', name: 'rocket', imageUrl: '', isGeneratingImage: false },
        { emoji: '🌞', name: 'sun', imageUrl: '', isGeneratingImage: false },
        { emoji: '🌚', name: 'moon', imageUrl: '', isGeneratingImage: false },
        { emoji: '⚡', name: 'lightning', imageUrl: '', isGeneratingImage: false },
        { emoji: '🌈', name: 'rainbow', imageUrl: '', isGeneratingImage: false },
        { emoji: '🧊', name: 'ice', imageUrl: '', isGeneratingImage: false },
        { emoji: '🔨', name: 'hammer', imageUrl: '', isGeneratingImage: false },
        { emoji: '🪓', name: 'axe', imageUrl: '', isGeneratingImage: false },
        { emoji: '🪚', name: 'saw', imageUrl: '', isGeneratingImage: false },
        { emoji: '🧲', name: 'magnet', imageUrl: '', isGeneratingImage: false },
        { emoji: '💣', name: 'bomb', imageUrl: '', isGeneratingImage: false },
        { emoji: '🧪', name: 'potion', imageUrl: '', isGeneratingImage: false },
        { emoji: '🧬', name: 'dna', imageUrl: '', isGeneratingImage: false },
        { emoji: '🦠', name: 'microbe', imageUrl: '', isGeneratingImage: false },
        { emoji: '🔬', name: 'microscope', imageUrl: '', isGeneratingImage: false },
        { emoji: '🧫', name: 'petri dish', imageUrl: '', isGeneratingImage: false },
        { emoji: '🧠', name: 'brain', imageUrl: '', isGeneratingImage: false },
        { emoji: '👻', name: 'ghost', imageUrl: '', isGeneratingImage: false },
        { emoji: '🤖', name: 'robot', imageUrl: '', isGeneratingImage: false },
        { emoji: '👽', name: 'alien', imageUrl: '', isGeneratingImage: false },
        { emoji: '🦹', name: 'supervillain', imageUrl: '', isGeneratingImage: false },
        { emoji: '🧚', name: 'fairy', imageUrl: '', isGeneratingImage: false },
        { emoji: '🧜', name: 'mermaid', imageUrl: '', isGeneratingImage: false },
        { emoji: '🧛', name: 'vampire', imageUrl: '', isGeneratingImage: false },
        { emoji: '🧟', name: 'zombie', imageUrl: '', isGeneratingImage: false },
        { emoji: '🦸', name: 'superhero', imageUrl: '', isGeneratingImage: false },
        { emoji: '🦇', name: 'bat', imageUrl: '', isGeneratingImage: false },
        { emoji: '🐺', name: 'wolf', imageUrl: '', isGeneratingImage: false },
        { emoji: '🦁', name: 'lion', imageUrl: '', isGeneratingImage: false },
        { emoji: '🐘', name: 'elephant', imageUrl: '', isGeneratingImage: false },
        { emoji: '🐅', name: 'tiger', imageUrl: '', isGeneratingImage: false },
        { emoji: '🦏', name: 'rhino', imageUrl: '', isGeneratingImage: false },
        { emoji: '🐊', name: 'crocodile', imageUrl: '', isGeneratingImage: false },
        { emoji: '🦅', name: 'eagle', imageUrl: '', isGeneratingImage: false },
        { emoji: '🦂', name: 'scorpion', imageUrl: '', isGeneratingImage: false },
        { emoji: '🕷️', name: 'spider', imageUrl: '', isGeneratingImage: false },
        { emoji: '🦗', name: 'cricket', imageUrl: '', isGeneratingImage: false },
        { emoji: '🐜', name: 'ant', imageUrl: '', isGeneratingImage: false },
        { emoji: '🐝', name: 'bee', imageUrl: '', isGeneratingImage: false },
        { emoji: '🦋', name: 'butterfly', imageUrl: '', isGeneratingImage: false },
        { emoji: '🐌', name: 'snail', imageUrl: '', isGeneratingImage: false },
        { emoji: '🐍', name: 'snake', imageUrl: '', isGeneratingImage: false },
        { emoji: '🐢', name: 'turtle', imageUrl: '', isGeneratingImage: false },
        { emoji: '🐙', name: 'octopus', imageUrl: '', isGeneratingImage: false },
        { emoji: '🦑', name: 'squid', imageUrl: '', isGeneratingImage: false },
        { emoji: '🦀', name: 'crab', imageUrl: '', isGeneratingImage: false },
        { emoji: '🦐', name: 'shrimp', imageUrl: '', isGeneratingImage: false },
        { emoji: '🐡', name: 'blowfish', imageUrl: '', isGeneratingImage: false },
        { emoji: '🐟', name: 'fish', imageUrl: '', isGeneratingImage: false },
        { emoji: '🐬', name: 'dolphin', imageUrl: '', isGeneratingImage: false },
        { emoji: '🐳', name: 'whale', imageUrl: '', isGeneratingImage: false },
        { emoji: '🐎', name: 'horse', imageUrl: '', isGeneratingImage: false },
        { emoji: '🦄', name: 'unicorn', imageUrl: '', isGeneratingImage: false },
        { emoji: '🦓', name: 'zebra', imageUrl: '', isGeneratingImage: false },
        { emoji: '🦌', name: 'deer', imageUrl: '', isGeneratingImage: false },
        { emoji: '🐄', name: 'cow', imageUrl: '', isGeneratingImage: false },
        { emoji: '🐖', name: 'pig', imageUrl: '', isGeneratingImage: false },
        { emoji: '🐏', name: 'ram', imageUrl: '', isGeneratingImage: false },
        { emoji: '🐑', name: 'sheep', imageUrl: '', isGeneratingImage: false },
        { emoji: '🐐', name: 'goat', imageUrl: '', isGeneratingImage: false },
        { emoji: '🐫', name: 'camel', imageUrl: '', isGeneratingImage: false },
        { emoji: '🦒', name: 'giraffe', imageUrl: '', isGeneratingImage: false },
        { emoji: '🦘', name: 'kangaroo', imageUrl: '', isGeneratingImage: false },
        { emoji: '🐃', name: 'water buffalo', imageUrl: '', isGeneratingImage: false },
        { emoji: '🐂', name: 'ox', imageUrl: '', isGeneratingImage: false },
        { emoji: '🐄', name: 'cow', imageUrl: '', isGeneratingImage: false },
        { emoji: '🐁', name: 'mouse', imageUrl: '', isGeneratingImage: false },
        { emoji: '🐀', name: 'rat', imageUrl: '', isGeneratingImage: false },
        { emoji: '🐿️', name: 'chipmunk', imageUrl: '', isGeneratingImage: false },
        { emoji: '🦔', name: 'hedgehog', imageUrl: '', isGeneratingImage: false },
        { emoji: '🐇', name: 'rabbit', imageUrl: '', isGeneratingImage: false },
        { emoji: '🐈', name: 'cat', imageUrl: '', isGeneratingImage: false },
        { emoji: '🐩', name: 'poodle', imageUrl: '', isGeneratingImage: false },
        { emoji: '🐕', name: 'dog', imageUrl: '', isGeneratingImage: false },
        { emoji: '🐔', name: 'chicken', imageUrl: '', isGeneratingImage: false },
        { emoji: '🐧', name: 'penguin', imageUrl: '', isGeneratingImage: false },
        { emoji: '🐦', name: 'bird', imageUrl: '', isGeneratingImage: false },
        { emoji: '🐤', name: 'chick', imageUrl: '', isGeneratingImage: false },
        { emoji: '🦆', name: 'duck', imageUrl: '', isGeneratingImage: false },
        { emoji: '🦢', name: 'swan', imageUrl: '', isGeneratingImage: false },
        { emoji: '🦉', name: 'owl', imageUrl: '', isGeneratingImage: false },
        { emoji: '🐸', name: 'frog', imageUrl: '', isGeneratingImage: false },
        { emoji: '🦎', name: 'lizard', imageUrl: '', isGeneratingImage: false },
        { emoji: '🐾', name: 'paw prints', imageUrl: '', isGeneratingImage: false },
        { emoji: '🌲', name: 'evergreen tree', imageUrl: '', isGeneratingImage: false },
        { emoji: '🌳', name: 'deciduous tree', imageUrl: '', isGeneratingImage: false },
        { emoji: '🌴', name: 'palm tree', imageUrl: '', isGeneratingImage: false },
        { emoji: '🌱', name: 'seedling', imageUrl: '', isGeneratingImage: false },
        { emoji: '🌿', name: 'herb', imageUrl: '', isGeneratingImage: false },
        { emoji: '☘️', name: 'shamrock', imageUrl: '', isGeneratingImage: false },
        { emoji: '🍀', name: 'four leaf clover', imageUrl: '', isGeneratingImage: false },
        { emoji: '🎍', name: 'bamboo', imageUrl: '', isGeneratingImage: false },
        { emoji: '🍄', name: 'mushroom', imageUrl: '', isGeneratingImage: false },
        { emoji: '🌸', name: 'cherry blossom', imageUrl: '', isGeneratingImage: false },
        { emoji: '🌹', name: 'rose', imageUrl: '', isGeneratingImage: false },
        { emoji: '🌻', name: 'sunflower', imageUrl: '', isGeneratingImage: false },
        { emoji: '🌺', name: 'hibiscus', imageUrl: '', isGeneratingImage: false },
        { emoji: '🌷', name: 'tulip', imageUrl: '', isGeneratingImage: false },
        { emoji: '🌼', name: 'blossom', imageUrl: '', isGeneratingImage: false },
        { emoji: '🌾', name: 'sheaf of rice', imageUrl: '', isGeneratingImage: false },
        { emoji: '🍁', name: 'maple leaf', imageUrl: '', isGeneratingImage: false },
        { emoji: '🍂', name: 'fallen leaf', imageUrl: '', isGeneratingImage: false },
        { emoji: '🌰', name: 'chestnut', imageUrl: '', isGeneratingImage: false },
        { emoji: '🌍', name: 'earth', imageUrl: '', isGeneratingImage: false },
        { emoji: '🌋', name: 'volcano', imageUrl: '', isGeneratingImage: false },
        { emoji: '🏔️', name: 'mountain', imageUrl: '', isGeneratingImage: false },
        { emoji: '🌊', name: 'wave', imageUrl: '', isGeneratingImage: false },
        { emoji: '🏜️', name: 'desert', imageUrl: '', isGeneratingImage: false },
        { emoji: '🏝️', name: 'desert island', imageUrl: '', isGeneratingImage: false },
        { emoji: '🏞️', name: 'national park', imageUrl: '', isGeneratingImage: false },
        { emoji: '🏟️', name: 'stadium', imageUrl: '', isGeneratingImage: false },
        { emoji: '🏠', name: 'house', imageUrl: '', isGeneratingImage: false },
        { emoji: '🏢', name: 'office building', imageUrl: '', isGeneratingImage: false },
        { emoji: '🏰', name: 'castle', imageUrl: '', isGeneratingImage: false },
        { emoji: '🏭', name: 'factory', imageUrl: '', isGeneratingImage: false },
        { emoji: '🗼', name: 'tokyo tower', imageUrl: '', isGeneratingImage: false },
        { emoji: '🗽', name: 'statue of liberty', imageUrl: '', isGeneratingImage: false },
        { emoji: '⛩️', name: 'shinto shrine', imageUrl: '', isGeneratingImage: false },
        { emoji: '🕋', name: 'kaaba', imageUrl: '', isGeneratingImage: false },
        { emoji: '🕌', name: 'mosque', imageUrl: '', isGeneratingImage: false },
        { emoji: '🕍', name: 'synagogue', imageUrl: '', isGeneratingImage: false },
        { emoji: '⛪', name: 'church', imageUrl: '', isGeneratingImage: false },
        { emoji: '⛲', name: 'fountain', imageUrl: '', isGeneratingImage: false },
        { emoji: '⛺', name: 'tent', imageUrl: '', isGeneratingImage: false },
        { emoji: '🌃', name: 'night with stars', imageUrl: '', isGeneratingImage: false },
        { emoji: '🌄', name: 'sunrise over mountains', imageUrl: '', isGeneratingImage: false },
        { emoji: '🌅', name: 'sunrise', imageUrl: '', isGeneratingImage: false },
        { emoji: '🌇', name: 'sunset', imageUrl: '', isGeneratingImage: false },
        { emoji: '🌉', name: 'bridge at night', imageUrl: '', isGeneratingImage: false },
        { emoji: '🚂', name: 'steam locomotive', imageUrl: '', isGeneratingImage: false },
        { emoji: '🚃', name: 'railway car', imageUrl: '', isGeneratingImage: false },
        { emoji: '🚄', name: 'high-speed train', imageUrl: '', isGeneratingImage: false },
        { emoji: '🚅', name: 'bullet train', imageUrl: '', isGeneratingImage: false },
        { emoji: '🚆', name: 'train', imageUrl: '', isGeneratingImage: false },
        { emoji: '🚇', name: 'metro', imageUrl: '', isGeneratingImage: false },
        { emoji: '🚈', name: 'light rail', imageUrl: '', isGeneratingImage: false },
        { emoji: '🚉', name: 'station', imageUrl: '', isGeneratingImage: false },
        { emoji: '🚊', name: 'tram', imageUrl: '', isGeneratingImage: false },
        { emoji: '🚝', name: 'monorail', imageUrl: '', isGeneratingImage: false },
        { emoji: '🚞', name: 'mountain railway', imageUrl: '', isGeneratingImage: false },
        { emoji: '🚋', name: 'tram car', imageUrl: '', isGeneratingImage: false },
        { emoji: '🚌', name: 'bus', imageUrl: '', isGeneratingImage: false },
        { emoji: '🚍', name: 'oncoming bus', imageUrl: '', isGeneratingImage: false },
        { emoji: '🚐', name: 'minibus', imageUrl: '', isGeneratingImage: false },
        { emoji: '🚑', name: 'ambulance', imageUrl: '', isGeneratingImage: false },
        { emoji: '🚒', name: 'fire engine', imageUrl: '', isGeneratingImage: false },
        { emoji: '🚓', name: 'police car', imageUrl: '', isGeneratingImage: false },
        { emoji: '🚕', name: 'taxi', imageUrl: '', isGeneratingImage: false },
        { emoji: '🚗', name: 'car', imageUrl: '', isGeneratingImage: false },
        { emoji: '🚚', name: 'delivery truck', imageUrl: '', isGeneratingImage: false },
        { emoji: '🚛', name: 'articulated lorry', imageUrl: '', isGeneratingImage: false },
        { emoji: '🚜', name: 'tractor', imageUrl: '', isGeneratingImage: false },
        { emoji: '🚲', name: 'bicycle', imageUrl: '', isGeneratingImage: false },
        { emoji: '🛴', name: 'kick scooter', imageUrl: '', isGeneratingImage: false },
        { emoji: '🛵', name: 'motor scooter', imageUrl: '', isGeneratingImage: false },
        { emoji: '🏍️', name: 'motorcycle', imageUrl: '', isGeneratingImage: false },
        { emoji: '🚨', name: 'police car light', imageUrl: '', isGeneratingImage: false },
        { emoji: '⛽', name: 'fuel pump', imageUrl: '', isGeneratingImage: false },
        { emoji: '🚦', name: 'traffic light', imageUrl: '', isGeneratingImage: false },
        { emoji: '🚧', name: 'construction', imageUrl: '', isGeneratingImage: false },
        { emoji: '⚓', name: 'anchor', imageUrl: '', isGeneratingImage: false },
        { emoji: '⛵', name: 'sailboat', imageUrl: '', isGeneratingImage: false },
        { emoji: '🛶', name: 'canoe', imageUrl: '', isGeneratingImage: false },
        { emoji: '🚤', name: 'speedboat', imageUrl: '', isGeneratingImage: false },
        { emoji: '🚢', name: 'ship', imageUrl: '', isGeneratingImage: false },
        { emoji: '✈️', name: 'airplane', imageUrl: '', isGeneratingImage: false },
        { emoji: '🚁', name: 'helicopter', imageUrl: '', isGeneratingImage: false },
        { emoji: '🛰️', name: 'satellite', imageUrl: '', isGeneratingImage: false },
        { emoji: '🛸', name: 'ufo', imageUrl: '', isGeneratingImage: false },
        { emoji: '🕰️', name: 'mantelpiece clock', imageUrl: '', isGeneratingImage: false },
        { emoji: '⌚', name: 'watch', imageUrl: '', isGeneratingImage: false },
        { emoji: '⏰', name: 'alarm clock', imageUrl: '', isGeneratingImage: false },
        { emoji: '⏱️', name: 'stopwatch', imageUrl: '', isGeneratingImage: false },
        { emoji: '⏲️', name: 'timer clock', imageUrl: '', isGeneratingImage: false },
        { emoji: '⏳', name: 'hourglass', imageUrl: '', isGeneratingImage: false },
        { emoji: '⌨️', name: 'keyboard', imageUrl: '', isGeneratingImage: false },
        { emoji: '🖱️', name: 'computer mouse', imageUrl: '', isGeneratingImage: false },
        { emoji: '🖲️', name: 'trackball', imageUrl: '', isGeneratingImage: false },
        { emoji: '💻', name: 'laptop', imageUrl: '', isGeneratingImage: false },
        { emoji: '🖥️', name: 'desktop computer', imageUrl: '', isGeneratingImage: false },
        { emoji: '🕹️', name: 'joystick', imageUrl: '', isGeneratingImage: false },
        { emoji: '💾', name: 'floppy disk', imageUrl: '', isGeneratingImage: false },
        { emoji: '💿', name: 'cd', imageUrl: '', isGeneratingImage: false },
        { emoji: '📀', name: 'dvd', imageUrl: '', isGeneratingImage: false },
        { emoji: '📼', name: 'vhs', imageUrl: '', isGeneratingImage: false },
        { emoji: '📷', name: 'camera', imageUrl: '', isGeneratingImage: false },
        { emoji: '📹', name: 'video camera', imageUrl: '', isGeneratingImage: false },
        { emoji: '🎥', name: 'movie camera', imageUrl: '', isGeneratingImage: false },
        { emoji: '🎞️', name: 'film frames', imageUrl: '', isGeneratingImage: false },
        { emoji: '📞', name: 'telephone receiver', imageUrl: '', isGeneratingImage: false },
        { emoji: '☎️', name: 'telephone', imageUrl: '', isGeneratingImage: false },
        { emoji: '📟', name: 'pager', imageUrl: '', isGeneratingImage: false },
        { emoji: '📠', name: 'fax machine', imageUrl: '', isGeneratingImage: false },
        { emoji: '📺', name: 'television', imageUrl: '', isGeneratingImage: false },
        { emoji: '📻', name: 'radio', imageUrl: '', isGeneratingImage: false },
        { emoji: '🎙️', name: 'studio microphone', imageUrl: '', isGeneratingImage: false },
        { emoji: '💡', name: 'light bulb', imageUrl: '', isGeneratingImage: false },
        { emoji: '🔦', name: 'flashlight', imageUrl: '', isGeneratingImage: false },
        { emoji: '🕯️', name: 'candle', imageUrl: '', isGeneratingImage: false },
        { emoji: '💰', name: 'money bag', imageUrl: '', isGeneratingImage: false },
        { emoji: '💳', name: 'credit card', imageUrl: '', isGeneratingImage: false },
        { emoji: '💎', name: 'gem stone', imageUrl: '', isGeneratingImage: false },
        { emoji: '⚖️', name: 'balance scale', imageUrl: '', isGeneratingImage: false },
        { emoji: '🔧', name: 'wrench', imageUrl: '', isGeneratingImage: false },
        { emoji: '🔩', name: 'nut and bolt', imageUrl: '', isGeneratingImage: false },
        { emoji: '⚙️', name: 'gear', imageUrl: '', isGeneratingImage: false },
        { emoji: '🔗', name: 'link', imageUrl: '', isGeneratingImage: false },
        { emoji: '⛓️', name: 'chains', imageUrl: '', isGeneratingImage: false },
        { emoji: '💉', name: 'syringe', imageUrl: '', isGeneratingImage: false },
        { emoji: '💊', name: 'pill', imageUrl: '', isGeneratingImage: false },
        { emoji: '🚬', name: 'cigarette', imageUrl: '', isGeneratingImage: false },
        { emoji: '⚰️', name: 'coffin', imageUrl: '', isGeneratingImage: false },
        { emoji: '🏺', name: 'amphora', imageUrl: '', isGeneratingImage: false },
        { emoji: '🗺️', name: 'world map', imageUrl: '', isGeneratingImage: false },
        { emoji: '🧭', name: 'compass', imageUrl: '', isGeneratingImage: false },
        { emoji: '🧱', name: 'brick', imageUrl: '', isGeneratingImage: false },
        { emoji: '💈', name: 'barber pole', imageUrl: '', isGeneratingImage: false },
        { emoji: '🛢️', name: 'oil drum', imageUrl: '', isGeneratingImage: false },
        { emoji: '🛎️', name: 'bellhop bell', imageUrl: '', isGeneratingImage: false },
        { emoji: '🔑', name: 'key', imageUrl: '', isGeneratingImage: false },
        { emoji: '🗝️', name: 'old key', imageUrl: '', isGeneratingImage: false },
        { emoji: '🚪', name: 'door', imageUrl: '', isGeneratingImage: false },
        { emoji: '🛋️', name: 'couch and lamp', imageUrl: '', isGeneratingImage: false },
        { emoji: '🛌', name: 'person in bed', imageUrl: '', isGeneratingImage: false },
        { emoji: '🧸', name: 'teddy bear', imageUrl: '', isGeneratingImage: false },
        { emoji: '🖼️', name: 'framed picture', imageUrl: '', isGeneratingImage: false },
        { emoji: '🛍️', name: 'shopping bags', imageUrl: '', isGeneratingImage: false },
        { emoji: '🛒', name: 'shopping cart', imageUrl: '', isGeneratingImage: false },
        { emoji: '🎁', name: 'wrapped gift', imageUrl: '', isGeneratingImage: false },
        { emoji: '🎈', name: 'balloon', imageUrl: '', isGeneratingImage: false },
        { emoji: '🎀', name: 'ribbon', imageUrl: '', isGeneratingImage: false },
        { emoji: '🎊', name: 'confetti ball', imageUrl: '', isGeneratingImage: false },
        { emoji: '🎉', name: 'party popper', imageUrl: '', isGeneratingImage: false },
        { emoji: '🎏', name: 'carp streamer', imageUrl: '', isGeneratingImage: false },
        { emoji: '🎎', name: 'japanese dolls', imageUrl: '', isGeneratingImage: false },
        { emoji: '🎐', name: 'wind chime', imageUrl: '', isGeneratingImage: false },
        { emoji: '✉️', name: 'envelope', imageUrl: '', isGeneratingImage: false },
        { emoji: '🧧', name: 'red envelope', imageUrl: '', isGeneratingImage: false },
        { emoji: '📤', name: 'outbox tray', imageUrl: '', isGeneratingImage: false },
        { emoji: '📥', name: 'inbox tray', imageUrl: '', isGeneratingImage: false },
        { emoji: '📦', name: 'package', imageUrl: '', isGeneratingImage: false },
        { emoji: '📫', name: 'mailbox', imageUrl: '', isGeneratingImage: false },
        { emoji: '📮', name: 'postbox', imageUrl: '', isGeneratingImage: false },
        { emoji: '📜', name: 'scroll', imageUrl: '', isGeneratingImage: false },
        { emoji: '📃', name: 'page with curl', imageUrl: '', isGeneratingImage: false },
        { emoji: '📑', name: 'bookmark tabs', imageUrl: '', isGeneratingImage: false },
        { emoji: '📊', name: 'bar chart', imageUrl: '', isGeneratingImage: false },
        { emoji: '📈', name: 'chart increasing', imageUrl: '', isGeneratingImage: false },
        { emoji: '📉', name: 'chart decreasing', imageUrl: '', isGeneratingImage: false },
        { emoji: '📄', name: 'page facing up', imageUrl: '', isGeneratingImage: false },
        { emoji: '📅', name: 'calendar', imageUrl: '', isGeneratingImage: false },
        { emoji: '📆', name: 'tear-off calendar', imageUrl: '', isGeneratingImage: false },
        { emoji: '🗓️', name: 'spiral calendar', imageUrl: '', isGeneratingImage: false },
        { emoji: '📁', name: 'file folder', imageUrl: '', isGeneratingImage: false },
        { emoji: '📂', name: 'open file folder', imageUrl: '', isGeneratingImage: false },
        { emoji: '🗂️', name: 'card index dividers', imageUrl: '', isGeneratingImage: false },
        { emoji: '📰', name: 'newspaper', imageUrl: '', isGeneratingImage: false },
        { emoji: '🗞️', name: 'rolled-up newspaper', imageUrl: '', isGeneratingImage: false },
        { emoji: '📓', name: 'notebook', imageUrl: '', isGeneratingImage: false },
        { emoji: '📔', name: 'notebook with decorative cover', imageUrl: '', isGeneratingImage: false },
        { emoji: '📒', name: 'ledger', imageUrl: '', isGeneratingImage: false },
        { emoji: '📕', name: 'closed book', imageUrl: '', isGeneratingImage: false },
        { emoji: '📗', name: 'green book', imageUrl: '', isGeneratingImage: false },
        { emoji: '📘', name: 'blue book', imageUrl: '', isGeneratingImage: false },
        { emoji: '📙', name: 'orange book', imageUrl: '', isGeneratingImage: false },
        { emoji: '📚', name: 'books', imageUrl: '', isGeneratingImage: false },
        { emoji: '📖', name: 'open book', imageUrl: '', isGeneratingImage: false },
        { emoji: '🔖', name: 'bookmark', imageUrl: '', isGeneratingImage: false },
        { emoji: '🔗', name: 'link', imageUrl: '', isGeneratingImage: false },
        { emoji: '📎', name: 'paperclip', imageUrl: '', isGeneratingImage: false },
        { emoji: '🖇️', name: 'linked paperclips', imageUrl: '', isGeneratingImage: false },
        { emoji: '📐', name: 'triangular ruler', imageUrl: '', isGeneratingImage: false },
        { emoji: '📏', name: 'straight ruler', imageUrl: '', isGeneratingImage: false },
        { emoji: '📌', name: 'pushpin', imageUrl: '', isGeneratingImage: false },
        { emoji: '📍', name: 'round pushpin', imageUrl: '', isGeneratingImage: false },
        { emoji: '🖊️', name: 'pen', imageUrl: '', isGeneratingImage: false },
        { emoji: '🖋️', name: 'fountain pen', imageUrl: '', isGeneratingImage: false },
        { emoji: '🖌️', name: 'paintbrush', imageUrl: '', isGeneratingImage: false },
        { emoji: '🖍️', name: 'crayon', imageUrl: '', isGeneratingImage: false },
        { emoji: '📝', name: 'memo', imageUrl: '', isGeneratingImage: false },
        { emoji: '✏️', name: 'pencil', imageUrl: '', isGeneratingImage: false },
        { emoji: '🔎', name: 'magnifying glass tilted left', imageUrl: '', isGeneratingImage: false },
        { emoji: '🔍', name: 'magnifying glass tilted right', imageUrl: '', isGeneratingImage: false },
        { emoji: '🔐', name: 'locked with key', imageUrl: '', isGeneratingImage: false },
        { emoji: '🔒', name: 'locked', imageUrl: '', isGeneratingImage: false },
        { emoji: '🔓', name: 'unlocked', imageUrl: '', isGeneratingImage: false },
        // Added more emojis
        { emoji: '✨', name: 'sparkles', imageUrl: '', isGeneratingImage: false },
        { emoji: '⭐', name: 'star', imageUrl: '', isGeneratingImage: false },
        { emoji: '🌟', name: 'glowing star', imageUrl: '', isGeneratingImage: false },
        { emoji: '💫', name: 'dizzy', imageUrl: '', isGeneratingImage: false },
        { emoji: '💥', name: 'collision', imageUrl: '', isGeneratingImage: false },
        { emoji: '💨', name: 'dashing away', imageUrl: '', isGeneratingImage: false },
        { emoji: '💦', name: 'sweat droplets', imageUrl: '', isGeneratingImage: false },
        { emoji: '💯', name: 'hundred points', imageUrl: '', isGeneratingImage: false },
        { emoji: '🕳️', name: 'hole', imageUrl: '', isGeneratingImage: false },
        { emoji: '💫', name: 'dizzy symbol', imageUrl: '', isGeneratingImage: false },
        { emoji: '✨', name: 'sparkles', imageUrl: '', isGeneratingImage: false },
        { emoji: '⭐', name: 'star', imageUrl: '', isGeneratingImage: false },
        { emoji: '🌟', name: 'glowing star', imageUrl: '', isGeneratingImage: false },
        { emoji: '💥', name: 'collision', imageUrl: '', isGeneratingImage: false },
        { emoji: '💨', name: 'dash symbol', imageUrl: '', isGeneratingImage: false },
        { emoji: '💦', name: 'sweat droplets', imageUrl: '', isGeneratingImage: false },
        { emoji: '💯', name: 'hundred points symbol', imageUrl: '', isGeneratingImage: false },
        { emoji: '🕳️', name: 'hole', imageUrl: '', isGeneratingImage: false },
        { emoji: '🌍', name: 'Earth globe Europe-Africa', imageUrl: '', isGeneratingImage: false },
        { emoji: '🌎', name: 'Earth globe Americas', imageUrl: '', isGeneratingImage: false },
        { emoji: '🌏', name: 'Earth globe Asia-Australia', imageUrl: '', isGeneratingImage: false },
        { emoji: '🌑', name: 'new moon', imageUrl: '', isGeneratingImage: false },
        { emoji: '🌒', name: 'waxing crescent moon', imageUrl: '', isGeneratingImage: false },
        { emoji: '🌓', name: 'first quarter moon', imageUrl: '', isGeneratingImage: false },
        { emoji: '🌔', name: 'waxing gibbous moon', imageUrl: '', isGeneratingImage: false },
        { emoji: '🌕', name: 'full moon', imageUrl: '', isGeneratingImage: false },
        { emoji: '🌖', name: 'waning gibbous moon', imageUrl: '', isGeneratingImage: false },
        { emoji: '🌗', name: 'last quarter moon', imageUrl: '', isGeneratingImage: false },
        { emoji: '🌘', name: 'waning crescent moon', imageUrl: '', isGeneratingImage: false },
        { emoji: '🌀', name: 'cyclone', imageUrl: '', isGeneratingImage: false },
        { emoji: '🌫️', name: 'fog', imageUrl: '', isGeneratingImage: false },
        { emoji: '🌬️', name: 'wind face', imageUrl: '', isGeneratingImage: false },
        { emoji: '🌡️', name: 'thermometer', imageUrl: '', isGeneratingImage: false },
        { emoji: '⛱️', name: 'umbrella on ground', imageUrl: '', isGeneratingImage: false },
        { emoji: '❄️', name: 'snowflake', imageUrl: '', isGeneratingImage: false },
        { emoji: '☃️', name: 'snowman', imageUrl: '', isGeneratingImage: false },
        { emoji: '☄️', name: 'comet', imageUrl: '', isGeneratingImage: false },
        { emoji: '🌌', name: 'milky way', imageUrl: '', isGeneratingImage: false },
        { emoji: '🪐', name: 'ringed planet', imageUrl: '', isGeneratingImage: false },
        { emoji: '⚔️', name: 'crossed swords', imageUrl: '', isGeneratingImage: false }
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
    generateImageForEmoji(currentEmoji);

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
    async function generateImageForEmoji(emojiObj) {
        // Ensure we don't trigger multiple generations for the same emoji simultaneously
        if (emojiObj.isGeneratingImage) {
            console.log(`Image generation already in progress for ${emojiObj.name}`);
            return; // Exit if generation is already happening
        }
        
        // Update the main display image container immediately if necessary
        const isCurrent = currentEmoji && currentEmoji.name === emojiObj.name;
        if (isCurrent) {
            currentImage.style.display = 'none';
            currentLoadingSpinner.style.display = 'block';
        }

        // Mark as generating
        emojiObj.isGeneratingImage = true;

        // Update placeholder images in history for this emoji
        updateHistoryImages(emojiObj.name, '', true); // Show loading state

        try {
            console.log(`Generating image for: ${emojiObj.name} (${emojiObj.emoji})`);
            const result = await websim.imageGen({
                prompt: `A detailed illustration of a ${emojiObj.name}, simple clean background, high quality, digital art style`,
                aspect_ratio: "1:1"
            });
            emojiObj.imageUrl = result.url;
            console.log(`Generated image URL for ${emojiObj.name}: ${emojiObj.imageUrl}`);

            // Update the main display image if this is still the current emoji
            if (isCurrent) {
                currentImage.src = emojiObj.imageUrl;
                currentImage.style.display = 'block';
            }
            
            // Update images in history list
            updateHistoryImages(emojiObj.name, emojiObj.imageUrl, false); // Set final image, hide loading

        } catch (error) {
            console.error(`Error generating image for ${emojiObj.name}:`, error);
            emojiObj.imageUrl = ''; // Reset image URL on error

            // Update images in history list (remove loading state, show placeholder)
             updateHistoryImages(emojiObj.name, '', false);

        } finally {
            // Always mark generation as finished
            emojiObj.isGeneratingImage = false;
            // Hide loading spinner for the main display if this is the current emoji
            if (isCurrent) {
                currentLoadingSpinner.style.display = 'none';
                // Ensure image display state is correct based on final imageUrl
                currentImage.style.display = emojiObj.imageUrl ? 'block' : 'none';
            }
        }
    }

    function updateHistoryImages(emojiName, imageUrl, isLoading) {
         const historyImages = historyList.querySelectorAll(`.history-item-image[data-emoji-name="${emojiName.toLowerCase()}"]`);
         const historyPlaceholders = historyList.querySelectorAll(`.history-item-image-placeholder[data-emoji-name="${emojiName.toLowerCase()}"]`);

         historyImages.forEach(img => {
             if (isLoading) {
                 img.style.display = 'none'; // Hide image while loading
             } else {
                 if (imageUrl) {
                     img.src = imageUrl;
                     img.style.display = 'block';
                 } else {
                     img.style.display = 'none'; // Keep hidden if no URL
                 }
             }
         });

         historyPlaceholders.forEach(placeholder => {
             placeholder.classList.toggle('loading', isLoading); // Add/remove loading class
             placeholder.style.display = (isLoading || !imageUrl) ? 'block' : 'none'; // Show if loading or no image
         });
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
        const lowerCaseResponse = userResponse.toLowerCase();

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
            let nextEmoji = null; // Define nextEmoji here

            if (result.isWinner) {
                winningStreak++;
                resultMessage.textContent = `Yes! ${userResponse} beats ${currentEmoji.name}! ${result.reason}`;
                resultMessage.style.color = "#4CAF50";

                // Try to find an existing emoji matching the user's input name
                nextEmoji = uniqueEmojis.find(e => e.name.toLowerCase() === lowerCaseResponse);

                // If not found by name, check if the suggested emoji exists
                if (!nextEmoji && result.suggestedEmoji && result.suggestedEmoji !== '❓') {
                    nextEmoji = uniqueEmojis.find(e => e.emoji === result.suggestedEmoji);
                    // If found by emoji, but name differs, update name for consistency (optional)
                    // if (nextEmoji) nextEmoji.name = lowerCaseResponse;
                }

                // If still not found, and we have a suggested emoji, create a new entry
                if (!nextEmoji && result.suggestedEmoji && result.suggestedEmoji !== '❓') {
                    nextEmoji = {
                        emoji: result.suggestedEmoji,
                        name: lowerCaseResponse,
                        imageUrl: '',
                        isGeneratingImage: false
                    };
                    uniqueEmojis.push(nextEmoji);
                    // Update pagination if necessary
                    totalEmojiPages = Math.ceil(uniqueEmojis.length / emojisPerPage);
                    if (uniqueEmojis.length > currentEmojiPage * emojisPerPage && uniqueEmojis.length <= (currentEmojiPage + 1) * emojisPerPage) {
                        displayEmojiPage(currentEmojiPage); // Refresh current page if new item fits
                    } else {
                        // Just update page count indicator
                        pageIndicator.textContent = `Page ${currentEmojiPage + 1} of ${totalEmojiPages}`;
                        nextPageBtn.disabled = currentEmojiPage === totalEmojiPages - 1;
                    }
                     console.log(`Added new emoji: ${nextEmoji.name} (${nextEmoji.emoji})`);
                } else if (!nextEmoji) {
                    // If no emoji could be found or suggested, create a placeholder
                     console.log(`Could not find or suggest emoji for: ${userResponse}. Using placeholder.`);
                    nextEmoji = {
                        emoji: '❓',
                        name: lowerCaseResponse,
                        imageUrl: '',
                        isGeneratingImage: false
                    };
                    // Optionally add placeholder to list or handle differently
                    // uniqueEmojis.push(nextEmoji); // Decide if you want placeholders in the main list
                }

                // Add to history BEFORE generating image for the new currentEmoji
                addToHistory(currentEmoji, nextEmoji, true, result.reason);

                // If the winner is a valid emoji (not placeholder), make it the current one
                // and start generating its image.
                if (nextEmoji.emoji !== '❓') {
                    currentEmoji = nextEmoji;
                    currentEmojiDisplay.textContent = currentEmoji.emoji;
                    currentEmojiName.textContent = currentEmoji.name;
                    // Image will be generated or source updated by this call
                    generateImageForEmoji(currentEmoji);
                } else {
                    resultMessage.textContent += " (Keeping current emoji as winner was abstract)";
                    // Reset image for current emoji display if needed (it remains the same)
                    currentImage.src = currentEmoji.imageUrl || '';
                    currentImage.style.display = currentEmoji.imageUrl ? 'block' : 'none';
                    currentLoadingSpinner.style.display = 'none';
                }

            } else { // Challenger did not win
                winningStreak = 0;
                resultMessage.textContent = `Sorry! ${userResponse} doesn't beat ${currentEmoji.name}. ${result.reason}`;
                resultMessage.style.color = "#f44336";

                // Find or create a temporary object for the challenger to display in history
                const challengerObj = uniqueEmojis.find(e => e.name.toLowerCase() === lowerCaseResponse) || {
                    emoji: result.suggestedEmoji && result.suggestedEmoji !== '❓' ? result.suggestedEmoji : '❓', // Use suggested if available
                    name: lowerCaseResponse,
                    imageUrl: '', // Losers don't get images generated in this logic
                    isGeneratingImage: false
                };

                addToHistory(currentEmoji, challengerObj, false, result.reason);
                
                 // Ensure main display doesn't show loading if it wasn't changed
                 currentLoadingSpinner.style.display = 'none';
                 currentImage.style.display = currentEmoji.imageUrl ? 'block' : 'none';
            }

            streakCount.textContent = winningStreak;
            userInput.value = '';
        } catch (error) {
            console.error("Error during submission:", error);
            resultMessage.textContent = "Oops! Something went wrong. Please try again.";
            resultMessage.style.color = "#f44336";
            // Ensure loading states are reset on error
             currentLoadingSpinner.style.display = 'none';
             if(currentEmoji) {
                currentImage.src = currentEmoji.imageUrl || '';
                currentImage.style.display = currentEmoji.imageUrl ? 'block' : 'none';
             } else {
                 currentImage.style.display = 'none';
             }

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

            if (!completion.content || !completion.content.startsWith('{') || !completion.content.endsWith('}')) {
                throw new Error("Received non-JSON response from LLM");
            }

            const result = JSON.parse(completion.content);

            if (typeof result.isWinner !== 'boolean' || typeof result.reason !== 'string' || typeof result.suggestedEmoji !== 'string') {
                throw new Error("Parsed JSON has incorrect structure");
            }

            if (result.suggestedEmoji.length > 2 && result.suggestedEmoji !== '❓') {
                result.suggestedEmoji = [...result.suggestedEmoji][0];
            }

            return result;
        } catch (error) {
            console.error("Error processing LLM response:", error);
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

        const challengerEmoji = challenger.emoji || '❓';
        const challengerName = challenger.name || 'Unknown';
        // Use imageUrl if available, otherwise it will be updated later by generateImageForEmoji
        const challengerImageUrl = challenger.imageUrl || '';
        const challengerNameLower = challengerName.toLowerCase(); // For data attribute

        const defendingImageUrl = defending.imageUrl || '';
        const defendingNameLower = defending.name.toLowerCase();

        historyItem.innerHTML = `
            <div class="history-item-pair">
                <div class="history-item-entity defending">
                    <span class="history-emoji">${defending.emoji}</span>
                    <div class="history-image-wrapper">
                        <img class="history-item-image" src="${defendingImageUrl}" alt="${defending.name}" title="${defending.name}" data-emoji-name="${defendingNameLower}" style="display: ${defendingImageUrl ? 'block' : 'none'};">
                        <div class="history-item-image-placeholder" title="${defending.name}" data-emoji-name="${defendingNameLower}" style="display: ${defendingImageUrl ? 'none' : 'block'};">
                             <div class="history-spinner"></div>
                        </div>
                    </div>
                    <span class="history-name">${defending.name}</span>
                </div>
                <div class="history-vs">vs</div>
                <div class="history-item-entity challenger">
                    <span class="history-emoji">${challengerEmoji}</span>
                     <div class="history-image-wrapper">
                        <img class="history-item-image" src="${challengerImageUrl}" alt="${challengerName}" title="${challengerName}" data-emoji-name="${challengerNameLower}" style="display: ${challengerImageUrl ? 'block' : 'none'};">
                        <div class="history-item-image-placeholder" title="${challengerName}" data-emoji-name="${challengerNameLower}" style="display: ${challengerImageUrl ? 'none' : 'block'};">
                             <div class="history-spinner"></div>
                        </div>
                     </div>
                    <span class="history-name">${challengerName}</span>
                </div>
            </div>
            <div class="history-item-details">
                <span class="history-result ${resultClass}">${resultIcon} ${wasSuccessful ? 'Win' : 'Loss'}</span>
                <div class="history-item-reason">${reasonText || 'No reason provided.'}</div>
            </div>
        `;

        // If the challenger won and doesn't have an image yet, show the placeholder's loading state
        if (wasSuccessful && !challengerImageUrl) {
             const placeholder = historyItem.querySelector(`.challenger .history-item-image-placeholder[data-emoji-name="${challengerNameLower}"]`);
             if(placeholder) placeholder.classList.add('loading');
        }
        // Ensure defending placeholder doesn't show loading unless it's actually loading
        if (!defending.isGeneratingImage) {
             const placeholder = historyItem.querySelector(`.defending .history-item-image-placeholder[data-emoji-name="${defendingNameLower}"]`);
             if(placeholder) placeholder.classList.remove('loading');
        }


        historyList.insertBefore(historyItem, historyList.firstChild);

        // Limit history items
        const maxHistoryItems = 50;
        while (historyList.children.length > maxHistoryItems) {
            historyList.removeChild(historyList.lastChild);
        }
    }
});