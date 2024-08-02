# CountDown-Timer
We all have important events we look forward to in life, birthdays, anniversaries, and holidays to name a few. Wouldn't it be nice to have an app that counts down the months, days, hours, minutes, and seconds to an event? Countdown Timer is just that app!

The objective of Countdown Timer is to provide a continuously decrementing display of the he months, days, hours, minutes, and seconds to a user entered event.

## Demo

You can see a live demo of the application [here](https://zplcountdown-timer.netlify.app).

## User Stories

- User can see an event input box containing an event name field, an date field, an optional time, and a 'Start' button.
- User can define the event by entering its name, the date it is scheduled to take place, and an optional time of the event.
- User can see a warning message if the event name is blank.
- User can see a warning message if the event date or time is not entered.
- User can not enter an event date or time that is prior to the current time.
- User can click on the 'Start' button to see the countdown timer start displaying the days, hours, minutes, and seconds until the event takes place.
- User can see the elements in the countdown timer automatically decrement. For example, when the remaining seconds count reaches 0 the remaining minutes count will decrement by 1 and the seconds will start to countdown from 59. This progression must take place from seconds all the way up to the remaining days position in countdown display.
- User can specify more than one event.
- User can see a countdown timers for each event that has been defined.

## Installation
To run the project locally, follow these steps:

1. Clone the repository: `git clone https://github.com/ZhenpengLin111/CountDown-Timer.git`
2. Navigate to the project directory: `cd CountDown-Timer`
3. Install dependencies: `npm install`
4. Run the development server: `npm run dev`
5. The project should now be running at `http://localhost:3000`.

## Usage

Follow these steps to use the app:

**Getting Started**

1. Open the App:

   - Navigate to `http://localhost:3000` in your web browser.

2. Define an Event:

   - In the event input box, enter the name of your event in the "Event Name" field.
   - Select the date and time of your event using the date picker in the "Event Date" field.

3. Start the Countdown:

   - Click the 'Start' button to initiate the countdown timer.
   - The countdown timer will display the days, hours, minutes, and seconds remaining until your event.

4. Manage Events:

   - If you leave the event name blank, you will see a warning message prompting you to enter an event name.
   - If you do not enter a date and time, you will see a warning message prompting you to enter these details.
   - Ensure the event date and time are not in the past; the app will not allow dates or times earlier than the current moment.

5. View Multiple Events:

   - You can define multiple events.
   - For each event you define, a separate countdown timer will appear, each decrementing in real-time.

**Real-Time Countdown**

- The countdown timer will automatically update, decrementing the time remaining until the event.
- When the seconds count reaches 0, the minutes count will decrement by 1, and the seconds will start counting down from 59.
- This progression continues up through the hours, days, and months until the event occurs.