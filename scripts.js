<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Secure Bank Login</title>
    <link rel="stylesheet" href="styles.css">
    <script src="scripts.js" defer></script>
</head>
<body>
    <div class="login-container">
        <h1>Secure Bank</h1>
        <form id="login-form">
            <div class="form-step">
                <label for="username">Username:</label>
                <input type="text" id="username" name="username" required>
                <button type="button" onclick="validateUsername()">Next</button>
            </div>
            <div class="form-step">
                <label for="password">Password:</label>
                <input type="password" id
