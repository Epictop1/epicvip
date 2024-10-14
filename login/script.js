const form = document.getElementById('loginForm');
const errorMessage = document.getElementById('error-message');

form.addEventListener('submit', function(e) {
    e.preventDefault(); // منع إعادة تحميل الصفحة

    const username = document.getElementById('username').value; // استخدام المعرف الصحيح
    const password = document.getElementById('password').value; // استخدام المعرف الصحيح

    // تحقق من اسم المستخدم وكلمة المرور
    if (username === 'admin' && password === '1234') {
        window.location.href = 'dev-mode.html'; // الانتقال إلى وضع التطوير
    } else {
        errorMessage.textContent = 'اسم المستخدم أو كلمة المرور غير صحيحة.'; // عرض رسالة الخطأ
    }
});