<?php
function loadMarkdown($filename) {
    $file = __DIR__ . '/' . $filename;
    if (file_exists($file)) {
        return nl2br(file_get_contents($file));
    } else {
        return "<p>Documentation not found.</p>";
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSSlib Documentation</title>
    <link rel="stylesheet" href="../src/styles/main.css">
    <link rel="stylesheet" href="docs.css">  <!-- Separate styles for docs -->
</head>
<body>

    <div class="docs-container">
        <nav class="sidebar">
            <h2>📖 Docs</h2>
            <ul>
                <li><a href="?page=components">Components</a></li>
                <li><a href="?page=utilities">Utilities</a></li>
                <li><a href="?page=setup">Setup</a></li>
            </ul>
        </nav>

        <main class="content">
            <?php
            $page = $_GET['page'] ?? 'components';
            echo loadMarkdown("$page.md");
            ?>
        </main>
    </div>

</body>
</html>
