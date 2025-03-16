<?php
function loadMarkdown($filename) {
    $file = __DIR__ . "/../docs/" . $filename;
    
    if (file_exists($file)) {
        return nl2br(file_get_contents($file));
    } else {
        return "<p>Documentation not found.</p>";
    }
}
?>
