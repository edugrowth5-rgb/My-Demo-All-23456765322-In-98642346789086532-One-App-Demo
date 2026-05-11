const chapter3Data = [
    // --- Introduction to Networking ---
    { q: "What is created by connecting millions of computers together?", options: ["Cyber space", "Hard disk", "Keyboard", "Monitor"], correct: 0 },
    { q: "A group of computers and devices connected to share hardware and software resources is called:", options: ["Standalone PC", "Computer Network", "Modem", "Server"], correct: 1 },
    { q: "When a computer is connected to a network, it is called a:", options: ["Client", "Node", "Sender", "Receiver"], correct: 1 },
    { q: "The Internet is a global ________ network that connects systems across the world.", options: ["Local area", "Wide area", "Personal area", "Campus area"], correct: 1 },
    { q: "Who acts as the 'middleman' between you and the Internet?", options: ["ISP (Internet Service Provider)", "CPU", "RAM", "UPS"], correct: 0 },
    { q: "A typical communication system has a sender, a receiver, a message, and a ________.", options: ["Keyboard", "Communication channel", "Printer", "Scanner"], correct: 1 },

    // --- Advantages of Networking ---
    { q: "Sharing a single ________ on a network saves the cost of licensing for each machine.", options: ["Hardware", "Software", "Mouse", "Screen"], correct: 1 },
    { q: "Networking reduces 'Redundancy'. What does Redundancy mean?", options: ["High speed", "Duplication of data", "Security", "Cost saving"], correct: 1 },
    { q: "Which computer on a network is fully secured against unauthorized access?", options: ["Node", "Client", "Server", "Workstation"], correct: 2 },
    { q: "Sharing hardware like large ________ and storage devices reduces maintenance costs.", options: ["Keyboards", "Printers", "Mice", "Speakers"], correct: 1 },

    // --- Network Components ---
    { q: "Which is the most important and powerful computer on a network?", options: ["Client", "Node", "Server", "Switch"], correct: 2 },
    { q: "What does NIC stand for in networking?", options: ["Network Internal Chip", "Network Interface Card", "New Internet Connection", "Network Interaction Card"], correct: 1 },
    { q: "A unique physical address assigned to each NIC is known as:", options: ["IP Address", "MAC Address", "URL", "Home page"], correct: 1 },
    { q: "What does MAC stand for?", options: ["Media Access Control", "Memory Access Core", "Main Area Connection", "Manual Access Code"], correct: 0 },
    { q: "Which NIC uses radio frequency for connection?", options: ["Wired NIC", "Wireless NIC", "USB NIC", "Parallel NIC"], correct: 1 },
    { q: "________ describes the maximum data transfer rate of a network connection.", options: ["Bandwidth", "Broadband", "Baseband", "Protocol"], correct: 0 },
    { q: "Bandwidth is usually measured in:", options: ["Watts", "Mbps (Megabits per second)", "Volts", "Kilograms"], correct: 1 },

    // --- Guided Media (Wired Connections) ---
    { q: "Which cable is primarily used by cable TV companies for satellite antenna facilities?", options: ["Ethernet cable", "Coaxial cable", "Optical fiber", "Telephone wire"], correct: 1 },
    { q: "The metal shield in a coaxial cable is engineered to block:", options: ["Electricity", "Signal interference", "Water", "Heat"], correct: 1 },
    { q: "Which transmission sends multiple signals at the same time and is used for long distances?", options: ["Baseband", "Broadband", "Single-band", "Narrowband"], correct: 1 },
    { q: "What is the most common and widely used wire in a network today?", options: ["Coaxial", "Ethernet Twisted Pair", "Iron wire", "Copper strip"], correct: 1 },
    { q: "How many wires of different colors are inside an Ethernet cable?", options: ["Two", "Four", "Eight", "Six"], correct: 2 },
    { q: "What is the name of the connector used at the ends of an Ethernet cable?", options: ["BNC", "RJ45", "USB", "VGA"], correct: 1 },
    { q: "The signal loss caused when a cable is stretched too long is called:", options: ["Attenuation", "Amplification", "Modulation", "Encoding"], correct: 0 },
    { q: "Which cable transmits digital data signals in the form of light?", options: ["Coaxial", "Ethernet", "Optical Fiber", "Twisted pair"], correct: 2 },
    { q: "Optical fiber is highly resistant to:", options: ["Light", "Signal interference", "Plastic", "Glass"], correct: 1 },

    // --- Wireless Technology ---
    { q: "Which wireless technology requires a 'line-of-sight' to communicate?", options: ["Bluetooth", "Wi-Fi", "Infrared (IR)", "Radio waves"], correct: 2 },
    { q: "In Infrared technology, which components are used to transmit signals?", options: ["Antennas", "Light-emitting diodes (LEDs)", "Cables", "Mirrors"], correct: 1 },
    { q: "What is the maximum transmission range for Bluetooth (depending on version)?", options: ["10 meters", "100 meters", "Up to 240 meters", "1 kilometer"], correct: 2 },
    { q: "What does Wi-Fi stand for?", options: ["Wireless Fiber", "Wireless Fidelity", "Wired Field", "Wireless Fixed"], correct: 1 },
    { q: "Wi-Fi technology uses ________ waves to provide network connectivity.", options: ["Sound", "Radio", "Light", "Water"], correct: 1 },
    { q: "Which device decodes radio signals and sends them to the Internet via Ethernet?", options: ["Switch", "Router", "Hub", "Repeater"], correct: 1 },

    // --- Networking Devices ---
    { q: "Which device is used to connect computers via telephone lines?", options: ["Switch", "Modem", "Hub", "Bridge"], correct: 1 },
    { q: "What does Modem stand for?", options: ["Mode-Demode", "Modulator-Demodulator", "Model-Monitor", "Mobile-Data"], correct: 1 },
    { q: "Which device acts as a central point of connection for more than two computers?", options: ["Repeater", "Switch/Hub", "Bridge", "Gateway"], correct: 1 },
    { q: "Which device acts as a 'signal booster' to clean and retransmit signals over long distances?", options: ["Modem", "Repeater", "Bridge", "Firewall"], correct: 1 },
    { q: "A ________ connects two similar networks like two LANs.", options: ["Bridge", "Gateway", "Modem", "NIC"], correct: 0 },
    { q: "Which device is used to connect similar networks but with different protocols?", options: ["Repeater", "Router", "Bridge", "Switch"], correct: 1 },
    { q: "A ________ joins two dissimilar networks and acts as a protocol converter.", options: ["Bridge", "Switch", "Gateway", "Hub"], correct: 2 },
    { q: "What is a system designed to prevent unauthorized access to a private network?", options: ["Gateway", "Firewall", "Repeater", "Modem"], correct: 1 },
    { q: "The BNC connector is used for which type of cable?", options: ["Ethernet", "Coaxial", "Optical Fiber", "USB"], correct: 1 },

    // --- Types of Network ---
    { q: "Which network covers a range within 10 meters around an individual person?", options: ["LAN", "MAN", "PAN (Personal Area Network)", "WAN"], correct: 2 },
    { q: "A PAN created using Bluetooth is also sometimes called a:", options: ["PICONET", "INTRANET", "ETHERNET", "INTERNET"], correct: 0 },
    { q: "Which network is used within a small area like a room, building, or campus?", options: ["WAN", "LAN (Local Area Network)", "MAN", "PAN"], correct: 1 },
    { q: "What is the maximum area coverage of a typical LAN?", options: ["100 meters", "10 kilometers", "50 kilometers", "Worldwide"], correct: 1 },
    { q: "A bigger form of LAN spread over various buildings in the same premises is called:", options: ["MAN", "CAN (Campus Area Network)", "PAN", "WAN"], correct: 1 },
    { q: "Which network is generally spread across an entire city (up to 50 km)?", options: ["LAN", "PAN", "MAN (Metropolitan Area Network)", "WAN"], correct: 2 },
    { q: "The most common example of a MAN is:", options: ["Bluetooth", "Cable TV Network", "Satellite", "Home Wi-Fi"], correct: 1 },
    { q: "Which network spans over a country, continent, or the entire world?", options: ["LAN", "CAN", "WAN (Wide Area Network)", "PAN"], correct: 2 },
    { q: "What is the largest WAN in the world?", options: ["Facebook", "Internet", "Google", "WhatsApp"], correct: 1 },

    // --- Quick Knowledge & Definitions ---
    { q: "What is a collection of webpages uploaded on the Internet called?", options: ["Portal", "Website", "Home page", "Link"], correct: 1 },
    { q: "The first page that opens when you open a website is called the:", options: ["Last page", "Main page", "Home page", "Cover page"], correct: 2 },
    { q: "A specially designed website that serves as a single point of access for information is a:", options: ["Web portal", "Web browser", "Search engine", "Web link"], correct: 0 },
    { q: "The set of rules governing a network is called a:", options: ["Law", "Protocol", "Guideline", "Instruction"], correct: 1 },
    { q: "Which connector is an 8-pin connector used for Ethernet?", options: ["BNC", "RJ45", "USB", "HDMI"], correct: 1 },
    // --- Network Topologies (Physical Arrangement) ---
{ q: "A pattern or way of arranging computers and peripheral devices is known as:", options: ["Network Protocol", "Network Topology", "Network Architecture", "Network Security"], correct: 1 },
{ q: "Which topology is also known as 'Linear Topology'?", options: ["Ring", "Star", "Bus", "Mesh"], correct: 2 },
{ q: "In Bus Topology, each node is attached directly to a:", options: ["Central Hub", "Central cable", "Switch", "Router"], correct: 1 },
{ q: "What is the common communication medium for all nodes in a Bus Topology?", options: ["Coaxial cable", "Central cable", "Optical fiber", "Satellite"], correct: 1 },
{ q: "In which topology are devices connected in a circular shape forming a loop?", options: ["Star", "Ring", "Bus", "Mesh"], correct: 1 },
{ q: "In a Ring Topology, each node is connected to exactly how many other nodes?", options: ["One", "Two", "All", "None"], correct: 1 },
{ q: "In which topology is each node connected to a central node (Hub) directly?", options: ["Bus", "Ring", "Star", "Linear"], correct: 2 },
{ q: "In a Star Topology, what is the central node usually?", options: ["Client", "Server", "Hub/Switch", "Repeater"], correct: 2 },

// --- Network Architecture ---
{ q: "What refers to how computers are organized and how tasks are allocated on a network?", options: ["Topology", "Architecture", "Protocol", "Security"], correct: 1 },
{ q: "In which architecture do computers connected to the network act as Clients?", options: ["Peer-to-Peer", "Client-Server", "Bus", "Ring"], correct: 1 },
{ q: "In Client-Server architecture, who processes the requests sent by Clients?", options: ["Another Client", "The Server", "The Hub", "The Modem"], correct: 1 },
{ q: "Which architecture has no central server and every computer has equal status?", options: ["Client-Server", "Peer-to-Peer", "Star Topology", "WAN"], correct: 1 },
{ q: "In Peer-to-Peer architecture, each computer is responsible for:", options: ["Only its own data", "Managing the whole network", "Crashing the system", "Providing electricity"], correct: 1 },

// --- Network Protocols ---
{ q: "What are the set of standard rules and regulations that govern a network?", options: ["Laws", "Topologies", "Protocols", "Architectures"], correct: 2 },
{ q: "Protocols dictate how to ________, transmit, and receive data.", options: ["Delete", "Format", "Encrypt", "Ignore"], correct: 1 },
{ q: "What is the primary protocol suite used for communication on the internet?", options: ["HTTP", "TCP/IP", "FTP", "SMTP"], correct: 1 },
{ q: "In TCP/IP, data is broken down into smaller units called:", options: ["Blocks", "Packets", "Bits", "Frames"], correct: 1 },
{ q: "Which protocol ensures that messages are reassembled in the right order at the destination?", options: ["IP", "TCP", "HTTP", "FTP"], correct: 1 },
{ q: "Which protocol is responsible for addressing and routing each packet to its destination?", options: ["TCP", "IP (Internet Protocol)", "SMTP", "POP3"], correct: 1 },
{ q: "What does HTTP stand for?", options: ["Hyper Text Transfer Protocol", "High Tech Transfer Process", "Hyper Text Terminal Point", "Home Text Transfer Protocol"], correct: 0 },
{ q: "Which protocol is used for transferring files like text, images, and sound on the WWW?", options: ["SMTP", "FTP", "HTTP", "TCP"], correct: 2 },
{ q: "Which version of HTTP encrypts and decrypts user requests for security?", options: ["HTTP 2.0", "HTTPS (HTTP Secure)", "HTTP 1.1", "S-HTTP"], correct: 1 },
{ q: "HTTPS was originally developed by which company?", options: ["Microsoft", "Google", "Netscape", "Apple"], correct: 2 },
{ q: "Which protocol is used specifically for transmitting files between computers on the internet?", options: ["HTTP", "SMTP", "FTP (File Transfer Protocol)", "IMAP"], correct: 2 },
{ q: "In FTP, what is the user's machine typically called?", options: ["Remote host", "Local host machine", "Server", "Gateway"], correct: 1 },
{ q: "What allows users to access FTP files without needing an ID or password?", options: ["Private FTP", "Secure FTP", "Anonymous FTP", "Guest FTP"], correct: 2 },

// --- Email Protocols (SMTP, IMAP, POP) ---
{ q: "Which protocol is the most common for sending email messages over the internet?", options: ["POP3", "IMAP", "SMTP", "HTTP"], correct: 2 },
{ q: "What does SMTP stand for?", options: ["Simple Mail Transfer Protocol", "System Mail Target Process", "Secure Mail Terminal Protocol", "Single Mail Transfer Port"], correct: 0 },
{ q: "In SMTP, the component responsible for receiving electronic mail is called:", options: ["MUA", "MSA (Mail Submission Agent)", "MDA", "MTA"], correct: 1 },
{ q: "Which component is responsible for the delivery of e-mail messages to a local mailbox?", options: ["MUA", "MSA", "MDA (Mail Delivery Agent)", "MTA"], correct: 2 },
{ q: "MDA is also known as LDA. What does LDA stand for?", options: ["Long Delivery Agent", "Local Delivery Agent", "Linked Data Agent", "Legal Delivery Agent"], correct: 1 },
{ q: "Which protocol allows you to access your email from any device and keeps them on the server?", options: ["POP3", "IMAP (Internet Message Access Protocol)", "SMTP", "FTP"], correct: 1 },
{ q: "In which protocol are emails downloaded onto your PC and then deleted from the server?", options: ["IMAP", "POP (Post Office Protocol)", "SMTP", "HTTP"], correct: 1 },
{ q: "Which email protocol is better if you need to check emails from multiple devices?", options: ["POP3", "IMAP", "SMTP", "FTP"], correct: 1 },

// --- Accessing Resources & Security ---
{ q: "To see shared resources on a network, which icon do you double-click on the Desktop?", options: ["This PC", "Recycle Bin", "Network", "Control Panel"], correct: 2 },
{ q: "Which system is designed to convert difficult IP addresses into easy-to-remember names?", options: ["HTTP", "DNS (Domain Name System)", "TCP", "FTP"], correct: 1 },
{ q: "An IP address like '216.3.128.12' identifies a device on the:", options: ["Monitor", "Keyboard", "Internet or local network", "Printer"], correct: 2 },
{ q: "The process of coding a file so that no one can read it without a key is called:", options: ["Encryption", "Decryption", "Formatting", "Deletion"], correct: 0 },
{ q: "What is the key used to unscramble an encrypted file called?", options: ["Security key", "Decryption key", "Password", "Login ID"], correct: 1 },
{ q: "What software should be updated regularly to protect against viruses and malware?", options: ["Word Processor", "Antivirus Software", "Web Browser", "Video Player"], correct: 1 },
{ q: "A ________ examines every message entering or leaving the network and blocks unauthorized ones.", options: ["Modem", "Switch", "Firewall", "Repeater"], correct: 2 },
{ q: "A firewall can be implemented in which form?", options: ["Hardware only", "Software only", "Both Hardware and Software", "Cables only"], correct: 2 },

// --- Extra Details from "Know More" Boxes ---
{ q: "What is a technique to join two or more web pages together using text or images?", options: ["Hypertext", "Hyperlink", "Hyper-protocol", "Hyper-server"], correct: 1 },
{ q: "When you move your mouse over a hyperlink, the cursor changes to which icon?", options: ["Arrow", "Hand icon", "I-beam", "Hourglass"], correct: 1 },
{ q: "A text displayed on a webpage which opens another page is called:", options: ["Plain text", "Hypertext", "Supertext", "Subtext"], correct: 1 },
{ q: "Intranet is defined as a ________ network of computers within an organization.", options: ["Public", "Private", "Global", "Shared"], correct: 1 },
{ q: "Which network is NOT available to the world outside the organization?", options: ["Internet", "Intranet", "Extranet", "WAN"], correct: 1 },
{ q: "What is the address of a website (like www.google.com) called?", options: ["IP Address", "URL", "MAC Address", "Protocol"], correct: 1 }
];
