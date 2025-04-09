import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
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
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

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
        '  ls                - List available pages',
        '  cat <page>        - Show page content'
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
      return ['/home/root/portfolio'];
    },
    ls: () => {
      return [
        'Available pages:',
        '  about/',
        '  projects/',
        '  resume/',
        '  contact/',
        '  home/'
      ];
    },
    cat: (args: string = '') => {
      if (!args) return ['Please specify a page to view'];
      const page = args.toLowerCase();
      if (['about', 'projects', 'resume', 'contact', 'home'].includes(page)) {
        return [`Content of ${page} page...`];
      }
      return [`Page "${page}" not found`];
    }
  };

  const handleCommand = (command: string) => {
    const [cmd, ...args] = command.trim().split(' ');
    const cmdLower = cmd.toLowerCase();
    
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
        '',
        'Type "help" to see all available commands.'
      ]);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleCommand(input);
      setInput('');
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
        ''
      ]);
      inputRef.current?.focus();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="terminal-overlay" onClick={() => inputRef.current?.focus()}>
      <div className={`terminal-container ${isMaximized ? 'maximized' : ''} ${isMinimized ? 'minimized' : ''}`}>
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
          <div className="terminal-welcome">
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
            <span className="terminal-prompt me-2">root@kali:~/portfolio$</span>
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