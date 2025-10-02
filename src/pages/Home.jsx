import { useState } from "react";
import RecipeCard from "../assets/components/RecipeCard";

function Home() {
  const [search, setSearch] = useState("");

  const recipes = [
    {
      id:1,
      name: "Black Forest Cake",
      desc: "Yummy and Tasty",
      image: "https://www.generalmillsindiabfs.in/wp-content/uploads/2022/11/Black-Forest.jpg",
      ingredients: ["Flour - 25g", "cherry - 2g", "Sugar - 16.6g", "Milk - 20g", "Baking powder - .50g","Baking soda - .20g","Venilla extract - .30g","Egg - 2","Coca powder - 5g","Whipping cream - 60g"],
      instructions: "Preheat the oven to 180c ,take a bowl add flour baking powder & soda & sugar & egg & milk mixture with 1o min,take cake pot fill in butter Paper next pour the mixer into the pot next take bake the cake.",
      nutrition: { calories: 235, protein: "3.2g", fat: "6.7g", carbs: "40.6g" }
    },
    {
      id: 2,
      name: "Veg pulao",
      desc: "Basmathirice mixed with vegetables and spices",
      image: "https://thewannabecook.com/wp-content/uploads/2022/08/IMG_20220514_153133-1.jpg",
      ingredients: ["Basmathi rice - 2 cups",  "Water - 3cups","Mixed vegetables - 2 cups","Onion - 2", "Green chilli - 2", "Ginger Garlic paste - 1tbsp", 
        "Bayleaf - 1","Cinnamon - 1 stick","Cloves - 2","Cardamom - 2","Cumin seeds - 1 tsp","Ghee/Oil - 2 tbsp","Salt - to taste"],
      instructions: "Soak rice 30 min.Heat oil/ghee in a pot. Add whole spices & saute. Add onion, green chili & ginger-garlic paste. Sauté till golden brown. Add mixed vegetables & sauté for 2-3 min. Add soaked rice & sauté for 2 min. Add water & salt. Bring to boil. Cover & cook on low heat till rice is done.",
      nutrition: { calories: 280, protein: "6g", fat: "6g", carbs: "52g" }
    },
    {

      id: 3,
      name: "Veg Pasta",
      desc: "Delicious Veg Pasta",
      image: "https://www.budgetbytes.com/wp-content/uploads/2021/10/One-Pot-Veggie-Pasta-bowl-500x500.jpg",
      ingredients: ["Pasta - 200g", "Onion - 1", "Tomato - 1", "Bell pepper - 1", "Olive oil - 2 tbsp", "Garlic - 2 cloves", "Basil - 1 tsp", "Salt - to taste"],
      instructions: "Cook pasta. Sauté onion, garlic, and bell pepper. Add tomato and basil. Mix with pasta.",
      nutrition: { calories: 280, protein: "14g", fat: "18g", carbs: "12g" }
    },
    {
      id: 4,
      name: "Paneer Tikka",
      desc: "Starter made with marinated paneer",
      image: "https://sharethespice.com/wp-content/uploads/2024/02/Paneer-Tikka-Featured.jpg",
      ingredients: ["Paneer - 500g", "Onion - 2", "Tomato - 2", "Curry leaves", "Spices"],
      instructions: "Clean paneer. Fry onion & tomato. Add spices & curry leaves. Add paneer & cook till done.",
      nutrition: { calories: 250, protein: "30g", fat: "12g", carbs: "8g" }
    },
    {
      id: 5,
      name: "Vadai",
      desc: "South Indian Urad dal lentil fritters",
      image: "https://www.awesomecuisine.com/wp-content/uploads/2014/12/medhu-vadai.jpg",
      ingredients: ["Urad dal - 250g", "Onion - 1", "Green chilli - 1", "Curry leaves", "Spices"],
      instructions: "Soak lentils. Grind to a paste. Mix with chopped onion, green chilli, and spices. Shape into fritters and deep fry.",
      nutrition: { calories: 90, protein: "3g", fat: "4g", carbs: "10g", fib: "1.5g" }
    },
    {
      id: 6,
      name: "Mutton Gravy",
      desc: "Spicy South Indian mutton curry",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzj2Sx8dyRohKeuLx262pbipgzUFjD28z44Q&s",
      ingredients: ["Mutton - 500g", "Onion - 2", "Tomato - 2", "Curry leaves", "Spices"],
      instructions: "Clean mutton. Fry onion & tomato. Add spices & curry leaves. Add mutton & cook till done.",
      nutrition: { calories: 250, protein: "30g", fat: "12g", carbs: "8g" }
    },
    {
      id: 7,
      name: "Halwa",
      desc: "Tirunelveli special and yummy sweet", 
      image: "https://5.imimg.com/data5/ANDROID/Default/2021/4/RO/EU/UK/66301162/prod-20210412-235353971899798281958864-jpg.jpg",
      ingredients: ["Wheat flour - 100g", "Sugar - 200g", "Ghee - 100g", "Cardamom - 1 tsp", "Cashews - 10"],
      instructions: "Roast wheat flour in ghee. Add sugar and water. Cook till thick. Garnish with cardamom and cashews.",
      nutrition: { calories: 360, protein: "4g", fat: "14g", carbs: "55g" }
    },
    {
      id: 8,
      name: "Fruit Salad",
      desc: "Refreshing fruit salad with a spicy twist",
      image: "https://www.foxyfolksy.com/wp-content/uploads/2018/12/filipino-fruit-salad-640-500x500.jpg",
      ingredients: ["Mixed fruits - 500g", "Honey - 1 tsp", "Milk - 1 cup", "cashew - for garnish"],
      instructions: "Chop fruits. Mix with Honey and Milk. Garnish with cashews.",
      nutrition: { calories: 180, protein: "2g", fat: "1g", carbs: "42g" }
    },
    {
      id: 9,
      name: "Veg Sandwich",
      desc: "Perfect evening dish for kids",
      image: "https://i.ytimg.com/vi/7_rS8UgmHag/maxresdefault.jpg",
      ingredients: ["Bread slice - 4", "Butter - 2tabs", "Green Onion - 2", "Tomato - 1", "Green chutney - 2 tbsp", "Spices"],
      instructions: "Spread butter and green chutney on bread. Layer with sliced vegetables. Sprinkle spices. Grill till golden.",
      nutrition: { calories: 220, protein: "6g", fat: "8g", carbs: "30g" }
    },
    {
      id: 10,
      name: "Prawn fry",
      desc: "Spicy Sea food ",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqL_dXJdVNsEe36fIifVFUzwPkH-HIJOsQ5g&s",
      ingredients: ["Prawns - 500g", "Onion - 2", "Tomato - 1", "Ginger Garlic paste - 1 tbsp", "Turmeric - 1/2 tsp",
        "Red chilli powder - 2 tsp", "Coriander Powder - 1 tsp", "Black Pepper - 1/2 tsp", 
        "Garam Masala - 1 tsp", "Curry leaves", "Salt","Oil"],
      instructions: "Clean prawns and marinate with turmeric red chilli powder  salt and lemon juice. Fry onion & tomato 15 min.  add Ginger garlic paste and tomato still cook Add prawns & cook till done.",
      nutrition: { calories: 250, protein: "30g", fat: "12g", carbs: "8g" }
    },
    {
      id: 11,
      name: "Tender Coconut Payasam",
      desc: "Indian traditional sweet dish",
      image: "https://www.foodiaq.com/wp-content/uploads/2025/03/Tender-coconut-payasam.jpg",
      ingredients: ["Tender coconut - 1", "Jaggery - 100g", "Rice - 50g", "Cardamom - 1 tsp", "Cashews - 10"],
      instructions: "dissolve Milk and sugar add coconut milk and coconut water mixed cardamom powder add coconut flesh. Add raisins and cashews.",
      nutrition: { calories: 180, protein: "3g", fat: "6g", carbs: "28g" }
    },
    {
      id: 12,
      name: "Chicken Biryani",
      desc: "Delicious Hyderabadi chicken biryani",
      image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/12/chicken-biryani.jpg",
      ingredients: ["Chicken - 1kg", "Basmati rice - 500g", "Onion - 3", "Spices", "Curd"],
      instructions: "Marinate chicken. Fry onion & spices. Layer rice & chicken. Cook on dum.",
      nutrition: { calories: 400, protein: "25g", fat: "15g", carbs: "50g" }
    },
    {
      id: 13,
      name: "Paneer Butter Masala",
      desc: "Rich creamy paneer curry",
      image: "https://www.indianveggiedelight.com/wp-content/uploads/2017/09/instant-pot-paneer-butter-masala-featured.jpg",
      ingredients: ["Paneer - 200g", "Butter - 50g", "Tomato puree", "Cream", "Spices"],
      instructions: "Fry tomato puree with spices. Add paneer cubes. Cook in butter & cream.",
      nutrition: { calories: 300, protein: "18g", fat: "20g", carbs: "12g" }
    },
     {
      id: 14,
      name: "Malai Kofta ",
      desc: "North Indian showstopper crispy",
      image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/06/malai-kofta-recipe.jpg",
      ingredients: ["Paneer - 150g", "Boiled potato - 50g","Corn Flour - 2 tbsp", "Green Chilli - 1", "Coriander Leaves","Salt","Oil"],
      instructions: "Heat oil or ghee add onion green chilli,ginger garlic paste. Add boiled potato and paneer. Mix well.",
      nutrition: { calories: 320, protein: "9g", fat: "20g", carbs: "22g" }
    },
 
     {
      id: 15,
      name: "Ambur Mutton Briyani",
      desc: "Ambur special",
      image: "https://media-cdn.tripadvisor.com/media/photo-s/0f/e8/18/c3/mutton-biryani.jpg",
      ingredients: ["Mutton - 500g", "Onion - 3", "Tomato - 2", "Curd - 100g","Green chilli - 3","Red Chilly Powder - 2 tsp",
        "Turmeric - 1/2 tsp","Garam Masala - 1 tsp", "Salt", "Spices","Oil","Coriander Leaves","Mint Leaves","Seeraga samba rice - 2 cups"],
      instructions: "Take Cooker heat oil and ghee add spices on medium flame. Add sliced onions and sauté until golden brown.add ginger garlic paste fry still raw smell add tomato fry it mushy ,add red chilli powder,turmeric poder,salt Add marinated mutton and cook until browned. Layer with soaked rice and cook on low flame.",
      nutrition: { calories: 420, protein: "24g", fat: "14g", carbs: "55g" }
    },
    {
      id: 16,
      name: "Gulab Jamun",
      desc: "Indian delicious sweet dish",
      image: "https://static.vecteezy.com/system/resources/previews/026/516/520/large_2x/delicious-gulab-jamun-isolated-on-white-background-free-photo.jpg",
      ingredients: ["Milk powder - 1 cup", "Maida flour - 1/2 cup", "Baking Powder - 1/4 tsp", "Milk - 1/4 cup ","Ghee  - 2 tbsp","Sugar - 2 cup",
        "Cardamom - 3","Rose water -1 tsp","Saffron - a pinch","Ghee/oil - for frying"],
      instructions: "Boil sugar and water good consistency add rosewater and saffron.Take a bowl  add milk powder,Maida ,Baking powder mix well. Make small balls and fry until golden brown next shift into warm sugar syrup.",
      nutrition: { calories: 150, protein: "2g", fat: "7g", carbs: "20g" }
    },
    {
      id: 17,
      name: "Chicken Noodles",
      desc: "Delicious chicken noodles Indo-Chinese style dish",
      image: "https://sinfullyspicy.com/wp-content/uploads/2023/01/1200-by-1200-images-5.jpg",
      ingredients: ["Noodles - 200g", "Bonless Chicken - 200g", "Onion - 1", "Carrot- 1","Capsicum - 1","Cabbage - 1cup","Spring Onion - 2tbsp","Green Chilli - 2","Ginger Garlic paste - 1tsp",
        "Soy sauce - 1tbsp", "Chilli sause - 1tbsp", "Tomato Sauce - 1tbsp","Vinegar - 1tbsp","Black Pepper - 1/2 tsp","Salt","Oil"],
      instructions: "Fry chicken piece .Boil noodles and drain. Heat oil in a wok. Add ginger garlic paste and green chilli. Add chicken pieces and cook till done. Add chopped vegetables and sauté. Add soy sauce, chili sauce, tomato sauce, vinegar, salt, and pepper. Mix in noodles and toss well.",
      nutrition: { calories: 320, protein: "20g", fat: "10g", carbs: "40g" }
    },
    {
      id: 18,
      name: "Aloo Paratha",
      desc: "Delicious stuffed flatbread",
      image: "https://i.ytimg.com/vi/3rkXplTcAOA/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLA3BM4CTpDfbe7QkBOZ57UiSiu2uQ",
      ingredients: ["Whole wheat flour - 200g", "salt - 1/2 tsp", "Oil","Water",
        "For stuffing:","Boiled Potato - 3","Onion - 1","Green chilli - 1","Ginger - 1tsp","Coriander leaves - 2tbsp","Cumin powder - 1/2 tsp","Garam masala - 1/2 tsp","Red chilli powder - 1/2 tsp","Amchur powder - 1/2 tsp","Salt"],
      instructions: "Prepare Dough: Mix flour, salt, and water to make a soft dough. Cover and rest for 20 min.Prepare Stuffing: Mash boiled potatoes. Add chopped onion, green chili, ginger, coriander leaves, and salt. Mix well.Make Parathas: Divide dough into equal portions. Roll out one portion, place stuffing in the center, and seal. Roll out gently into a flatbread. Cook on a hot griddle with oil until golden brown on both sides.",
      nutrition: { calories: 210, protein: "5g", fat: "6g", carbs: "35g" }
    },
     {
      id: 19,
      name: "Chana Masala ",
      desc: "North Indian chickpea curry",
      image: "https://pickyeaterblog.com/wp-content/uploads/2023/03/chole-masala-recipe.jpg",
      ingredients: ["White chana - 1 cup", "Onion - 2", "Tomato - 2", "Green Chilli - 1", "Coriander Leaves", "Ginger Garlic Paste - 1 tsp",
        "Turmeric - 1/2 tsp","Red Chilli Powder - 1/2 tsp","Coriander powder - 1 tsp","Cumin Powder - 1/2 tsp","Chana Masala - 1/2 tsp",
        "Bayleaf - 1","Cinnamon - 1","Cloves - 3","Cuminseed - 1tsp","Salt", "Oil"],
      instructions: "Overnight soak the chana. Pressure cook with water and salt until soft. Heat oil in a pan. Add whole spices and saute. Add chopped onions and saute till golden brown. Add ginger garlic paste and green chili. Sauté for a minute. Add chopped tomatoes and cook till mushy. Add turmeric, red chili powder, coriander powder, cumin powder, and chana masala. Cook the masala till oil separates. Add cooked chana along with some water. Simmer for 10-15 minutes. Garnish with coriander leaves.",
      nutrition: { calories: 280, protein: "12g", fat: "8g", carbs: "42g" }
    },
 
     {
      id: 20,
      name: "Samosa",
      desc: "Crispy stuffed pastry",
      image: "https://www.samosa-recipe.com/wp-content/uploads/2019/01/aloo-samosa.jpg",
      ingredients: ["Maida - 2 cups", "Ajwain - 1/2 tsp","Salt" ,"Oil","water", "For filling:","Potato boiled - 3", "Green peas - 1/2 cup", 
        "Onion - 1","Green Chilli - 2","Ginger -1 tsp","Turmeric - 1/2 tsp","Red Chilli Powder - 1/2 tsp","Coriander powder - 1 tsp","Cumin Powder - 1/2 tsp"],
      instructions: "Prepare Dough: Mix maida, ajwain, salt, and water to make a smooth dough. Rest for 30 minutes. Prepare Filling: Mash boiled potatoes and mix with green peas, chopped onion, green chili, ginger, and spices. Assemble Samosas: Roll out dough, cut into circles, fill with potato mixture, and seal. Fry until golden brown.",
      nutrition: { calories: 150, protein: "3g", fat: "7g", carbs: "20g" }
    },
    {
      id: 21,
      name: "Shawarma",
      desc: "Middle Eastern wrap",
      image: "https://hips.hearstapps.com/hmg-prod/images/190130-chicken-shwarma-horizontal-1549421250.png?crop=0.668xw:1.00xh;0.168xw,0&resize=1200:*",
      ingredients: ["Pita bread - 4", "Chicken - 500g", "Yogurt - 1 cup", "Garlic - 4 cloves", "Cumin - 1 tsp", "Paprika - 1 tsp", "Salt - to taste", "Lettuce - 1 cup", "Tomato - 1", "Cucumber - 1"],
      instructions: "Marinate chicken with yogurt, garlic, cumin, paprika, and salt for 1 hour. Grill or pan-fry until cooked. Slice thinly. Assemble wraps with chicken, lettuce, tomato, and cucumber in pita bread.",
      nutrition: { calories: 350, protein: "40g", fat: "20g", carbs: "20g" }
    }
 
  
 
  
 
  
 
  ];

  const filtered = recipes.filter((r) =>
    r.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search recipes..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-2 mb-4 rounded border"
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((r) => (
          <RecipeCard key={r.id} recipe={r} />
        ))}
      </div>
    </div>
  );
}

export default Home;
