//Define the Blog type; representing the structure of a blog post
export interface Blog {
    title: string;
    date: string;
    description: string;
    image: string;
    imageAlt: string;
    slug: string;
};

// Array of data for blog posts
const blogs: Blog[] = [
    {
    title: "Durrlennium Falcon!",
    date: "October 14, 2025",
    description: "I built this spinoff the Lego Fortnite Durr Buger based off the iconic Star Wars Millennium Falcon!",
    image: "/images/durrlennium_falcon.jpg",
    imageAlt: "Image of the Lego Durrlennium Falcon I built!",
    slug: "durrlennium-falcon-build"
    },
    {
    title: "Feeding Fuzzy Llama",
    date: "October 14, 2025",
    description: "I fed a furry creature at SLO Ranch!",
    image: "/images/feeding.jpg",
    imageAlt: "Image of me feeding a furry creature at SLO Ranch!",
    slug: "feeding-fuzzy-llama"
    }
];

// Export so other files can import and access the blog data
export default blogs;
export { blogs };

