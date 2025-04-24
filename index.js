
// 1.Write a program that takes an array of days like "Mon", "Tue", and "Fri" and uses a switch 
//   statement to print what type of delivery is scheduled on each day.

function scheduleDelivery(days) {
    for (const day of days) {
      let deliveryType;
      switch (day) {
        case "Monday":
          deliveryType = "Standard";
          console.log(`On ${day}, the delivery type is: ${deliveryType}`);
          break;

        case "Tuesday":
          deliveryType = "Express";
          console.log(`On ${day}, the delivery type is: ${deliveryType}`);
          break;

        case "Wednesday":
          deliveryType = "Standard";
          console.log(`On ${day}, the delivery type is: ${deliveryType}`);
          break;

        case "Thursday":
          deliveryType = "Express";
          console.log(`On ${day}, the delivery type is: ${deliveryType}`);
          break;

        case "Friday":
          deliveryType = "Express";
          console.log(`On ${day}, the delivery type is: ${deliveryType}`);
          break;

        case "Saturday":
          deliveryType = "Priority";
          console.log(`On ${day}, the delivery type is: ${deliveryType}`);
          break;

        default:
          console.log(`On ${day}, there is no delivery.`)
      }
    }
  }
  const daysArray = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  scheduleDelivery(daysArray);

  // 2.Create a program that loops through an array of book statuses and prints "Ready to lend" if the 
  //   statuses is "available" or "Checked out" if the statuses is "borrowed".

function checkBookStatuses(statuses){
  for (let i = 0; i <bookStatuses.length; i++){
    if( statuses[i] === "available"){
      console.log("Ready to lend");
    }
    else{
      console.log("Checked out");
    }
    }
};
const bookStatuses = ["available", "borrowed", "available", "borrowed"];
   checkBookStatuses(bookStatuses);

// 3.Given an array of customer ages, write a program that checks each age and prints "Adult" 
//   if the age is 18 or above, and "Minor" otherwise.

function checkCustomerAges(customerAges){
  for (let i = 0; i <customerAges.length; i++){
    if(customerAges[i]>=18){
console.log(`Customer is Adult`);
    }
    else{
      console.log(`Customer is Minor`);
    }
  }
};
  const customerAges = [15,23,54,76,45,37];
  checkCustomerAges(customerAges);


// 4.Write a program using a while loop that simulates a countdown of lives in a game starting from 5 
//   and prints "You have X lives left" on each loop until it reaches 0.

  const countdownLives = () =>{
    let lives = 5;
    while(lives >= 0 ){
        console.log ("You have"+" " +lives+  " "+"lives left");
        lives --;
    }
};
    countdownLives();

    // 5.Using a do...while loop, write a program that loops through an array of user feedback
    //   and prints each comment until the array is empty.

    function printFeedback(feedbackArray) {
      do {
        if (feedbackArray.length > 0) {
          const comment = feedbackArray.shift();
          console.log(comment);
        }
      } while (feedbackArray.length > 0);
    }
    
    const userFeedback = [
      "The app is very user-friendly.",
      "I like the new features!",
      "Good improvements in the settings.",
      "Great job on the latest update.",
    ];
    printFeedback(userFeedback);


  // 6.Write a program that loops through an array of user login statuses and prints
  //   "Welcome back!" if the user is "logged in" or "Please log in" otherwise.

    function checkLoginStatuses(statuses) {
      for (let i = 0; i < statuses.length; i++) {
        if (statuses[i] === "logged in") {
          console.log("Welcome back!");
        } 
        else {
          console.log("Please log in");
        }
      }
    }
    const userStatuses = ["logged in", "not logged in", "logged in", "not logged in"];
    checkLoginStatuses(userStatuses);

    // 7.Write a program that processes an array of support ticket priorities using a switch statement to print how quickly
    //     each one should be addressed based on whether the priority is "low", "medium", or "high".

function processSupportTicketPriorities(priorities){
  priorities.forEach(priority => {
    switch(priority){
      case 'low':
        console.log("Address within 2 days.");
        break;

      case 'medium':
          console.log("Address within 1 day.");
          break;

      case 'high':
            console.log("Address immediately.");
            break;

            default:
              console.log("Address at last.");

      }
    });
  }
      const priorities = ['low', 'medium', 'high', 'undefined']
      processSupportTicketPriorities(priorities);


    // 8.Create a while loop that simulates a quiz countdown from 10 seconds, 
    //    printing each number until it reaches 0.

    function quizCountdown() {
      let timeLeft = 10;
    
      while (timeLeft >= 0) {
        console.log(timeLeft);
        timeLeft--;
      }
    }
    
    quizCountdown();
    

