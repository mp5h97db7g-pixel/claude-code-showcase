const funnyQuotes: string[] = [
  "I told my computer I needed a break, and now it won't stop sending me Kit-Kat ads.",
  "Why do programmers prefer dark mode? Because light attracts bugs.",
  "There are only 10 types of people in the world: those who understand binary and those who don't.",
  "A SQL query walks into a bar, sees two tables, and asks... 'Can I JOIN you?'",
  "To understand recursion, you must first understand recursion.",
  "My code doesn't have bugs, it has unexpected features.",
  "!false — it's funny because it's true.",
  "The best thing about a Boolean is that even if you're wrong, you're only off by a bit.",
  "A programmer's wife tells him: 'Go to the store and get a loaf of bread. If they have eggs, get a dozen.' He comes home with 12 loaves.",
  "I'd tell you a UDP joke, but you might not get it.",
  "There's no place like 127.0.0.1.",
  "Algorithm: a word used by programmers when they don't want to explain what they did.",
  "How many programmers does it take to change a light bulb? None. That's a hardware problem.",
  "I have a joke about Java... but it takes too long to get.",
  "Debugging: being the detective in a crime movie where you're also the murderer.",
  "It works on my machine. Then we'll ship your machine.",
  "The cloud is just someone else's computer having a worse day than yours.",
  "Software and cathedrals are much the same — first we build them, then we pray.",
  "In theory, there's no difference between theory and practice. In practice, there is.",
  "An SEO expert walks into a bar, bars, pub, tavern, public house, Irish pub, drinks, beer...",
];

function getRandomQuote(): string {
  const index = Math.floor(Math.random() * funnyQuotes.length);
  return funnyQuotes[index];
}

function main(): void {
  console.log("🎭 Funny Quote Assistant");
  console.log("========================\n");
  console.log(`"${getRandomQuote()}"\n`);
}

main();

export { funnyQuotes, getRandomQuote };
