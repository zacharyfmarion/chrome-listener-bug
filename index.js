class FriendDatabase extends Dexie {
  constructor() {
    super("FriendDatabase");
    this.version(1).stores({
      friends: "++id,name,age"
    });
    this.friends = this.table("friends");
  }
}

const db = new FriendDatabase();

setInterval(() => {
	db.transaction("r", db.friends, () => {
		db.friends
		.where("age")
		.below(25)
		.toArray()
		.then((data) => {
		console.log(`My young friends: ${JSON.stringify(data)}`);
		});
	});
}, 5000);