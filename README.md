# Chart.js Web Application

This is a simple web application that utilizes Chart.js to create interactive charts. The application is structured to separate concerns between HTML, JavaScript, and CSS.

## Project Structure

```
Data-visualization-ChartJS
├── public
│   └── index.html          # Main HTML file
├── src
│   ├── app.js              # Main JavaScript file
│   ├── components
│   │   └── ChartComponent.js # Component for rendering charts
│   └── styles
│       └── main.css        # CSS styles for the application
├── package.json             # npm configuration file
└── README.md                # Project documentation
```

## Getting Started

To get started with this project, follow these steps:

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd chartjs-web-app
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Run the application:**
   ```
   npm start
   ```

4. **Open your browser:**
   Navigate to `http://localhost:3000` to view the application.

## Usage

The application allows you to create and display various types of charts using Chart.js. You can modify the `src/components/ChartComponent.js` file to customize the charts according to your needs.

## License

This project is licensed under the MIT License.