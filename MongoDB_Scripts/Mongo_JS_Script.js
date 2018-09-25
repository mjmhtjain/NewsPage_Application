//Create Database with name: NewsPage

//use NewsPage

db.createCollection('UserDetails');
db.createCollection('NewsArticles');

db.UserDetails.insertMany([
	{ 
    "_id" : ObjectId("5ba29cbda00e1a3763ffc3da"), 
    "userId" : "ojn5kor", 
    "name" : "Mohit", 
    "email" : "mjmhtjain@gmail.com", 
    "password" : "$2b$04$hz17OiyDYAlJiYYwQEFHM.ykWdrqkUlsNwMlZkkm0PN6nGfflKDuS"
}
]);


db.NewsArticles.insertMany([
	{
	"_id" : ObjectId("5ba7bd00392cb434506d1ae7"),
	"title" : "India is the first country to have a ‘Cooling Action Plan’ under the Montreal Protocol | Business Insider India",
	"URL" : "https://www.businessinsider.in/India-is-the-first-country-to-have-a-Cooling-Action-Plan-under-the-Montreal-Protocol/articleshow/65869000.cms",
	"clicks" : 0,
	"__v" : 0
}
]);