import React, { useState, useEffect } from "react";
import NewProductForm from "../components/NewProductForm";
import { ProductCard } from "./ProductCard";
import uuid from "uuid/v1";

const ProductList = () => {
  const [product, setProduct] = useState([
    {
      title: "Fisher-Price Deluxe Kick-n-Play Piano Gym",
      review:
        "My baby absolutely loves this play mat! His grandparents bought this for him for their house and he loves it so much that we had to get one for our house too. He has grown with it over time and I think he will still love it when he is big enough to sit up and play. The songs are cute and there is a good variety of play modes. He loves to kick and swat at the hanging toys. We also really appreciate the quieter music option. It was easy to put together and it’s easy to carry to different rooms when needed. The only two downsides that I have found are the batteries die quickly if you use it daily and the Velcro for the mirror does not stay very well so it’s hard to position the mirror for him to see himself as it keeps sliding down. Overall a really great product for baby!",
      price: 39.88,
      score: 4,
      imgUrl: "https://i.imgur.com/OuhzcCU.jpg",
      id: 1
    },
    {
      title: "HTML and CSS: design and build websites – 1st Edition",
      review:
        "This was one of the first books I read when I was starting to learn web development. Although HTML and CSS are very basic concepts, to a beginner learning them can be overwhelming. This book does a great job of laying out these concepts in an easy to understand manner and overall this book helped me to understand HTML and CSS more. I would highly recommend other Jon Duckett books as well!",
      price: 17.59,
      score: 5,
      imgUrl: "https://i.imgur.com/Qs9FmqE.jpg",
      id: 2
    },
    {
      title: "Fitbit Versa Lite Edition Smart Watch",
      review:
        "I have owned several of the older Fitbit models including the flex and the zip and the flex 2. This is definitely my favorite as it feels more like a smart watch. I love the fact that I can customize my watch face and even have animation if I want! The battery lasts for a long time and it charges up pretty quickly too. I bought a few additional bands so that I can dress it up for more formal events as needed. It’s easy to swap out bands so I can enjoy a variety of styles. It feels like I have a smart watch as I can see my text messages and calls as they come in. There are other features like music that are probably pretty cool but I haven’t tried them out yet.",
      price: 136.98,
      score: 5,
      imgUrl: "https://i.imgur.com/d5Ok7lH.jpg",
      id: 3
    },
    {
      title: "LaClef Womens Knee Length Midi Maternity Dress with Front Pleat",
      review:
        "This dress was a lifesaver for a few formal events I had to attend while pregnant. The pleats in the front make this fit pretty comfortably over a baby bump. It did not feel too tight and was still pretty flattering considering I gained a good amount of weight with my pregnancy. This felt true to size, I wore lg/x-lg sizes in other maternity clothing and the large in this dress fit perfectly. The fabric is actually thick and feels well made. I bought several colors but the black is my favorite and I can still wear this postpartum and for future pregnancies.",
      price: 29.95,
      score: 4,
      imgUrl: "https://i.imgur.com/gZmM3jX.jpg",
      id: 4
    },
    {
      title:
        "Safavieh Lighting Collection Nola Stacked Crystal Ball 16-inch Table Lamp (Set of 2)",
      review:
        "I bought these lamps awhile back because we really needed something for our bedside tables. The crystal looks very nice and modern yet classy with the white shades and gives a nice soft glow. The bulbs were included which was also nice. My only complaint is that the cord does not stay in the slot designed to help it lay flat very well but as long as you don’t move it around it doesn’t really matter that much.",
      price: 46.99,
      score: 4,
      imgUrl: "https://i.imgur.com/PvPlP1X.jpg",
      id: 5
    },
    {
      title:
        "Contigo AUTOSEAL Randolph Vacuum-Insulated Handled Travel Mug with Lock, 16 oz",
      review:
        "This mug is fantastic! I love the handle and the seal works very well. Very thoughtful design so you can drink out of both sides. Perfect size for my cupholder, easy to use for on the go and I love the midnight blue color. Keeps my coffee hot just the way I like it.",
      price: 17.5,
      score: 5,
      imgUrl: "https://i.imgur.com/XIXln7B.jpg",
      id: 6
    },
    {
      title:
        "TOYOUTHS Dressy Bracelet Compatible with Fitbit Versa/Versa 2/Versa Lite & Special Edition Bands for Women Stainless Steel Metal Replacement Wristbands Diamond",
      review:
        "I bought this band for my Fitbit Versa Lite because I needed a dressy watch band for a formal event, but I still really wanted to wear my Fitbit. I love this, is feels well-made and looks beautiful. I got a ton of complements on it! It’s pretty easy to attach to the Fitbit and I love how easy it is to resize just by removing or adding a link. I would definitely recommend this band if you want some bling for your fitness watch. The only real issue that I had was that the stones snag on sweaters and fabric fairly easy but I guess that’s to be expected for this style of jewelry.",
      price: 19.99,
      score: 4,
      imgUrl: "https://i.imgur.com/keQjXLF.jpg",
      id: 7
    },
    {
      title:
        "Kenneth Cole Reaction Renegade 20 inch ABS Expandable 8-Wheel Carry-On, Rose Gold",
      review:
        "I used this suitcase for my carry-on bag for our honeymoon a few summers ago. It’s very spacious and has a lot of great compartments for things. Rolls very smoothly and is very durable. Fits pretty well in overhead compartments but if you over fill it (which can be easy to do with how much space it has) sometimes it’s a bit of a tight fit. Love the rose gold. I would consider getting this in larger sizes if I could find it.",
      price: 74.99,
      score: 5,
      imgUrl: "https://i.imgur.com/gAqsImK.jpg",
      id: 8
    },
    {
      title:
        "Catalina Creations 29.5” Crossfire Fire Pit | Removable Cooking Grill | Fire Pit Outdoors | Campfire Grill",
      review:
        "We got this fire pit for the included grilling grate when we moved to our new house. It’s pretty easy to put together and holds a good amount of wood chips / coals for grilling. The grate is good size too, we were able to fit a rack and a half of ribs plus some potatoes pretty easily. Sturdy construction and looks nice on our back porch.",
      price: 107.99,
      score: 5,
      imgUrl: "https://i.imgur.com/FIPjoew.jpg",
      id: 9
    },
    {
      title: "Sun Bum 3-in-1 Leave In UV Protection Spray – 4 oz",
      review:
        "I love this spray! First of all I have to say that this smells amazing! It’s very refreshing and reminds me of bananas and summertime. Helps to keep my hair feeling soft when it needs a boost in between washes. I have very dry hair and my hair tends to be a bit hay like in the summer but this always helps to soften it up, especially on the ends. Not sure if the UV protection does anything for my hair but I guess it can’t hurt!",
      price: 11.99,
      score: 5,
      imgUrl: "https://i.imgur.com/CfsBAFH.jpg",
      id: 10
    },
    {
      title: "Pup-Peroni Triple Meat Lovers Flavor Dog Snacks, 25 oz",
      review:
        "Our dog absolutely loves these things! They are long and look like beef jerky sticks and honestly they smell pretty amazing. I won’t lie, sometimes when he’s not looking I break them into smaller pieces so they last longer lol. Overall, a lot of treats for the price. He loves all the flavors but this one seems to be his favorite.",
      price: 5.58,
      score: 5,
      imgUrl: "https://i.imgur.com/QCoNSXD.jpg",
      id: 11
    },
    {
      title: "Garden Of Life Raw Fit Protein Powder, Marley Coffee",
      review:
        "I used this protein powder a few years ago and absolutely loved it! I felt like I had a ton of energy and I loved the flavor of the Marley’s coffee with it. I can’t say for sure if it helped me lose weight, but I do feel like it helped with snack cravings. The only thing I hate about this protein powder is that it is really difficult to find in the coffee flavor.",
      price: 34.29,
      score: 5,
      imgUrl: "https://i.imgur.com/fkwy1YD.jpg",
      id: 12
    },
    {
      title: "JA-RU Jumbo Giant Sticky Hand Stretchy Snap Toys",
      review:
        "I loved these things as a kid. We had tons of fun by throwing these things at walls and each other. One time my brother threw one at the ceiling and we waited for it to fall but it didn’t for days. Took our parents a long time to notice it stuck up there lol.",
      price: 4.99,
      score: 5,
      imgUrl: "https://i.imgur.com/sNtWLXC.jpg",
      id: 13
    }
  ]);

  const addProduct = ({ title, review, price, score, imgUrl }) => {
    setProduct([
      ...product,
      {
        title: title,
        review: review,
        price: price,
        score: score,
        imgUrl: imgUrl,
        id: uuid()
      }
    ]);
  };

  useEffect(() => {
    console.log("useEffect hook ran", product);
  }, [product]);

  return (
    <div className="product-list">
      <ProductCard product={product} />
      <NewProductForm addProduct={addProduct} />
    </div>
  );
};

export default ProductList;
