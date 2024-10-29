# Finofo - Take Home Challange

This project implements a responsive, interactive application that fetches fruit data, displays it in list and table formats, allows users to categorize and add items to a "jar," and visually represents the jar's contents using a pie chart. Below are the requirements, implementation steps, and additional notes.

## Features and Requirements

### Data Fetching

- **API**: The original Fruityvice API was initially intended as the data source. However, the Fruityvice API was down, and CORS was not enabled for the given endpoint. To proceed, I created a custom API with the same response structure as Fruityvice, hosted at:
  - **API Repository**: [Finofo-Api Repository](https://github.com/Rahulkaradwal/finofo-Api)
  - **API Endpoint**: [https://finofo-api.vercel.app/fruits/](https://finofo-api.vercel.app/fruits/)

### Layout

The application layout is divided into two main sections:

1. **Left Section**: Displays a list of fruits, with options to toggle between list and table views.
2. **Right Section**: Displays the jar with selected fruits, along with the total calorie count and a pie chart representing calorie distribution by fruit.

### Group By Functionality

The application includes a "Group by" dropdown that enables grouping of fruits by various attributes:

- **Options**: `None`, `Family`, `Order`, and `Genus`
  - **Default**: The default selection is "None," displaying a flat list of fruits.
  - **Collapsible Grouping**: When a group is selected (Family, Order, Genus), the list displays as a collapsible structure with each header representing the chosen group (e.g., Family "Rosaceae" for `Family` grouping).

**Note**: The "Group by" dropdown is disabled when the table view is enabled.

### Fruit List

The fruit list supports two views:

1. **List View**: Displays each fruit entry in the format `{fruit name} ({amount of calories})`.
2. **Table View**: Displays the fruits in a table format with the following columns:
   - Name
   - Family
   - Order
   - Genus
   - Calories

**Add Button Functionality**:

- Each fruit entry has an "Add" button to add it to the jar. The app supports adding the same fruit multiple times.
- When grouped, an "Add" button next to the group name allows adding all fruits within that group to the jar at once.

### Jar Functionality

The jar includes the following functionalities:

- **Fruit List**: Displays a list of all added fruits.
- **Calorie Calculation**: Calculates and displays the total calorie count for the fruits added to the jar.
- **Pie Chart**: Visually represents the distribution of calories per fruit in a pie chart, providing a quick overview of calorie contributions.

### Additional Notes

- **Libraries**: The app uses `react-chartjs-2` and `chart.js` for charting.
- **Data Handling**: Best practices for data fetching and error handling are implemented to simulate a real-world scenario.
- **User Experience**: The app is designed to be visually appealing and responsive across different screen sizes.
- **Deployment**: The app is hosted on a public GitHub repository and deployed live on Vercel.

## Instructions

1. Clone the repository and install dependencies with `npm install`.
2. Run the app locally with `npm start`.
3. To view the app online, visit the live deployment link: [Deployed App Link](https://rahul-finofo-solution.vercel.app/).

## GitHub Repository

View the code repository at [GitHub Repository Link](https://github.com/Rahulkaradwal/finofo-exercise).
