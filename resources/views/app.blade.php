<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Laravel React</title>
    @production
        <?php $manifest = json_decode(file_get_contents(public_path('build/manifest.json')), true) ?>
        <link rel="stylesheet" href="/build/<?php echo $manifest['resources/assets/js/main.jsx']['css'][0] ?>">
        <script type="module" src="/build/<?php echo $manifest['resources/assets/js/main.jsx']['file'] ?>"></script>
    @else
        <script type="module">
            import RefreshRuntime from "http://localhost:3000/@react-refresh"
            RefreshRuntime.injectIntoGlobalHook(window)
            window.$RefreshReg$ = () => {}
            window.$RefreshSig$ = () => (type) => type
            window.__vite_plugin_react_preamble_installed__ = true
        </script>
        <script type="module" src="http://localhost:3000/@vite/client"></script>
        <script type="module" src="http://localhost:3000/resources/assets/js/main.jsx"></script>
    @endproduction
</head>
<body>
<div id="root"></div>
</body>
</html>
