
// פונקציה להוספת מחלקה שמסתירה את אייקון תפריט ההמבורגר
function toggleNav(){
    document.getElementById("main-nav").classList.toggle("hide-mobile");
}

// גייסון שכולל את עשרת הקטגוריות
const JsonData = {
    "generators": [

        {

            "id": 1,
            "pic": "swimming.jpg",
            "title": "שחייה",
            "abstract": "ענף ספורט אולימפי המתבסס על שחייה עממית.",
            "cat": "ספורט יחידני"     
        },

        {

            "id": 2,
            "pic": "athletics.jpg",
            "title": "אתלטיקה",
            "abstract": "ענף ספורט הכולל תחרויות ריצה, הליכה, קפיצה וזריקה, ושילוב ביניהם בצורת קרב רב.",
            "cat": "ספורט יחידני"
        },

        {

            "id": 3,
            "pic": "fencer.jpg",
            "title": "סייף",
            "abstract": "ספורט לחימה שהתפתח מתוך טכניקת קרב.",
            "cat": "ענפי קרב"
        },
        {

            "id": 4,
             "pic": "judo.jpg",
            "title": "ג'ודו",
            "abstract": "אמנות לחימה יפנית מודרנית וספורט לחימה מקטגוריית הגראפלינג",
            "cat": "ענפי קרב"
        },

        

         {

            "id": 5,
            "pic": "gymnastics.jpg",
            "title": "התעמלות קרקע",
            "abstract": "ענף המשלב תרגילים פיזיים הדורשים כוח, שיווי משקל, גמישות, קואורדינציה וסיבולת.",
            "cat": "ספורט יחידני"
        },

        {

            "id": 6,
            "pic": "football.jpg",
            "title": "כדורגל",
            "abstract": "ענף הספורט הקבוצתי הפופולרי והנפוץ ביותר בעולם. ",
            "cat": "ספורט קבוצתי"
        },

        {

            "id": 7,
            "pic": "rhythmic_gymnastics.jpg",
            "title": "התעמלות אומנותית",
            "abstract": " ספורט אולימפי שבו המתחרות (נשים בלבד) מבצעות תרגילים המשלבים תנועות בלט, אקרובטיקה ומחול עם מכשירי יד",
            "cat": "ספורט יחידני"
        },

        {

            "id": 8,
            "pic": "basketball.jpg",
            "title": "כדורסל",
            "abstract": "משחק כדור בו מתחרות זו בזו שתי קבוצות, בנות חמישה שחקנים כל אחת, הצוברות נקודות באמצעות קליעת כדור כדורסל",
            "cat": "ספורט קבוצתי"
        },

        {

            "id": 9,
            "pic": "riding.jpg",
            "title": "רכיבה",
            "abstract": "רכיבה במובנה הרחב ביותר היא כל פעילות להנהגת בעלי חיים, לרוב תוך ישיבה על גבם. ",
            "cat": "ספורט יחידני"

        },
        {

            "id": 10,
            "pic": "ice_hockey.jpg",
            "title": "הוקי קרח",
            "abstract": "ענף ספורט קצבי ומהיר, אותו משחקים תוך כדי החלקה על קרח",
            "cat": "ספורט קבוצתי"
        },

    ]
};

// בהרצת העמוד הפונקציה תופעל
document.addEventListener("DOMContentLoaded", function (event) {
    MyFunc();
});

//פונקציה שמפעילה את הגייסון בעמוד
function MyFunc(){
    const container = document.getElementById("itemsContainer");
    itemsContainer.setAttribute("class","row");

    JsonData.generators.forEach(function (sport) {

        // Create a new div for each sport
        const sportDiv = document.createElement("div");
        sportDiv.setAttribute("class", "sport-item");
       

        // Create a title element
        const title = document.createElement("h1");
        title.setAttribute("class", "title");
        title.innerHTML=sport.title;
        title.setAttribute("id", `${sport.id}`);

        // Create an image element
        const image = document.createElement("img");
        image.setAttribute("src", `PicMacabia/${sport.pic}`);
        image.setAttribute("class", "box-img")
        
        //generate card body
        const description= document.createElement("div");
        description.setAttribute("class", "description");
        description.innerHTML=sport.abstract;


        // Append elements to sport div
        sportDiv.appendChild(title);
        sportDiv.appendChild(image);
        sportDiv.appendChild(description);

        // Append the div to the container
        itemsContainer.appendChild(sportDiv);
    });
}


// פונקציה שמאפשרת חיפוש חופשי של קטגוריות
function searchItems() {
    const searchTerm = document.getElementById("searchInput").value.trim().toLowerCase();
    const sportItems = document.getElementsByClassName("sport-item");

    //לולאה שעוברת על כל אחת מהקטגוריות.
    // בכל סיבוב בודקת האם מה שהמשתמש הזין בתיבת הטקסט תואם לתיאור הקטגוריה. אם כן מציג,אם לא מעלים
    for (let i = 0; i < sportItems.length; i++) {
        const cat = JsonData.generators[i].cat.toLowerCase();
        if (cat.includes(searchTerm)) {
            sportItems[i].style.display = "block";
        } else {
            sportItems[i].style.display = "none";
        }
    }
}


// פונקציה שמאפשרת חיפוש ספציפי של קטגוריה ספורט יחידני 
function showIndividualSports() {
    const sportItems = document.getElementsByClassName("sport-item");
    
    for (let i = 0; i < sportItems.length; i++) {
        const cat = JsonData.generators[i].cat.toLowerCase();
        if (cat.includes("ספורט יחידני")) {
            sportItems[i].style.display = "block";
        } else {
            sportItems[i].style.display = "none";
        }
    }
}

// פונקציה שמאפשרת חיפוש ספציפי של קטגוריה ספורט קבוצתי 
function showTeamSports() {
    const sportItems = document.getElementsByClassName("sport-item");
    
    for (let i = 0; i < sportItems.length; i++) {
        const cat = JsonData.generators[i].cat.toLowerCase();
        if (cat.includes("ספורט קבוצתי")) {
            sportItems[i].style.display = "block";
        } else {
            sportItems[i].style.display = "none";
        }
    }
}

// פונקציה שמאפשרת חיפוש ספציפי של קטגוריה ענפי קרב 
function showCombatSports() {
    const sportItems = document.getElementsByClassName("sport-item");
    
    for (let i = 0; i < sportItems.length; i++) {
        const cat = JsonData.generators[i].cat.toLowerCase();
        if (cat.includes("ענפי קרב")) {
            sportItems[i].style.display = "block";
        } else {
            sportItems[i].style.display = "none";
        }
    }
}

// פונקציה שמאפשרת איפוס של כל הסינונים
function resetFilters() {
    const sportItems = document.getElementsByClassName("sport-item");

    for (let i = 0; i < sportItems.length; i++) {
        sportItems[i].style.display = "block";
    }
}













    