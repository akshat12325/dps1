var slideIndex = 0;
// var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides((slideIndex += n));
}
function currentSlide(n) {
    showSlides((slideIndex = n));
}
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
// Auto Slide   if you need auto slide ,remove the commit "//"
showSlides();
function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 2000);
    // Change image every 2 seconds
}
window.addEventListener("scroll", function () {
    var height = document.querySelector(".slideshow-container").offsetHeight;
    var scrollTop = window.pageYOffset;

    if (scrollTop >= height - 40) {
        document.querySelector(".nav-container").classList.add("solid-nav");
        document.querySelector(".line").classList.add("solid-nav");
    } else {
        document.querySelector(".nav-container").classList.remove("solid-nav");
        document.querySelector(".line").classList.remove("solid-nav");
    }
});
const locationData = [{
    link: "The Hobbit",
    english: {
        title: "The Hobbit",
        description: "The Hobbit, or There and Back Again is a children's fantasy novel by the English author J. R. R. Tolkien. It was published in 1937 to wide critical acclaim, being nominated for the Carnegie Medal and awarded a prize from the New York Herald Tribune for best juvenile fiction.",
    },
    slider_img: ["https://upload.wikimedia.org/wikipedia/en/3/30/Hobbit_cover.JPG?20120108184125", "https://upload.wikimedia.org/wikipedia/en/3/30/Hobbit_cover.JPG?20120108184125",],
    wiki_link: "https://en.wikipedia.org/wiki/The_Hobbit",
}, {
    link: "The Pillars of the Earth",
    english: {
        title: "The Pillars of the Earth",
        description: "The Pillars of the Earth is a historical fiction novel by Ken Follett that tells the story of a 12th-century monk's ambition to build a Gothic cathedral in the fictional English city of Kingsbridge. The novel is set against a backdrop of turmoil in the monarchy after the sinking of the White Ship, which killed King Henry I's only heir",
    },
    slider_img: ["https://upload.wikimedia.org/wikipedia/en/thumb/b/b3/PillarsOfTheEarth.jpg/220px-PillarsOfTheEarth.jpg", "https://upload.wikimedia.org/wikipedia/en/thumb/b/b3/PillarsOfTheEarth.jpg/220px-PillarsOfTheEarth.jpg",],
    wiki_link: "https://en.wikipedia.org/wiki/The_Pillars_of_the_Earth",
}, {
    link: "The Time Traveler's Wife",
    english: {
        title: "The Time Traveler's Wife",
        description: "This is the extraordinary love story of Clare and Henry who met when Clare was six and Henry was thirty-six, and were married when Clare was twenty-two and Henry thirty. Impossible but true, because Henry suffers from a rare condition where his genetic clock periodically resets and he finds himself pulled suddenly into his past or future. In the face of this force they can neither prevent nor control, Henry and Clare's struggle to lead normal lives is both intensely moving and entirely unforgettable.",
    },
    slider_img: ["https://d3a7xcjwi1uszv.cloudfront.net/015602943X-M.jpg", "https://d3a7xcjwi1uszv.cloudfront.net/015602943X-M.jpg",],
    wiki_link: "https://en.wikipedia.org/wiki/The_Time_Traveler%27s_Wife#:~:text=The%20Time%20Traveler's%20Wife%20is,cope%20with%20his%20frequent%20absences.",
}, {
    link: "The Da Vinci Code",
    english: {
        title: "The Da Vinci Code",
        description: "The Da Vinci Code follows symbologist Langdon and cryptologist Sophie Neveu after a murder in the Louvre Museum in Paris entangles them in a dispute between the Priory of Sion and Opus Dei over the possibility of Jesus and Mary Magdalene having had a child together.",
    },
    slider_img: ["https://upload.wikimedia.org/wikipedia/en/thumb/6/6b/DaVinciCode.jpg/220px-DaVinciCode.jpg", "https://upload.wikimedia.org/wikipedia/en/thumb/6/6b/DaVinciCode.jpg/220px-DaVinciCode.jpg",],
    wiki_link: "https://en.wikipedia.org/wiki/The_Da_Vinci_Code#:~:text=The%20Da%20Vinci%20Code%20follows,having%20had%20a%20child%20together.",
}, {
    link: "And Then There Were None",
    english: {
        title: "And Then There Were None",
        description: "Seven guests, a newly hired secretary and two staff are gathered at a manor house on an isolated island by an unknown absentee host and are killed off one-by-one. They work together to determine who the killer is before it's too late.",
    },
    slider_img: ["https://upload.wikimedia.org/wikipedia/en/2/26/And_Then_There_Were_None_US_First_Edition_Cover_1940.jpg",],
    wiki_link: "https://en.wikipedia.org/wiki/And_Then_There_Were_None",
}, {
    link: "Harry Potter and the Philosopher's Stone",
    english: {
        title: "Harry Potter and the Philosopher's Stone",
        description: "Harry Potter and the Philosopher's Stone is an enthralling start to Harry's journey toward coming to terms with his past and facing his future. It was the first book written by Rowling, and she was praised for creating well-rounded characters and a fully realized wizard universe that coexisted with the present world.",
    },
    slider_img: ["https://upload.wikimedia.org/wikipedia/en/thumb/6/6b/Harry_Potter_and_the_Philosopher%27s_Stone_Book_Cover.jpg/220px-Harry_Potter_and_the_Philosopher%27s_Stone_Book_Cover.jpg"],
    wiki_link: "https://en.wikipedia.org/wiki/Harry_Potter_and_the_Philosopher%27s_Stone",
}, {
    link: "Angels & Demons",
    english: {
        title: "Angels & Demons",
        description: "The plot follows Harvard symbologist Robert Langdon, as he tries to stop the Illuminati, a legendary secret society, from destroying Vatican City with the newly discovered power of antimatter.",
    },
    slider_img: ["https://upload.wikimedia.org/wikipedia/en/thumb/5/5f/AngelsAndDemons.jpg/220px-AngelsAndDemons.jpg"],
    wiki_link: "https://en.wikipedia.org/wiki/Angels_%26_Demons",
}, {
    link: "Harry Potter",
    english: {
        title: "Harry Potter",
        description: "Harry Potter is a series of seven fantasy novels written by British author J. K. Rowling. The novels chronicle the lives of a young wizard, Harry Potter, and his friends, Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry.",
    },

    slider_img: ["https://i.ebayimg.com/images/g/nm8AAOSwLy1eO0gT/s-l1200.jpg"],
    wiki_link: "https://en.wikipedia.org/wiki/Harry_Potter",
}, {
    link: "Quotations from Chairman Mao Tse-tung",
    english: {
        title: "Quotations from Chairman Mao Tse-tung",
        description: "Socialism must be developed in China, and the route toward such an end is a democratic revolution, which will enable socialist and communist consolidation over a length of time.",
    },
    slider_img: ["https://upload.wikimedia.org/wikipedia/en/thumb/9/90/Quotations_from_Chairman_Mao_Tse-Tung_bilingual.JPG/220px-Quotations_from_Chairman_Mao_Tse-Tung_bilingual.JPG"],
    wiki_link: "https://en.wikipedia.org/wiki/Quotations_from_Chairman_Mao_Tse-tung#:~:text=Socialism%20must%20be%20developed%20in,on%20the%20failings%20of%20capitalism.",
}, {
    link: "The Lord of the Rings",
    english: {
        title: "The Lord of the Rings",
        description: "The Lord of the Rings by J.R.R. Tolkien tells the story of the War of the Ring in the fictional world of Middle-earth. The long novel, commonly published as three volumes and mistakenly called a trilogy, centers around the magical One Ring, which was discovered by Bilbo Baggins in the earlier novel The Hobbit.",
    },
    slider_img: ["https://upload.wikimedia.org/wikipedia/en/thumb/e/e9/First_Single_Volume_Edition_of_The_Lord_of_the_Rings.gif/220px-First_Single_Volume_Edition_of_The_Lord_of_the_Rings.gif"],
    wiki_link: "https://en.wikipedia.org/wiki/The_Lord_of_the_Rings",
}, {
    link: "A Clockwork Orange",
    english: {
        title: "A Clockwork Orange",
        description: "a thrill-seeking sociopath who robs, rapes, and assaults innocent people for his own amusement. Intellectually, he knows that such behaviour is morally wrong, saying that you can't have a society with everybody behaving in my manner of the night.",
    },
    slider_img: ["https://upload.wikimedia.org/wikipedia/en/thumb/2/23/Clockwork_orange.jpg/220px-Clockwork_orange.jpg"],
    wiki_link: "https://en.wikipedia.org/wiki/A_Clockwork_Orange_(novel)",
}, {
    link: "Cosmos (Sagan book)",
    english: {
        title: "Cosmos (Sagan book)",
        description: "Cosmos by Carl Sagan takes readers on a journey through the universe, exploring the vastness of space and the mysteries of our existence. It delves into topics such as the origins of life, the evolution of intelligence, and the possibility of extraterrestrial life.",
    },
    slider_img: ["https://upload.wikimedia.org/wikipedia/en/9/91/Cosmos_book.gif",],
    wiki_link: "https://en.wikipedia.org/wiki/Cosmos_(Sagan_book)",
}, {
    link: "How to Win Friends and Influence People",
    english: {
        title: "How to Win Friends and Influence People",
        description: "Begin with praise and honest appreciation. Call attention to people's mistakes indirectly. Talk about your own mistakes before criticizing the other person. Ask questions instead of giving direct orders.",
    },
    slider_img: ["https://upload.wikimedia.org/wikipedia/en/thumb/3/33/How-to-win-friends-and-influence-people.jpg/220px-How-to-win-friends-and-influence-people.jpg",],
    wiki_link: "https://en.wikipedia.org/wiki/How_to_Win_Friends_and_Influence_People",
}, {
    link: "The Godfather(A Novel)",
    english: {
        title: "The Godfather(A Novel)",
        description: "The Corleone Family prizes loyalty and considers betrayal to be a transgression punishable by death. However, because the Mafia's goal is to seek power and make money by most any illegal means possible, it is a breeding ground for traitors seeking to get more than they currently have.",
    },
    slider_img: ["https://m.media-amazon.com/images/I/81IHPwG1tbL._AC_UF1000,1000_QL80_.jpg",],
    wiki_link: "https://en.wikipedia.org/wiki/The_Godfather_(novel)#:~:text=Originally%20published%20in%201969%20by,from%20early%20childhood%20to%20adulthood.",
}, {
    link: "The Girl on the Train",
    english: {
        title: "The Girl on the Train",
        description: "Synopsis. Rachel takes the same commuter train every morning and night. Every day she rattles down the track, flashes past a stretch of cozy suburban homes, and stops at the signal that allows her to daily watch the same couple breakfasting on their deck.",
    },
    slider_img: ["https://m.media-amazon.com/images/I/71vWnStCnEL._AC_UF1000,1000_QL80_.jpg",],
    wiki_link: "https://en.wikipedia.org/wiki/The_Girl_on_the_Train_(novel)",
}, {
    link: "The Sisters Brothers",
    english: {
        title: "The Sisters Brothers",
        description: "The darkly comic story takes place in Oregon and California in 1851. The narrator, Eli Sisters, and his brother Charlie are assassins tasked with killing Hermann Kermit Warm, an ingenious prospector who has been accused of stealing from the Sisters' fearsome boss, the Commodore.",
    },
    slider_img: ["https://upload.wikimedia.org/wikipedia/en/c/c2/Thesistersbrotherscover.jpg",],
    wiki_link: "https://en.wikipedia.org/wiki/The_Sisters_Brothers#:~:text=The%20darkly%20comic%20story%20takes,'%20fearsome%20boss%2C%20the%20Commodore.",
},];

