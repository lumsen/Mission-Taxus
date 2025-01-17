import { StorageManager } from './utils/storage.js';
import { art1, art2 } from './data/ascii-art.js';
import { projects } from './data/projects.js';
import { personnel } from './data/personnel.js';

class Terminal {
    constructor() {
        // Cache DOM elements
        this.elements = this.initElements();
        
        // Initialize state
        this.state = {
            commandHistory: [],
            historyIndex: -1,
            isProcessing: false
        };

        // Performance optimization
        this.commandCache = new Map();
    }

    initElements() {
        return {
            inputLine: document.getElementById('input-line'),
            cursor: document.querySelector('.cursor'),
            output: document.getElementById('output'),
            asciiArt: document.getElementById('ascii-art')
        };
    }

    init() {
        this.setupEventListeners();
        this.processAsciiArt();
        window.output = this.elements.output;
    }

    setupEventListeners() {
        this.elements.inputLine.addEventListener('keydown', this.handleKeyDown.bind(this));
        this.elements.inputLine.addEventListener('keyup', this.handleKeyUp.bind(this));
        this.elements.inputLine.addEventListener('focus', this.handleFocus.bind(this));
        this.elements.inputLine.addEventListener('blur', this.handleBlur.bind(this));
    }

    handleKeyDown(event) {
        this.elements.cursor.style.display = 'none';
        
        if (event.key === 'Enter') {
            const command = this.elements.inputLine.value.trim();
            if (command) {
                this.state.commandHistory.push(command);
                this.state.historyIndex = this.state.commandHistory.length;
                this.elements.inputLine.value = '';
                this.executeCommand(command);
            }
        } else if (event.key === 'ArrowUp') {
            if (this.state.historyIndex > 0) {
                this.state.historyIndex--;
                this.elements.inputLine.value = this.state.commandHistory[this.state.historyIndex];
                this.setCursorToEnd(this.elements.inputLine);
            }
        } else if (event.key === 'ArrowDown') {
            if (this.state.historyIndex < this.state.commandHistory.length - 1) {
                this.state.historyIndex++;
                this.elements.inputLine.value = this.state.commandHistory[this.state.historyIndex];
            } else {
                this.state.historyIndex = this.state.commandHistory.length;
                this.elements.inputLine.value = '';
            }
            this.setCursorToEnd(this.elements.inputLine);
        } else if (event.key === 'Tab') {
            event.preventDefault();
            const completed = this.autocomplete(this.elements.inputLine.value);
            this.elements.inputLine.value = completed;
            this.setCursorToEnd(this.elements.inputLine);
        }
    }

    handleKeyUp() {
        this.elements.cursor.style.display = 'inline-block';
    }

    handleFocus() {
        this.elements.cursor.style.display = 'inline-block';
    }

    handleBlur() {
        this.elements.cursor.style.display = 'none';
    }

    setCursorToEnd(element) {
        setTimeout(() => {
            element.setSelectionRange(element.value.length, element.value.length);
        }, 0);
    }

    executeCommand(command) {
        const args = command.split(' ');
        let response;

        if (args[0] === 'projects' && args.length > 1) {
            const projectName = args.slice(1).join(' ');
            response = projects[projectName] || `Projekt nicht gefunden: ${projectName}`;
        } else if (args[0] === 'personnel' && args.length > 1) {
            const personnelName = args.slice(1).join(' ');
            response = personnel[personnelName] || `Mitarbeitende/r nicht gefunden: ${personnelName}`;
        } else if (commands[args[0]]) {
            response = commands[args[0]]();
        } else {
            response = `Befehl nicht gefunden: ${command}`;
        }

        this.displayResponse(response, command, args[0]);
    }

    displayResponse(response, command, commandType) {
        if (response) {
            const responseElement = document.createElement('p');
            responseElement.className = 'output';
            responseElement.innerHTML = response.replace(/\n/g, '<br>');
            this.elements.output.appendChild(responseElement);

            this.redactWords(
                responseElement,
                'xrayAnalysis,Dr. Sarah Schmidt,DATENSPEICHER BESCHÄDIGT'
            );
        }

        if (commandType !== 'clear') {
            const inputElement = document.createElement('p');
            inputElement.className = 'output user-input';
            inputElement.textContent = `user@TAXUS.net> ${command}`;
            this.elements.output.appendChild(inputElement);
        }
        this.elements.output.scrollTop = this.elements.output.scrollHeight;
    }

    redactWords(element, words) {
        const wordList = words.split(',');
        wordList.forEach(word => {
            const regex = new RegExp(`\\b${word.trim()}\\b`, 'gi');
            const matches = element.innerHTML.match(regex);
            if (matches) {
                matches.forEach(match => {
                    let redactedText = match
                        .split('')
                        .map(char => `<span>${char}</span>`)
                        .join('');
                    element.innerHTML = element.innerHTML.replace(
                        regex,
                        `<span class="portfolio-experiment">${redactedText}</span>`
                    );
                    const spans = element.querySelectorAll('.portfolio-experiment span');
                    spans.forEach((span, index) => {
                        setTimeout(() => {
                            const randomChar = String.fromCharCode(
                                33 + Math.floor(Math.random() * 94)
                            );
                            const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
                            span.style.color = randomColor;
                            span.textContent = randomChar;
                        }, index * (Math.random() * 50 + 50) + Math.random() * 100 + 500);
                    });
                });
            }
        });
    }

