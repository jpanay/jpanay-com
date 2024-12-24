/*
name
ingredients
method
garnish
strength (Auto-calculated)
sweetness (Auto-calculated)
Idea: Sliders to adjust strength and sweetness
*/

const cocktails = [
  {
    name: "Alexander",
    ingredients: [
      {
        name: "Cognac",
        amount: 1.0,
        metric: "oz",
      },
      {
        name: "Creme de Cacao",
        amount: 1.0,
        metric: "oz",
      },
      {
        name: "Fresh Cream",
        amount: 1.0,
        metric: "oz",
      },
    ],
    method: ["Shaken"],
    garnish: ["Ground nutmeg"],
  },
  {
    name: "Amaretto Sour",
    ingredients: [
      {
        name: "Amaretto",
        amount: 1.5,
        metric: "oz",
      },
      {
        name: "Bourbon",
        amount: 0.5,
        metric: "oz",
      },
      {
        name: "Lemon Juice",
        amount: 1.0,
        metric: "oz",
      },
      {
        name: "Simple Syrup",
        amount: 0.5,
        metric: "oz",
      },
      {
        name: "Egg White",
        amount: 1.0,
        metric: "",
      },
    ],
    method: ["Shaken (Dry then ice)"],
    garnish: ["Dark cherry", "Lemon peel"],
    tags: ["popular"],
  },
  {
    name: "Americano",
    ingredients: [
      {
        name: "Campari",
        amount: 1.0,
        metric: "oz",
      },
      {
        name: "Sweet Vermouth",
        amount: 1.0,
        metric: "oz",
      },
      {
        name: "Water",
        amount: "Soda",
      },
    ],
    method: ["Stirred (in glass)", "Top Soda Water"],
    garnish: ["Orange slice", "Lemon peel"],
  },
  {
    name: "Aperol Spritz",
    ingredients: [
      {
        name: "Aperol",
        amount: 2.0,
        metric: "oz",
      },
      {
        name: "Prosecco",
        amount: 3.0,
        metric: "oz",
      },
      {
        name: "Soda Water",
        amount: "Splash",
      },
    ],
    method: ["Stir in glass"],
    garnish: ["Orange slice"],
  },
  {
    name: "Aviation",
    ingredients: [
      {
        name: "Gin",
        amount: 1.5,
        metric: "oz",
      },
      {
        name: "Maraschino Luxardo",
        amount: 0.5,
        metric: "oz",
      },
      {
        name: "Lemon Juice",
        amount: 0.5,
        metric: "oz",
      },
      {
        name: "Creme de Violette",
        amount: 0.25,
        metric: "oz",
      },
    ],
    method: ["Shaken"],
    garnish: ["Maraschino cherry", "Lemon peel"],
  },
  {
    name: "Baby Guiness",
    ingredients: [
      {
        name: "Kahlua",
        amount: 1.0,
        metric: "oz",
      },
      {
        name: "Baileys",
        amount: 0.5,
        metric: "oz",
      },
    ],
    method: ["Pour Kahlua", "Float Baileys"],
    garnish: [],
    tags: ["break"],
  },
  {
    name: "Scooby Snacks",
    ingredients: [
      {
        name: "Pending...",
        amount: null,
        metric: "",
      },
    ],
    method: [],
    garnish: [],
    tags: ["break"],
  },
  {
    name: "Cinnamon Toast Crunch",
    ingredients: [
      {
        name: "Rumchata",
        amount: 0.75,
        metric: "oz",
      },
      {
        name: "Fireball",
        amount: 0.75,
        metric: "oz",
      },
    ],
    method: ["Pour Rumchata", "Pour Fireball"],
    garnish: [],
    tags: ["break"],
  },
  {
    name: "Bay Breeze",
    ingredients: [
      {
        name: "Vodka",
        amount: 2.0,
        metric: "oz",
      },
      {
        name: "Pineapple Juice",
        amount: 4.0,
        metric: "oz",
      },
      {
        name: "Cranberry Juice",
        amount: 1.5,
        metric: "oz",
      },
    ],
    method: ["Shaken"],
    garnish: ["Pineapple wedge", "Lime wedge"],
    tags: ["popular"],
  },
  {
    name: "Bloody Mary",
    ingredients: [
      {
        name: "Vodka",
        amount: 1.5,
        metric: "oz",
      },
      {
        name: "Tomato Juice",
        amount: 3.0,
        metric: "oz",
      },
      {
        name: "Lemon Juice",
        amount: 0.5,
        metric: "oz",
      },
      {
        name: "dashes Worcestershire Sauce",
        amount: 2.0,
        metric: "",
      },
    ],
    method: ["Stirred"],
    garnish: ["Salt rim", "Celery", "Olives", "Lemon wedge"],
  },
  {
    name: "Caipirinha",
    ingredients: [
      {
        name: "Rum (Cachaca)",
        amount: 2.0,
        metric: "oz",
      },
      {
        name: "Lime cut into wedges",
        amount: 1.0,
        metric: "",
      },
      {
        name: "Tbsp Sugar",
        amount: 1.0,
        metric: "",
      },
    ],
    method: ["Muddle (Lime, sugar)", "Stirred"],
    garnish: [],
  },
  {
    name: "Champagne Cocktail",
    ingredients: [
      {
        name: "Chilled Champagne",
        amount: 2.0,
        metric: "oz",
      },
      {
        name: "Cognac (Brandy)",
        amount: 0.5,
        metric: "oz",
      },
      {
        name: "dashes Angostura Bitters",
        amount: 2.0,
        metric: "",
      },
      {
        name: "sugar cube",
        amount: 1.0,
        metric: "",
      },
    ],
    method: ["Poured (Sugar cube, bitters, cognac, champagne)"],
    garnish: ["Orange peel", "Marachino cherry"],
  },
  {
    name: "Cosmopolitan",
    ingredients: [
      {
        name: "Vodka Citron",
        amount: 1.5,
        metric: "oz",
      },
      {
        name: "Orange Liqueur (Cointreau/Triple Sec)",
        amount: 0.5,
        metric: "oz",
      },
      {
        name: "Fresh Lime Juice",
        amount: 0.5,
        metric: "oz",
      },
      {
        name: "Cranberry Juice",
        amount: 1.0,
        metric: "oz",
      },
      {
        name: "Simple Syrup",
        amount: 0.25,
        metric: "oz",
      },
    ],
    method: ["Shaken"],
    garnish: ["Lemon twist"],
  },
  {
    name: "Cuba Libre",
    ingredients: [
      {
        name: "White Rum",
        amount: 2.0,
        metric: "oz",
      },
      {
        name: "Cola",
        amount: 4.0,
        metric: "oz",
      },
      {
        name: "Lime Juice",
        amount: 0.5,
        metric: "oz",
      },
    ],
    method: ["Poured"],
    garnish: ["Lime wedge"],
    tags: ["popular"],
  },
  {
    name: "Daiquiri",
    ingredients: [
      {
        name: "Rum (White Cuban Ron)",
        amount: 2.0,
        metric: "oz",
      },
      {
        name: "Lime Juice",
        amount: 1.0,
        metric: "oz",
      },
      {
        name: "Simple Syrup/2 Bar Spoons Superfine Sugar",
        amount: 0.5,
        metric: "oz",
      },
    ],
    method: ["Shaken"],
    garnish: [],
  },
  {
    name: "Dark 'N' Stormy",
    ingredients: [
      {
        name: "Dark Rum (Goslings)",
        amount: 2.0,
        metric: "oz",
      },
      {
        name: "Ginger Beer",
        amount: 3.0,
        metric: "oz",
      },
      {
        name: "Lime Juice",
        amount: 0.5,
        metric: "oz",
      },
    ],
    method: ["Poured (Ginger beer, rum)"],
    garnish: ["Lime wedge"],
    tags: ["popular"],
  },
  {
    name: "Espresso Martini",
    ingredients: [
      {
        name: "Vodka",
        amount: 1.5,
        metric: "oz",
      },
      {
        name: "Kahlua",
        amount: 1.0,
        metric: "oz",
      },
      {
        name: "Simple Syrup",
        amount: 0.5,
        metric: "oz",
      },
      {
        name: "Shot Espresso",
        amount: 1.0,
        metric: "",
      },
    ],
    method: ["Shaken"],
    garnish: ["Coffee Beans"],
    tags: ["popular"],
  },
  {
    name: "French Martini",
    ingredients: [
      {
        name: "Vodka",
        amount: 1.5,
        metric: "oz",
      },
      {
        name: "Raspberry Liqueur",
        amount: 0.5,
        metric: "oz",
      },
      {
        name: "Pineapple Juice",
        amount: 0.5,
        metric: "oz",
      },
    ],
    method: ["Shaken"],
    garnish: ["Lemon peel"],
    tags: ["popular"],
  },
  {
    name: "Ghost Of My Ex",
    ingredients: [
      {
        name: "Coconut Rum",
        amount: 0.5,
        metric: "oz",
      },
      {
        name: "Vanilla Vodka",
        amount: 0.5,
        metric: "oz",
      },
      {
        name: "Coco Cream",
        amount: 0.5,
        metric: "oz",
      },
    ],
    method: ["Shaken"],
    garnish: [],
    tags: ["oldbreak"],
  },
  {
    name: "Grand Margarita",
    ingredients: [
      {
        name: "Tequila 100% agave",
        amount: 1.5,
        metric: "oz",
      },
      {
        name: "Grand Marnier",
        amount: 1.0,
        metric: "oz",
      },
      {
        name: "Lime Juice",
        amount: 0.5,
        metric: "oz",
      },
    ],
    method: ["Shaken"],
    garnish: ["Salt rim", "Lime slice"],
    tags: ["popular"],
  },
  {
    name: "Green Tea",
    ingredients: [
      {
        name: "Irish Whiskey",
        amount: 1.0,
        metric: "oz",
      },
      {
        name: "Peach Schnapps",
        amount: 1.0,
        metric: "oz",
      },
      {
        name: "Sour Mix",
        amount: 1.0,
        metric: "oz",
      },
      {
        name: "Lemon-Lime Soda",
        amount: "Splash",
      },
    ],
    method: ["Shaken"],
    garnish: [],
    tags: ["popular"],
  },
  {
    name: "Hulu and 69",
    ingredients: [
      {
        name: "Sour Apple",
        amount: 0.75,
        metric: "oz",
      },
      {
        name: "Lime",
        amount: 0.25,
        metric: "oz",
      },
      {
        name: "Triple Sec",
        amount: 0.5,
        metric: "oz",
      },
    ],
    method: ["Shaken"],
    garnish: [],
    tags: ["oldbreak"],
  },
  {
    name: "Hurricane",
    ingredients: [
      {
        name: "Light Rum",
        amount: 2.0,
        metric: "oz",
      },
      {
        name: "Dark Spiced Rum",
        amount: 2.0,
        metric: "oz",
      },
      {
        name: "Lemon Juice",
        amount: 2.0,
        metric: "oz",
      },
      {
        name: "Passionfruit Syrup",
        amount: 2.0,
        metric: "oz",
      },
    ],
    method: ["Shaken"],
    garnish: ["Orange slice", "Cherry"],
    tags: ["popular"],
  },
  {
    name: "Irish Coffee",
    ingredients: [
      {
        name: "Irish Whiskey",
        amount: 2.0,
        metric: "oz",
      },
      {
        name: "Hot coffee",
        amount: 4.0,
        metric: "oz",
      },
      {
        name: "Fresh Cream",
        amount: 2.0,
        metric: "oz",
      },
      {
        name: "Sugar Cubes/1 Tsp Sugar",
        amount: 2.0,
        metric: "",
      },
    ],
    method: ["Poured (Black coffee, whiskey, sugar, cream)"],
    garnish: [],
  },
  {
    name: "Lemon Drop Martini",
    ingredients: [
      {
        name: "Vodka",
        amount: 2.0,
        metric: "oz",
      },
      {
        name: "Triple Sec",
        amount: 0.75,
        metric: "oz",
      },
      {
        name: "Lemon Juice",
        amount: 0.75,
        metric: "oz",
      },
    ],
    method: ["Shaken"],
    garnish: [],
    tags: ["popular"],
  },
  {
    name: "Lick My Rim",
    ingredients: [
      {
        name: "Sparkling Apple Cider",
        amount: "",
      },
      {
        name: "Rum",
        amount: "",
      },
    ],
    method: ["Poured (Mimosa pours)"],
    garnish: ["Cinnamon sugar rim"],
    tags: ["oldbreak"],
  },
  {
    name: "Long Island Iced Tea",
    ingredients: [
      {
        name: "Vodka",
        amount: 0.5,
        metric: "oz",
      },
      {
        name: "Tequila",
        amount: 0.5,
        metric: "oz",
      },
      {
        name: "White Rum",
        amount: 0.5,
        metric: "oz",
      },
      {
        name: "Gin",
        amount: 0.5,
        metric: "oz",
      },
      {
        name: "Orange Liqeuer (Cointreau)",
        amount: 0.5,
        metric: "oz",
      },
      {
        name: "Lemon Juice",
        amount: 1.0,
        metric: "oz",
      },
      {
        name: "Simple Syrup",
        amount: 1.0,
        metric: "oz",
      },
      {
        name: "Cola",
        amount: "Mexican",
      },
    ],
    method: ["Shaken", "Top Cola"],
    garnish: ["Lemon slice", "Cherry"],
    tags: ["popular"],
  },
  {
    name: "Mai-Tai",
    ingredients: [
      {
        name: "Rum (1 oz Amber Jamaican/1 oz Martinique Molasses)",
        amount: 2.0,
        metric: "oz",
      },
      {
        name: "Orange Liqueur (Orange Curacao)",
        amount: 0.5,
        metric: "oz",
      },
      {
        name: "Orgeat Syrup (Almond)",
        amount: 0.5,
        metric: "oz",
      },
      {
        name: "Lime Juice",
        amount: 1.0,
        metric: "oz",
      },
      {
        name: "Simple Syrup",
        amount: 0.25,
        metric: "oz",
      },
    ],
    method: ["Shaken"],
    garnish: ["Pinapple spear", "Mint", "Lime peel"],
  },
  {
    name: "Manhattan",
    ingredients: [
      {
        name: "Rye Whiskey",
        amount: 2.0,
        metric: "oz",
      },
      {
        name: "Sweet Vermouth",
        amount: 1.0,
        metric: "oz",
      },
      {
        name: "dash Angostura Bitters",
        amount: 1.0,
        metric: "",
      },
    ],
    method: ["Stirred"],
    garnish: ["Cherry"],
  },
  {
    name: "Margarita",
    ingredients: [
      {
        name: "Tequila",
        amount: 1.5,
        metric: "oz",
      },
      {
        name: "Triple Sec",
        amount: 0.5,
        metric: "oz",
      },
      {
        name: "Lime Juice",
        amount: 0.5,
        metric: "oz",
      },
      {
        name: "Simple Syrup",
        amount: 0.25,
        metric: "oz",
      },
    ],
    method: ["Shaken"],
    garnish: ["Salt rim"],
    tags: ["popular"],
  },
  {
    name: "Martini",
    ingredients: [
      {
        name: "Gin",
        amount: 2.0,
        metric: "oz",
      },
      {
        name: "Dry Vermouth",
        amount: 0.5,
        metric: "oz",
      },
      {
        name: "Olive Juice (Dirty)",
        amount: 0.5,
        metric: "oz",
      },
    ],
    method: ["Stirred"],
    garnish: ["Lemon peel", "Olives"],
    tags: ["popular"],
  },
  {
    name: "Mimosa",
    ingredients: [
      {
        name: "Orange Juice",
        amount: 3.0,
        metric: "oz",
      },
      {
        name: "Prosecco/Champagne",
        amount: 3.0,
        metric: "oz",
      },
    ],
    method: ["Poured (Orange juice, sparkling wine)"],
    garnish: ["Orange twist"],
  },
  {
    name: "Mint Julep",
    ingredients: [
      {
        name: "Whiskey (Bourbon)",
        amount: 2.0,
        metric: "oz",
      },
      {
        name: "Mint sprigs",
        amount: 4.0,
        metric: "",
      },
      {
        name: "Simple Syrup/1 tsp Powdered Sugar",
        amount: 0.25,
        metric: "oz",
      },
      {
        name: "tsp Water",
        amount: 2.0,
        metric: "",
      },
    ],
    method: ["Muddled", "Poured", "Stirred (in glass)"],
    garnish: ["Mint sprig"],
    tags: ["popular"],
  },
  {
    name: "Mojito",
    ingredients: [
      {
        name: "White Rum (White Cuban Ron)",
        amount: 1.5,
        metric: "oz",
      },
      {
        name: "Lime Juice",
        amount: 0.75,
        metric: "oz",
      },
      {
        name: "Mint Sprigs",
        amount: 6.0,
        metric: "",
      },
      {
        name: "tsp White Cane Sugar",
        amount: 2.0,
        metric: "",
      },
      {
        name: "Water",
        amount: "Soda",
      },
    ],
    method: ["Muddle (Lime, mint, rum)", "Poured", "Top Soda Water"],
    garnish: ["Mint sprig", "Lime slice"],
    tags: ["popular"],
  },
  {
    name: "Moscow Mule",
    ingredients: [
      {
        name: "Vodka (Smirnoff)",
        amount: 1.5,
        metric: "oz",
      },
      {
        name: "Lime juice",
        amount: 0.5,
        metric: "oz",
      },
      {
        name: "Ginger Beer",
        amount: 4.0,
        metric: "oz",
      },
    ],
    method: ["Shaken"],
    garnish: ["Lime slice"],
    tags: ["popular"],
  },
  {
    name: "The Intern",
    // My Slam Piece
    ingredients: [
      {
        name: "Gin",
        amount: 1.5,
        metric: "oz",
      },
      {
        name: "Aperol",
        amount: 0.75,
        metric: "oz",
      },
      {
        name: "Lemon Juice",
        amount: 1.0,
        metric: "oz",
      },
      {
        name: "Pineapple Juice",
        amount: 1.0,
        metric: "oz",
      },
      {
        name: "Simple Syrup",
        amount: 0.5,
        metric: "oz",
      },
    ],
    method: [
      "Shaken",
      "Top Prosecco",
      "1 Dash Bitters",
      "1 Dash Orange Bitters",
    ],
    garnish: ["Orange slice"],
    tags: ["break"],
  },
  {
    name: "Netflix and Chill",
    ingredients: [
      {
        name: "Vodka",
        amount: 0.75,
        metric: "oz",
      },
      {
        name: "Blue Caracao",
        amount: 0.75,
        metric: "oz",
      },
    ],
    method: ["Shaken"],
    garnish: [],
    tags: ["break"],
  },
  {
    name: "Old Fashioned",
    ingredients: [
      {
        name: "Whiskey (Rye/Bourbon)",
        amount: 1.5,
        metric: "oz",
      },
      {
        name: "Sugar Cube",
        amount: 1.0,
        metric: "",
      },
      {
        name: "Dashes Angostura Bitters",
        amount: 2.0,
        metric: "",
      },
      {
        name: "Dashes Plain Water",
        amount: 2.0,
        metric: "",
      },
    ],
    method: ["Muddle", "Stirred (in glass)"],
    garnish: ["Orange slice", "Cherry"],
    tags: ["popular"],
  },
  {
    name: "Paloma",
    ingredients: [
      {
        name: "Tequila (Agave)",
        amount: 1.5,
        metric: "oz",
      },
      {
        name: "Lime Juice",
        amount: 0.5,
        metric: "oz",
      },
      {
        name: "Simple Syrup",
        amount: 0.5,
        metric: "oz",
      },
      {
        name: "Pink Grapefruit Soda",
        amount: 3.0,
        metric: "oz",
      },
      {
        name: "Salt",
        amount: "Pinch",
      },
    ],
    method: ["Stirred (in glass)", "Top Soda Water"],
    garnish: ["Lime slice"],
  },
  {
    name: "Pina Colada",
    ingredients: [
      {
        name: "White Rum",
        amount: 1.5,
        metric: "oz",
      },
      {
        name: "Coconut Cream",
        amount: 1.0,
        metric: "oz",
      },
      {
        name: "Fresh Pineapple Juice",
        amount: 1.5,
        metric: "oz",
      },
    ],
    method: ["Blended"],
    garnish: ["Pinapple slice", "Cherry"],
  },
  {
    name: "Porn Star Martini",
    ingredients: [
      {
        name: "Vanilla Vodka",
        amount: 1.75,
        metric: "",
      },
      {
        name: "Passion Fruit Liqueur",
        amount: 0.75,
        metric: "",
      },
      {
        name: "Passion Fruit Puree",
        amount: 1.75,
        metric: "oz",
      },
      {
        name: "Bar Spoons Vanilla Sugar",
        amount: 2.0,
        metric: "",
      },
      {
        name: "Champagne to serve on the side",
        amount: 1.75,
        metric: "oz",
      },
    ],
    method: ["Shaken"],
    garnish: ["Shot of champagne", "Passion fruit cup", "Sugar"],
    tags: ["popular"],
  },
  {
    name: "Cowgirl",
    // Reverse Cowgirl
    ingredients: [
      {
        name: "Bacardi Coconut",
        amount: 1.5,
        metric: "oz",
      },
      {
        name: "Triple Sec",
        amount: 0.5,
        metric: "oz",
      },
      {
        name: "Cranberry Juice",
        amount: 1.5,
        metric: "oz",
      },
      {
        name: "Pineapple Juice",
        amount: 0.5,
        metric: "oz",
      },
      {
        name: "Coconut Cream",
        amount: 0.5,
        metric: "oz",
      },
    ],
    method: ["Shaken"],
    garnish: ["Cherry", "Lemon"],
    tags: ["break"],
  },
  {
    name: "Sea Breeze",
    ingredients: [
      {
        name: "Vodka",
        amount: 1.5,
        metric: "oz",
      },
      {
        name: "Cranberry Juice",
        amount: 4.0,
        metric: "oz",
      },
      {
        name: "Grapefruit Juice",
        amount: 1.0,
        metric: "oz",
      },
    ],
    method: ["Stirred (in glass)"],
    garnish: ["Orange zest", "Cherry"],
    tags: ["popular"],
  },
  {
    name: "Foggy Window",
    // Sex In The Backseat
    ingredients: [
      {
        name: "Vodka",
        amount: 1.5,
        metric: "oz",
      },
      {
        name: "Lime Juice",
        amount: 0.75,
        metric: "oz",
      },
      {
        name: "Strawberry Syrup",
        amount: 0.25,
        metric: "oz",
      },
      {
        name: "Pineapple Juice",
        amount: 0.75,
        metric: "oz",
      },
      {
        name: "Elderflower sTonic",
        amount: "",
      },
    ],
    method: ["Shaken", "Top Elderflower Tonic"],
    garnish: ["Rosemary sprig"],
    tags: ["break"],
  },
  {
    name: "Sex On The Beach",
    ingredients: [
      {
        name: "Vodka",
        amount: 1.5,
        metric: "oz",
      },
      {
        name: "Peach Schnapps",
        amount: 0.5,
        metric: "oz",
      },
      {
        name: "Orange Juice",
        amount: 1.5,
        metric: "oz",
      },
      {
        name: "Cranberry Juice",
        amount: 1.5,
        metric: "oz",
      },
    ],
    method: ["Poured"],
    garnish: ["Orange slice"],
  },
  {
    name: "Sidecar",
    ingredients: [
      {
        name: "Cognac",
        amount: 1.75,
        metric: "oz",
      },
      {
        name: "Orange Liqueur (Triple Sec)",
        amount: 0.75,
        metric: "oz",
      },
      {
        name: "Lemon Juice",
        amount: 0.75,
        metric: "oz",
      },
    ],
    method: ["Shaken"],
    garnish: [],
    tags: ["popular"],
  },
  {
    name: "Scarlet Letter",
    // Smells Like Slut In Here
    ingredients: [
      {
        name: "Tequila",
        amount: 1.5,
        metric: "oz",
      },
      {
        name: "Passionfruit Syrup",
        amount: 1.0,
        metric: "oz",
      },
      {
        name: "Pomegranite Syrup",
        amount: 0.75,
        metric: "oz",
      },
      {
        name: "Lime Juice",
        amount: 1.0,
        metric: "oz",
      },
      {
        name: "Soda Water",
        amount: "",
      },
    ],
    method: ["Shaken", "Top Soda Water"],
    garnish: ["Mint leaf"],
    tags: ["break"],
  },
  {
    name: "Tequila Sunrise",
    ingredients: [
      {
        name: "Tequila",
        amount: 1.5,
        metric: "oz",
      },
      {
        name: "Orange Juice",
        amount: 3.0,
        metric: "oz",
      },
      {
        name: "Grenadine Syrup",
        amount: 1.5,
        metric: "oz",
      },
    ],
    method: ["Shaken (Tequila, orange juice)", "Poured"],
    garnish: ["Orange slice"],
    tags: ["popular"],
  },
  {
    name: "The Safe Word",
    ingredients: [
      {
        name: "Absolut Wild Berry Vodka",
        amount: 1.5,
        metric: "oz",
      },
      {
        name: "Lemon Juice",
        amount: 1.0,
        metric: "oz",
      },
      {
        name: "St. Germaine",
        amount: 1.0,
        metric: "oz",
      },
      {
        name: "Simple Syrup",
        amount: 0.5,
        metric: "oz",
      },
    ],
    method: ["Shaken"],
    garnish: ["Mint leaf"],
    tags: ["break"],
  },
  {
    name: "Tom Collins",
    ingredients: [
      {
        name: "Gin (Dry)",
        amount: 2.0,
        metric: "oz",
      },
      {
        name: "Lemon Juice",
        amount: 0.75,
        metric: "oz",
      },
      {
        name: "Simple Syrup",
        amount: 0.75,
        metric: "oz",
      },
      {
        name: "Water",
        amount: "Soda",
      },
    ],
    method: ["Shaken", "Top Soda Water"],
    garnish: ["Lemon peel", "Cherry"],
  },
  {
    name: "Whiskey Richard",
    // Whiskey Dick
    ingredients: [
      {
        name: "Whiskey",
        amount: 1.5,
        metric: "oz",
      },
      {
        name: "Dashes Angostura Bitters",
        amount: 3.0,
        metric: "",
      },
      {
        name: "Pomegranite Syrup",
        amount: 0.5,
        metric: "oz",
      },
      {
        name: "Lime Juice",
        amount: 0.25,
        metric: "oz",
      },
      {
        name: "Cranberry Juice",
        amount: 1.0,
        metric: "oz",
      },
    ],
    method: ["Shaken"],
    garnish: ["Lime"],
    tags: ["break"],
  },
  {
    name: "Whiskey Sour",
    ingredients: [
      {
        name: "Bourbon Whiskey",
        amount: 1.5,
        metric: "oz",
      },
      {
        name: "Lemon Juice",
        amount: 1.0,
        metric: "oz",
      },
      {
        name: "Simple Syrup",
        amount: 0.75,
        metric: "oz",
      },
      {
        name: "Foam",
        amount: "Fee",
      },
    ],
    method: ["Shaken"],
    garnish: ["Orange slice", "Maraschino cherry"],
    tags: ["popular"],
  },
  {
    name: "White Russian",
    ingredients: [
      {
        name: "Vodka",
        amount: 2.0,
        metric: "oz",
      },
      {
        name: "Kahlua",
        amount: 1.0,
        metric: "oz",
      },
      {
        name: "Cream",
        amount: "Heavy",
      },
    ],
    method: ["Stirred", "Top Heavy Cream"],
    garnish: [],
    tags: ["popular"],
  },
  {
    name: "AMF (Adios, Motherfucker)",
    ingredients: [
      {
        name: "Vodka",
        amount: 0.5,
        metric: "oz",
      },
      {
        name: "Gin",
        amount: 0.5,
        metric: "oz",
      },
      {
        name: "Rum",
        amount: 0.5,
        metric: "oz",
      },
      {
        name: "Tequila",
        amount: 0.5,
        metric: "oz",
      },
      {
        name: "Curacao",
        amount: 0.5,
        metric: "oz",
      },
      {
        name: "Simple Syrup",
        amount: 0.5,
        metric: "oz",
      },
      {
        name: "Lemon Juice",
        amount: 0.75,
        metric: "oz",
      },
      {
        name: "Soda",
        amount: "Lemon",
      },
    ],
    method: ["Shaken", "Top Lemon Soda"],
    garnish: ["Lemon wedge", "Cherry"],
  },
  {
    name: "Angel Face",
    ingredients: [
      {
        name: "Gin",
        amount: 1.0,
        metric: "oz",
      },
      {
        name: "Apricot Brandy",
        amount: 1.0,
        metric: "oz",
      },
      {
        name: "Calvados",
        amount: 1.0,
        metric: "oz",
      },
    ],
    method: ["Shaken"],
    garnish: [],
  },
  {
    name: "Appletini",
    ingredients: [
      {
        name: "Vodka",
        amount: 1.5,
        metric: "oz",
      },
      {
        name: "Green Apple Schnapps",
        amount: 0.75,
        metric: "oz",
      },
      {
        name: "Lime Juice",
        amount: 0.5,
        metric: "oz",
      },
      {
        name: "Orange Liqueur",
        amount: 0.25,
        metric: "oz",
      },
    ],
    method: ["Shaken"],
    garnish: ["Apple Slice", "Cherry"],
  },
  {
    name: "Bee's Knees",
    ingredients: [
      {
        name: "Dry Gin",
        amount: 2.0,
        metric: "oz",
      },
      {
        name: "Honey Syrup",
        amount: 0.75,
        metric: "",
      },
      {
        name: "Lemon Juice",
        amount: 0.75,
        metric: "oz",
      },
      {
        name: "Orange Juice",
        amount: 0.75,
        metric: "",
      },
    ],
    method: ["Shaken"],
    garnish: ["Lemon peel", "Orange peel"],
  },
  {
    name: "Bellini",
    ingredients: [
      {
        name: "Prosecco",
        amount: 3.0,
        metric: "oz",
      },
      {
        name: "White Peach Puree",
        amount: 1.5,
        metric: "oz",
      },
    ],
    method: ["Stirred"],
    garnish: [],
  },
  {
    name: "Between The Sheets",
    ingredients: [
      {
        name: "White Rum",
        amount: 1.0,
        metric: "oz",
      },
      {
        name: "Cognac",
        amount: 1.0,
        metric: "oz",
      },
      {
        name: "Triple Sec",
        amount: 1.0,
        metric: "oz",
      },
      {
        name: "Lemon Juice",
        amount: 0.75,
        metric: "oz",
      },
    ],
    method: ["Shaken"],
    garnish: [],
  },
  {
    name: "Black Russian",
    ingredients: [
      {
        name: "Vodka",
        amount: 2.0,
        metric: "oz",
      },
      {
        name: "Kahlua/Coffee Liqueur",
        amount: 1.0,
        metric: "oz",
      },
    ],
    method: ["Stirred (in glass)"],
    garnish: [],
  },
  {
    name: "Blood and Sand",
    ingredients: [
      {
        name: "Blended Scotch",
        amount: 0.75,
        metric: "oz",
      },
      {
        name: "Sweet Vermouth",
        amount: 0.75,
        metric: "oz",
      },
      {
        name: "Cherry Heering",
        amount: 0.75,
        metric: "oz",
      },
      {
        name: "Orange Juice",
        amount: 0.75,
        metric: "oz",
      },
    ],
    method: ["Shaken"],
    garnish: ["Orange peel", "Cherry"],
  },
  {
    name: "Boulevardier",
    ingredients: [
      {
        name: "Whiskey",
        amount: 1.5,
        metric: "oz",
      },
      {
        name: "Campari",
        amount: 1.0,
        metric: "oz",
      },
      {
        name: "Sweet Vermouth",
        amount: 1.0,
        metric: "oz",
      },
    ],
    method: ["Stirred"],
    garnish: ["Orange peel"],
  },
  {
    name: "Bramble",
    ingredients: [
      {
        name: "Gin",
        amount: 2.0,
        metric: "oz",
      },
      {
        name: "Lemon Juice",
        amount: 0.75,
        metric: "oz",
      },
      {
        name: "Sugar Syrup",
        amount: 0.5,
        metric: "oz",
      },
      {
        name: "Creme de Mure",
        amount: 0.5,
        metric: "oz",
      },
    ],
    method: ["Shaken", "Top Creme de Mure"],
    garnish: ["Lemon slice", "Blackberries"],
  },
  {
    name: "Brandy Alexander",
    ingredients: [
      {
        name: "Cognac",
        amount: 1.5,
        metric: "oz",
      },
      {
        name: "Creme De Cacao",
        amount: 1.0,
        metric: "oz",
      },
      {
        name: "Heavy Cream",
        amount: 1.0,
        metric: "oz",
      },
    ],
    method: ["Shaken"],
    garnish: ["Ground nutmeg"],
  },
  {
    name: "Brandy Crusta",
    ingredients: [
      {
        name: "Brandy",
        amount: 1.75,
        metric: "oz",
      },
      {
        name: "Maraschino Luxardo",
        amount: 0.25,
        metric: "oz",
      },
      {
        name: "Bar Spoon Curacao",
        amount: 1.0,
        metric: "",
      },
      {
        name: "Lemon Juice",
        amount: 0.5,
        metric: "oz",
      },
      {
        name: "Bar Spoon Simple Syrup",
        amount: 1.0,
        metric: "",
      },
      {
        name: "Dashes Aromatic Bitters",
        amount: 2.0,
        metric: "",
      },
    ],
    method: ["Stirred"],
    garnish: [
      "Orange zest (wipe on rim and glass)",
      "Pulvarized white sugar (cover glass)",
    ],
  },
  {
    name: "Brandy Flip",
    ingredients: [
      {
        name: "Brandy",
        amount: 2.0,
        metric: "oz",
      },
      {
        name: "Demerara Sugar",
        amount: 0.75,
        metric: "oz",
      },
      {
        name: "Egg",
        amount: 1.0,
        metric: "",
      },
    ],
    method: ["Shaken (Dry then ice)"],
    garnish: ["Ground nutmeg"],
  },
  {
    name: "Cabana Boy",
    ingredients: [
      {
        name: "Bourbon Whiskey",
        amount: 1.5,
        metric: "oz",
      },
      {
        name: "Lemon Juice",
        amount: 0.75,
        metric: "oz",
      },
      {
        name: "Ginger Syrup",
        amount: 0.25,
        metric: "oz",
      },
      {
        name: "Orgeat",
        amount: 0.5,
        metric: "oz",
      },
      {
        name: "Grenadine",
        amount: 0.25,
        metric: "oz",
      },
      {
        name: "Beer",
        amount: "Ginger",
      },
    ],
    method: ["Shaken", "Top Ginger Beer"],
    garnish: ["Lemon wedge", "Cherry", "Umbrella"],
  },
  {
    name: "Canchanchara",
    ingredients: [
      {
        name: "Cuban Aguardiente",
        amount: 2.0,
        metric: "oz",
      },
      {
        name: "Fresh Lime Juice",
        amount: 0.5,
        metric: "oz",
      },
      {
        name: "Raw Honey",
        amount: 0.5,
        metric: "oz",
      },
      {
        name: "Water",
        amount: 1.75,
        metric: "oz",
      },
    ],
    method: [
      "Stirred (First mix honey, water, and juice on bottom of the glass, then add ice and rum)",
    ],
    garnish: ["Lime wedge"],
  },
  {
    name: "Cape Codder",
    ingredients: [
      {
        name: "Vodka",
        amount: 2.0,
        metric: "oz",
      },
      {
        name: "Cranberry Juice",
        amount: 3.0,
        metric: "oz",
      },
    ],
    method: ["Stirred (In glass)"],
    garnish: ["Lime wedge"],
  },
  {
    name: "Cardinale",
    ingredients: [
      {
        name: "Gin",
        amount: 1.5,
        metric: "oz",
      },
      {
        name: "Dry Vermouth",
        amount: 0.75,
        metric: "oz",
      },
      {
        name: "Bitter Campari",
        amount: 0.25,
        metric: "oz",
      },
    ],
    method: ["Stirred"],
    garnish: ["Lemon zest"],
  },
  {
    name: "Casino",
    ingredients: [
      {
        name: "Old Tom Gin",
        amount: 1.5,
        metric: "oz",
      },
      {
        name: "Maraschino Luxardo",
        amount: 0.5,
        metric: "oz",
      },
      {
        name: "Lemon Juice",
        amount: 0.5,
        metric: "oz",
      },
      {
        name: "Dashes Orange Bitters",
        amount: 2.0,
        metric: "",
      },
    ],
    method: ["Shaken"],
    garnish: ["Lemon zest", "Maraschino cherry"],
  },
  {
    name: "Chartreuse Swizzle",
    ingredients: [
      {
        name: "Green Chartreuse",
        amount: 1.5,
        metric: "oz",
      },
      {
        name: "Pineapple Juice",
        amount: 1.0,
        metric: "oz",
      },
      {
        name: "Lime Juice",
        amount: 0.75,
        metric: "oz",
      },
      {
        name: "Falernum",
        amount: 0.5,
        metric: "oz",
      },
    ],
    method: ["Stirred"],
    garnish: ["Mint leaves", "Grated nutmeg"],
  },
  {
    name: "Chocolate Martini",
    ingredients: [
      {
        name: "Vodka",
        amount: 1.0,
        metric: "oz",
      },
      {
        name: "Kahlua",
        amount: 0.75,
        metric: "oz",
      },
      {
        name: "Creme De Cacao",
        amount: 0.75,
        metric: "oz",
      },
      {
        name: "Baileys",
        amount: 0.75,
        metric: "oz",
      },
      {
        name: "Heavy Cream",
        amount: 0.5,
        metric: "oz",
      },
    ],
    method: ["Shaken"],
    garnish: ["Chocolate wash", "Chocolate sauce", "Shaved chocolate"],
  },
  {
    name: "Clover Club",
    ingredients: [
      {
        name: "Gin",
        amount: 1.5,
        metric: "oz",
      },
      {
        name: "Raspberry Syrup",
        amount: 0.5,
        metric: "oz",
      },
      {
        name: "Lemon Juice",
        amount: 0.5,
        metric: "oz",
      },
      {
        name: "Foam/1 Egg White",
        amount: "Fee",
      },
    ],
    method: ["Shaken"],
    garnish: ["Raspberries", "Lemon zest"],
  },
  {
    name: "Corpse Reviver #2",
    ingredients: [
      {
        name: "Gin",
        amount: 1.0,
        metric: "oz",
      },
      {
        name: "Orange Liqueur (Cointreau)",
        amount: 1.0,
        metric: "oz",
      },
      {
        name: "Lillet Blanc/Cocchi Americano",
        amount: 1.0,
        metric: "oz",
      },
      {
        name: "Lemon Juice",
        amount: 1.0,
        metric: "oz",
      },
      {
        name: "dash Absinthe",
        amount: 1.0,
        metric: "",
      },
    ],
    method: ["Shaken"],
    garnish: ["Orange twist", "Absinthe rinse"],
  },
  {
    name: "Don's Special Daiquiri",
    ingredients: [
      {
        name: "Gold Jamaican Rum",
        amount: 1.0,
        metric: "oz",
      },
      {
        name: "Cuban Rum",
        amount: 0.5,
        metric: "oz",
      },
      {
        name: "Passion Fruit Syrup",
        amount: 0.5,
        metric: "oz",
      },
      {
        name: "Fresh lime juice",
        amount: 0.5,
        metric: "oz",
      },
      {
        name: "Honey Syrup",
        amount: 0.5,
        metric: "oz",
      },
    ],
    method: ["Blended"],
    garnish: ["Half passionfruit"],
  },
  {
    name: "El Presidente",
    ingredients: [
      {
        name: "Rum (Aged)",
        amount: 1.5,
        metric: "oz",
      },
      {
        name: "Blanc Vermouth",
        amount: 1.5,
        metric: "oz",
      },
      {
        name: "Dry Curacao",
        amount: 0.25,
        metric: "oz",
      },
      {
        name: "Bar spoon Grenadine",
        amount: 1.0,
        metric: "",
      },
    ],
    method: ["Stirred"],
    garnish: ["Orange peel"],
  },
  {
    name: "Elder Smoke",
    ingredients: [
      {
        name: "Tequilz",
        amount: 1.5,
        metric: "oz",
      },
      {
        name: "Blended Scotch",
        amount: 0.5,
        metric: "oz",
      },
      {
        name: "St. Germain",
        amount: 0.75,
        metric: "oz",
      },
      {
        name: "Lime Juice",
        amount: 0.5,
        metric: "oz",
      },
      {
        name: "Grapefruit Juice",
        amount: 0.5,
        metric: "oz",
      },
      {
        name: "Cranberry Juice",
        amount: 0.5,
        metric: "oz",
      },
    ],
    method: ["Shaken", "Pour cranberry juice"],
    garnish: ["Grapefruit peel"],
  },
  {
    name: "Enzoni",
    ingredients: [
      {
        name: "Gin",
        amount: 1.0,
        metric: "oz",
      },
      {
        name: "Campari",
        amount: 1.0,
        metric: "oz",
      },
      {
        name: "Lemon Juice",
        amount: 0.75,
        metric: "oz",
      },
      {
        name: "Simple Syrup",
        amount: 0.5,
        metric: "oz",
      },
      {
        name: "grapes",
        amount: 5.0,
        metric: "",
      },
    ],
    method: ["Muddle (Grapes)", "Shaken"],
    garnish: ["Orange wedge", "Grape"],
  },
  {
    name: "Fernandito",
    ingredients: [
      {
        name: "Fernet Branca",
        amount: 1.5,
        metric: "oz",
      },
    ],
    method: ["Poured (Fernet, cola)"],
    garnish: [],
  },
  {
    name: "Final Ward",
    ingredients: [
      {
        name: "Rye Whiskey",
        amount: 0.75,
        metric: "oz",
      },
      {
        name: "Green Chartreuse",
        amount: 0.75,
        metric: "oz",
      },
      {
        name: "Maraschino Liqueur",
        amount: 0.75,
        metric: "oz",
      },
      {
        name: "Lemon Juice",
        amount: 0.75,
        metric: "oz",
      },
    ],
    method: ["Shaken"],
    garnish: ["Lemon peel", "Cherry"],
  },
  {
    name: "French 75",
    ingredients: [
      {
        name: "Gin",
        amount: 1.0,
        metric: "oz",
      },
      {
        name: "Lemon Juice",
        amount: 0.5,
        metric: "oz",
      },
      {
        name: "Simple Syrup",
        amount: 0.5,
        metric: "oz",
      },
      {
        name: "Champagne",
        amount: 2.0,
        metric: "oz",
      },
    ],
    method: ["Shaken", "Top Shampagne", "Stir (in glass)"],
    garnish: [],
    tags: ["popular"],
  },
  {
    name: "French Connection",
    ingredients: [
      {
        name: "Cognac",
        amount: 1.0,
        metric: "oz",
      },
      {
        name: "Amaretto",
        amount: 1.0,
        metric: "oz",
      },
    ],
    method: ["Stirred in glass"],
    garnish: [],
  },
  {
    name: "Garibaldi",
    ingredients: [
      {
        name: "Bitter Campari",
        amount: 1.5,
        metric: "oz",
      },
      {
        name: "Orange Juice",
        amount: 4.0,
        metric: "oz",
      },
    ],
    method: ["Poured"],
    garnish: ["Orange wedge"],
  },
  {
    name: "Gin Basil Smash",
    ingredients: [
      {
        name: "Gin",
        amount: 2.0,
        metric: "oz",
      },
      {
        name: "Freshly Squeezed Lemon Juice",
        amount: 0.75,
        metric: "oz",
      },
      {
        name: "Sugar Syrup",
        amount: 0.75,
        metric: "oz",
      },
      {
        name: "pcs Italian Basil leaves",
        amount: 10.0,
        metric: "",
      },
    ],
    method: ["Shaken"],
    garnish: [],
  },
  {
    name: "Gin Fizz",
    ingredients: [
      {
        name: "Gin",
        amount: 1.5,
        metric: "oz",
      },
      {
        name: "Fresh Lemon Juice",
        amount: 1.0,
        metric: "oz",
      },
      {
        name: "Simple Syrup",
        amount: 0.5,
        metric: "oz",
      },
      {
        name: "Soda Water",
        amount: "Splash",
      },
    ],
    method: ["Shaken (Without Soda Water) Top with Soda Water"],
    garnish: ["Lemon slice", "Lemon zest"],
  },
  {
    name: "Gin Gimlet",
    ingredients: [
      {
        name: "Gin",
        amount: 2.0,
        metric: "oz",
      },
      {
        name: "Lime Juice",
        amount: 0.75,
        metric: "oz",
      },
      {
        name: "Simple Syrup",
        amount: 0.75,
        metric: "oz",
      },
    ],
    method: ["Shaken"],
    garnish: ["Lime wheel"],
  },
  {
    name: "Gold Rush",
    ingredients: [
      {
        name: "Bourbon Whiskey",
        amount: 2.0,
        metric: "oz",
      },
      {
        name: "Lemon Juice",
        amount: 0.75,
        metric: "oz",
      },
      {
        name: "Honey Syrup",
        amount: 0.75,
        metric: "oz",
      },
    ],
    method: ["Shaken"],
    garnish: ["Lemon wedge", "Lemon twist"],
  },
  {
    name: "Grapefruit Drop",
    ingredients: [
      {
        name: "Gin",
        amount: 1.5,
        metric: "oz",
      },
      {
        name: "St. Germain",
        amount: 1.0,
        metric: "oz",
      },
      {
        name: "Lemon Juice",
        amount: 0.75,
        metric: "oz",
      },
    ],
    method: ["Shaken"],
    garnish: ["Sugar rim", "Grapefruit twist"],
  },
  {
    name: "Grasshopper",
    ingredients: [
      {
        name: "Creme de Cacao (White)",
        amount: 1.0,
        metric: "oz",
      },
      {
        name: "Creme de Menthe (Green)",
        amount: 1.0,
        metric: "oz",
      },
      {
        name: "Fresh Cream",
        amount: 1.0,
        metric: "oz",
      },
    ],
    method: ["Shaken"],
    garnish: ["Mint leaf", "Ground nutmeg/chocolate"],
  },
  {
    name: "Greyhound & Salty Dog",
    ingredients: [
      {
        name: "Vodka",
        amount: 2.0,
        metric: "oz",
      },
      {
        name: "Grapefruit Juice",
        amount: 3.0,
        metric: "oz",
      },
    ],
    method: ["Stirred (In glass)"],
    garnish: ["Grapefruit wedge", "Salted rim (For salty dog)"],
  },
  {
    name: "Hairy Navel & Fuzzy Navel",
    ingredients: [
      {
        name: "Peach Schnapps",
        amount: 1.5,
        metric: "oz",
      },
      {
        name: "Orange Juice",
        amount: 4.0,
        metric: "oz",
      },
      {
        name: "Vodka",
        amount: 1.0,
        metric: "oz",
      },
      {
        name: "Peach Schnapps",
        amount: 0.5,
        metric: "oz",
      },
      {
        name: "Orange Juice",
        amount: 4.0,
        metric: "oz",
      },
    ],
    method: ["Stirred (In glass)"],
    garnish: ["Orange wedge"],
  },
  {
    name: "Hank Panky",
    ingredients: [
      {
        name: "London Dry Gin",
        amount: 1.5,
        metric: "oz",
      },
      {
        name: "Sweet Red Vermouth",
        amount: 1.5,
        metric: "oz",
      },
      {
        name: "Fernet",
        amount: 0.25,
        metric: "oz",
      },
    ],
    method: ["Stirred"],
    garnish: ["Orange zest"],
  },
  {
    name: "Harvey Wallbanger",
    ingredients: [
      {
        name: "Vodka",
        amount: 2.0,
        metric: "oz",
      },
      {
        name: "Orange Juice",
        amount: 4.0,
        metric: "oz",
      },
      {
        name: "Galliano",
        amount: 0.5,
        metric: "oz",
      },
    ],
    method: ["Stirred (In glass)", "Float Galliano"],
    garnish: ["Orange wedge", "Cherry"],
  },
  {
    name: "Hemingway Special",
    ingredients: [
      {
        name: "Rum",
        amount: 2.0,
        metric: "oz",
      },
      {
        name: "Grapefruit Juice",
        amount: 1.5,
        metric: "oz",
      },
      {
        name: "Maraschino Luxardo",
        amount: 0.5,
        metric: "oz",
      },
      {
        name: "Lime Juice",
        amount: 0.5,
        metric: "oz",
      },
    ],
    method: ["Shaken"],
    garnish: [],
  },
  {
    name: "Horse's Neck",
    ingredients: [
      {
        name: "Cognac",
        amount: 1.5,
        metric: "oz",
      },
      {
        name: "Ginger Ale",
        amount: 4.0,
        metric: "oz",
      },
      {
        name: "Angostura Bitters (optional)",
        amount: "Dash",
      },
    ],
    method: ["Stirred in glass"],
    garnish: ["Lemon spiral"],
  },
  {
    name: "Hot Buttered Rum",
    ingredients: [
      {
        name: "Spiced Rum",
        amount: 2.0,
        metric: "oz",
      },
      {
        name: "scoops Hot Buttered Batter",
        amount: 2.0,
        metric: "",
      },
      {
        name: "Hot Water",
        amount: 4.0,
        metric: "oz",
      },
    ],
    method: ["Mix (Whisk in bowl)", "Stirred (Mix, rum, hot water)"],
    garnish: ["Ground nutmeg"],
  },
  {
    name: "Hot Toddy",
    ingredients: [
      {
        name: "Whiskey",
        amount: 2.0,
        metric: "oz",
      },
      {
        name: "Lemon Juice",
        amount: 0.5,
        metric: "oz",
      },
      {
        name: "Honey Syrup",
        amount: 0.5,
        metric: "oz",
      },
      {
        name: "Water",
        amount: "Hot",
      },
    ],
    method: ["Warm glass with hot water then discard", "Stirred"],
    garnish: ["Lemon wedge", "Cinnamon stick"],
  },
  {
    name: "IBA Tiki",
    ingredients: [
      {
        name: "Ron Profundo Havana Club",
        amount: 1.0,
        metric: "oz",
      },
      {
        name: "Ron Smoky Havana Club",
        amount: 1.0,
        metric: "oz",
      },
      {
        name: "Licor Amaretto",
        amount: 0.5,
        metric: "oz",
      },
      {
        name: "Licor Frangelico",
        amount: 0.25,
        metric: "",
      },
      {
        name: "drops Maraschino Luxardo",
        amount: 5.0,
        metric: "",
      },
      {
        name: "Passion Fruit Puree",
        amount: 1.0,
        metric: "oz",
      },
      {
        name: "Pineapple Juice",
        amount: 3.0,
        metric: "oz",
      },
      {
        name: "Lime Juice",
        amount: 1.0,
        metric: "oz",
      },
      {
        name: "pc Gengibre Slice",
        amount: 1.0,
        metric: "",
      },
    ],
    method: ["Muddle and Shaken"],
    garnish: ["Lime slice", "Lemon slice", "Pinapple slice"],
  },
  {
    name: "Illegal",
    ingredients: [
      {
        name: "Espadin Mezcal",
        amount: 1.0,
        metric: "oz",
      },
      {
        name: "Jamaica OverproWhite Rum",
        amount: 0.5,
        metric: "oz",
      },
      {
        name: "Falernum",
        amount: 0.5,
        metric: "oz",
      },
      {
        name: "Bar Spoon Maraschino Luxardo",
        amount: 1.0,
        metric: "",
      },
      {
        name: "Lime Juice",
        amount: 0.75,
        metric: "oz",
      },
      {
        name: "Simple Syrup",
        amount: 0.5,
        metric: "oz",
      },
      {
        name: "Foam/Few Drops Egg White",
        amount: "Fee",
      },
    ],
    method: ["Shaken"],
    garnish: [],
  },
  {
    name: "Jagerrita",
    ingredients: [
      {
        name: "Jagermeister",
        amount: 1.5,
        metric: "oz",
      },
      {
        name: "Orange Liqueur",
        amount: 0.75,
        metric: "oz",
      },
      {
        name: "Lime Juice",
        amount: 0.75,
        metric: "oz",
      },
      {
        name: "Simple Syrup",
        amount: 0.5,
        metric: "oz",
      },
    ],
    method: ["Shaken"],
    garnish: ["Lime wheel"],
  },
  {
    name: "John Collins",
    ingredients: [
      {
        name: "Gin",
        amount: 1.5,
        metric: "oz",
      },
      {
        name: "Lemon Juice",
        amount: 1.0,
        metric: "oz",
      },
      {
        name: "Simple Syrup",
        amount: 0.5,
        metric: "oz",
      },
      {
        name: "Soda Water",
        amount: 2.0,
        metric: "oz",
      },
    ],
    method: ["Poured"],
    garnish: ["Lemon slice", "Maraschino cherry"],
  },
  {
    name: "Jungle Bird",
    ingredients: [
      {
        name: "Dark Rum (Blackstrap)",
        amount: 1.5,
        metric: "oz",
      },
      {
        name: "Campari",
        amount: 0.75,
        metric: "",
      },
      {
        name: "Pineapple Juice",
        amount: 1.5,
        metric: "oz",
      },
      {
        name: "Lime Juice",
        amount: 0.5,
        metric: "oz",
      },
      {
        name: "Simple Syrup/Demerara Sugar Syrup",
        amount: 0.5,
        metric: "oz",
      },
    ],
    method: ["Shaken"],
    garnish: ["Pinapple wedge"],
  },
  {
    name: "Kamikaze",
    ingredients: [
      {
        name: "Vodka",
        amount: 2.0,
        metric: "oz",
      },
      {
        name: "Lime Juice",
        amount: 0.75,
        metric: "oz",
      },
      {
        name: "Orange Liqueur",
        amount: 0.75,
        metric: "oz",
      },
    ],
    method: ["Shaken"],
    garnish: ["Lime wheel"],
  },
  {
    name: "Kir",
    ingredients: [
      {
        name: "Dry White Wine",
        amount: 3.0,
        metric: "oz",
      },
      {
        name: "Creme de Cassis",
        amount: 0.5,
        metric: "oz",
      },
    ],
    method: ["Poured (Creme de Cassis, White Wine)"],
    garnish: [],
  },
  {
    name: "Last Word",
    ingredients: [
      {
        name: "Gin",
        amount: 0.75,
        metric: "oz",
      },
      {
        name: "Green Chartreuse",
        amount: 0.75,
        metric: "oz",
      },
      {
        name: "Maraschino Luxardo",
        amount: 0.75,
        metric: "oz",
      },
      {
        name: "Lime Juice",
        amount: 0.75,
        metric: "oz",
      },
    ],
    method: ["Shaken"],
    garnish: [],
  },
  {
    name: "Maple Walnut Old Fashioned",
    ingredients: [
      {
        name: "Bourbon Whiskey",
        amount: 2.0,
        metric: "oz",
      },
      {
        name: "Dashes Black Walnut Bitters",
        amount: 2.0,
        metric: "",
      },
      {
        name: "Bar Spoon Maple Syrup",
        amount: 1.0,
        metric: "",
      },
    ],
    method: ["Stirred"],
    garnish: ["Orange peel"],
  },
  {
    name: "Martinez",
    ingredients: [
      {
        name: "Gin (London Dry)",
        amount: 1.5,
        metric: "oz",
      },
      {
        name: "Sweet Vermouth",
        amount: 1.5,
        metric: "oz",
      },
      {
        name: "Bar Spoon Maraschino Luxardo",
        amount: 1.0,
        metric: "",
      },
      {
        name: "Dashes Orange Bitters",
        amount: 2.0,
        metric: "",
      },
    ],
    method: ["Stirred"],
    garnish: ["Lemon peel"],
  },
  {
    name: "Mary Pickford",
    ingredients: [
      {
        name: "White Rum",
        amount: 1.5,
        metric: "oz",
      },
      {
        name: "Pineapple Juice",
        amount: 1.5,
        metric: "oz",
      },
      {
        name: "Maraschino Luxardo",
        amount: 0.25,
        metric: "oz",
      },
      {
        name: "Grenadine Syrup",
        amount: 0.25,
        metric: "oz",
      },
    ],
    method: ["Shaken"],
    garnish: [],
  },
  {
    name: "Matador",
    ingredients: [
      {
        name: "Tequila",
        amount: 1.5,
        metric: "oz",
      },
      {
        name: "Pineapple Juice",
        amount: 1.0,
        metric: "oz",
      },
      {
        name: "Lime Juice",
        amount: 0.75,
        metric: "oz",
      },
      {
        name: "Green Chartreuse",
        amount: 0.25,
        metric: "oz",
      },
      {
        name: "Bar spoon Agave",
        amount: 1.0,
        metric: "",
      },
    ],
    method: ["Shaken"],
    garnish: ["Pineapple fromds", "Lime wheel"],
  },
  {
    name: "Mind Eraser",
    ingredients: [
      {
        name: "Vodka",
        amount: 2.0,
        metric: "oz",
      },
      {
        name: "Kahlua",
        amount: 2.0,
        metric: "oz",
      },
      {
        name: "Soda Water",
        amount: 2.0,
        metric: "oz",
      },
    ],
    method: ["Poured (Kahlua, vodka, soda water)"],
    garnish: [],
  },
  {
    name: "Missionary's Downfall",
    ingredients: [
      {
        name: "White rum",
        amount: 1.0,
        metric: "oz",
      },
      {
        name: "Peach Brandy",
        amount: 0.5,
        metric: "oz",
      },
      {
        name: "Fresh lime juice",
        amount: 0.5,
        metric: "oz",
      },
      {
        name: "Honey Mix",
        amount: 1.0,
        metric: "oz",
      },
      {
        name: "pcs Mint Leaves",
        amount: 10.0,
        metric: "",
      },
      {
        name: "pcs Pineapple Chunks",
        amount: 3.0,
        metric: "",
      },
      {
        name: "cup ice",
        amount: 0.5,
        metric: "",
      },
    ],
    method: ["Blended"],
    garnish: ["Mint sprig", "Pinapple slice"],
  },
  {
    name: "Monkey Gland",
    ingredients: [
      {
        name: "Dry Gin",
        amount: 1.5,
        metric: "oz",
      },
      {
        name: "Orange Juice",
        amount: 1.5,
        metric: "oz",
      },
      {
        name: "Tablespoon Absinthe",
        amount: 1.0,
        metric: "",
      },
      {
        name: "Tablespoon Grenadine Syrup",
        amount: 1.0,
        metric: "",
      },
    ],
    method: ["Shaken"],
    garnish: [],
  },
  {
    name: "Naked and Famous",
    ingredients: [
      {
        name: "Mezcal",
        amount: 0.75,
        metric: "oz",
      },
      {
        name: "Yellow Chartreuse",
        amount: 0.75,
        metric: "oz",
      },
      {
        name: "Aperol",
        amount: 0.75,
        metric: "oz",
      },
      {
        name: "Lime Juice",
        amount: 0.75,
        metric: "oz",
      },
    ],
    method: ["Shaken"],
    garnish: [],
  },
  {
    name: "Negroni",
    ingredients: [
      {
        name: "Gin",
        amount: 1.0,
        metric: "oz",
      },
      {
        name: "Campari",
        amount: 1.0,
        metric: "oz",
      },
      {
        name: "Sweet Vermouth",
        amount: 1.0,
        metric: "oz",
      },
    ],
    method: ["Stirred (in glass)"],
    garnish: ["Orange slice"],
    tags: ["popular"],
  },
  {
    name: "New York Sour",
    ingredients: [
      {
        name: "Whiskey (Rye/Bourbon)",
        amount: 2.0,
        metric: "oz",
      },
      {
        name: "Simple syrup",
        amount: 0.75,
        metric: "oz",
      },
      {
        name: "Lemon juice",
        amount: 1.0,
        metric: "oz",
      },
      {
        name: "Foam/Few Drops Egg White",
        amount: "Fee",
      },
      {
        name: "Red Wine (Shiraz or Malbech)",
        amount: 0.5,
        metric: "oz",
      },
    ],
    method: ["Shaken", "Float Red Wine"],
    garnish: ["Lemon zest", "Cherry"],
  },
  {
    name: "Old Cuban",
    ingredients: [
      {
        name: "pcs Mint Leaves",
        amount: 0.75,
        metric: "",
      },
      {
        name: "Aged Rum",
        amount: 1.5,
        metric: "oz",
      },
      {
        name: "Lime Juice",
        amount: 0.75,
        metric: "oz",
      },
      {
        name: "Simple Syrup",
        amount: 1.0,
        metric: "oz",
      },
      {
        name: "Dashes Angostura Bitters",
        amount: 2.0,
        metric: "",
      },
      {
        name: "Brut Champagne or Prosecco",
        amount: 2.0,
        metric: "oz",
      },
    ],
    method: ["Shaken (Without wine)", "Float sparkling wine"],
    garnish: ["Mint sprigs"],
  },
  {
    name: "Painkiller",
    ingredients: [
      {
        name: "Rum (Pusser's)",
        amount: 2.5,
        metric: "oz",
      },
      {
        name: "Pineapple Juice",
        amount: 1.5,
        metric: "oz",
      },
      {
        name: "Creme Coconut",
        amount: 1.0,
        metric: "oz",
      },
      {
        name: "Orange Juice",
        amount: 0.5,
        metric: "oz",
      },
    ],
    method: ["Shaken"],
    garnish: ["Pineapple fronds", "Ground nutmeg"],
  },
  {
    name: "Paper Plane",
    ingredients: [
      {
        name: "Bourbon Whiskey",
        amount: 1.0,
        metric: "oz",
      },
      {
        name: "Amaro Nonino",
        amount: 1.0,
        metric: "oz",
      },
      {
        name: "Aperol",
        amount: 1.0,
        metric: "oz",
      },
      {
        name: "Fresh Lemon Juice",
        amount: 1.0,
        metric: "oz",
      },
    ],
    method: ["Shaken"],
    garnish: [],
  },
  {
    name: "Paradise",
    ingredients: [
      {
        name: "Gin",
        amount: 1.0,
        metric: "oz",
      },
      {
        name: "Apricot Brandy",
        amount: 0.75,
        metric: "oz",
      },
      {
        name: "Orange Juice",
        amount: 0.5,
        metric: "oz",
      },
    ],
    method: ["Shaken"],
    garnish: [],
  },
  {
    name: "Peach Bellini",
    ingredients: [
      {
        name: "Peach Puree",
        amount: 2.0,
        metric: "oz",
      },
      {
        name: "Prosecco",
        amount: 3.0,
        metric: "oz",
      },
    ],
    method: ["Sirred (In glass)"],
    garnish: ["Peach slice"],
  },
  {
    name: "Penicillin",
    ingredients: [
      {
        name: "Whisky (Blended Scotch)",
        amount: 2.0,
        metric: "oz",
      },
      {
        name: "Lagavulin 16y/Islay Scotch",
        amount: 0.25,
        metric: "oz",
      },
      {
        name: "Lemon Juice",
        amount: 0.75,
        metric: "oz",
      },
      {
        name: "Honey Syrup",
        amount: 0.75,
        metric: "oz",
      },
      {
        name: "Ginger Syrup/3 Sliced Fresh Ginger",
        amount: 0.75,
        metric: "oz",
      },
    ],
    method: ["Muddle (Ginger)", "Shaken", "Float Whisky"],
    garnish: ["Candied ginger"],
  },
  {
    name: "Pimm's Cup",
    ingredients: [
      {
        name: "Pimm's #1",
        amount: 2.0,
        metric: "oz",
      },
      {
        name: "Lemon soda",
        amount: 4.0,
        metric: "oz",
      },
      {
        name: "Slices",
        amount: "Apple",
      },
    ],
    method: ["Add fruit and mint", "Add ice", "Stirred in cup"],
    garnish: ["Lemon wheel"],
  },
  {
    name: "Pisco Punch",
    ingredients: [
      {
        name: "Pisco",
        amount: 2.0,
        metric: "oz",
      },
      {
        name: "Fresh Pineapple Juice",
        amount: 0.75,
        metric: "oz",
      },
      {
        name: "Simple Syrup",
        amount: 0.5,
        metric: "oz",
      },
      {
        name: "Fresh Lemon Juice",
        amount: 0.5,
        metric: "oz",
      },
      {
        name: "Dry White Wine",
        amount: 1.0,
        metric: "oz",
      },
      {
        name: "pcs Cloves",
        amount: 3.0,
        metric: "",
      },
    ],
    method: [
      "Muddle (Simple syrup and cloves)",
      "Shake (Without wine)",
      "Top with wine",
    ],
    garnish: [],
  },
  {
    name: "Pisco Sour",
    ingredients: [
      {
        name: "Pisco",
        amount: 2.0,
        metric: "oz",
      },
      {
        name: "Fresh Lemon Juice",
        amount: 1.0,
        metric: "oz",
      },
      {
        name: "Simple Syrup",
        amount: 0.75,
        metric: "oz",
      },
      {
        name: "Egg White",
        amount: 1.0,
        metric: "",
      },
    ],
    method: ["Shaken (Dry then ice)"],
    garnish: ["3 dashes Amargo bitters/Angostura bitters"],
  },
  {
    name: "Planters Punch",
    ingredients: [
      {
        name: "Jamaican Rum",
        amount: 1.5,
        metric: "oz",
      },
      {
        name: "Lime Juice",
        amount: 0.5,
        metric: "oz",
      },
      {
        name: "Sugar Cane Juice",
        amount: 1.0,
        metric: "oz",
      },
    ],
    method: ["Poured"],
    garnish: ["Orange zest"],
  },
  {
    name: "Porto Flip",
    ingredients: [
      {
        name: "Brandy",
        amount: 0.5,
        metric: "oz",
      },
      {
        name: "Red Tawny Port Wine",
        amount: 1.5,
        metric: "oz",
      },
      {
        name: "Egg Yolk",
        amount: 0.5,
        metric: "oz",
      },
    ],
    method: ["Shaken"],
    garnish: ["Ground nutmeg"],
  },
  {
    name: "Rabo De Galo",
    ingredients: [
      {
        name: "Cachaca",
        amount: 2.0,
        metric: "oz",
      },
      {
        name: "Sweet Vermouth Cinzano Rosso",
        amount: 0.75,
        metric: "oz",
      },
      {
        name: "Cynar",
        amount: 0.5,
        metric: "oz",
      },
      {
        name: "Drops Angostura (Optional)",
        amount: 2.0,
        metric: "",
      },
    ],
    method: ["Stir in glass"],
    garnish: ["Orange twist"],
  },
  {
    name: "Ramos Fizz",
    ingredients: [
      {
        name: "Gin",
        amount: 1.5,
        metric: "oz",
      },
      {
        name: "Lime Juice",
        amount: 0.5,
        metric: "oz",
      },
      {
        name: "Lemon Juice",
        amount: 0.5,
        metric: "oz",
      },
      {
        name: "Simple Syrup",
        amount: 1.0,
        metric: "oz",
      },
      {
        name: "Cream",
        amount: 2.0,
        metric: "oz",
      },
      {
        name: "Egg White",
        amount: 1.0,
        metric: "oz",
      },
      {
        name: "Dashes Orange Flower Water",
        amount: 3.0,
        metric: "",
      },
      {
        name: "Drops Vanilla Extract",
        amount: 2.0,
        metric: "",
      },
      {
        name: "Water",
        amount: "Soda",
      },
    ],
    method: ["Shake (Ice then dry)", "Top Soda Water"],
    garnish: [],
  },
  {
    name: "Remember The Name",
    ingredients: [
      {
        name: "Rye Whiskey",
        amount: 2.0,
        metric: "oz",
      },
      {
        name: "Sweet Vermouth",
        amount: 0.75,
        metric: "oz",
      },
      {
        name: "Cherry Brandy Luxardo",
        amount: 0.5,
        metric: "oz",
      },
      {
        name: "Absinthe",
        amount: 0.25,
        metric: "oz",
      },
    ],
    method: ["Coat glass with absinthe", "Mixed (Without absinthe)"],
    garnish: ["Lemon zest"],
  },
  {
    name: "Rob Roy",
    ingredients: [
      {
        name: "Blended Scotch",
        amount: 2.0,
        metric: "oz",
      },
      {
        name: "Sweeth Vermouth",
        amount: 1.0,
        metric: "oz",
      },
      {
        name: "Dashes Angostura Bitters",
        amount: 2.0,
        metric: "",
      },
    ],
    method: ["Stirred"],
    garnish: ["Cherry"],
  },
  {
    name: "Russian Spring Punch",
    ingredients: [
      {
        name: "Vodka",
        amount: 1.0,
        metric: "oz",
      },
      {
        name: "Fresh Lemon Juice",
        amount: 1.0,
        metric: "oz",
      },
      {
        name: "Creme de Cassis",
        amount: 0.5,
        metric: "oz",
      },
      {
        name: "Sugar Syrup",
        amount: 0.25,
        metric: "oz",
      },
      {
        name: "up with Sparkling Wine",
        amount: "Top",
      },
    ],
    method: ["Shake (Without wine)", "Top sparkling wine"],
    garnish: ["Blackberries", "Lemon slice"],
  },
  {
    name: "Rusty Nail",
    ingredients: [
      {
        name: "Whisky (Blended Scotch)",
        amount: 1.5,
        metric: "oz",
      },
      {
        name: "Drambuie",
        amount: 1.0,
        metric: "oz",
      },
      {
        name: "Dashes Angostura Bitters",
        amount: 2.0,
        metric: "",
      },
    ],
    method: ["Stirred (in glass)"],
    garnish: ["Lemon zest"],
  },
  {
    name: "Sangria",
    ingredients: [
      {
        name: "Bottles Spanish Red Wine",
        amount: 2.0,
        metric: "",
      },
      {
        name: "Cups Brandy",
        amount: 0.75,
        metric: "",
      },
      {
        name: "Diced Orange",
        amount: 1.0,
        metric: "",
      },
      {
        name: "Juiced Orange",
        amount: 1.0,
        metric: "",
      },
      {
        name: "Diced Green Apple",
        amount: 1.0,
        metric: "",
      },
      {
        name: "Diced Lemon",
        amount: 1.0,
        metric: "",
      },
      {
        name: "Connamon Stick",
        amount: 1.0,
        metric: "",
      },
      {
        name: "Syrup",
        amount: "Simple",
      },
      {
        name: "Water",
        amount: "Soda",
      },
    ],
    method: [
      "Add fruit to pitcher",
      "Add juice and cinnamon stick",
      "Pour brandy and wine",
      "Stirred",
      "Refigerate for 30 minutes",
      "Top with soda water in glass",
    ],
    garnish: [],
  },
  {
    name: "Sazerac",
    ingredients: [
      {
        name: "Cognac",
        amount: 2.0,
        metric: "oz",
      },
      {
        name: "Absinthe",
        amount: 0.25,
        metric: "oz",
      },
      {
        name: "Sugar Cube",
        amount: 1.0,
        metric: "",
      },
      {
        name: "Dashes Peychaud\u2019s Bitters",
        amount: 2.0,
        metric: "",
      },
    ],
    method: ["Muddle", "Stirred"],
    garnish: ["Lemon zest", "Absinthe rinse"],
  },
  {
    name: "Sherry Cobbler",
    ingredients: [
      {
        name: "Amontillado Sherry",
        amount: 1.5,
        metric: "oz",
      },
      {
        name: "Palo Cortado",
        amount: 1.5,
        metric: "oz",
      },
      {
        name: "tsp Superfine/Granulated Sugar",
        amount: 1.0,
        metric: "",
      },
      {
        name: "Orange Wheel",
        amount: 0.5,
        metric: "",
      },
      {
        name: "Lemon Wheel",
        amount: 0.5,
        metric: "",
      },
    ],
    method: ["Shaken"],
    garnish: ["Berries", "1/4 Orange wheel", "1/4 Lemon wheel"],
  },
  {
    name: "Singapore Sling",
    ingredients: [
      {
        name: "Gin",
        amount: 1.0,
        metric: "oz",
      },
      {
        name: "Cherry Sangue Morlacco",
        amount: 0.5,
        metric: "oz",
      },
      {
        name: "Cointreau",
        amount: 0.25,
        metric: "oz",
      },
      {
        name: "DOM Be\u0301ne\u0301dictine",
        amount: 0.25,
        metric: "oz",
      },
      {
        name: "Fresh Pineapple Juice",
        amount: 4.0,
        metric: "oz",
      },
      {
        name: "Lime Juice",
        amount: 0.5,
        metric: "oz",
      },
      {
        name: "Grenadine Syrup",
        amount: 0.25,
        metric: "oz",
      },
      {
        name: "dash Angostura bitters",
        amount: "A",
      },
    ],
    method: ["Shaken"],
    garnish: ["Pinapple", "Maraschino cherry"],
  },
  {
    name: "South Side",
    ingredients: [
      {
        name: "London dry Gin",
        amount: 2.0,
        metric: "oz",
      },
      {
        name: "Lemon Juice",
        amount: 1.0,
        metric: "oz",
      },
      {
        name: "Simple syrup",
        amount: 0.5,
        metric: "oz",
      },
      {
        name: "Mint leaves",
        amount: 0.8333333333333334,
        metric: "",
      },
      {
        name: "Foam/Few drops Egg white (Optional)",
        amount: "Fee",
      },
    ],
    method: ["Shaken"],
    garnish: ["Mint sprigs"],
  },
  {
    name: "Spanish Coffee",
    ingredients: [
      {
        name: "Rum (151 Proof)",
        amount: 0.75,
        metric: "oz",
      },
      {
        name: "Orange Liqueur",
        amount: 0.25,
        metric: "oz",
      },
      {
        name: "Kahlua",
        amount: 1.5,
        metric: "oz",
      },
      {
        name: "Cream",
        amount: "Heavy",
      },
    ],
    method: ["Special"],
    garnish: ["Sugar rim"],
  },
  {
    name: "Spicy Fifty",
    ingredients: [
      {
        name: "Vodka Vanilla",
        amount: 1.75,
        metric: "oz",
      },
      {
        name: "Elderflower Cordial",
        amount: 0.5,
        metric: "oz",
      },
      {
        name: "Lime Juice",
        amount: 0.5,
        metric: "oz",
      },
      {
        name: "Monin Honey Syrup",
        amount: 0.25,
        metric: "oz",
      },
      {
        name: "thin Slices Red Chili Pepper",
        amount: 2.0,
        metric: "",
      },
    ],
    method: ["Shaken"],
    garnish: ["Red chili pepper"],
  },
  {
    name: "Stinger",
    ingredients: [
      {
        name: "Cognac",
        amount: 1.75,
        metric: "oz",
      },
      {
        name: "White Creme de Menthe",
        amount: 0.75,
        metric: "oz",
      },
    ],
    method: ["Stirred"],
    garnish: ["Mint leaves"],
  },
  {
    name: "Suffering Bastard",
    ingredients: [
      {
        name: "Cognac or Brandy",
        amount: 1.0,
        metric: "oz",
      },
      {
        name: "Gin",
        amount: 1.0,
        metric: "oz",
      },
      {
        name: "Lime Juice",
        amount: 0.5,
        metric: "oz",
      },
      {
        name: "Dashes Angostura Bitters",
        amount: 2.0,
        metric: "",
      },
      {
        name: "up Ginger beer",
        amount: "Top",
      },
    ],
    method: ["Shake (Without ginger beer)", "Top ginger beer"],
    garnish: ["Mint sprig", "Orange slice"],
  },
  {
    name: "Surfer on Acid",
    ingredients: [
      {
        name: "Jagermeister",
        amount: 1.0,
        metric: "oz",
      },
      {
        name: "Aged Rum (Plantation Pineapple)",
        amount: 1.0,
        metric: "oz",
      },
      {
        name: "Pineapple Juice",
        amount: 1.0,
        metric: "oz",
      },
      {
        name: "Orgeat Almond Syrup",
        amount: 0.5,
        metric: "oz",
      },
      {
        name: "Lime Juice",
        amount: 0.5,
        metric: "oz",
      },
    ],
    method: ["Shaken"],
    garnish: ["Pineapple Frond"],
  },
  {
    name: "Tequila Old Fashioned",
    ingredients: [
      {
        name: "Tequila (Reposado)",
        amount: 1.5,
        metric: "oz",
      },
      {
        name: "Mezcal",
        amount: 0.5,
        metric: "oz",
      },
      {
        name: "Bar spoon Agave",
        amount: 1.0,
        metric: "",
      },
      {
        name: "Dashes Angostura Bitters",
        amount: 2.0,
        metric: "",
      },
    ],
    method: ["Stirred"],
    garnish: ["Orange twist"],
  },
  {
    name: "Tequila Smash",
    ingredients: [
      {
        name: "Tequila",
        amount: 1.5,
        metric: "oz",
      },
      {
        name: "Orange Liqueur",
        amount: 0.5,
        metric: "oz",
      },
      {
        name: "Lemon Quartered",
        amount: "Half",
      },
      {
        name: "Agave Nectar",
        amount: 0.5,
        metric: "oz",
      },
      {
        name: "Mint Leaves",
        amount: 6.0,
        metric: "",
      },
    ],
    method: ["Muddle (Lemons, mint)", "Shaken"],
    garnish: ["Mint sprig"],
  },
  {
    name: "Three Dots And A Dash",
    ingredients: [
      {
        name: "Rhum Martinique Agricole",
        amount: 1.5,
        metric: "oz",
      },
      {
        name: "Blended Aged Rum",
        amount: 0.5,
        metric: "oz",
      },
      {
        name: "Falernum",
        amount: 0.25,
        metric: "oz",
      },
      {
        name: "Allspice Saint Elizabeth",
        amount: 0.25,
        metric: "oz",
      },
      {
        name: "Lime Juice",
        amount: 0.5,
        metric: "oz",
      },
      {
        name: "Orange Juice",
        amount: 0.5,
        metric: "oz",
      },
      {
        name: "Honey Syrup",
        amount: 0.5,
        metric: "oz",
      },
      {
        name: "Dashes Angostura Bitters",
        amount: 2.0,
        metric: "",
      },
    ],
    method: ["Blend with 12 oz of ice", "Fill glass with crushed ice"],
    garnish: ["3 cherries and rectangular pinapple chunk"],
  },
  {
    name: "Tipperary",
    ingredients: [
      {
        name: "Irish Whiskey",
        amount: 1.75,
        metric: "",
      },
      {
        name: "Sweet Red Vermouth",
        amount: 1.0,
        metric: "oz",
      },
      {
        name: "Green Chartreuse",
        amount: 0.5,
        metric: "oz",
      },
      {
        name: "Dashes Angostura Bitters",
        amount: 2.0,
        metric: "",
      },
    ],
    method: ["Stirred"],
    garnish: ["Orange slice"],
  },
  {
    name: "Tiramisu Cocktail",
    ingredients: [
      {
        name: "Cognac/Brandy",
        amount: 1.0,
        metric: "oz",
      },
      {
        name: "Kahlua",
        amount: 0.5,
        metric: "oz",
      },
      {
        name: "Creme de Cacao",
        amount: 0.5,
        metric: "oz",
      },
      {
        name: "Heavy Cream",
        amount: 1.0,
        metric: "oz",
      },
      {
        name: "Egg Yolk",
        amount: 1.0,
        metric: "",
      },
      {
        name: "Tbsp Mascarpone Cheese",
        amount: 1.0,
        metric: "",
      },
    ],
    method: ["Shaken"],
    garnish: ["Chocolate powder"],
  },
  {
    name: "Toffee Cocktail",
    ingredients: [
      {
        name: "Amaretto",
        amount: 1.0,
        metric: "oz",
      },
      {
        name: "Baileys",
        amount: 1.0,
        metric: "oz",
      },
      {
        name: "Kahlua",
        amount: 1.0,
        metric: "oz",
      },
      {
        name: "Heavy Cream",
        amount: 2.0,
        metric: "oz",
      },
    ],
    method: ["Shaken"],
    garnish: ["Caramel rim", "Shaved chocolate"],
  },
  {
    name: "Tommy's Margarita",
    ingredients: [
      {
        name: "Agave Tequila",
        amount: 2.0,
        metric: "oz",
      },
      {
        name: "Fresh Lime Juice",
        amount: 1.0,
        metric: "oz",
      },
      {
        name: "Agave Nectar",
        amount: 1.0,
        metric: "oz",
      },
    ],
    method: ["Shaken"],
    garnish: ["Lime slice"],
  },
  {
    name: "Toronto",
    ingredients: [
      {
        name: "Rye Whiskey",
        amount: 2.0,
        metric: "oz",
      },
      {
        name: "Fernet Branca",
        amount: 0.25,
        metric: "oz",
      },
      {
        name: "Simple Syrup",
        amount: 0.25,
        metric: "oz",
      },
      {
        name: "Dashes Angostura Bitters",
        amount: 4.0,
        metric: "",
      },
    ],
    method: ["Stirred"],
    garnish: ["Lemon peel", "Orange peel"],
  },
  {
    name: "Trindad Sour",
    ingredients: [
      {
        name: "Rye Whiskey",
        amount: 0.5,
        metric: "oz",
      },
      {
        name: "Angostura Bitters",
        amount: 1.5,
        metric: "oz",
      },
      {
        name: "Orgeat Syrup",
        amount: 1.0,
        metric: "oz",
      },
      {
        name: "Lemon Juice",
        amount: 0.75,
        metric: "oz",
      },
    ],
    method: ["Shaken"],
    garnish: [],
  },
  {
    name: "Tuxedo",
    ingredients: [
      {
        name: "Old Tom Gin",
        amount: 1.0,
        metric: "oz",
      },
      {
        name: "Dry Vermouth",
        amount: 1.0,
        metric: "oz",
      },
      {
        name: "Bar Spoon Maraschino Luxardo",
        amount: 0.5,
        metric: "",
      },
      {
        name: "Bar Spoon Absinthe",
        amount: 0.25,
        metric: "",
      },
      {
        name: "Dashes Orange Bitters",
        amount: 3.0,
        metric: "",
      },
    ],
    method: ["Stirred"],
    garnish: ["Cherry", "Lemon zest"],
  },
  {
    name: "Ve.N.To",
    ingredients: [
      {
        name: "White Smooth Grappa",
        amount: 1.5,
        metric: "oz",
      },
      {
        name: "Lemon Juice",
        amount: 0.75,
        metric: "oz",
      },
      {
        name: "Honey mix (replace water with chamomile)*",
        amount: 0.5,
        metric: "oz",
      },
      {
        name: "Chamomile cordial",
        amount: 0.5,
        metric: "oz",
      },
      {
        name: "Foam/Few Drops Egg White (Optional)",
        amount: "Fee",
      },
    ],
    method: ["Shaken"],
    garnish: ["Lemon zest", "White grapes"],
  },
  {
    name: "Vesper",
    ingredients: [
      {
        name: "Gin",
        amount: 1.5,
        metric: "oz",
      },
      {
        name: "Vodka",
        amount: 0.5,
        metric: "oz",
      },
      {
        name: "Lillet Blanc",
        amount: 0.25,
        metric: "oz",
      },
    ],
    method: ["Shaken"],
    garnish: ["Lemon zest"],
  },
  {
    name: "Vieux Carre",
    ingredients: [
      {
        name: "Rye Whiskey",
        amount: 1.0,
        metric: "oz",
      },
      {
        name: "Cognac",
        amount: 1.0,
        metric: "oz",
      },
      {
        name: "Sweet Vermouth",
        amount: 1.0,
        metric: "oz",
      },
      {
        name: "Bar Spoon Benedictine",
        amount: 1.0,
        metric: "",
      },
      {
        name: "Dashes Peychaud\u2019s Bitters",
        amount: 2.0,
        metric: "",
      },
    ],
    method: ["Stirred"],
    garnish: ["Orange zest", "Maraschino cherry"],
  },
  {
    name: "Vodka Martini",
    ingredients: [
      {
        name: "Vodka",
        amount: 2.25,
        metric: "oz",
      },
      {
        name: "Dry Vermouth",
        amount: 0.75,
        metric: "oz",
      },
      {
        name: "Juice (For dirty martini)",
        amount: "Olive",
      },
    ],
    method: ["Stirred"],
    garnish: ["Lemon twist", "Olives"],
    tags: ["popular"],
  },
  {
    name: "Washington Apple",
    ingredients: [
      {
        name: "Bourbon Whiskey (Crown Royal or Washington State)",
        amount: 2.0,
        metric: "oz",
      },
      {
        name: "Sour Apple Schnapps",
        amount: 0.75,
        metric: "oz",
      },
      {
        name: "Cranberry Juice",
        amount: 1.0,
        metric: "oz",
      },
    ],
    method: ["Shaken"],
    garnish: ["Apple slice"],
  },
  {
    name: "White Lady",
    ingredients: [
      {
        name: "Gin",
        amount: 1.5,
        metric: "oz",
      },
      {
        name: "Orange Liqueur (Triple Sec)",
        amount: 1.0,
        metric: "oz",
      },
      {
        name: "Lemon Juice",
        amount: 0.75,
        metric: "oz",
      },
      {
        name: "Foam",
        amount: "Fee",
      },
    ],
    method: ["Shaken"],
    garnish: [],
  },
  {
    name: "Wisconsin Old Fashioned",
    ingredients: [
      {
        name: "Brandy (Korbel)",
        amount: 2.0,
        metric: "oz",
      },
      {
        name: "Orange Slices",
        amount: 2.0,
        metric: "",
      },
      {
        name: "Maraschino Cherry",
        amount: 1.0,
        metric: "",
      },
      {
        name: "Sugar Cube",
        amount: 1.0,
        metric: "",
      },
      {
        name: "Dashes Angostura Bitters",
        amount: 3.0,
        metric: "",
      },
    ],
    method: [
      "Muddle (Orange, cherry, sugar cube, angostura)",
      "Add ice to glass",
      "Stir in glass",
      "Top soda",
    ],
    garnish: ["Cherry", "Orange slice"],
  },
  {
    name: "Zombie",
    ingredients: [
      {
        name: "Jamaican dark rum",
        amount: 1.5,
        metric: "oz",
      },
      {
        name: "Gold Puerto Rican rum",
        amount: 1.5,
        metric: "oz",
      },
      {
        name: "Demerara Rum",
        amount: 1.0,
        metric: "oz",
      },
      {
        name: "Fresh lime juice",
        amount: 0.75,
        metric: "oz",
      },
      {
        name: "Falernum",
        amount: 0.5,
        metric: "oz",
      },
      {
        name: "Donn\u2019s Mix*",
        amount: 0.5,
        metric: "oz",
      },
      {
        name: "tsp Grenadine syrup",
        amount: 1.0,
        metric: "",
      },
      {
        name: "dash Angostura bitters",
        amount: 1.0,
        metric: "",
      },
      {
        name: "drops Pernod",
        amount: 6.0,
        metric: "",
      },
    ],
    method: ["Blend with 6 oz ice"],
    garnish: ["Mint leaves"],
  },
];

export default cocktails;
