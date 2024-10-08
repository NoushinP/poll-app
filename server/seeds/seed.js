const db = require('../config/connection');
const { Question, Choice } = require('../models');
const cleanDB = require('./cleanDB');
db.once('open', async () => {
  try {
    await cleanDB('Choice', 'choices');
    await cleanDB('Question', 'questions');
    const bevQuestion = await Question.create({ name: "Best Soft Drink?", choices: [] })
    const bevChoice1 = await Choice.create({ name: 'Coke', responses: 0 })
    const bevChoice2 = await Choice.create({ name: 'Pepsi', responses: 0 })
    const bevChoice3 = await Choice.create({ name: 'Sprite', responses: 0 })

    const bevChoice4 = await Choice.create({ name: 'Dr. Pepper', responses: 0 })
    bevQuestion.choices.push(bevChoice1._id, bevChoice2._id, bevChoice3._id, bevChoice4._id)
    await bevQuestion.save()

    const sportsQuestion = await Question.create({ name: "Favorite Sport?", choices: [] })
    const sportsChoice1 = await Choice.create({ name: 'Baseball', responses: 0 })
    const sportsChoice2 = await Choice.create({ name: 'Soccer', responses: 0 })
    const sportsChoice3 = await Choice.create({ name: 'Football', responses: 0 })
    const sportsChoice4 = await Choice.create({ name: 'Hockey', responses: 0 })
    sportsQuestion.choices.push(sportsChoice1._id, sportsChoice2._id, sportsChoice3._id, sportsChoice4._id)
    await sportsQuestion.save()

    const movieQuestion = await Question.create({ name: "Favorite Sports Movie?", choices: [] })
    const movieChoice1 = await Choice.create({ name: 'Miracle On Ice', responses: 0 })
    const movieChoice2 = await Choice.create({ name: 'Natural', responses: 0 })
    const movieChoice3 = await Choice.create({ name: 'Field Of Dreams', responses: 0 })
    const movieChoice4 = await Choice.create({ name: 'Sandlot', responses: 0 })
    movieQuestion.choices.push(movieChoice1._id, movieChoice2._id, movieChoice3._id, movieChoice4._id)
    await movieQuestion.save()

    const musicQuestion = await Question.create({ name: "Favorite Music Genre?", choices: [] })
    const musicChoice1 = await Choice.create({ name: 'Rock', responses: 0 })
    const musicChoice2 = await Choice.create({ name: 'Hip-Hop', responses: 0 })
    const musicChoice3 = await Choice.create({ name: 'Electronic', responses: 0 })
    const musicChoice4 = await Choice.create({ name: 'Country', responses: 0 })
    musicQuestion.choices.push(musicChoice1._id, musicChoice2._id, musicChoice3._id, musicChoice4._id)
    await musicQuestion.save()

    const movieGQuestion = await Question.create({ name: "Favorite Movie Genre?", choices: [] })
    const movieGChoice1 = await Choice.create({ name: 'Fantasy/Scifi', responses: 0 })
    const movieGChoice2 = await Choice.create({ name: 'Sports', responses: 0 })
    const movieGChoice3 = await Choice.create({ name: 'Horror', responses: 0 })
    const movieGChoice4 = await Choice.create({ name: 'Comedy', responses: 0 })
    movieGQuestion.choices.push(movieGChoice1._id, movieGChoice2._id, movieGChoice3._id, movieGChoice4._id)
    await movieGQuestion.save()

    const foodQuestion = await Question.create({ name: "Favorite Food?", choices: [] })
    const foodChoice1 = await Choice.create({ name: 'Pizza/Pasta', responses: 0 })
    const foodChoice2 = await Choice.create({ name: 'Sushi', responses: 0 })
    const foodChoice3 = await Choice.create({ name: 'Tacos/Burritos', responses: 0 })
    const foodChoice4 = await Choice.create({ name: 'Burgers', responses: 0 })
    foodQuestion.choices.push(foodChoice1._id, foodChoice2._id, foodChoice3._id, foodChoice4._id)
    await foodQuestion.save()

    const actorQuestion = await Question.create({ name: "Favorite Modern Actor?", choices: [] })
    const actorChoice1 = await Choice.create({ name: 'Robert Downey Jr.', responses: 0 })
    const actorChoice2 = await Choice.create({ name: 'Brad Pitt', responses: 0 })
    const actorChoice3 = await Choice.create({ name: 'Jason Momoa', responses: 0 })
    const actorChoice4 = await Choice.create({ name: 'Johnny Depp', responses: 0 })
    actorQuestion.choices.push(actorChoice1._id, actorChoice2._id, actorChoice3._id, actorChoice4._id)
    await actorQuestion.save()

    const actor2Question = await Question.create({ name: "Favorite Modern Actor Named Chris?", choices: [] })
    const actor2Choice1 = await Choice.create({ name: 'Chris Hemsworth', responses: 0 })
    const actor2Choice2 = await Choice.create({ name: 'Chris Evans', responses: 0 })
    const actor2Choice3 = await Choice.create({ name: 'Chris Pine', responses: 0 })
    const actor2Choice4 = await Choice.create({ name: 'Chris Pratt', responses: 0 })
    actor2Question.choices.push(actor2Choice1._id, actor2Choice2._id, actor2Choice3._id, actor2Choice4._id)
    await actor2Question.save()

    const actressQuestion = await Question.create({ name: "Favorite Modern Actress?", choices: [] })
    const actressChoice1 = await Choice.create({ name: 'Margot Robbie', responses: 0 })
    const actressChoice2 = await Choice.create({ name: 'Scarlett Johansson', responses: 0 })
    const actressChoice3 = await Choice.create({ name: 'Anne Hathaway', responses: 0 })
    const actressChoice4 = await Choice.create({ name: 'Jennifer Lawrence', responses: 0 })
    actressQuestion.choices.push(actressChoice1._id, actressChoice2._id, actressChoice3._id, actressChoice4._id)
    await actressQuestion.save()

    const transportQuestion = await Question.create({ name: "What Mode Of Transportation Do You Prefer?", choices: [] })
    const transportChoice1 = await Choice.create({ name: 'Car', responses: 0 })
    const transportChoice2 = await Choice.create({ name: 'Train/Bus', responses: 0 })
    const transportChoice3 = await Choice.create({ name: 'Bicycle/Motorcycle', responses: 0 })
    const transportChoice4 = await Choice.create({ name: 'Walking', responses: 0 })
    transportQuestion.choices.push(transportChoice1._id, transportChoice2._id, transportChoice3._id, transportChoice4._id)
    await transportQuestion.save()

    const instrumentQuestion = await Question.create({ name: "Favorite Family Of Instruments?", choices: [] })
    const instrumentChoice1 = await Choice.create({ name: 'Strings', responses: 0 })
    const instrumentChoice2 = await Choice.create({ name: 'Percussion', responses: 0 })
    const instrumentChoice3 = await Choice.create({ name: 'Brass', responses: 0 })
    const instrumentChoice4 = await Choice.create({ name: 'Woodwind', responses: 0 })
    instrumentQuestion.choices.push(instrumentChoice1._id, instrumentChoice2._id, instrumentChoice3._id, instrumentChoice4._id)
    await instrumentQuestion.save()

    const meatQuestion = await Question.create({ name: "Best Meat?", choices: [] })
    const meatChoice1 = await Choice.create({ name: 'Beef', responses: 0 })
    const meatChoice2 = await Choice.create({ name: 'Pork', responses: 0 })
    const meatChoice3 = await Choice.create({ name: 'Fish', responses: 0 })
    const meatChoice4 = await Choice.create({ name: 'Poultry', responses: 0 })
    meatQuestion.choices.push(meatChoice1._id, meatChoice2._id, meatChoice3._id, meatChoice4._id)
    await meatQuestion.save()

    const browserQuestion = await Question.create({ name: "What Browser Do You Use?", choices: [] })
    const browserChoice1 = await Choice.create({ name: 'Google Chrome', responses: 0 })
    const browserChoice2 = await Choice.create({ name: 'Mozilla Firefox', responses: 0 })
    const browserChoice3 = await Choice.create({ name: 'MicrosOft Edge', responses: 0 })
    const browserChoice4 = await Choice.create({ name: 'Duckduckgo', responses: 0 })
    browserQuestion.choices.push(browserChoice1._id, browserChoice2._id, browserChoice3._id, browserChoice4._id)
    await browserQuestion.save()

    const natureQuestion = await Question.create({ name: "what Kind Of Nature Do You Belong In?", choices: [] })
    const natureChoice1 = await Choice.create({ name: 'Forest/Mountains', responses: 0 })
    const natureChoice2 = await Choice.create({ name: 'Beach/Tropics', responses: 0 })
    const natureChoice3 = await Choice.create({ name: 'Desert/Savanna', responses: 0 })
    const natureChoice4 = await Choice.create({ name: 'Plains/River', responses: 0 })
    natureQuestion.choices.push(natureChoice1._id, natureChoice2._id, natureChoice3._id, natureChoice4._id)
    await natureQuestion.save()

    const colorQuestion = await Question.create({ name: "What Color Do You Identify With?", choices: [] })
    const colorChoice1 = await Choice.create({ name: 'Red', responses: 0 })
    const colorChoice2 = await Choice.create({ name: 'Blue', responses: 0 })
    const colorChoice3 = await Choice.create({ name: 'Green', responses: 0 })
    const colorChoice4 = await Choice.create({ name: 'Black', responses: 0 })
    colorQuestion.choices.push(colorChoice1._id, colorChoice2._id, colorChoice3._id, colorChoice4._id)
    await colorQuestion.save()

    const seasonQuestion = await Question.create({ name: "Favorite season?", choices: [] })
    const seasonChoice1 = await Choice.create({ name: 'Winter', responses: 0 })
    const seasonChoice2 = await Choice.create({ name: 'Spring', responses: 0 })
    const seasonChoice3 = await Choice.create({ name: 'Summer', responses: 0 })
    const seasonChoice4 = await Choice.create({ name: 'Fall', responses: 0 })
    seasonQuestion.choices.push(seasonChoice1._id, seasonChoice2._id, seasonChoice3._id, seasonChoice4._id)
    await seasonQuestion.save()

    const socialQuestion = await Question.create({ name: "Favorite Social Media?", choices: [] })
    const socialChoice1 = await Choice.create({ name: 'Twitter (X)', responses: 0 })
    const socialChoice2 = await Choice.create({ name: 'Tik Tok', responses: 0 })
    const socialChoice3 = await Choice.create({ name: 'Instagram', responses: 0 })
    const socialChoice4 = await Choice.create({ name: 'Youtube', responses: 0 })
    socialQuestion.choices.push(socialChoice1._id, socialChoice2._id, socialChoice3._id, socialChoice4._id)
    await socialQuestion.save()

    const superpowerQuestion = await Question.create({ name: "What Superpower Would You Choose?", choices: [] })
    const superpowerChoice1 = await Choice.create({ name: 'Super Strength', responses: 0 })
    const superpowerChoice2 = await Choice.create({ name: 'Flying', responses: 0 })
    const superpowerChoice3 = await Choice.create({ name: 'Immortality', responses: 0 })
    const superpowerChoice4 = await Choice.create({ name: 'Mind Reading', responses: 0 })
    superpowerQuestion.choices.push(superpowerChoice1._id, superpowerChoice2._id, superpowerChoice3._id, superpowerChoice4._id)
    await superpowerQuestion.save()

    const fictionQuestion = await Question.create({ name: "What Fictional Universe Would You Want To Live In?", choices: [] })
    const fictionChoice1 = await Choice.create({ name: 'Star Wars', responses: 0 })
    const fictionChoice2 = await Choice.create({ name: 'Pokemon', responses: 0 })
    const fictionChoice3 = await Choice.create({ name: 'Marvel', responses: 0 })
    const fictionChoice4 = await Choice.create({ name: 'Harry Potter', responses: 0 })
    fictionQuestion.choices.push(fictionChoice1._id, fictionChoice2._id, fictionChoice3._id, fictionChoice4._id)
    await fictionQuestion.save()

    const islandQuestion = await Question.create({ name: "What Would You Take To a Deserted Island?", choices: [] })
    const islandChoice1 = await Choice.create({ name: 'A Lighter', responses: 0 })
    const islandChoice2 = await Choice.create({ name: 'Your Favorite Series Of Novels', responses: 0 })
    const islandChoice3 = await Choice.create({ name: 'Axe/Machete/Knife', responses: 0 })
    const islandChoice4 = await Choice.create({ name: 'A Wilderness Survival Guide', responses: 0 })
    islandQuestion.choices.push(islandChoice1._id, islandChoice2._id, islandChoice3._id, islandChoice4._id)
    await islandQuestion.save()

    const petQuestion = await Question.create({ name: "What Is The Ideal Pet?", choices: [] })
    const petChoice1 = await Choice.create({ name: 'Cat', responses: 0 })
    const petChoice2 = await Choice.create({ name: 'Dog', responses: 0 })
    const petChoice3 = await Choice.create({ name: 'Bunny', responses: 0 })
    const petChoice4 = await Choice.create({ name: 'Bird', responses: 0 })
    petQuestion.choices.push(petChoice1._id, petChoice2._id, petChoice3._id, petChoice4._id)
    await petQuestion.save()

    const animalQuestion = await Question.create({ name: "If you Could Befriend a Wild Animal Which Would You Pick?", choices: [] })
    const animalChoice1 = await Choice.create({ name: 'Penguin', responses: 0 })
    const animalChoice2 = await Choice.create({ name: 'Big Cat', responses: 0 })
    const animalChoice3 = await Choice.create({ name: 'Bear', responses: 0 })
    const animalChoice4 = await Choice.create({ name: 'Gorilla', responses: 0 })
    animalQuestion.choices.push(animalChoice1._id, animalChoice2._id, animalChoice3._id, animalChoice4._id)
    await animalQuestion.save()

    const tvQuestion = await Question.create({ name: "Best Tv Show Of All Time?", choices: [] })
    const tvChoice1 = await Choice.create({ name: 'Breaking Bad', responses: 0 })
    const tvChoice2 = await Choice.create({ name: 'Seinfeld', responses: 0 })
    const tvChoice3 = await Choice.create({ name: 'Avatar The Last Airbender', responses: 0 })
    const tvChoice4 = await Choice.create({ name: 'Game Of Thrones', responses: 0 })
    tvQuestion.choices.push(tvChoice1._id, tvChoice2._id, tvChoice3._id, tvChoice4._id)
    await tvQuestion.save()

    const timeQuestion = await Question.create({ name: "Best Time Of Day?", choices: [] })
    const timeChoice1 = await Choice.create({ name: 'Morning', responses: 0 })
    const timeChoice2 = await Choice.create({ name: 'Noon', responses: 0 })
    const timeChoice3 = await Choice.create({ name: 'Evening', responses: 0 })
    const timeChoice4 = await Choice.create({ name: 'Night', responses: 0 })
    timeQuestion.choices.push(timeChoice1._id, timeChoice2._id, timeChoice3._id, timeChoice4._id)
    await timeQuestion.save()

    const boardgameQuestion = await Question.create({ name: "Favorite Boardgame?", choices: [] })
    const boardgameChoice1 = await Choice.create({ name: 'Monopoly', responses: 0 })
    const boardgameChoice2 = await Choice.create({ name: 'Scrabble', responses: 0 })
    const boardgameChoice3 = await Choice.create({ name: 'Clue', responses: 0 })
    const boardgameChoice4 = await Choice.create({ name: 'Chess/Checkers', responses: 0 })
    boardgameQuestion.choices.push(boardgameChoice1._id, boardgameChoice2._id, boardgameChoice3._id, boardgameChoice4._id)
    await boardgameQuestion.save()

    const cardgameQuestion = await Question.create({ name: "Favorite Cardgame?", choices: [] })
    const cardgameChoice1 = await Choice.create({ name: 'Poker', responses: 0 })
    const cardgameChoice2 = await Choice.create({ name: 'Uno', responses: 0 })
    const cardgameChoice3 = await Choice.create({ name: 'Cards Against Humanity', responses: 0 })
    const cardgameChoice4 = await Choice.create({ name: 'Magic/Pokemon/Yugiyoh', responses: 0 })
    cardgameQuestion.choices.push(cardgameChoice1._id, cardgameChoice2._id, cardgameChoice3._id, cardgameChoice4._id)
    await cardgameQuestion.save()

    const mythicQuestion = await Question.create({ name: "Which Mythical Creature Do You Wish Was Real?", choices: [] })
    const mythicChoice1 = await Choice.create({ name: 'Dragon', responses: 0 })
    const mythicChoice2 = await Choice.create({ name: 'Unicorn', responses: 0 })
    const mythicChoice3 = await Choice.create({ name: 'Kraken', responses: 0 })
    const mythicChoice4 = await Choice.create({ name: 'Griffen', responses: 0 })
    mythicQuestion.choices.push(mythicChoice1._id, mythicChoice2._id, mythicChoice3._id, mythicChoice4._id)
    await mythicQuestion.save()

    const fantasyQuestion = await Question.create({ name: "What Fantasy Humanoid do you wish was real?", choices: [] })
    const fantasyChoice1 = await Choice.create({ name: 'Dwarf', responses: 0 })
    const fantasyChoice2 = await Choice.create({ name: 'Elf', responses: 0 })
    const fantasyChoice3 = await Choice.create({ name: 'Fairy', responses: 0 })
    const fantasyChoice4 = await Choice.create({ name: 'Vampire', responses: 0 })
    fantasyQuestion.choices.push(fantasyChoice1._id, fantasyChoice2._id, fantasyChoice3._id, fantasyChoice4._id)
    await fantasyQuestion.save()
    
    const holidayQuestion = await Question.create({ name: "Best Holiday?", choices: [] })
    const holidayChoice1 = await Choice.create({ name: 'Christmas', responses: 0 })
    const holidayChoice2 = await Choice.create({ name: 'Thanksgiving', responses: 0 })
    const holidayChoice3 = await Choice.create({ name: 'Halloween', responses: 0 })
    const holidayChoice4 = await Choice.create({ name: 'Independence Day', responses: 0 })
    holidayQuestion.choices.push(holidayChoice1._id, holidayChoice2._id, holidayChoice3._id, holidayChoice4._id)
    await holidayQuestion.save()

    const pizzaQuestion = await Question.create({ name: "Best Pizza Topping?", choices: [] })
    const pizzaChoice1 = await Choice.create({ name: 'Pepperoni', responses: 0 })
    const pizzaChoice2 = await Choice.create({ name: 'Sausage', responses: 0 })
    const pizzaChoice3 = await Choice.create({ name: 'Cheese (plain)', responses: 0 })
    const pizzaChoice4 = await Choice.create({ name: 'Pineapple', responses: 0 })
    pizzaQuestion.choices.push(pizzaChoice1._id, pizzaChoice2._id, pizzaChoice3._id, pizzaChoice4._id)
    await pizzaQuestion.save()

    const weatherQuestion = await Question.create({ name: "Best Weather?", choices: [] })
    const weatherChoice1 = await Choice.create({ name: 'Snowy', responses: 0 })
    const weatherChoice2 = await Choice.create({ name: 'Rainy/Stormy', responses: 0 })
    const weatherChoice3 = await Choice.create({ name: 'Cloudy', responses: 0 })
    const weatherChoice4 = await Choice.create({ name: 'Sunny', responses: 0 })
    weatherQuestion.choices.push(weatherChoice1._id, weatherChoice2._id, weatherChoice3._id, weatherChoice4._id)
    await weatherQuestion.save()

    const languageQuestion = await Question.create({ name: "What Language Do You Wish You Knew?", choices: [] })
    const languageChoice1 = await Choice.create({ name: 'Spanish', responses: 0 })
    const languageChoice2 = await Choice.create({ name: 'French/Italian', responses: 0 })
    const languageChoice3 = await Choice.create({ name: 'Japanese', responses: 0 })
    const languageChoice4 = await Choice.create({ name: 'Hindi', responses: 0 })
    languageQuestion.choices.push(languageChoice1._id, languageChoice2._id, languageChoice3._id, languageChoice4._id)
    await languageQuestion.save()

    const dessertQuestion = await Question.create({ name: "Best Dessert?", choices: [] })
    const dessertChoice1 = await Choice.create({ name: 'Cake', responses: 0 })
    const dessertChoice2 = await Choice.create({ name: 'Pie', responses: 0 })
    const dessertChoice3 = await Choice.create({ name: 'Ice Cream', responses: 0 })
    const dessertChoice4 = await Choice.create({ name: 'Brownies/Cookies', responses: 0 })
    dessertQuestion.choices.push(dessertChoice1._id, dessertChoice2._id, dessertChoice3._id, dessertChoice4._id)
    await dessertQuestion.save()

    const superheroQuestion = await Question.create({ name: "Best Superhero?", choices: [] })
    const superheroChoice1 = await Choice.create({ name: 'Batman', responses: 0 })
    const superheroChoice2 = await Choice.create({ name: 'Superman', responses: 0 })
    const superheroChoice3 = await Choice.create({ name: 'Spiderman', responses: 0 })
    const superheroChoice4 = await Choice.create({ name: 'Ironman', responses: 0 })
    superheroQuestion.choices.push(superheroChoice1._id, superheroChoice2._id, superheroChoice3._id, superheroChoice4._id)
    await superheroQuestion.save()

    const bev2Question = await Question.create({ name: "Favorite Beverage?", choices: [] })
    const bev2Choice1 = await Choice.create({ name: 'Soda', responses: 0 })
    const bev2Choice2 = await Choice.create({ name: 'Tea', responses: 0 })
    const bev2Choice3 = await Choice.create({ name: 'Coffee', responses: 0 })
    const bev2Choice4 = await Choice.create({ name: 'Juice', responses: 0 })
    bev2Question.choices.push(bev2Choice1._id, bev2Choice2._id, bev2Choice3._id, bev2Choice4._id)
    await bev2Question.save()

    const pet2Question = await Question.create({ name: "What Is The Cutest Name For a Pet?", choices: [] })
    const pet2Choice1 = await Choice.create({ name: 'Fluffy', responses: 0 })
    const pet2Choice2 = await Choice.create({ name: 'Bella', responses: 0 })
    const pet2Choice3 = await Choice.create({ name: 'Oreo', responses: 0 })
    const pet2Choice4 = await Choice.create({ name: 'Demon-Emperor Megatron The Destroyer 5000', responses: 0 })
    pet2Question.choices.push(pet2Choice1._id, pet2Choice2._id, pet2Choice3._id, pet2Choice4._id)
    await pet2Question.save()

    const potatoQuestion = await Question.create({ name: "Best Form Of Potato?", choices: [] })
    const potatoChoice1 = await Choice.create({ name: 'Fries', responses: 0 })
    const potatoChoice2 = await Choice.create({ name: 'Mashed Potatoes', responses: 0 })
    const potatoChoice3 = await Choice.create({ name: 'Baked Potato', responses: 0 })
    const potatoChoice4 = await Choice.create({ name: 'Hash Browns', responses: 0 })
    potatoQuestion.choices.push(potatoChoice1._id, potatoChoice2._id, potatoChoice3._id, potatoChoice4._id)
    await potatoQuestion.save()

    const breakfastQuestion = await Question.create({ name: "Best Breakfast?", choices: [] })
    const breakfastChoice1 = await Choice.create({ name: 'Pancakes/Waffles', responses: 0 })
    const breakfastChoice2 = await Choice.create({ name: 'Eggs & Bacon', responses: 0 })
    const breakfastChoice3 = await Choice.create({ name: 'Cereal', responses: 0 })
    const breakfastChoice4 = await Choice.create({ name: 'Toast', responses: 0 })
    breakfastQuestion.choices.push(breakfastChoice1._id, breakfastChoice2._id, breakfastChoice3._id, breakfastChoice4._id)
    await breakfastQuestion.save()

    const detectiveQuestion = await Question.create({ name: "Best Fictional Detective?", choices: [] })
    const detectiveChoice1 = await Choice.create({ name: 'The Batman', responses: 0 })
    const detectiveChoice2 = await Choice.create({ name: 'Sherlock Holmes', responses: 0 })
    const detectiveChoice3 = await Choice.create({ name: 'Nancy Drew', responses: 0 })
    const detectiveChoice4 = await Choice.create({ name: 'Colombo', responses: 0 })
    detectiveQuestion.choices.push(detectiveChoice1._id, detectiveChoice2._id, detectiveChoice3._id, detectiveChoice4._id)
    await detectiveQuestion.save()

    const pieQuestion = await Question.create({ name: "Best Pie?", choices: [] })
    const pieChoice1 = await Choice.create({ name: 'Pumpkin Pie', responses: 0 })
    const pieChoice2 = await Choice.create({ name: 'Lemon Meringue', responses: 0 })
    const pieChoice3 = await Choice.create({ name: 'Cherry Pie', responses: 0 })
    const pieChoice4 = await Choice.create({ name: 'Apple Pie', responses: 0 })
    pieQuestion.choices.push(pieChoice1._id, pieChoice2._id, pieChoice3._id, pieChoice4._id)
    await pieQuestion.save()

    const gameshowQuestion = await Question.create({ name: "What Game Show Would You Win?", choices: [] })
    const gameshowChoice1 = await Choice.create({ name: 'Jeopardy!', responses: 0 })
    const gameshowChoice2 = await Choice.create({ name: 'Wheel Of Fortune', responses: 0 })
    const gameshowChoice3 = await Choice.create({ name: 'Family Feud', responses: 0 })
    const gameshowChoice4 = await Choice.create({ name: 'Mr. Beast', responses: 0 })
    gameshowQuestion.choices.push(gameshowChoice1._id, gameshowChoice2._id, gameshowChoice3._id, gameshowChoice4._id)
    await gameshowQuestion.save()

    const realitytvQuestion = await Question.create({ name: "Best Reality Tv?", choices: [] })
    const realitytvChoice1 = await Choice.create({ name: 'Shark Tank', responses: 0 })
    const realitytvChoice2 = await Choice.create({ name: 'The Bachelor(ette)', responses: 0 })
    const realitytvChoice3 = await Choice.create({ name: 'Americas got talent/American Idol', responses: 0 })
    const realitytvChoice4 = await Choice.create({ name: 'Real Housewives', responses: 0 })
    realitytvQuestion.choices.push(realitytvChoice1._id, realitytvChoice2._id, realitytvChoice3._id, realitytvChoice4._id)
    await realitytvQuestion.save()

    const food2Question = await Question.create({ name: "What Food Could You Live without?", choices: [] })
    const food2Choice1 = await Choice.create({ name: 'No Meat', responses: 0 })
    const food2Choice2 = await Choice.create({ name: 'No Carbs', responses: 0 })
    const food2Choice3 = await Choice.create({ name: 'No Dairy', responses: 0 })
    const food2Choice4 = await Choice.create({ name: 'No Fruit', responses: 0 })
    food2Question.choices.push(food2Choice1._id, food2Choice2._id, food2Choice3._id, food2Choice4._id)
    await food2Question.save()

    const techQuestion = await Question.create({ name: "Which Utility Could You Live Without?", choices: [] })
    const techChoice1 = await Choice.create({ name: 'No Car', responses: 0 })
    const techChoice2 = await Choice.create({ name: 'No Phone', responses: 0 })
    const techChoice3 = await Choice.create({ name: 'No Heating', responses: 0 })
    const techChoice4 = await Choice.create({ name: 'No A/C', responses: 0 })
    techQuestion.choices.push(techChoice1._id, techChoice2._id, techChoice3._id, techChoice4._id)
    await techQuestion.save()

    const color2Question = await Question.create({ name: "Worst Color?", choices: [] })
    const color2Choice1 = await Choice.create({ name: 'Neon Anything', responses: 0 })
    const color2Choice2 = await Choice.create({ name: 'Purple', responses: 0 })
    const color2Choice3 = await Choice.create({ name: 'Yellow', responses: 0 })
    const color2Choice4 = await Choice.create({ name: 'Brown', responses: 0 })
    color2Question.choices.push(color2Choice1._id, color2Choice2._id, color2Choice3._id, color2Choice4._id)
    await color2Question.save()

    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
