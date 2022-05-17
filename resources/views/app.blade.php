<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Laravel React</title>

    @php $manifest = json_decode(file_get_contents(public_path('build/manifest.json')), true); @endphp
    <link rel="stylesheet" href="/build/<?php echo $manifest['resources/assets/js/main.jsx']['css'][0] ?>">
    <script type="module" src="/build/<?php echo $manifest['resources/assets/js/main.jsx']['file'] ?>"></script>
</head>
<body>
<div id="root"></div>
</body>
</html>
