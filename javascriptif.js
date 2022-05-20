<!DOCTYPE html>
<html>
<body>

<h2>javascript if </h2>

<p>Display "good day!" if the hour is less than 18:00:</p>
<p id="demo">good evening!</P>
<script>
if (new Date().getHours() < 18) {
document.getElememntById("demo").innerHtml="Good day!";
}
</script>

</body>
</html>
