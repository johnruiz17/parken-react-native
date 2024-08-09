## Parken 
<img width="352" alt="Screenshot 2024-08-08 at 8 59 54 PM" src="https://github.com/user-attachments/assets/31b4b9d4-d5f7-4383-939b-3ea051943107">

## Description
This React Native application empowers users to find real-time parking information within a specified location.

* Users can enter a location in the search bar.
* The app utilizes the Google Geocoding API to convert the user's search query into geometric coordinates.
* The app then calls the Google Places API to search for nearby parking spots within a 1500-meter radius of the search location.
* The retrieved parking spot information is displayed on a map.
* Users can also view a list of parking spots with details such as name, address, and user rating.

## Technologies Used
* React Native
* Zustand for state management
* Google Maps API (requires a separate API key)
* Expo (for development purposes)

  
## Installation
1. Clone the repository:
```bash
git clone https://github.com/johnruiz17/parken-react-native
```

2. Install the iOS Simulator:

* Open Xcode
* Go to Settings > Platforms
* Enable the iOS Simulator platform

3. Create a Google Maps Places API key and add it to line 16 of the SearchBar.js file by assigning it as a string to the PLACES_API_KEY variable. You can find instructions on how to create a Places API key here: https://developers.google.com/maps/documentation/places/web-service/get-api-key   

## Usage

1. Open the iOS Simulator:

* Open Xcode
* Go to Open Developer Tool > Simulator
* Navigate to the project directory in your terminal.

2. Install dependencies:

```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Press "i" on your keyboard to open the app on the iOS Simulator.
