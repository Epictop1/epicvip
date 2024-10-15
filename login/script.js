const form = document.getElementById('loginForm');
const errorMessage = document.getElementById('error-message');
const errorMessage2 = document.getElementById('error-message2');

form.addEventListener('submit', function(e) {
    e.preventDefault(); // منع إعادة تحميل الصفحة

    const username = document.getElementById('username').value; // استخدام المعرف الصحيح
    const password = document.getElementById('password').value; // استخدام المعرف الصحيح

    // تحقق من اسم المستخدم وكلمة المرور
    if (username === 'admin' && password === '1234') {
        window.location.href = '#'; // الانتقال إلى وضع التطوير
        errorMessage2.textContent = 'Login Successfully'; // عرض رسالة النجاح
        errorMessage2.style.display = 'block'; // تأكيد عرض الرسالة

        // إخفاء الرسالة بعد 3 ثواني
        setTimeout(function() {
            errorMessage2.style.display = 'none';
        }, 2000);
    } else {
        errorMessage.textContent = 'Incorrect username or password.'; // عرض رسالة الخطأ
        errorMessage.style.display = 'block'; // تأكيد عرض الرسالة

        // إخفاء الرسالة بعد 3 ثواني
        setTimeout(function() {
            errorMessage.style.display = 'none';
        }, 2000);
    }
});