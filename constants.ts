
// import { Scenario } from './types';

// export const SCENARIOS: Scenario[] = [
//   {
//     id: 1,
//     category: 'Reputation',
//     question: "You see a social media post that is clearly spreading misinformation about a public health crisis. What do you do?",
//     options: [
//       { text: "Share it without thinking", impact: -10, feedback: "Incorrect. Spreading misinformation hurts your reputation and the community." },
//       { text: "Report it to the platform", impact: 10, feedback: "Correct! Reporting false information helps keep the internet safe and reliable." },
//       { text: "Ignore it", impact: 0, feedback: "Neutral. Ignoring it doesn't stop the spread of lies." },
//       { text: "Comment to correct the information", impact: 5, feedback: "Good! But reporting is often more effective at stopping the spread." }
//     ]
//   },
//   {
//     id: 2,
//     category: 'Security',
//     question: "Your friend asks for your account password to access a shared streaming service. What do you do?",
//     options: [
//       { text: "Give the password", impact: -10, feedback: "Incorrect. Sharing passwords, even with friends, is a major security risk." },
//       { text: "Refuse and explain why", impact: 10, feedback: "Correct! Keeping your account credentials private is the first rule of security." },
//       { text: "Change your password after sharing", impact: -5, feedback: "Incorrect. You still gave away access to your personal account." },
//       { text: "Ignore the request", impact: 2, feedback: "Safe! But explaining why is better for the friendship." }
//     ]
//   },
//   {
//     id: 3,
//     category: 'Security',
//     question: "A stranger sends you a direct message asking for your personal information in exchange for a prize. How do you respond?",
//     options: [
//       { text: "Give them your info", impact: -15, feedback: "Incorrect. This is a common scam used to steal your identity." },
//       { text: "Report the account", impact: 10, feedback: "Correct! Reporting protects you and others from being scammed." },
//       { text: "Block the user", impact: 8, feedback: "Good! Blocking prevents further contact, but reporting helps the platform remove them." },
//       { text: "Ask for more information", impact: -5, feedback: "Incorrect. Engaging with scammers is dangerous and gives them more chances to trick you." }
//     ]
//   },
//   {
//     id: 4,
//     category: 'Security',
//     question: "You come across a website that offers free downloads of expensive software. What do you do?",
//     options: [
//       { text: "Download the software", impact: -15, feedback: "Incorrect. These sites are almost always full of viruses and malware." },
//       { text: "Check if the site is legitimate", impact: 0, feedback: "Neutral. Most 'free software' sites are scams anyway." },
//       { text: "Share the link with others", impact: -10, feedback: "Incorrect. You are spreading dangerous links to your friends." },
//       { text: "Close the website immediately", impact: 10, feedback: "Correct! Avoiding 'too good to be true' offers is the safest move." }
//     ]
//   },
//   {
//     id: 5,
//     category: 'Security',
//     question: "Your teacher sends you an email asking for an assignment submission. The email address looks unusual. What do you do?",
//     options: [
//       { text: "Reply and attach the assignment", impact: -8, feedback: "Incorrect. It might be a phishing email designed to steal your files." },
//       { text: "Ignore the email", impact: 2, feedback: "Safe, but you might miss a real deadline." },
//       { text: "Verify the email with your teacher in person", impact: 10, feedback: "Correct! Always verify suspicious requests through a trusted channel." },
//       { text: "Open the attachment", impact: -12, feedback: "Incorrect. Never open attachments from suspicious or unknown addresses." }
//     ]
//   },
//   {
//     id: 6,
//     category: 'Security',
//     question: "You receive a pop-up message claiming your computer is infected with a virus. What’s your next step?",
//     options: [
//       { text: "Click on the pop-up to fix the issue", impact: -15, feedback: "Incorrect. This is a 'fake alert' used to trick you into downloading real malware." },
//       { text: "Run your own antivirus software", impact: 10, feedback: "Correct! Use the tools you trust, not random pop-ups." },
//       { text: "Ignore the warning", impact: 5, feedback: "Good! Most of these pop-ups are just scary ads." },
//       { text: "Search the issue online", impact: 2, feedback: "Neutral. Just be careful not to click more dangerous links in the search results." }
//     ]
//   },
//   {
//     id: 7,
//     category: 'Etiquette',
//     question: "You overhear someone spreading rumors about your friend online. How do you handle the situation?",
//     options: [
//       { text: "Join the conversation and spread it further", impact: -12, feedback: "Incorrect. Participating in rumors is a major loss of integrity." },
//       { text: "Confront them online", impact: -5, feedback: "Risky. Public arguments often make the drama worse." },
//       { text: "Privately warn your friend", impact: 10, feedback: "Correct! Supporting your friend privately is the most mature response." },
//       { text: "Ignore the situation", impact: 0, feedback: "Neutral. Doing nothing doesn't help your friend." }
//     ]
//   },
//   {
//     id: 8,
//     category: 'Privacy',
//     question: "You are signing up for a new app that requires several permissions, including access to your camera, microphone, and contacts. How do you respond?",
//     options: [
//       { text: "Grant all permissions", impact: -10, feedback: "Incorrect. Many apps take more data than they actually need." },
//       { text: "Deny all permissions", impact: 5, feedback: "Safe! But some parts of the app might not work." },
//       { text: "Only allow necessary permissions", impact: 10, feedback: "Correct! Give the app only what it needs to function safely." },
//       { text: "Look for an alternative app", impact: 8, feedback: "Good! If an app is too intrusive, finding a better one is a smart move." }
//     ]
//   },
//   {
//     id: 9,
//     category: 'Privacy',
//     question: "You notice that a new app you installed is draining your phone’s battery quickly. What’s your action?",
//     options: [
//       { text: "Uninstall the app", impact: 10, feedback: "Correct! Battery drain can be a sign of an app tracking you in the background." },
//       { text: "Ignore the issue", impact: -5, feedback: "Incorrect. You might be ignoring a security or privacy risk." },
//       { text: "Disable the app’s permissions", impact: 6, feedback: "Good! Stopping the app's access can sometimes stop the drain." },
//       { text: "Restart your phone", impact: 0, feedback: "Neutral. This fixes a glitch, but doesn't solve a bad app's behavior." }
//     ]
//   },
//   {
//     id: 10,
//     category: 'Security',
//     question: "You’re using a public Wi-Fi network to log into your bank account. What should you do?",
//     options: [
//       { text: "Proceed as normal", impact: -12, feedback: "Incorrect. Public WiFi is unencrypted and very easy to hack." },
//       { text: "Use a VPN or secure connection", impact: 8, feedback: "Good! A VPN adds a layer of protection on public networks." },
//       { text: "Log in later on a secure network", impact: 10, feedback: "Correct! Waiting for a trusted network (like home) is the safest choice." },
//       { text: "Avoid using public Wi-Fi altogether", impact: 7, feedback: "Very safe! Using your phone's data plan is much better than public WiFi." }
//     ]
//   }
// ];




