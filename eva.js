function Apple() {
    this.setAppleWeight = function (weight) {
        this.appleWeight = weight;
    };
    this.getAppleWeight = function () {
        return this.appleWeight;
    };
    this.checkApple = function () {
        if (this.appleWeight === 0) {
            alert("The apple was eaten");
        } else {
            alert("The apple weight: " + this.appleWeight);
        }
    };
    this.decreaseApple = function () {
        if (this.appleWeight > 0) {
            this.appleWeight--;
        }
    };
}

var time = 1;

function Human() {
    this.setName = function (name) {
        this.name = prompt("Input name: ")
    };
    this.getName = function () {
        return this.name;
    };
    this.setHumanWeight = function (weight) {
        this.humanWeight = parseInt(prompt("Input weight: "));
    };
    this.getHumanWeight = function () {
        return this.humanWeight;
    };
    this.setGender = function (gender) {
        this.gender = prompt("Select your Gender: MALE or FEMALE ");
    };
    this.getGender = function () {
        return this.gender;
    };
    this.greeting = function () {
        console.log("Hello. My name is: " + this.name + ". Nice to meet you");
    };
    this.showHumanInfo = function () {
        document.write("Name: " + this.name + "<br>" +
            "Gender: " + this.gender + "<br>" +
            "Weight: " + this.humanWeight + " kg" + "<br>");
    };
    this.eatApple = function (Apple) {
        if (confirm(time + " times: " + this.name + " eat Apple ? ")) {
            Apple.decreaseApple();
            Apple.getAppleWeight();
            this.humanWeight++;
            time++;
        } else {
            time++;
        }
    }

}

var apple = new Apple();
apple.setAppleWeight(10);
var human1 = new Human();
human1.setName();
human1.setGender();
human1.setHumanWeight();
human1.greeting();
human1.showHumanInfo();
var human2 = new Human();
human2.setName();
human2.setGender();
human2.setHumanWeight();
human2.greeting();
human2.showHumanInfo();
apple.checkApple();
while (apple.appleWeight > 0) {
    if (human1.eatApple(apple)) {
        document.write(time + " times: " + human1.name + " eat apple. Weight: " +
            human1.humanWeight + " kg" + "<br>" + "Apple weight: " + apple.getAppleWeight() + " kg" + "<br>");
    } else {
        document.write(time + " times: " + human1.name + " not eat apple. Weight: " +
            human1.humanWeight + " kg" + "<br>" + "Apple weight: " + apple.getAppleWeight() + " kg" + "<br>");
    }

    if (human2.eatApple(apple)) {
        document.write(time + " times: " + human2.name + " eat apple. Weight: " +
            human2.humanWeight + " kg" + "<br>" + "Apple weight: " + apple.getAppleWeight() + " kg" + "<br>");
    } else {
        document.write(time + " times: " + human2.name + " not eat apple. Weight: " +
            human2.humanWeight + " kg" + "<br>" + "Apple weight: " + apple.getAppleWeight() + " kg" + "<br>");
    }
}
apple.checkApple();
