async function search() {
    let page = document.getElementById("page").value;
    let resultDiv = document.getElementById("result");

    if (!page) {
        resultDiv.innerHTML = "<div class='solution-card'>يرجى إدخال رقم الصفحة أولاً!</div>";
        return;
    }

    try {
        const response = await fetch('data/waymark.json');
        const data = await response.json();

        if (data[page]) {
            resultDiv.innerHTML = `
                <div class="solution-card">
                    <h3 style="margin-top:0; color:#007bff; border-bottom: 1px solid #eee; padding-bottom: 10px;">
                        Sayfa ${page} Çözümleri
                    </h3>
                    <div style="margin-top: 15px;">
                        ${data[page]}
                    </div>
                </div>`;
        } else {
            resultDiv.innerHTML = `
                <div class="solution-card" style="border-left-color: #e74c3c;">
                    للأسف، حل صفحة <strong>${page}</strong> غير متوفر حالياً.
                </div>`;
        }
    } catch (error) {
        resultDiv.innerHTML = "<div class='solution-card'>حدث خطأ في تحميل البيانات، تأكد من وجود ملف الـ JSON.</div>";
        console.error("Error fetching data:", error);
    }
}