<?php
header("Content-Type: text/plain");
$url = $_GET['u'];
$url_0 = parse_url($url,PHP_URL_SCHEME);
$src = file_get_contents($url);
echo $src;
