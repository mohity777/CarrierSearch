Website Link:https://carrier-search-kmcp.vercel.app/

About
A multi-step carrier search wizard in React and TypeScript that guides freight brokers through a process of finding suitable carriers. The wizard should allow the freight broker user to input their criteria, and return the correct results based on these preferences.

Structure:

A) Screens
   1) CarrierSearchScreen: It displays the carrier list and filters that can be applited
    components:
        1) Carrier Listing: To show list of carriers
            components
                1) Carrier Card: Displays info of carrier 
        2) Carrier Filter: Filter such as cost, on time delivery, rating etc.
2) Booking Confirmation Screen: It is confirmation screen for booking a specific carrier
    components:
        1) BookingConfirmed: to show successful state of booking

B) Libraries 
    1) react-router-dom for handling navigation between screens
    2) react-simple-star-rating for showing star rating for carrier
    3) lottie-react for using lottie for congratulations
    4) Chakra UI

Desktop View

![Alt text](/src/assets/1.png?raw=true "Optional 1") 

![Alt text](/src/assets/2.png?raw=true "Optional 1") 

![Alt text](/src/assets/3.png?raw=true "Optional 1") 

Mobile View

![Alt text](/src/assets/4.png?raw=true "Optional 1") 

![Alt text](/src/assets/5.png?raw=true "Optional 1") 

