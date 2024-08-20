document.getElementById('btn').addEventListener('click',telljokes);


function telljokes() {
    const jokes = [
        "What do kids play when their mom is using the phone? Bored games",
        " What do you call an ant who fights crime? A vigilANTe",
        " Why are snails slow? Because they are carrying a house on their back",
        "What is the smartest insect? A spelling bee",
        "Why do not programmers like nature? It has too many bugs.",
        "Why do Java developers wear glasses? Because they don't see sharp.",
        "How many programmers does it take to change a light bulb? None, that's a hardware problem.",
        "Why was the JavaScript developer sad? Because they didn't know how to 'null' their feelings.",
        "Why did the developer go broke? Because they used up all their cache.",
        "What does a storm cloud wear under his raincoat? Thunderwear.",
        " What is fast, loud and crunchy? A rocket chip.",
        " How does the ocean say hi? It waves!",
        " What do you call a couple of chimpanzees sharing an Amazon account? PRIME-mates.",
        " Why did the teddy bear say no to dessert? Because she was stuffed.",
        "Why did the soccer player take so long to eat dinner? Because he thought he could not use his hands.",
        "Name the kind of tree you can hold in your hand? A palm tree!",
        " What do birds give out on Halloween? Tweets.",
        "Related: Funny Math Jokes",
        " What has ears but cannot hear? A cornfield.",
        "What is a cat is favorite dessert? A bowl full of mice-cream.",
        "Where did the music teacher leave her keys? In the piano!"
    ];
    const randomindex=Math.floor(Math.random()*jokes.length);
    document.getElementById('jokedisplay').textContent=jokes[randomindex];
}