    autocomplete(input) {
        if (!input) return '';
        const args = input.split(' ');
        let matches = [];
        if (args.length === 1) {
            matches = this.commandList.filter(cmd => cmd.startsWith(input));
        } else if (args[0] === 'projects' && args.length === 2) {
            matches = Object.keys(projects)
                .map(proj => 'projects ' + proj)
                .filter(cmd => cmd.startsWith(args[0] + ' ' + args[1]));
        }
        if (matches.length === 1) {
            return matches[0];
        } else if (matches.length > 1) {
            const suggestionElement = document.createElement('p');
            suggestionElement.className = 'output';
            suggestionElement.innerHTML = 'Mögliche Befehle: ' + matches.join(', ');
            this.elements.output.appendChild(suggestionElement);
            this.elements.output.scrollTop = this.elements.output.scrollHeight;
        }
        return input;
    }

    // ASCII Art processing methods from your original code
    processAsciiArt() {
        // Convert art strings to arrays if they aren't already
        const art1Lines = typeof art1 === 'string' ? art1.split('\n') : art1;
        const art2Lines = typeof art2 === 'string' ? art2.split('\n') : art2;
        
        const positions = this.findValidPositions(art1Lines);
        const randomPositions = this.getRandomPositionsFromFiltered(positions, CONFIG.TERMINAL.NUM_CHARS_TO_MARK);
        const markedResult = this.markArtWithValidation(art2Lines, randomPositions, art1Lines);
        this.elements.asciiArt.innerHTML = markedResult.art;
    }

    findValidPositions(art) {
        const positions = [];
        art.forEach((line, row) => {
            [...line].forEach((char, col) => {
                if (CONFIG.TERMINAL.REGEX.ALPHANUMERIC.test(char)) {
                    positions.push({ row, col, char });
                }
            });
        });
        return positions;
    }

    getRandomPositionsFromFiltered(positions, count) {
        if (!positions?.length || count <= 0) return [];
        
        const shuffled = [...positions];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        
        return shuffled
            .slice(0, count)
            .sort((a, b) => a.row === b.row ? a.col - b.col : a.row - b.row);
    }

    markArtWithValidation(art2, positions, art1) {
        if (!positions?.length || !art2?.length) return { art: '', chars: '' };

        const markedArt = art2.map(line => [...line]);
        const charMap = { original: [], marked: [], positions: [] };

        const validPositions = this.getValidPositionsForArt2(positions, art2);
        const finalPositions = this.ensureEnoughPositions(validPositions, art2);

        finalPositions.forEach(pos => {
            this.processPosition(pos, charMap, markedArt, art1);
        });

        this.saveToLocalStorage(charMap.original);

        return {
            art: markedArt.map(line => line.join('')).join('\n'),
            chars: charMap.marked.join('')
        };
    }

    getValidPositionsForArt2(positions, art2) {
        return positions.filter(pos => {
            const art2Char = art2[pos.row]?.[pos.col];
            return art2Char && art2Char !== ' ' && art2Char !== '\n';
        });
    }

    ensureEnoughPositions(validPositions, art2) {
        if (validPositions.length >= CONFIG.TERMINAL.NUM_CHARS_TO_MARK) {
            return validPositions;
        }

        const additionalPositions = this.findValidPositions(art2)
            .filter(pos => !validPositions.some(vPos => 
                vPos.row === pos.row && vPos.col === pos.col));

        while (validPositions.length < CONFIG.TERMINAL.NUM_CHARS_TO_MARK && additionalPositions.length > 0) {
            const randomIndex = Math.floor(Math.random() * additionalPositions.length);
            validPositions.push(additionalPositions.splice(randomIndex, 1)[0]);
        }

        return validPositions;
    }

    processPosition(pos, charMap, markedArt, art1) {
        const art1Char = art1[pos.row]?.[pos.col];
        if (CONFIG.TERMINAL.REGEX.ALPHANUMERIC.test(art1Char)) {
            charMap.original.push(art1Char);
            charMap.marked.push(markedArt[pos.row][pos.col]);
            charMap.positions.push({ row: pos.row, col: pos.col });
            markedArt[pos.row][pos.col] = `<span style="color: green;">${markedArt[pos.row][pos.col]}</span>`;
        }
    }

    saveToLocalStorage(chars) {
        try {
            localStorage.setItem(CONFIG.STORAGE.KEYS.MARKED_CHARS, chars.join(''));
        } catch (e) {
            console.error('LocalStorage error:', e);
        }
    }
}

export default Terminal;
