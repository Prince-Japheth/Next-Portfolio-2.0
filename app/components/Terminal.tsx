import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { projectData, categories } from '../data/projects';
import '../../public/assets/css/terminal.css';

interface TerminalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Terminal({ isOpen, onClose }: TerminalProps) {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState<string[]>([]);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [gameState, setGameState] = useState<any>(null);
  const [currentGame, setCurrentGame] = useState<string | null>(null);
  const [currentPath, setCurrentPath] = useState('/home/root/portfolio');
  const inputRef = useRef<HTMLInputElement>(null);
  const outputRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Utility function to scroll to bottom
  const scrollToBottom = () => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  };

  // Add effect to handle body scroll locking
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    // Cleanup function to restore scroll when component unmounts
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  // Auto-scroll to bottom when output changes, loading state changes, or terminal opens
  useEffect(() => {
    // Use setTimeout to ensure DOM has updated
    setTimeout(() => {
      scrollToBottom();
    }, 0);
  }, [output, isLoading, isOpen]);


  const loadingFrames = ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'];
  const [loadingFrame, setLoadingFrame] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isLoading) {
      interval = setInterval(() => {
        setLoadingFrame((prev) => (prev + 1) % loadingFrames.length);
      }, 80);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isLoading]);

  const navigateWithLoading = (path: string) => {
    setIsLoading(true);
    setOutput(prev => [...prev, `Navigating to ${path}...`]);
    
    // Simulate a small delay for the loading animation
    setTimeout(() => {
      router.push(path);
      setIsLoading(false);
      onClose(); // Close the terminal after navigation
    }, 800);
  };

  // Directory navigation with actual page routing
  const changeDirectory = (path: string) => {
    if (!path || path === '~') {
      setCurrentPath('/home/root');
      navigateWithLoading('/');
      return ['Changed to home directory'];
    }
    
    if (path === '..') {
      // Map current path to actual page and go to parent
      const currentPage = getCurrentPageFromPath(currentPath);
      const parentPage = getParentPage(currentPage);
      setCurrentPath(getPathFromPage(parentPage));
      navigateWithLoading(parentPage);
      return [`Changed to ${getPathFromPage(parentPage)}`];
    }
    
    if (path === '/') {
      setCurrentPath('/');
      navigateWithLoading('/');
      return ['Changed to root directory'];
    }
    
    if (path.startsWith('/')) {
      setCurrentPath(path);
      // Extract the page from the path
      const pathParts = path.split('/').filter(p => p);
      if (pathParts.length === 0) {
        navigateWithLoading('/');
      } else {
        // Check if the last part is a valid page
        const lastPart = pathParts[pathParts.length - 1];
        const validPages = ['about', 'projects', 'resume', 'contact', 'home'];
        if (validPages.includes(lastPart)) {
          navigateWithLoading(`/${lastPart === 'home' ? '' : lastPart}`);
        } else {
          // If not a valid page, go to home
          navigateWithLoading('/');
        }
      }
      return [`Changed to ${path}`];
    }
    
    // Check if it's a file (not a directory)
    const files = ['readme.md', 'portfolio.json'];
    if (files.includes(path.toLowerCase())) {
      return [`${path} is a file, not a directory. Use "cat ${path}" to read it.`];
    }
    
    // Relative path - check if it's a valid page
    const validPages = ['about', 'projects', 'resume', 'contact', 'home'];
    if (validPages.includes(path.toLowerCase())) {
      const newPath = currentPath === '/' ? `/${path}` : `${currentPath}/${path}`;
      setCurrentPath(newPath);
      navigateWithLoading(`/${path === 'home' ? '' : path}`);
      return [`Changed to ${newPath}`];
    }
    
    // If not a valid page or file, show error
    return [`${path}: No such file or directory`];
  };

  // Helper functions for path/page mapping
  const getCurrentPageFromPath = (path: string) => {
    const parts = path.split('/').filter(p => p);
    if (parts.length === 0) return '/';
    const lastPart = parts[parts.length - 1];
    const validPages = ['about', 'projects', 'resume', 'contact', 'home'];
    if (validPages.includes(lastPart)) {
      return `/${lastPart === 'home' ? '' : lastPart}`;
    }
    return '/';
  };

  const getParentPage = (currentPage: string) => {
    // Always go to home page as parent for now
    return '/';
  };

  const getPathFromPage = (page: string) => {
    if (page === '/') return '/';
    const pageName = page.replace('/', '');
    return `/home/root/${pageName}`;
  };

  // List directory contents
  const listDirectory = () => {
    const baseItems = [
      { name: 'about', type: 'dir', description: 'About page' },
      { name: 'projects', type: 'dir', description: 'Portfolio projects' },
      { name: 'resume', type: 'dir', description: 'Resume/CV page' },
      { name: 'contact', type: 'dir', description: 'Contact information' },
      { name: 'home', type: 'dir', description: 'Home page' },
      { name: 'README.md', type: 'file', description: 'Portfolio documentation' },
      { name: 'portfolio.json', type: 'file', description: 'Project data' }
    ];
    
    return [
      `Contents of ${currentPath}:`,
      '',
      ...baseItems.map(item => 
        `${item.type === 'dir' ? '📁' : '📄'} ${item.name.padEnd(15)} ${item.description}`
      ),
      '',
      '💡 Tip: Use "cd <directory>" to navigate to pages'
    ];
  };


  const initializeTicTacToe = () => {
    return {
      board: Array(9).fill(' '),
      currentPlayer: 'X',
      gameOver: false,
      winner: null
    };
  };

  const renderTicTacToe = (gameState: any) => {
    const lines = ['Tic-Tac-Toe - Enter position (1-9), q to quit'];
    lines.push(`Current Player: ${gameState.currentPlayer}`);
    lines.push('');
    lines.push(' 1 | 2 | 3 ');
    lines.push('---+---+---');
    lines.push(' 4 | 5 | 6 ');
    lines.push('---+---+---');
    lines.push(' 7 | 8 | 9 ');
    lines.push('');
    lines.push('Current Board:');
    lines.push(` ${gameState.board[0]} | ${gameState.board[1]} | ${gameState.board[2]} `);
    lines.push('---+---+---');
    lines.push(` ${gameState.board[3]} | ${gameState.board[4]} | ${gameState.board[5]} `);
    lines.push('---+---+---');
    lines.push(` ${gameState.board[6]} | ${gameState.board[7]} | ${gameState.board[8]} `);
    
    if (gameState.gameOver) {
      lines.push('');
      if (gameState.winner) {
        lines.push(`🎉 ${gameState.winner} wins!`);
      } else {
        lines.push('🤝 It\'s a tie!');
      }
    }
    
    return lines;
  };

  const makeTicTacToeMove = (gameState: any, position: number) => {
    if (gameState.gameOver || gameState.board[position] !== ' ') {
      return gameState;
    }
    
    const newBoard = [...gameState.board];
    newBoard[position] = gameState.currentPlayer;
    
    // Check for winner
    const winningCombos = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
      [0, 4, 8], [2, 4, 6] // diagonals
    ];
    
    let winner = null;
    for (const combo of winningCombos) {
      if (newBoard[combo[0]] === newBoard[combo[1]] && 
          newBoard[combo[1]] === newBoard[combo[2]] && 
          newBoard[combo[0]] !== ' ') {
        winner = newBoard[combo[0]];
        break;
      }
    }
    
    const isTie = newBoard.every(cell => cell !== ' ');
    
    let updatedGameState = {
      ...gameState,
      board: newBoard,
      currentPlayer: gameState.currentPlayer === 'X' ? 'O' : 'X',
      gameOver: winner !== null || isTie,
      winner
    };
    
    // AI move if game not over and it's AI's turn
    if (!updatedGameState.gameOver && updatedGameState.currentPlayer === 'O') {
      const aiMove = getAIMove(updatedGameState.board);
      if (aiMove !== -1) {
        updatedGameState = makeTicTacToeMove(updatedGameState, aiMove);
      }
    }
    
    return updatedGameState;
  };

  // Simple AI for tic-tac-toe
  const getAIMove = (board: string[]) => {
    // Check for winning move
    for (let i = 0; i < 9; i++) {
      if (board[i] === ' ') {
        const testBoard = [...board];
        testBoard[i] = 'O';
        if (checkWinner(testBoard) === 'O') {
          return i;
        }
      }
    }
    
    // Check for blocking move
    for (let i = 0; i < 9; i++) {
      if (board[i] === ' ') {
        const testBoard = [...board];
        testBoard[i] = 'X';
        if (checkWinner(testBoard) === 'X') {
          return i;
        }
      }
    }
    
    // Prefer center
    if (board[4] === ' ') return 4;
    
    // Prefer corners
    const corners = [0, 2, 6, 8];
    for (const corner of corners) {
      if (board[corner] === ' ') return corner;
    }
    
    // Any available move
    for (let i = 0; i < 9; i++) {
      if (board[i] === ' ') return i;
    }
    
    return -1;
  };

  const checkWinner = (board: string[]) => {
    const winningCombos = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
      [0, 4, 8], [2, 4, 6] // diagonals
    ];
    
    for (const combo of winningCombos) {
      if (board[combo[0]] === board[combo[1]] && 
          board[combo[1]] === board[combo[2]] && 
          board[combo[0]] !== ' ') {
        return board[combo[0]];
      }
    }
    return null;
  };

  const initializeNumberGuess = () => {
    const target = Math.floor(Math.random() * 100) + 1;
    return {
      target,
      attempts: 0,
      maxAttempts: 7,
      gameOver: false,
      won: false
    };
  };

  const makeGuess = (gameState: any, guess: number) => {
    if (gameState.gameOver) return gameState;
    
    const newAttempts = gameState.attempts + 1;
    const won = guess === gameState.target;
    const gameOver = won || newAttempts >= gameState.maxAttempts;
    
    let hint = '';
    if (guess < gameState.target) {
      hint = 'Too low!';
    } else if (guess > gameState.target) {
      hint = 'Too high!';
    }
    
    return {
      ...gameState,
      attempts: newAttempts,
      gameOver,
      won,
      lastGuess: guess,
      hint
    };
  };

  const renderNumberGuess = (gameState: any) => {
    const lines = ['Number Guessing Game - Guess a number 1-100, q to quit'];
    lines.push(`Attempts: ${gameState.attempts}/${gameState.maxAttempts}`);
    
    if (gameState.lastGuess !== undefined) {
      lines.push(`Your guess: ${gameState.lastGuess}`);
      if (gameState.hint) {
        lines.push(gameState.hint);
      }
    }
    
    if (gameState.gameOver) {
      lines.push('');
      if (gameState.won) {
        lines.push(`🎉 Congratulations! You guessed it in ${gameState.attempts} attempts!`);
      } else {
        lines.push(`😞 Game Over! The number was ${gameState.target}`);
      }
    }
    
    return lines;
  };

  const commands = {
    help: () => {
      return [
        'Available commands:',
        '  help              - Show this help message',
        '  clear             - Clear the terminal',
        '  about             - Navigate to About page',
        '  projects          - Navigate to Projects page',
        '  resume            - Navigate to Resume page',
        '  contact           - Navigate to Contact page',
        '  home              - Navigate to Home page',
        '  navigate <page>   - Navigate to specified page',
        '  theme             - Show terminal theme info',
        '  exit              - Close the terminal',
        '  echo <text>       - Print text to terminal',
        '  date              - Show current date and time',
        '  whoami            - Show current user',
        '  pwd               - Show current directory',
        '  ls                - List directory contents',
        '  cd <path>         - Change directory and navigate to page',
        '  whereami          - Show current page URL',
        '  cat <file>        - Read file contents (README.md, portfolio.json)',
        '',
        '🎮 Games:',
        '  games             - List all available games',
        '  tictactoe         - Play Tic-Tac-Toe vs AI',
        '  guess             - Play Number Guessing Game',
        '',
        '📁 Content Exploration:',
        '  list-projects     - List all projects',
        '  project <id>      - Show project details',
        '  categories        - Show project categories',
        '  skills            - Show technical skills',
        '  experience        - Show work experience',
        '  education         - Show education background',
        '  certifications    - Show certifications'
      ];
    },
    clear: () => {
      setOutput([]);
      return [];
    },
    about: () => {
      navigateWithLoading('/about');
      return [];
    },
    projects: () => {
      navigateWithLoading('/projects');
      return [];
    },
    resume: () => {
      navigateWithLoading('/resume');
      return [];
    },
    contact: () => {
      navigateWithLoading('/contact');
      return [];
    },
    home: () => {
      navigateWithLoading('/');
      return [];
    },
    navigate: (args: string = '') => {
      if (!args) return ['Please specify a page to navigate to'];
      const page = args.toLowerCase();
      if (['about', 'projects', 'resume', 'contact', 'home'].includes(page)) {
        navigateWithLoading(`/${page === 'home' ? '' : page}`);
        return [];
      }
      return [`Page "${page}" not found`];
    },
    theme: () => {
      return [
        'Terminal Theme: Kali Linux',
        'Background: Dark translucent with glassmorphism effect',
        'Text: Green on dark background',
        'Window Controls: Unix-style (close, minimize, maximize)',
        'Prompt: root@kali:~/portfolio$'
      ];
    },
    exit: () => {
      onClose();
      return [];
    },
    echo: (args: string = '') => {
      return [args || ''];
    },
    date: () => {
      return [new Date().toLocaleString()];
    },
    whoami: () => {
      return ['root'];
    },
    pwd: () => {
      return [currentPath];
    },
    ls: () => {
      return listDirectory();
    },
    cd: (args: string = '') => {
      return changeDirectory(args);
    },
    whereami: () => {
      return [
        `Current page: ${window.location.href}`,
        `Current path: ${currentPath}`,
        `Terminal directory: ${currentPath}`
      ];
    },
    cat: (args: string = '') => {
      if (!args) return ['Please specify a file to view'];
      const file = args.toLowerCase();
      
      if (file === 'readme.md') {
        return [
          '# Portfolio Terminal',
          '',
          'Welcome to the interactive portfolio terminal!',
          '',
          '## Available Commands:',
          '',
          '### Navigation:',
          '- `cd <directory>` - Navigate to pages',
          '- `ls` - List directory contents',
          '- `pwd` - Show current directory',
          '- `whereami` - Show current page URL',
          '',
          '### Games:',
          '- `games` - List all games',
          '- `tictactoe` - Play Tic-Tac-Toe vs AI',
          '- `guess` - Play Number Guessing Game',
          '',
          '### Content Exploration:',
          '- `list-projects` - Show all projects',
          '- `project <id>` - Show project details',
          '- `skills` - Show technical skills',
          '- `experience` - Show work experience',
          '- `education` - Show education background',
          '- `certifications` - Show certifications',
          '',
          '### System:',
          '- `help` - Show all commands',
          '- `clear` - Clear terminal',
          '- `exit` - Close terminal',
          '',
          'Type `help` for more information!'
        ];
      }
      
      if (file === 'portfolio.json') {
        return [
          '{',
          '  "name": "Japheth Jerry Portfolio",',
          '  "version": "2.0",',
          '  "description": "Interactive portfolio with terminal interface",',
          '  "features": [',
          '    "CLI Games",',
          '    "Content Exploration",',
          '    "Directory Navigation",',
          '    "Interactive Terminal"',
          '  ],',
          '  "technologies": [',
          '    "Next.js",',
          '    "React",',
          '    "TypeScript",',
          '    "Tailwind CSS"',
          '  ],',
          '  "projects": ' + projectData.length + ',',
          '  "status": "Active Development"',
          '}'
        ];
      }
      
      if (['about', 'projects', 'resume', 'contact', 'home'].includes(file)) {
        return [`${file} is a directory, not a file. Use "cd ${file}" to navigate to it.`];
      }
      
      return [`File "${file}" not found`];
    },
    
    // Game Commands
    games: () => {
      return [
        '🎮 Available Games:',
        '',
        '1. Tic-Tac-Toe vs AI',
        '   Command: tictactoe',
        '   Description: Play against an AI opponent',
        '   Controls: Enter 1-9 to make moves, Q to quit',
        '',
        '2. Number Guessing Game',
        '   Command: guess',
        '   Description: Guess a number between 1-100',
        '   Controls: Enter numbers, Q to quit',
        '',
        'Type the game name to start playing!'
      ];
    },
    
    
    tictactoe: () => {
      setCurrentGame('tictactoe');
      setGameState(initializeTicTacToe());
      return renderTicTacToe(initializeTicTacToe());
    },
    
    guess: () => {
      setCurrentGame('guess');
      setGameState(initializeNumberGuess());
      return renderNumberGuess(initializeNumberGuess());
    },
    
    // Content Exploration Commands
    'list-projects': () => {
      const lines = ['📁 Portfolio Projects:', ''];
      projectData.forEach((project, index) => {
        lines.push(`${index + 1}. ${project.title}`);
        lines.push(`   Category: ${project.category}`);
        lines.push(`   Status: ${project.status}`);
        lines.push(`   Tools: ${project.tools}`);
        lines.push('');
      });
      lines.push(`Total: ${projectData.length} projects`);
      return lines;
    },
    
    project: (args: string = '') => {
      if (!args) return ['Please specify a project ID (1-' + projectData.length + ')'];
      const id = parseInt(args) - 1;
      if (id < 0 || id >= projectData.length) {
        return [`Project ID must be between 1 and ${projectData.length}`];
      }
      
      const project = projectData[id];
      return [
        `📋 Project Details: ${project.title}`,
        '',
        `Category: ${project.category}`,
        `Status: ${project.status}`,
        `Tools: ${project.tools}`,
        `Link: ${project.link}`,
        '',
        'Brief:',
        project.brief,
        '',
        'About:',
        project.about,
        '',
        'Description:',
        project.description
      ];
    },
    
    categories: () => {
      return [
        '📂 Project Categories:',
        '',
        ...categories.map(cat => `  • ${cat}`),
        '',
        `Total: ${categories.length} categories`
      ];
    },
    
    skills: () => {
      return [
        '🛠️ Technical Skills:',
        '',
        'Frontend Development:',
        '  • React.js, Next.js, TypeScript',
        '  • HTML5, CSS3, JavaScript (ES6+)',
        '  • Tailwind CSS, Bootstrap, SASS',
        '  • jQuery, GSAP, Framer Motion',
        '',
        'Backend Development:',
        '  • PHP, Laravel, Node.js',
        '  • MySQL, PostgreSQL, MongoDB',
        '  • REST APIs, GraphQL',
        '  • Authentication & Security',
        '',
        'Mobile Development:',
        '  • React Native, Java (Android)',
        '  • Cross-platform development',
        '  • App Store deployment',
        '',
        'Design & Tools:',
        '  • Figma, Adobe Photoshop, Illustrator',
        '  • CorelDRAW, Canva',
        '  • UI/UX Design, Prototyping',
        '  • Git, Docker, CI/CD'
      ];
    },
    
    experience: () => {
      return [
        '💼 Work Experience:',
        '',
        'Full-Stack Developer & UI/UX Designer',
        'Freelance & Contract Work (2020 - Present)',
        '',
        'Key Achievements:',
        '  • Developed 50+ web applications and mobile apps',
        '  • Led development of enterprise-grade systems',
        '  • Achieved 95+ Lighthouse performance scores',
        '  • Implemented security best practices (OWASP)',
        '  • Managed projects serving 5000+ users',
        '',
        'Specializations:',
        '  • E-commerce platforms',
        '  • Educational management systems',
        '  • Social media applications',
        '  • Corporate websites',
        '  • Mobile app development'
      ];
    },
    
    education: () => {
      return [
        '🎓 Education Background:',
        '',
        'Lincoln University College',
        'Bachelor of Computer Science',
        'Focus: Software Engineering & Web Development',
        '',
        'Key Coursework:',
        '  • Data Structures & Algorithms',
        '  • Database Management Systems',
        '  • Software Engineering',
        '  • Web Development',
        '  • Mobile Application Development',
        '  • Human-Computer Interaction',
        '',
        'Additional Training:',
        '  • Online courses in React, Node.js',
        '  • UI/UX Design certifications',
        '  • Agile development methodologies'
      ];
    },
    
    certifications: () => {
      return [
        '🏆 Certifications & Achievements:',
        '',
        'Technical Certifications:',
        '  • React.js Development',
        '  • Node.js Backend Development',
        '  • UI/UX Design Fundamentals',
        '  • Database Management',
        '',
        'Professional Achievements:',
        '  • 50+ successful project deliveries',
        '  • 95+ Lighthouse performance scores',
        '  • 99.9% uptime on production systems',
        '  • 4.8/5 average client satisfaction',
        '',
        'Industry Recognition:',
        '  • Featured in 3 industry publications',
        '  • Commercial product adoption',
        '  • Open source contributions',
        '  • Technical writing & documentation'
      ];
    }
  };

  const handleCommand = (command: string) => {
    const [cmd, ...args] = command.trim().split(' ');
    const cmdLower = cmd.toLowerCase();
    
    // Handle game input
    if (currentGame && gameState) {
      let newGameState = { ...gameState };
      let result: string[] = [];
      
      if (cmdLower === 'q' || cmdLower === 'quit') {
        setCurrentGame(null);
        setGameState(null);
        result = ['Game ended. Type "help" to see available commands.'];
      } else {
        switch (currentGame) {
          case 'tictactoe':
            const position = parseInt(cmdLower) - 1;
            if (position >= 0 && position <= 8) {
              newGameState = makeTicTacToeMove(gameState, position);
              setGameState(newGameState);
              result = renderTicTacToe(newGameState);
              if (newGameState.gameOver) {
                setCurrentGame(null);
                setGameState(null);
              }
            } else {
              result = ['Invalid position. Enter 1-9 or Q to quit.'];
            }
            break;
            
          case 'guess':
            const guess = parseInt(cmdLower);
            if (!isNaN(guess) && guess >= 1 && guess <= 100) {
              newGameState = makeGuess(gameState, guess);
              setGameState(newGameState);
              result = renderNumberGuess(newGameState);
              if (newGameState.gameOver) {
                setCurrentGame(null);
                setGameState(null);
              }
            } else {
              result = ['Invalid guess. Enter a number 1-100 or Q to quit.'];
            }
            break;
        }
      }
      
      setOutput(prev => [...prev, `root@kali:~/portfolio$ ${command}`, ...result]);
      return;
    }
    
    // Handle regular commands
    if (cmdLower in commands) {
      const result = commands[cmdLower as keyof typeof commands](args.join(' '));
      setOutput(prev => [...prev, `root@kali:~/portfolio$ ${command}`, ...result]);
    } else {
      setOutput(prev => [
        ...prev, 
        `root@kali:~/portfolio$ ${command}`,
        `Command not found: ${cmd}`,
        'Did you mean one of these?',
        '  help     - Show available commands',
        '  clear    - Clear the terminal',
        '  about    - Navigate to About page',
        '  projects - Navigate to Projects page',
        '  resume   - Navigate to Resume page',
        '  contact  - Navigate to Contact page',
        '  home     - Navigate to Home page',
        '  tictactoe - Play Tic-Tac-Toe',
        '  guess    - Play Number Guessing Game',
        '',
        'Type "help" to see all available commands.'
      ]);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleCommand(input);
      setInput('');
      // Ensure auto-scroll after command execution
      setTimeout(() => {
        scrollToBottom();
      }, 10);
    }
  };

  const handleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  const handleMaximize = () => {
    setIsMaximized(!isMaximized);
  };

  useEffect(() => {
    if (isOpen) {
      setOutput([
        'Welcome to the Portfolio Terminal',
        'Type "help" to see available commands',
        '',
        '🎮 Try the games: games, tictactoe, guess',
        '📁 Explore content: list-projects, skills, experience',
        '📂 Navigate pages: cd about, cd projects, cd resume, cd contact',
        '🔍 Check location: whereami, pwd',
        '📄 Read files: cat README.md, cat portfolio.json',
        ''
      ]);
      inputRef.current?.focus();
      
      // Ensure scroll to bottom when terminal opens
      setTimeout(() => {
        scrollToBottom();
      }, 50);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="terminal-overlay" onClick={onClose}>
      <div className={`terminal-container ${isMaximized ? 'maximized' : ''} ${isMinimized ? 'minimized' : ''}`} onClick={(e) => e.stopPropagation()}>
        <div className="terminal-header">
          <div className="terminal-title">Terminal</div>
          <div className="terminal-controls">
            <button className="terminal-close" onClick={onClose}>×</button>
            <button className="terminal-minimize" onClick={handleMinimize}>−</button>
            <button className="terminal-maximize" onClick={handleMaximize}>□</button>
          </div>
        </div>
        <div className="terminal-body" onClick={(e) => {
          e.stopPropagation();
          inputRef.current?.focus();
        }}>
          <div className="terminal-welcome" ref={outputRef}>
            {output.map((line, i) => (
              <div key={i} className="terminal-line">{line}</div>
            ))}
            {isLoading && (
              <div className="terminal-line">
                {loadingFrames[loadingFrame]} Loading...
              </div>
            )}
          </div>
          <div className="terminal-input-line">
            <span className="terminal-prompt me-2">root@kali:{currentPath}$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              className="terminal-input"
              autoFocus
              disabled={isLoading}
            />
          </div>
        </div>
      </div>
    </div>
  );
} 