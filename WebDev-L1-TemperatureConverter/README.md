# 🌡️ Temperature Converter

A simple and interactive **Temperature Converter** built using HTML, CSS, and JavaScript. The application allows users to enter a temperature, select a unit, and instantly convert the value into **Celsius, Fahrenheit, and Kelvin**. It also provides temperature status, input validation, and reset functionality.

---

## Features

* 🌡️ Convert temperatures between Celsius, Fahrenheit, and Kelvin
* 🔢 Accepts numerical temperature input
* 🔄 Instant temperature conversion
* ⚠️ Input validation and error messages
* ❄️ Prevents invalid negative Kelvin values
* 📊 Displays converted values in separate result boxes
* 🌤️ Shows temperature status based on Celsius value
* 🔥 Temperature categories from freezing cold to very hot
* 🔄 Reset button to clear all values
* 🧹 Clears previous results when invalid input is entered
* 📱 Simple and user-friendly interface
* 💻 Responsive design

---

## Temperature Conversion

The converter supports three temperature units:

### Celsius to Fahrenheit

```text
°F = (°C × 9/5) + 32
```

### Celsius to Kelvin

```text
K = °C + 273.15
```

### Fahrenheit to Celsius

```text
°C = (°F - 32) × 5/9
```

### Kelvin to Celsius

```text
°C = K - 273.15
```

---

## 🌡️ Temperature Status

The application displays a status according to the converted Celsius temperature:

| Temperature    | Status           |
| -------------- | ---------------- |
| Below 0°C      | ❄️ Freezing Cold |
| 0°C – 14.99°C  | 🥶 Very Cold     |
| 15°C – 24.99°C | 🌤️ Pleasant     |
| 25°C – 34.99°C | ☀️ Warm          |
| 35°C and above | 🔥 Very Hot      |

---

## ⚠️ Validation

The application includes validation for incorrect inputs.

* Displays an error if the temperature field is empty.
* Displays an error if the entered value is not valid.
* Displays an error if no temperature unit is selected.
* Does not allow Kelvin values below **0 K**.
* Clears the result boxes when invalid input is provided.

---

## Technologies Used

* HTML5
* CSS3
* JavaScript
* DOM Manipulation
* Responsive Web Design

---

## 📂 Project Structure

```text
Temperature-Converter/
│
├── index.html
├── style.css
├── script.js
│
└── README.md
```

---

## 🖥️ How It Works

1. Enter a temperature value.
2. Select the input unit:

   * Celsius
   * Fahrenheit
   * Kelvin
3. Click the **Convert** button.
4. The application calculates and displays:

   * Celsius
   * Fahrenheit
   * Kelvin
5. The corresponding temperature status is displayed.
6. Click **Reset** to clear the converter.

---


---

## 🎯 Purpose

This project was created for **educational and learning purposes** to practice JavaScript fundamentals, mathematical calculations, DOM manipulation, input validation, conditional statements, and interactive web development.

---

## 👩‍💻 Author

**Falguni Firake**

---

## 📜 License

This project is created for **educational and learning purposes**.

