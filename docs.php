<?php 
include 'components/header.php';
require 'vendor/autoload.php'; // Parsedown (Markdown parser)

$Parsedown = new Parsedown();
?>

<div class="container">
    <h1>📖 CSSlib Documentation</h1>

    <?php
    $docs_folder = "docs/";
    $docs_files = ["installation.md", "buttons.md", "forms.md", "alerts.md"];

    foreach ($docs_files as $file) {
        if (file_exists($docs_folder . $file)) {
            $markdown_content = file_get_contents($docs_folder . $file);
            echo $Parsedown->text($markdown_content);
        } else {
            echo "<p><strong>Missing Documentation:</strong> $file</p>";
        }
    }
    ?>

</div>

<?php include 'components/footer.php'; ?>