// Create a variable to hold your NFTs
const NFTStore = [];

// Function to generate a unique ID using crypto module
function generateUniqueId() {
  return `NFT-${Math.floor(Math.random() * 100000)}`;
}

// Arrays for random selection
const speciesArray = [
  "Martian",
  "Andromedan",
  "Venusian",
  "Jovian",
  "Plutonian",
];
const planetArray = ["Mars", "Andromeda", "Venus", "Jupiter", "Pluto"];
const skillsArray = [
  "Terraforming",
  "Star Mapping",
  "Atmosphere Manipulation",
  "Quantum Computing",
  "Interstellar Navigation",
];
const spaceshipArray = [
  "Star Cruiser X1",
  "Galaxy Glider",
  "Solar Voyager",
  "Nebula Navigator",
  "Cosmic Explorer",
];

// Function to get a random item from an array
function getRandomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

// Function to mint an NFT
function mintNFT(_name) {
  const nft = {
    id: generateUniqueId(),
    name: _name,
    species: getRandomItem(speciesArray),
    planet: getRandomItem(planetArray),
    skills: getRandomItem(skillsArray),
    spaceship: getRandomItem(spaceshipArray),
    creationDate: new Date().toISOString(),
  };
  NFTStore.push(nft);
  console.log(
    `${_name} the ${nft.species} from ${nft.planet} Minted | ID -> ${nft.id}`
  );
}

// Function to list all NFTs
function listNFTs() {
  console.log("\nListing all minted Galactic Explorers:\n");
  NFTStore.forEach((nft) => {
    console.log(`NFT ID: ${nft.id}`);
    console.log(`Name: ${nft.name}`);
    console.log(`Species: ${nft.species}`);
    console.log(`Planet: ${nft.planet}`);
    console.log(`Skills: ${nft.skills}`);
    console.log(`Spaceship: ${nft.spaceship}`);
    console.log(`Creation Date: ${nft.creationDate}`);
    console.log("\n");
  });
  console.log("These are all the minted Galactic Explorers so far!\n");
}

// Function to get the total supply of NFTs
function getTotalSupply() {
  console.log(`Total number of minted Galactic Explorers: ${NFTStore.length}`);
}

// Call your functions below this line
mintNFT("Zara");
mintNFT("Orion");
mintNFT("Lyra");
listNFTs();
getTotalSupply();
