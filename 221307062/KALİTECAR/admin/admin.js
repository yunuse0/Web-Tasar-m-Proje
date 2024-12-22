// Kullanıcı verisi
const users = [
    { id: 1, name: "Ahmet Yılmaz", email: "ahmet@example.com" },
    { id: 2, name: "Ayşe Kaya", email: "ayse@example.com" },
    { id: 3, name: "Mehmet Çelik", email: "mehmet@example.com" }
];

// Kullanıcı listesini tabloya ekle
const userTable = document.getElementById('userTable');
users.forEach(user => {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${user.id}</td>
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td><button class="removeUser">Kaldır</button></td>
    `;
    userTable.appendChild(row);
});

// "Kaldır" butonuna işlev ekle
document.addEventListener('click', event => {
    if (event.target.classList.contains('removeUser')) {
        const row = event.target.closest('tr');
        row.remove();
    }
})


// Tema değiştirme
document.getElementById('toggleTheme').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const button = document.getElementById('toggleTheme');
    button.textContent = document.body.classList.contains('dark-mode') ? 'Açık Tema' : 'Koyu Tema';
});
function showNotification(message) {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.style.display = 'block';
    setTimeout(() => {
        notification.style.display = 'none';
    }, 3000);
}

// Örnek kullanım:

// Kullanıcı ekleme formunu göster
document.getElementById('showUserForm').addEventListener('click', () => {
    document.getElementById('userForm').style.display = 'block';
});

// Yeni kullanıcı ekle
document.getElementById('userForm').addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.getElementById('userName').value;
    const email = document.getElementById('userEmail').value;

    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${users.length + 1}</td>
        <td>${name}</td>
        <td>${email}</td>
        <td><button class="removeUser">Kaldır</button></td>
    `;
    userTable.appendChild(newRow);
    showNotification('Yeni kullanıcı eklendi!');
});
// Araç verisi
let cars = [
    { model: "Toyota Corolla", plate: "34 AB 123", status: "Satılık" },
    { model: "Honda Civic", plate: "06 CD 456", status: "Kiralık" },
    { model: "Ford Focus", plate: "16 EF 789", status: "Satılık" }
];

// Tabloyu seç
const carTable = document.getElementById('carTable');

// Araçları tabloya ekle
function renderCars() {
    // Önce tabloyu temizle
    carTable.innerHTML = '';

    // Her bir aracı tabloya ekle
    cars.forEach((car, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${car.model}</td>
            <td>${car.plate}</td>
            <td>${car.status}</td>
            <td><button class="removeCar" data-index="${index}">Kaldır</button></td>
        `;
        carTable.appendChild(row);
    });
}

// Araç kaldırma
document.addEventListener('click', event => {
    if (event.target.classList.contains('removeCar')) {
        const index = event.target.getAttribute('data-index');
        cars.splice(index, 1); // Listedeki aracı kaldır
        renderCars(); // Tablodaki veriyi güncelle
    }
});

// Sayfa yüklendiğinde araçları tabloya ekle
document.addEventListener('DOMContentLoaded', renderCars);
document.getElementById('addCar').addEventListener('click', () => {
    const newCar = { model: "Yeni Araç", plate: "00 ZZ 000", status: "Kiralık" };
    cars.push(newCar);
    renderCars(); // Tablodaki veriyi güncelle
});
function showNotification(message) {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.style.display = 'block';
    setTimeout(() => {
        notification.style.display = 'none';
    }, 3000);
}

// Örnek kullanım:
document.querySelector('#addCar').addEventListener('click', () => {
    showNotification('Yeni araç eklendi!');
});
// Kullanıcı arama özelliği
document.getElementById('searchUser').addEventListener('input', (event) => {
    const searchTerm = event.target.value.toLowerCase();
    const rows = userTable.querySelectorAll('tr');
    rows.forEach(row => {
        const name = row.children[1].textContent.toLowerCase();
        if (name.includes(searchTerm)) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
});


