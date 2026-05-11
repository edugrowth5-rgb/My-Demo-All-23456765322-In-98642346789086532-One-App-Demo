const chapter2Data = [
    // --- Windows 10 Overview ---
    {
        q: "When was Windows 10 released?",
        options: ["2012", "29th July 2015", "2009", "2001"],
        correct: 1
    },
    {
        q: "Which version of Windows was released in 2012?",
        options: ["Windows 7", "Windows XP", "Windows 8", "Windows Vista"],
        correct: 2
    },
    {
        q: "Windows 10 is described as a combination of features from which two older versions?",
        options: ["XP and Vista", "Vista and 7", "Windows 7 and Windows 8", "Windows 8 and 8.1"],
        correct: 2
    },
    {
        q: "Who started Microsoft to produce software for the Altair 8800?",
        options: ["Steve Jobs", "Bill Gates and Paul Allen", "Mark Zuckerberg", "Larry Page"],
        correct: 1
    },
    {
        q: "What was Microsoft originally called?",
        options: ["Micro-Software", "Micro-Soft", "MS Soft", "Windows Corp"],
        correct: 1
    },

    // --- Features of Windows 10 ---
    {
        q: "Which feature in Windows 10 adjusts the GUI based on whether a keyboard is attached?",
        options: ["Snap Assist", "Continuum", "Task View", "Live Tiles"],
        correct: 1
    },
    {
        q: "In a 2-in-1 device, if the keyboard is removed, Windows 10 defaults to:",
        options: ["Sleep mode", "Desktop mode", "Tablet mode", "Safe mode"],
        correct: 2
    },
    {
        q: "Which mode in Windows 10 displays the Start menu in full screen?",
        options: ["Desktop mode", "Tablet mode", "Quiet mode", "Developer mode"],
        correct: 1
    },
    {
        q: "In Tablet mode, what does the taskbar display?",
        options: ["Only Apps", "Start button, Back Arrow, Search, and Task View", "Recycle Bin", "Clock only"],
        correct: 1
    },
    {
        q: "To manually use Tablet Mode, you must first click on which icon?",
        options: ["Start", "Notification icon", "Cortana", "Edge"],
        correct: 1
    },

    // --- Action Center & Cortana ---
    {
        q: "Where is the Action Center pane located on the desktop?",
        options: ["Left side", "Top", "Right side", "Bottom"],
        correct: 2
    },
    {
        q: "What does the top part of the Action Center display?",
        options: ["Quick settings", "Notifications and alerts", "Recycle bin", "Volume"],
        correct: 1
    },
    {
        q: "What is Microsoft's voice-controlled digital assistant called?",
        options: ["Siri", "Alexa", "Cortana", "Google Assistant"],
        correct: 2
    },
    {
        q: "Which graphic represents Cortana's 'heart and soul'?",
        options: ["Square", "Circular orb", "Triangle", "Star"],
        correct: 1
    },
    {
        q: "What does it mean when the Cortana orb spins and changes shades?",
        options: ["Error occurred", "She is working, thinking, or speaking", "Computer is restarting", "Battery is low"],
        correct: 1
    },

    // --- Task View & Desktops ---
    {
        q: "Which feature allows you to manage windows across multiple monitors or virtual desktops?",
        options: ["Action Center", "Cortana", "Task View", "Edge"],
        correct: 2
    },
    {
        q: "What is the shortcut key to activate Task View?",
        options: ["Alt + Tab", "Win + Tab", "Ctrl + Esc", "Win + L"],
        correct: 1
    },
    {
        q: "To create a new desktop, where do you click '+ New desktop'?",
        options: ["Bottom right", "Top left corner of task view pane", "Center of screen", "Inside Control Panel"],
        correct: 1
    },
    {
        q: "What is the shortcut key to create a new desktop?",
        options: ["Win + Ctrl + D", "Win + D", "Ctrl + Shift + N", "Alt + N"],
        correct: 0
    },
    {
        q: "What is the shortcut key to delete a desktop you are currently in?",
        options: ["Win + Delete", "Win + Ctrl + F4", "Alt + F4", "Ctrl + X"],
        correct: 1
    },

    // --- Microsoft Edge & Windows Hello ---
    {
        q: "Which browser replaced Internet Explorer in 2015?",
        options: ["Chrome", "Firefox", "Microsoft Edge", "Opera"],
        correct: 2
    },
    {
        q: "What is the default search engine used by Microsoft Edge?",
        options: ["Google", "Yahoo", "Bing", "DuckDuckGo"],
        correct: 2
    },
    {
        q: "Where are the remarks made on web pages in Edge stored?",
        options: ["Google Drive", "OneDrive", "Hard disk", "Pen drive"],
        correct: 1
    },
    {
        q: "Which biometric security system uses face, fingerprint, or iris recognition?",
        options: ["Windows Guard", "Windows Hello", "Bio Lock", "Secure Login"],
        correct: 1
    },
    {
        q: "Why are Windows Hello logins considered secure?",
        options: ["They use long passwords", "They use unique biometric data", "They are slow", "They are offline only"],
        correct: 1
    },

    // --- Universal Apps & Utilities ---
    {
        q: "What category of software uses the same code but adapts to different device interfaces?",
        options: ["Desktop Apps", "Legacy Apps", "Universal Apps", "Mobile Apps"],
        correct: 2
    },
    {
        q: "Which of these is NOT an example of a Universal App?",
        options: ["Weather", "Photos", "Command Prompt", "Music"],
        correct: 2
    },
    {
        q: "Useful programs that help you control and maintain your system are called:",
        options: ["Games", "Utilities", "Browsers", "Hardware"],
        correct: 1
    },
    {
        q: "Which utility is used to remove unwanted and useless files from the hard disk?",
        options: ["Character Map", "Disk Cleanup", "Steps Recorder", "Notepad"],
        correct: 1
    },
    {
        q: "Disk Cleanup helps the computer work fast by:",
        options: ["Adding more RAM", "Emptying the Recycle Bin and deleting temp files", "Changing the wallpaper", "Installing updates"],
        correct: 1
    },

    // --- Disk Cleanup Specifics ---
    {
        q: "Which dialog box appears first when you open the Disk Cleanup app?",
        options: ["File Selection", "Drive Selection", "Confirmation", "Delete Files"],
        correct: 1
    },
    {
        q: "Disk Cleanup targets ________ web pages to provide quick offline access.",
        options: ["Online", "Offline", "Encrypted", "Social media"],
        correct: 1
    },
    {
        q: "What must you click to permanently delete selected files in Disk Cleanup?",
        options: ["Cancel", "Exit", "Delete Files", "Clean system files"],
        correct: 2
    },

    // --- Media Player & Character Map ---
    {
        q: "Which program is used for playing multimedia files like music and videos?",
        options: ["Paint", "Windows Media Player", "Character Map", "WordPad"],
        correct: 1
    },
    {
        q: "In Media Player, which button allows you to play songs in random order?",
        options: ["Repeat", "Play", "Turn shuffle on", "Mute"],
        correct: 2
    },
    {
        q: "To finalize a CD so data can be exported, which option is used?",
        options: ["Play", "Finish Burning", "Shuffle", "Mute"],
        correct: 1
    },
    {
        q: "Which utility is used to find special characters and Unicode fonts?",
        options: ["Disk Cleanup", "Cortana", "Character Map", "Task View"],
        correct: 2
    },
    {
        q: "Which font is suggested for specialized symbols like arrows, books, or hands?",
        options: ["Arial", "Times New Roman", "Wingdings", "Calibri"],
        correct: 2
    },
    {
        q: "Character Map allows you to copy characters to the ________ and paste them elsewhere.",
        options: ["Hard drive", "Clipboard", "OneDrive", "Desktop"],
        correct: 1
    },

    // --- Additional Details ---
    {
        q: "What helps in manual typing of Unicode numbers to insert special characters?",
        options: ["Cortana", "Task View", "Character Map", "Action Center"],
        correct: 2
    },
    {
        q: "Windows 10 was released by which operation system company?",
        options: ["Apple", "Google", "Microsoft", "Linux"],
        correct: 2
    },
    {
        q: "Which shortcut key is used to switch between multiple desktops?",
        options: ["Win + Tab", "Alt + F4", "Ctrl + Alt + Delete", "Win + D"],
        correct: 0
    },
    {
        q: "Can you move an application from one virtual desktop to another?",
        options: ["No, it is impossible", "Yes, using the Move to option in Task View", "Only if you restart", "Only in tablet mode"],
        correct: 1
    },
    {
        q: "If you close a virtual desktop, what happens to the apps opened in it?",
        options: ["They close automatically", "They move to the current desktop", "They are deleted", "The computer restarts"],
        correct: 1
    },
    {
        q: "Which utility is best for adding a trademark (™) or degree (°) symbol?",
        options: ["Cortana", "Character Map", "Media Player", "Snap Assist"],
        correct: 1
    },
    {
        q: "The 'Reading List' function in Microsoft Edge synchronizes content between:",
        options: ["Users", "Devices", "Folders", "Browsers"],
        correct: 1
    },
    {
        q: "Continuum switches from Desktop to Tablet mode when you ________.",
        options: ["Click Start", "Remove the keyboard", "Open a browser", "Power off"],
        correct: 1
    },
    {
        q: "The lower part of the Action Center contains a set of ________.",
        options: ["Alarms", "Reminders", "Quick actions", "Apps"],
        correct: 2
    },
    {
        q: "Which feature of Windows 10 makes multitasking and organizing apps easier?",
        options: ["Live Tiles", "Virtual Desktops", "Personalization", "Continuum"],
        correct: 1
    },
    {
        q: "Disk Cleanup calculates how much space can be freed on which drive by default?",
        options: ["(D:)", "(C:)", "(E:)", "(A:)"],
        correct: 1
    },
    {
        q: "In which year was Windows 8 released?",
        options: ["2001", "2006", "2009", "2012"],
        correct: 3
    },
    {
        q: "What is the exact release date of Windows 10?",
        options: ["29th July 2015", "15th August 2014", "1st January 2016", "20th June 2015"],
        correct: 0
    },
    {
        q: "Which Windows version was released in 2001?",
        options: ["Windows 7", "Windows XP", "Windows Vista", "Windows 10"],
        correct: 1
    },
    {
        q: "Windows 10 is designed to run on which devices?",
        options: ["Only Desktops", "Only Laptops", "Tablets and Computers", "All of these"],
        correct: 3
    },
    {
        q: "Microsoft was originally founded by Bill Gates and Paul Allen as:",
        options: ["Micro-Software", "Micro-Soft", "Windows Systems", "Altair Soft"],
        correct: 1
    },

    // --- Features: Continuum & Tablet Mode ---
    {
        q: "Which feature allows Windows 10 to switch between desktop and tablet modes?",
        options: ["Snap Assist", "Continuum", "Task View", "Live Tiles"],
        correct: 1
    },
    {
        q: "In Tablet mode, the Start menu is displayed in:",
        options: ["A small list", "The center only", "Full screen", "A floating window"],
        correct: 2
    },
    {
        q: "Which mode removes taskbar icons and leaves only essential notification items?",
        options: ["Desktop mode", "Tablet mode", "Sleep mode", "Safe mode"],
        correct: 1
    },
    {
        q: "In Tablet mode, the taskbar displays which button specifically for navigation?",
        options: ["Forward Arrow", "Back Arrow", "Refresh Button", "Home Button"],
        correct: 1
    },
    {
        q: "To open the Action Center, where do you click on the Taskbar?",
        options: ["Start Button", "Search Bar", "Notification icon", "Volume icon"],
        correct: 2
    },

    // --- Cortana & Search ---
    {
        q: "What is Cortana in Windows 10?",
        options: ["A web browser", "A voice-controlled digital assistant", "A cleaning tool", "A game"],
        correct: 1
    },
    {
        q: "What visual represents that Cortana is thinking or speaking?",
        options: ["A square box", "A spinning circular orb", "A blinking cursor", "A red light"],
        correct: 1
    },
    {
        q: "Cortana can help you search for files on your:",
        options: ["Hard drive", "OneDrive", "Web", "All of these"],
        correct: 3
    },
    {
        q: "The search bar on the Taskbar displays which text by default?",
        options: ["Find me", "Type here to search", "Ask Cortana", "Search Windows"],
        correct: 1
    },
    {
        q: "Can Cortana be used to send an email while you work on another app?",
        options: ["Yes", "No", "Only in tablet mode", "Only in pro version"],
        correct: 0
    },

    // --- Task View & Virtual Desktops ---
    {
        q: "Task View is used as a task switcher and a ________ system.",
        options: ["File management", "Virtual desktop", "Security", "Hardware"],
        correct: 1
    },
    {
        q: "What keyboard shortcut activates Task View?",
        options: ["Alt + Tab", "Win + Tab", "Ctrl + Alt + Del", "Win + L"],
        correct: 1
    },
    {
        q: "To create an additional desktop, you click on:",
        options: ["+ New desktop", "Add Monitor", "Create Space", "New Folder"],
        correct: 0
    },
    {
        q: "What is the shortcut to create a new virtual desktop?",
        options: ["Win + Ctrl + D", "Win + D", "Ctrl + Shift + N", "Alt + N"],
        correct: 0
    },
    {
        q: "What is the shortcut to delete the current virtual desktop?",
        options: ["Win + Ctrl + F4", "Win + Delete", "Alt + F4", "Ctrl + X"],
        correct: 1
    },

    // --- Edge, Hello & Universal Apps ---
    {
        q: "Which browser is the default on Windows 10?",
        options: ["Internet Explorer", "Chrome", "Microsoft Edge", "Firefox"],
        correct: 2
    },
    {
        q: "Edge replaces which older web browser?",
        options: ["Netscape", "Internet Explorer", "Safari", "Opera"],
        correct: 1
    },
    {
        q: "Microsoft Edge uses which default search engine?",
        options: ["Google", "Bing", "Yahoo", "Ask"],
        correct: 1
    },
    {
        q: "What is the built-in biometric security system in Windows 10?",
        options: ["Windows Lock", "Windows Hello", "Windows Guard", "SecureFace"],
        correct: 1
    },
    {
        q: "Which biometric methods are supported by Windows Hello?",
        options: ["Face", "Fingerprint", "Iris recognition", "All of these"],
        correct: 3
    },
    {
        q: "Universal Apps adapt their interface to work on:",
        options: ["Only Tablets", "Only Phones", "Tablets, phones, and PCs", "Only PCs"],
        correct: 2
    },
    {
        q: "Universal app content is synced via which cloud service?",
        options: ["Google Drive", "iCloud", "OneDrive", "Dropbox"],
        correct: 2
    },

    // --- Control Panel & Settings ---
    {
        q: "The Control Panel provides the ability to change:",
        options: ["Settings", "Appearance", "Internal workings", "All of these"],
        correct: 3
    },
    {
        q: "Which Control Panel category manages internet connections?",
        options: ["User Accounts", "Network and Internet", "Hardware and Sound", "System and Security"],
        correct: 1
    },
    {
        q: "To group applets logically, you choose which 'View by' option?",
        options: ["Large icons", "Small icons", "Category", "List"],
        correct: 2
    },
    {
        q: "The clock in Windows 10 is known as a ________ clock.",
        options: ["Manual", "Synchronised", "Analog", "Atomic"],
        correct: 1
    },
    {
        q: "Under which Control Panel option can you change the date and time?",
        options: ["System", "Ease of Access", "Clock and Region", "Personalization"],
        correct: 2
    },

    // --- Utilities: Disk Cleanup ---
    {
        q: "Which utility removes temporary and downloaded files to free up space?",
        options: ["Character Map", "Disk Cleanup", "Notepad", "WordPad"],
        correct: 1
    },
    {
        q: "In Disk Cleanup, which drive is usually cleaned by default?",
        options: ["(D:)", "(C:)", "(E:)", "(F:)"],
        correct: 1
    },
    {
        q: "Disk Cleanup targets ________ web pages cached by Microsoft.",
        options: ["Online", "Offline", "Encrypted", "Secured"],
        correct: 1
    },
    {
        q: "To permanently remove files after selecting them in Disk Cleanup, you click:",
        options: ["Remove", "Discard", "Delete Files", "Clean Now"],
        correct: 2
    },

    // --- Fonts & Character Map ---
    {
        q: "The specific style in which text is typed is called a:",
        options: ["Design", "Format", "Font", "Layout"],
        correct: 2
    },
    {
        q: "Where in the Control Panel can you view or delete installed fonts?",
        options: ["Appearance and Personalization > Fonts", "Hardware", "Ease of Access", "Network"],
        correct: 0
    },
    {
        q: "To add a new font, you can drag it from a folder into the ________ window.",
        options: ["Desktop", "Fonts", "Documents", "System"],
        correct: 1
    },
    {
        q: "Which utility allows you to insert special characters like ™ or °?",
        options: ["Cortana", "Character Map", "Disk Cleanup", "Task View"],
        correct: 1
    },
    {
        q: "Which font is suggested for symbols like arrows and checkmarks?",
        options: ["Arial", "Wingdings", "Calibri", "Times New Roman"],
        correct: 1
    },
    {
        q: "Character Map allows you to copy characters to the ________.",
        options: ["Cloud", "Clipboard", "Taskbar", "Recycle Bin"],
        correct: 1
    },
    {
        q: "You can insert a special character by holding ________ and typing its Unicode value.",
        options: ["Ctrl", "Shift", "Alt", "Win"],
        correct: 2
    },
    {
        q: "To insert Unicode values using the keyboard, which key must be 'ON'?",
        options: ["Caps Lock", "Num Lock", "Scroll Lock", "Insert"],
        correct: 1
    },

    // --- Mouse Settings & Media ---
    {
        q: "Where can you change the appearance of the mouse pointer?",
        options: ["Keyboard settings", "Mouse option in Control Panel", "Display settings", "Network settings"],
        correct: 1
    },
    {
        q: "To change the pointer image, which button do you click in Mouse Properties?",
        options: ["Search", "Find", "Browse", "Select"],
        correct: 2
    },
    {
        q: "Which program is used to play multimedia files like movies and music?",
        options: ["Paint", "Character Map", "Windows Media Player", "Disk Cleanup"],
        correct: 2
    },
    {
        q: "In Media Player, which button is used to play songs in random order?",
        options: ["Repeat", "Mute", "Turn shuffle on", "Next"],
        correct: 2
    },
    {
        q: "To finalize a CD for exporting data, you click:",
        options: ["Finalize", "Finish Burning", "Eject only", "Stop"],
        correct: 1
    },
    {
        q: "Which button in Media Player makes a song play over and over again?",
        options: ["Turn shuffle on", "Turn repeat on", "Mute", "Play"],
        correct: 1
    }
];