import { Scenario } from './types';

export const SCENARIOS: Scenario[] = [
  {
    id: 1,
    category: 'Reputation',
    question: "You see a social media post that is clearly spreading misinformation about a public health crisis. What do you do?",
    options: [
      { text: "Share it without thinking", impact: -10, feedback: "Incorrect. Spreading misinformation hurts your reputation and the community." },
      { text: "Report it to the platform", impact: 10, feedback: "Correct! Reporting false information helps keep the internet safe and reliable." },
      { text: "Ignore it", impact: 0, feedback: "Neutral. Ignoring it doesn't stop the spread of lies." },
      { text: "Comment to correct the information", impact: 5, feedback: "Good! But reporting is often more effective at stopping the spread." }
    ]
  },
  {
    id: 2,
    category: 'Security',
    question: "Your friend asks for your account password to access a shared streaming service. What do you do?",
    options: [
      { text: "Give the password", impact: -10, feedback: "Incorrect. Sharing passwords, even with friends, is a major security risk." },
      { text: "Refuse and explain why", impact: 10, feedback: "Correct! Keeping your account credentials private is the first rule of security." },
      { text: "Change your password after sharing", impact: -5, feedback: "Incorrect. You still gave away access to your personal account." },
      { text: "Ignore the request", impact: 2, feedback: "Safe! But explaining why is better for the friendship." }
    ]
  },
  {
    id: 3,
    category: 'Security',
    question: "A stranger sends you a direct message asking for your personal information in exchange for a prize. How do you respond?",
    options: [
      { text: "Give them your info", impact: -15, feedback: "Incorrect. This is a common scam used to steal your identity." },
      { text: "Report the account", impact: 10, feedback: "Correct! Reporting protects you and others from being scammed." },
      { text: "Block the user", impact: 8, feedback: "Good! Blocking prevents further contact, but reporting helps the platform remove them." },
      { text: "Ask for more information", impact: -5, feedback: "Incorrect. Engaging with scammers is dangerous and gives them more chances to trick you." }
    ]
  },
  {
    id: 4,
    category: 'Security',
    question: "You find a website offering a $100 video game for free download. It asks you to turn off your antivirus to install it. What do you do?",
    options: [
      { text: "Download it immediately", impact: -15, feedback: "Incorrect. Legitimate software never asks you to disable security. This is malware." },
      { text: "Leave the site and buy from an official store", impact: 10, feedback: "Correct! If it sounds too good to be true, it's a trap. Stick to official sources." },
      { text: "Turn off antivirus and try it", impact: -20, feedback: "Dangerous! Disabling your security is exactly what hackers want you to do." },
      { text: "Send the link to a friend to test first", impact: -10, feedback: "Incorrect. Never put your friends at risk to test a suspicious link." }
    ]
  },
  {
    id: 5,
    category: 'Security',
    question: "Your teacher sends you an email asking for an assignment submission. The email address looks unusual. What do you do?",
    options: [
      { text: "Reply and attach the assignment", impact: -8, feedback: "Incorrect. It might be a phishing email designed to steal your files." },
      { text: "Ignore the email", impact: 2, feedback: "Safe, but you might miss a real deadline." },
      { text: "Verify the email with your teacher in person", impact: 10, feedback: "Correct! Always verify suspicious requests through a trusted channel." },
      { text: "Open the attachment", impact: -12, feedback: "Incorrect. Never open attachments from suspicious or unknown addresses." }
    ]
  },
  {
    id: 6,
    category: 'Security',
    question: "A loud 'Warning! Virus Detected' pop-up freezes your browser and gives you a phone number to call for support. What is the best action?",
    options: [
      { text: "Call the number immediately", impact: -15, feedback: "Incorrect. This is a tech support scam. They will steal your money or data." },
      { text: "Force close the browser (Alt+F4)", impact: 10, feedback: "Correct! The pop-up itself is just a web page. Closing it removes the scare tactic." },
      { text: "Click the 'Scan Now' button on the pop-up", impact: -10, feedback: "Incorrect. Clicking anything inside the fake pop-up usually downloads real malware." },
      { text: "Enter your credit card to fix it", impact: -20, feedback: "Critical Error! Never give payment details to a random pop-up." }
    ]
  },
  {
    id: 7,
    category: 'Etiquette',
    question: "You overhear someone spreading rumors about your friend online. How do you handle the situation?",
    options: [
      { text: "Join the conversation and spread it further", impact: -12, feedback: "Incorrect. Participating in rumors is a major loss of integrity." },
      { text: "Confront them online", impact: -5, feedback: "Risky. Public arguments often make the drama worse." },
      { text: "Privately warn your friend", impact: 10, feedback: "Correct! Supporting your friend privately is the most mature response." },
      { text: "Ignore the situation", impact: 0, feedback: "Neutral. Doing nothing doesn't help your friend." }
    ]
  },
  {
    id: 8,
    category: 'Privacy',
    question: "You download a simple 'Flashlight' app, but it asks for permission to access your Contact List and GPS Location. What do you do?",
    options: [
      { text: "Allow all permissions", impact: -10, feedback: "Incorrect. A flashlight app has no reason to know who your friends are or where you live." },
      { text: "Deny the request and uninstall the app", impact: 10, feedback: "Correct! This app is data-mining. Find a trustworthy alternative that respects privacy." },
      { text: "Allow only GPS but not Contacts", impact: -5, feedback: "Incorrect. A flashlight doesn't need your location either." },
      { text: "Email the developer your phone number", impact: -15, feedback: "Incorrect. Never volunteer personal info to unknown developers." }
    ]
  },
  {
    id: 9,
    category: 'Privacy',
    question: "You notice that a new app you installed is draining your phone’s battery quickly. What’s your action?",
    options: [
      { text: "Uninstall the app", impact: 10, feedback: "Correct! Battery drain can be a sign of an app tracking you in the background." },
      { text: "Ignore the issue", impact: -5, feedback: "Incorrect. You might be ignoring a security or privacy risk." },
      { text: "Disable the app’s permissions", impact: 6, feedback: "Good! Stopping the app's access can sometimes stop the drain." },
      { text: "Restart your phone", impact: 0, feedback: "Neutral. This fixes a glitch, but doesn't solve a bad app's behavior." }
    ]
  },
  {
    id: 10,
    category: 'Security',
    question: "You need to check your bank balance while sitting in a coffee shop. What is the safest way to connect?",
    options: [
      { text: "Connect to the free Public Wi-Fi", impact: -10, feedback: "Incorrect. Public Wi-Fi is rarely encrypted, allowing hackers to see your data." },
      { text: "Use your phone's Mobile Data (4G/5G)", impact: 10, feedback: "Correct! Your cellular connection is encrypted and much safer than public Wi-Fi." },
      { text: "Use the Wi-Fi but open an 'Incognito' window", impact: -5, feedback: "Incorrect. Incognito mode does NOT protect you from hackers on the network." },
      { text: "Ask a stranger for their hotspot password", impact: -5, feedback: "Risky. You don't know if their device is secure." }
    ]
  }
];