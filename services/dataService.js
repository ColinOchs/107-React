var catalog = [
    {
        _id: "fhklajshdflkjashdf",
        title: "farfenugen",
        price: 12.99,
        stock: 34,
        category: "stationary",
        image: "https://picsum.photos/200/300",
        discount: 4,
        
    },
    {
        _id: "glgkdjlgkjlkjdf",
        title: "garbanzo",
        price: 24.99,
        stock: 23,
        category: "stationary",
        image: "https://picsum.photos/200/300",
        discount: 2,
    },
    {
        _id: "wasdfalglkjg",
        title: "winkerbean",
        price: 23.99,
        stock: 13,
        category: "stationary",
        image:"https://picsum.photos/200/300",
        discount: 4,
    },
    {
        _id: "alsdkjflkdjasflkj",
        title: "cockatoo",
        price: 132.99,
        stock: 4,
        category: "stationary",
        image: "https://picsum.photos/200/300",
        discount: 0,
        
    },
    {
        _id: "oieurohisdfoh",
        title: "nice-a-roni",
        price: 19.99,
        stock: 34,
        category: "calendar",
        image: "https://picsum.photos/200/300",
        discount: 10,
        
    },
];


class DataService{
    getCatalog(){
        // retrieve the data from the server
        // var catalog = request();
        // return mock data
        return catalog;
    }
}

export default DataService;