document.addEventListener("DOMContentLoaded", function () {
    var Library = document.getElementById("LibrarySlider");
    locationData.forEach((data, index) => {
        let card = document.createElement("div");
        card.className = "Library-card";
        card.onclick = function () {
            window.location.href = data.link;
        }
            ;
        let imageContainer = document.createElement("div");
        imageContainer.style.cssText = " position:relative; ";
        let bgImage = document.createElement("div");
        bgImage.style.backgroundImage = `url(${data?.slider_img[0]})`;
        bgImage.style.backgroundSize = "cover";
        bgImage.style.filter = "blur(3px)";
        bgImage.style.position = "absolute";
        bgImage.style.width = "250px";
        bgImage.style.height = "300px";
        bgImage.style.position = "absolute";
        bgImage.style.zIndex = "-1";
        bgImage.style.top = "0";

        let image = document.createElement("img");
        image.src = data?.slider_img[0];

        let content = document.createElement("div");
        content.className = "Library-content";
        content.innerHTML = `<h2>${data?.english?.title}</h2>
    <a href='${data?.link}'> Know more  &#8594;</a>`;
        imageContainer.appendChild(bgImage);
        imageContainer.appendChild(image);

        card.appendChild(imageContainer);
        card.appendChild(content);
        Library.appendChild(card);
    }
    );
});
