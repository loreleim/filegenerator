class Database {
  constructor() {
    this.multidimensionalArray = {
      About: [
        {
          name: "CDL Mockups",
        }
      ]
    };

    this.html = "<h1>Hey</h1>";

    this.formatted = 
`
<!DOCTYPE html>
  <html lang="en">
</html>
`
  }
}

const store = new Database();
export default store;