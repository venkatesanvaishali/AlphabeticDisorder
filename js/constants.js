let birdCollections = [
    'albatross',   'biddy',      'blackbird',
    'canary',      'crow',       'cuckoo',
    'dove,',       'pigeon',     'duck',
    'eagle',       'falcon',     'finch',
    'flamingo',    'goose',      'gull',
    'hawk',        'jackdaw',    'jay',
    'kestrel',     'kookaburra', 'mallard',
    'nightingale', 'nuthatch',   'ostrich',
    'owl',         'parakeet',   'parrot',
    'peacock',     'pelican',    'penguin',
    'pheasant',    'piranha',    'raven',
    'robin',       'rooster',    'sparrow',
    'stork',       'swallow',    'swan',
    'swift',       'tit',        'turkey',
    'vulture',     'woodpecker', 'wren'
  ]

let mammalsCollections = [
    'anteater',     'antelope',   'armadillo',    'badger',
    'bat',          'bear',       'beaver',       'bullock',
    'camel',        'chimpanzee', 'dachshund',    'deer',
    'dolphin',      'elephant',   'elk  ',        'fox',
    'gazelle',      'gerbil',     'giraffe',      'goat',
    'grizzly bear', 'guinea pig', 'hamster',      'hare',
    'hare',         'hedgehog',   'horse',        'hyena',
    'lion',         'llama',      'lynx',         'mammoth',
    'marmot',       'mink',       'mole',         'mongoose',
    'mouse',        'mule',       'otter',        'panda',
    'pig',          'platypus',   'polar bear',   'polecat',
    'pony',         'porcupine',  'prairie dog',  'puma',
    'racoon',       'rat',        'reindeer',     'rhinoceros',
    'seal',         'seal',       'sheep',        'skunk',
    'sloth',        'squirrel',   'tiger',        'weasel',
    'whale',        'wolf',       'zebra'
  ]
//Get random numbers
function getRandomNumber(baseValue, count){
    let randomCountCollections = []
    for(let i=0; i<count; i++){
        randomCountCollections.push(Math.floor(Math.random()*baseValue))
    }
    return randomCountCollections
}

//Get Random Birds from Random Numbers
let getRandomBird = function(count){
    let randomBirdNumbers = getRandomNumber(birdCollections.length, count)
    return randomBirdNumbers.map((currentValue) => {
        return birdCollections[currentValue]
    })
}

//Get Random Mammals from Random Numbers
let getRandomMammal = function(count){
    let randomMammalNumbers = getRandomNumber(mammalsCollections.length, count)
    return randomMammalNumbers.map((currentValue) => {
        return mammalsCollections[currentValue]
    })
}
  




